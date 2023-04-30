---
categories:
  - guide
permalink: /guide/using-portals/
tags:
  - portals
  - mapping
---

# How to Use World Portals

![Portal Guide Header](/images/using-portals_guide/header.jpg)

This page covers Momentum Mod's implementation of world portals, how they work, how to add them into a map, as well as the limitations associated with the technology.

## Prerequisites

In order to easily follow along with this guide it is recommended to have the following:

- A basic knowledge of the Hammer editor and how to create functional, playable maps using it
- A version of Momentum Mod from version 0.8.8 or onwards
- The `momentum.fgd` file in your Hammer configuration

## Introduction

### What Are Portals?

World portals are placeable entities that emulate a connection between two points, such as the example pictured below. Portals can have many uses for mappers attempting to push their creativity or for those stuck in Hammer-related corners.

![Portal Image](/images/using-portals_guide/portals.jpg)

The way that portals are drawn is by rendering a complete extra copy of the world on the far end of the connection and drawing it in addition to the physical world that the player interacts with. For that reason alone it is highly recommended to limit the number of portals visible at any given time to help player framerate if at all possible.

{{< hint warning >}}
The keyvalues for world portals specify both half-width and half-height, which means that the maximum size for world portals _must_ be less than `1024` for both the [half-]`width` and [half-]`height` KVs otherwise the game will crash. This means the maximum world portal size is `2046`x`2046` (`1023` half-width; `1023` half-height).

{{< /hint >}}
## How to Make a World Portal

### The linked_portal_door Point Entity

The entity used to create a world portal is `linked_portal_door`. Key values of note include:

- `Name` - The name by which other entities refer to this entity
- `Pitch Yaw Roll` - The orientation of the entity and 3 dimensional space. This is essential for determining which direction the portal will be created
- `Linked Partner` - The name of the other `linked_portal_door` to create a portal with
- `Half-Width` - The distance in Hammer Units to either side of the entity. This will determine how wide the portal is on compilation.
- `Half-Height` - The distance in Hammer Units above and below the entity. This will determine how tall the portal is on compilation.
- `Static Portal` - Whether or not VRAD can cast light through the portal, consequentially meaning the portal never moves or toggles off.
- `Start Active` - Whether or not this portal will be active as soon as the map loads. If set to false, an input from another entity is required to make the portal functional.

<div class="notice--info">
	<p>
		<code>half-width</code> and <code>half-height</code> should typically match between the two entities at either end of the connection, otherwise players may see visual artifacts or get stuck in geometry.
		<br><br>
		The rotation of either <code>linked_portal_door</code>, however, do not have to match! Creating two portals that have different orientations will cause the player's camera to automatically correct itself on the other end of the portal. 
	</p>
</div>

### How to Place a Portal.

In order to create a portal a `linked_portal_door` entity must be placed in the center of the desired location. Orientation is determined by the rotation of the point entity. In the 3D viewport the red axis points to where the open face of the portal will be, the green axis is where the `half-width` value will be used, and the blue axis is where the `half-height` value will be used.

![Gizmo](/images/using-portals_guide/gizmo.jpg)

<div class="notice--warning">
	<p>
		Warning! Portals cannot be placed too close to a wall, otherwise the player can get stuck going through them!
		<br><br>
		The minimum distance between a portal's entity and the wall behind it should be about <code>32</code> units. In order to add a portal flush with a wall a setup like the following can be used:
	</p>
	<img src="/images/using-portals_guide/door.jpg" alt="Door">
</div>

### How to Enable Static Portal Lighting

VRAD can cast light through portals, but they must but static, as well as VRAD being passed with `-PortalTraversalLighting`.

First ensure both the `Static Portal` and `Start Active` keyvalues are set to `Yes`. Next, navigate to Hammer's expert compile mode, located by pressing F9, then the `Expert...` button on the bottom left. Next, locate `$light_exe`, click on it and add `-PortalTraversalLighting` before the existing text on the right where it says `Parameters:`. Optionally, you can add `-PortalTraversalAO` to calculate ambient occlusion through portals aswell, however it can increase compile times dramatically for not much benefit.

