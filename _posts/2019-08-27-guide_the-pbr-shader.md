---
title: The PBR Shader
permalink: /guide/pbr-shader/
category: guide
tags:
  - pbr
toc: true
---
<img src="/assets/images/guide_headers/guide_pbr_shader.jpg" alt="PBR Guide" style="display: block; margin: auto;">

The PBR Shader is a handy new tool added to Momentum which allows you to create better looking models with less textures and VMT editing.  

This Guide will be a general overview of its use and how to setup textures for it from scratch.  

> The original repo can be found on [GitHub](https://github.com/thexa4/source-pbr) thanks to *thexa4* and *bonjorno7*.

## Prerequisites
To make proper use of this Guide you should:
- Be on Momentum 0.8.X+
- Know how to create textures such as AO via baking
- Be able to create PBR textures/work with the PBR Metal/Rough workflow
- Have either Substance Painter and/or Designer and have some experience with them  
(Photoshop isn't covered but hopefully this guide may help)

Since our PBR Shader uses the different PBR workflow, our textures will be different too.

## VMT Setup
Here is an example VMT, something you would use on a model:
```
PBR
{
	$basetexture "models\props\pbr_asset_d"
	$mraotexture "models\props\pbr_asset_mrao"
	$bumpmap "models\props\pbr_asset_n"
	$emissive "models\props\pbr_asset_e"
	
	$envmap "env_cubemap"
	$model "1"
}
```

`$basetexture` will be the Base Colour texture.  
`$mraotexture` will be the MRAO texture.  
`$bumpmap` will be for the Normal texture.  
`$emissive` will be for any glowing sections of the model.  

<div class="note info">
    <p>
        The Emissive texture is a colour texture, not a mask.
    </p>
</div>

`$envmap` should just be left as `env_cubemap`.  

<div class="note warning">
    <p>
        <code>$model 1</code> <b><em>must</em></b> be added for models to work!
    </p>
</div>

## Texture Creation - Painter
When starting a new Project in Painter, you should be fine using the standard ***PBR - Metal Roughness*** template.  

<img src="\assets\images\pbr_guide\pbr_painter_template.jpg" alt="Painter Template" style="display: block; margin: auto;">

However, the PBR Shader uses MRAO textures, so a custom export template is needed or the channels must be composited in some other program.

You can try this export template, which creates the MRAO texture as well as an Emissive texture if one exists:  
> [PBR Shader Template](/assets/PBR MRAO Emissive.spexp)

It can go in the `Allegorithmic\Substance Painter\shelf\export-presets` folder.

## Texture Creation - Designer
Creating the Base Colour and Normal aren't covered in the Guide, this section is just to show how to composite an MRAO texture.

You can create a MRAO texture by putting the **M**etalness, **R**oughness and **A**mbient **O**cclusion and a white **Uniform Color** Node into an **RGBA Merge** Node like so:

<img src="\assets\images\pbr_guide\pbr_designer_setup.png" alt="Painter Template" style="display: block; margin: auto;">

You should then have the 3 minimum textures needed for the Shader.