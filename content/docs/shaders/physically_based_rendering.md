---
title: The PBR Shader
categories:
  - shader
tags:
  - pbr
---

![PBR Guide](/images/guide_headers/guide_pbr_shader.jpg)

The Physically Based Rendering (PBR) shader is a powerful new tool for Strata Source that provides more realistic and versatile rendering of brushes, displacements and models whilst using fewer textures and needing fewer VMT tweaks.

> The original repo can be found on [GitHub](https://github.com/thexa4/source-pbr).
---

This guide will be a general overview of its use and how to set up textures for it from scratch.


## Prerequisites

To make proper use of this Guide you should:

- Know and understand the PBR Metal/Rough workflow.
- Have access to any material authoring suite, like Substance Painter / Designer or the excellent [Material Maker](https://github.com/RodZill4/material-maker), and have some experience with them for making PBR textures from scratch.
- Any image manipulation program if you're not using a material authoring suite and already have PBR textures that you need to create an MRAO from.
- You'll need, at the very least:
| Color Maps | MRAO Maps | Normal Maps | Emission Maps |
| ---------- | --------- | ----------- | ------------- |
| ![Color Map](/images/pbr_guide/concrete01_mossy_C.jpg) | ![MRAO Map](/images/pbr_guide/concrete01_MRAO.jpg) | ![Normal Map](/images/pbr_guide/concrete01_N.png) | ![Emission Map](/images/pbr_guide/concrete01_E.jpg) |
| An albedo/color map with optional transparency in the texture's alpha channel. This means that no lighting information, such as baked AO, should exist in the texture. Recommended suffix: **_color** or **_C**. | Since we use a metal/rough setup (as opposed to a spec/gloss workflow), we pack the Metal, Roughness and Ambient Occlusion grayscale maps into one, called the MRAO map. Recommended suffix: **_MRAO**. | A normal map and, if Parallax Occlusion is desired with the material, a height map defined in the alpha channel. Recommended suffix: **_normal** or **_N**. | If needed, an emission texture (note that it's not a mask). Recommended suffix: **_emission** or **_E**. |

- Finally, an environmental map. **THIS IS REQUIRED!** Preferably just using `env_cubemap` (don't forget to build cubemaps for your map!).


## VMT Example

Here is an example VMT:

```
PBR
{
    $baseTexture        concrete/concrete01_C
    $MRAOTexture        concrete/concrete01_MRAO
    $emissionTexture    concrete/concrete01_E
    $bumpMap            concrete/concrete01_N

    $parallax           1
    $parallaxCenter     0
    $parallaxDepth      .05

    $envMap             env_cubemap

    %keywords           concrete,PBR,brutalist
}

```

{{< hint info >}}
If using PBR for a model, `$model 1` **_must_** be added for it to work!
{{< /hint >}}

![Momentum Mod Screenshot](/images/pbr_guide/mmod_screenshot.jpg)

As you can see, defining a PBR material is much simpler than defining and tuning a VLG or LMG shader. PBR is, however, restrictive for NPR (non-photorealistic rendering), if you are envisioning more painterly or cartoonish visuals, it's best to use the classic shaders.

{{< hint warning >}}
Parallax Occlusion has its limitations and things to be wary of. The parallax effect has a limited number of layers by default, but you can increase it with `$parallaxScale <multiplier>`. Note that increasing this number will degrade performance for some players!.

Another thing you might notice is that the depth effect continues past the edge of the face it's applied to, depending on the effect you're after, the solution is a balancing act between the authored height map, `$parallaxCenter`, and `$parallaxDepth`. See [the Strata Wiki](https://wiki.stratasource.org/material/pbr/pbrshader) for help with all the available parameters.
{{< /hint >}}


## Texture Creation - Material Maker

![Material Maker](/images/pbr_guide/material_maker_nodegraph.jpg)

![Material Maker - Height and Normal](/images/pbr_guide/material_maker_normal-height.jpg)

Material Maker's PBR workflow is already metal/rough, so you don't need to do anything extra on that department.
In order to pack the MRAO and Normal + Height maps, you will have to use the _Decompose_ and _Combine_ nodes to split and merge a texture's channels, respectively. See the image above for how it's done for the Normal + Height maps, there's no native node to _only_ set an alpha channel, but there is a community node that can do it.

{{< hint danger >}}
Make sure you convert the incoming normal map to DirectX with a _Convert Normal Map_ node with _From/To DirectX_ set. Otherwise, you will get a two-channel normal map with an inverted green channel!

Material Maker uses a Depth map input for the parallax occlusion effect instead of a Height map! Consider this when exporting.
{{</ hint >}}

Since there's no "to Source Engine quick export" support, you'll have to add the _Export_ nodes on the final outputs of your node setup, then use the `File > Export Material > Quick Export` function.

{{< hint warning >}}
On the current version (1.6), there's a bug with the UV mapping of the cube model, be sure to change it if you plan to use the preview viewport!
{{</ hint >}}

## Texture Creation - Painter

When starting a new project in Painter, you should be fine using the standard **_PBR - Metal Roughness_** template.

![Painter Template](/images/pbr_guide/pbr_painter_template.jpg)

However, the PBR shader uses MRAO textures, so a custom export template is needed otherwise the channels must be packed together into a single texture elsewhere.

You can try this export template, which creates the MRAO texture as well as an Emissive texture if one exists:

[PBR Shader Template](/misc/PBR_MRAO_Emissive.spexp)

{{< hint warning >}}
This template does not include the height map in the normal map alpha for parallax.
{{< /hint >}}

It can go in the `Allegorithmic\Substance Painter\shelf\export-presets` folder.

## Texture Creation - Designer

Creating the input textures isn't covered in the guide - this section simply shows how to composite both the **MRAO** and normal map with the height textures correctly.

You can create a MRAO texture by putting the Metalness, Roughness, Ambient Occlusion, and a White _Uniform Color_ Node into an _RGBA Merge_ Node.

The normal map with height embedded is simpler and can be achieved with an _Alpha Merge_ node.

Both processes are shown below. The MRAO is colour-coded to make it easier to follow:

![Painter Template](/images/pbr_guide/pbr_designer_setup.png)

You should then have the 3 minimum textures needed for the shader.

## Manual MRAO Creation in an image manipulation program (Channel Packing)

If you have several textures you want to create an MRAO from and you don't have any material authoring suite, you can create it manually in something like Photoshop or GIMP.

The process is simple; you just need all 3 grayscale textures required to make an MRAO.

### Photoshop:

{{< hint warning >}}
This is one method to merge multiple grayscale images into one color image in Photoshop, and this was written quite some time ago, so the precise or more efficient steps might be different.
{{< /hint >}}

The only layers you need are those of the 3 textures; add them all, check their properties, and look for these checkboxes:

![Channel Pack Properties Dialog](/images/pbr_guide/channel_pack_properties_dialog.jpg)

By default, all 3 of these are checked, which is normal. Depending on which texture layer you've selected, change the checkboxes to the following:

Metallic:

- R Checked
- G Unchecked
- B Unchecked

Roughness:

- R Unchecked
- G Checked
- B Unchecked

Ambient Occlusion:

- R Unchecked
- G Unchecked
- B Checked

### GIMP:

1. If you see the "Create a New Image" dialog, expand the "Advanced Options" dropdown and change _Color space:_ to _Grayscale_.
   If you opened the image in GIMP directly, go to `Image > Mode > Grayscale`, instead.

2. Add all grayscale images as layers.

3. Go to `Colors > Components > Compose...`

4. A window will open (see below), from here assign your Metalness map to the Red channel, Roughness to the Green channel and Ambient Occlusion to the Blue Channel.

![GIMP Compose Window](/images/pbr_guide/GIMP_compose_channels.jpg)

Whatever program you chose, you should have a strange, but colourful looking image that you can save and make use of with the PBR shader.

![Channel Packing Result](/images/pbr_guide/channel_pack_final_result.jpg)