![Expert settings](/images/using-portals_guide/portal-lighting-parameters.jpg)

## Common Uses of Portals

### Impossible Hallway

An impossible hallway is one that is appears to be longer or shorter than it truely is and can serve as an excellent introduction to using portals to simulate non-euclidean geometry. A minimum of two pairs of portals will need to be used in order to extend the hallway for this type of effect. An example of the basic layout necessary can be seen below:

![Impossible Hallway](/images/using-portals_guide/impossible-hallway.jpg)

{{< hint info >}}
In order to create a fully seamless transition using a portal all details at either end must identical. This includes mundane issues such as props, texture allignment, and particles. However, lighting calculations do not factor portals into their calculations and thus must be manually replicated on both ends to make the seam completely invisible.

{{< /hint >}}
### Impossible Roundabout

Another common illusion that uses world portals is an impossible roundabout. An impossible roundabout will include multiple separate rooms that each have multiple portal entities connecting them to the previous/next area. An example of such a layout can be seen below:

![Impossible Roundabout](/images/using-portals_guide/impossible-roundabout.jpg)

A series of half-rooms are used with 2 portals per wall, one leading to the next room and one to the previous. It is important to keep the pattern of left/right and forward/back consistent so that players move reliably from room to room. For example, in this orientation the left portal (from the perspective of a player) will send them to the next box. The right portal will send them to the previous one.

### Hiding the Map Through a Skybox

Skybox brushes are notorious for showing any parts of the world behind them that are being rendered. While this may seem inconvenient, it is up to the mapper to avoid. In movement gamemode maps people often want to use and abuse skyboxes in ways that cause this issue to pop up more than the standard Half-Life 2 or Portal 2 level would run into. One common example would be trying to use a skybox as a wall like below:

![Skybox Issue](/images/using-portals_guide/skybox-issue.jpg)

There are many solutions to an issue with skyboxes like this one. Typically, a portal should be the last resort as it has a negative effect on performance. The easiest fix is to change the geometry of the map so that the skybox cannot see any other parts of the map. This could mean removing the skybox and using another light, this could mean rearranging how the map is laid out, or it could mean adding a few extra walls between the skybox and visible area:

![Skybox Wall](/images/using-portals_guide/skybox-wall.jpg)

{{< hint info >}}

<div class="notice--info">
{{< /hint >}}
	<p>
		Given that a skybox simply layers itself behind any other section of the level that is being rendered, traditional optimization tools can be used in many scenarios to hide the problematic section of the level much easier than a portal, except with the added bonus of better performance.
		<br><br>
		While this is out of the scope of this guide, <a href="https://www.interlopers.net/optimization/index.php?chapter=intro">interlopers.net</a> has an excellent guide about this subject that should help anybody trying to use traditional optimization to hide something behind a skybox.
	</p>
</div>

If adding a portal is truly the best option, it can be relatively straightforward to implement. The portal must go somewhere between the skybox that is being looked through and what is being seen through the level.

![Skybox Portal Placement](/images/using-portals_guide/skybox-placement.jpg)

The map is then cut in two (leaving space to make sure the portals are not placed too close to any wall) and the final layout can look like so:

![Skybox Portal](/images/using-portals_guide/skybox-portal.jpg)

### Helpful Portal References

- The map `noneuclidean.bsp` is included with Momentum Mod by default and shows many interesting and unique uses of portal entities. Load it with the `map noneuclidean` command in the game's console
- [Valve Developer Community page for linked_portal_door](https://developer.valvesoftware.com/wiki/Linked_portal_door)
- [A lecture given by Valve programmers about the technology behind portals](https://www.youtube.com/watch?v=ivyseNMVt-4)
