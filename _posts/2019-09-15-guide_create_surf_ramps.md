---
title: How to Create Surf Ramps

permalink: /guide/create-surf-ramps/

category: guide
tags:
  -mapping
  -surf
  -ramps

toc: [true/false] # Whether the page should have a Table of Contents. Defaults to false.
toc_sticky: [true/false] # If you are using the Table of Contents, consider setting this to true if the page is long.
---

<img src="/assets/images/guide_headers/guide_create_surf_ramps.jpg" alt="Ramp Guide" style="display: block; margin: auto;">

<div class="note info">
	<p>
	Note: This guide assumes that you have a basic working knowledge of the hammer editor and the tools used.
	</p>
</div>

## Basic Surf Ramps

### Planning

Before you start to create your ramps in hammer, there are a few factors you should consider:
- How steep do I want the ramps to be?
	- A ramp that is too steep / wide may be considered awkward to board.
- What size do I want for my ramps?
	- People may find themselves sliding off the bottoms of small ramps.
	- They may feel like they are going slow on oversized ramps, it is important to find a balance.
- How do I want to detail my ramps?
	- Will models be needed to achieve the visual style, or can it be brushes?

These characteristics of your ramps will inevitably be refined through testing, but it is a good idea to start off with a plan for how you want the surf to feel. 
Look at different surf maps that you enjoy and try to get an idea of how exactly you want yours to pan out.

### Creating the base ramp

Once you've figured out what you want your surf to play like, it is time to open hammer!  
  
The first thing you will want to do is select nodraw as your texture in the texture browser and then create a block that is the dimensions you want them to be using the block tool. 
For this guide the dimensions will be 960 x 640 for double sided ramps.

<img src="/assets/images/ramps_guide/guide_block.jpg" alt="View of block in hammer" style="display: block; margin: auto;">

Now you need to cut the block you have made in order to create the surfable slanted surface. Using the cutting tool, make one end near the lower corner of the ramp and the other one near the top center. 
Cycle through the options by pressing `Shift + X` or pressing the tool logo until the part that you want to cut is red and the rest is not. Press enter to cut it.

<img src="/assets/images/ramps_guide/guide_cut.jpg" alt="View of block being cut into ramp in hammer" style="display: block; margin: auto;">

You now have your first surf ramp. To finish off, use the texture application tool to add materials to your ramp.  
  
Finally, use `Ctrl + T` with the ramp selected to make it into a func_detail.  

<img src="/assets/images/ramps_guide/guide_firstramp.jpg" alt="View of block being cut into ramp in hammer" style="display: block; margin: auto;">
  
Making your ramp into a func_detail means that it will not be used to seal the map or calculate visibility. 
This is important when working with complex ramps as the compile will take a lot longer trying to involve these ramps in the visibility calculations and can also lead to visual errors in-game.  
  
You may notice that the lower edge of the surf ramp has been cut 64 units above the bottom corner of the ramp. 
Though this can sometimes just be a stylistic choice of the mapper, this can also be significant when creating curved ramps. This will be covered in more detail later.

### Detailing the ramp

Say you are not satisfied with the surfable area being entirely blue dev textures, and you want to spice it up near the top and bottom edge. 
The instinctual thing to do would be to use the cutting tool to slice up the ramp and then apply new textures. Doing this alone can cause the collision on your ramps to break near the seams where these slices meet, often causing players to get stuck or lose speed on them.  
  
This is where the importance of separating visuals from collision comes in. You want your collision on the surfable portion of the ramp to be as simple as possible to avoid these errors. 
In this case you would want to create a copy of your simple ramp and make it into a world brush using the toWorld button and texture it as tools/toolsplayerclip or tools/toolsinvisible. This creates a seperate brush to represent the collision for the ramp and will not appear visible in-game.

<img src="/assets/images/ramps_guide/guide_seperatecollisions.jpg" alt="View of block being cut into ramp in hammer" style="display: block; margin: auto;">

Now you can cut the visual representation of the ramp however you want. When finished you need to make sure the cut version of the ramp is not solid. 
To do so, use `Ctrl + T` or double click the ramp if it is already a func_detail and change the class to a func_brush. Change the "Solidity" property of the func_brush to "Never Solid".
Finally move the two versions of the ramp so that they overlap in the exact same position.

<img src="/assets/images/ramps_guide/guide_mergeramp2.jpg" alt="View of block being cut into ramp in hammer" style="display: block; margin: auto;">

<img src="/assets/images/ramps_guide/guide_mergeramp1.jpg" alt="View of block being cut into ramp in hammer" style="display: block; margin: auto;">

With your ramp completed, you can use the cordon tool to seal it off and compile the map to view it in-game. At this point in development normally you just want to test the surf so you don't need to compile with lighting or vis.

<img src="/assets/images/ramps_guide/guide_ingame.jpg" alt="View of block being cut into ramp in hammer" style="display: block; margin: auto;">

There it is! Absolutely stunning! Basically ready for release!

## Curved Surf Ramps

## Propper Surf Ramps

## Blender Surf Ramps