---
title: How to Create Surf Ramps

permalink: /guide/create-surf-ramps/

category: guide
tags:
  -mapping
  -surf
  -ramps

toc: true
toc_sticky: true
---

<img src="/assets/images/guide_headers/guide_create_surf_ramps.jpg" alt="Ramp Guide Header" style="display: block; margin: auto;">

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
	- People tend to use a <a href="https://docs.google.com/spreadsheets/d/1-K8c2F3EVhTpeyzDAoIfdjmWr1s6H8bEtUQy5cfKEJg/edit?usp=sharing" target="_blank">5:4 ratio</a> for the dimensions of their ramps
- What size do I want for my ramps?
	- People may find themselves sliding off the bottoms of small ramps.
	- They may feel like they are going slow on oversized ramps, it is important to find a balance.
- How do I want to detail my ramps?
	- Will models be needed to achieve the visual style, or can it be brushes?

These characteristics of your ramps will inevitably be refined through testing, but it is a good idea to start off with a plan for how you want the surf to feel. 
Look at different surf maps that you enjoy and try to get an idea of how exactly you want yours to pan out.

### Creating the Base Ramp

Once you've figured out what you want your surf to play like, it is time to open hammer!  
  
The first thing you will want to do is select nodraw as your texture in the texture browser and then create a block that is the dimensions you want them to be using the block tool. 
For this guide the dimensions will be 960 x 640 for double sided ramps.

<img src="/assets/images/ramps_guide/guide_block.jpg" alt="View of block in hammer" style="display: block; margin: auto;">
<img src="/assets/images/ramps_guide/guide_block2.jpg" alt="View of block in hammer" style="display: block; margin: auto;">

Now you need to cut the block you have made in order to create the surfable slanted surface. Using the cutting tool, make one end near the lower corner of the ramp and the other one near the top center. 
Cycle through the options by pressing `Shift + X` or pressing the tool logo until the part that you want to cut is red, and the rest is not. Press enter to cut it.

<img src="/assets/images/ramps_guide/guide_cut.jpg" alt="View of block being cut into ramp in hammer" style="display: block; margin: auto;">

You now have your first surf ramp. To finish off, use the texture application tool to add materials to your ramp.  
  
Finally, use `Ctrl + T` with the ramp selected to make it into a func_detail.  

<img src="/assets/images/ramps_guide/guide_firstramp.jpg" alt="View of a basic ramp in hammer" style="display: block; margin: auto;">
  
Making your ramp into a func_detail means that it will not be used to seal the map or calculate visibility. 
This is important when working with complex ramps as the compile will take a lot longer trying to involve these ramps in the visibility calculations and can also lead to visual errors in-game.  
  
You may notice that the lower edge of the surf ramp has been cut 64 units above the bottom corner of the ramp. 
Though this can sometimes just be a stylistic choice of the mapper, this can also be significant when creating curved ramps. This will be covered in more detail later.

### Detailing the Ramp

Say you are not satisfied with the surfable area being entirely blue dev textures, and you want to spice it up near the top and bottom edge. 
The instinctual thing to do would be to use the cutting tool to slice up the ramp and then apply new textures.  
  
Doing this alone can cause the collision on your ramps to break near the seams where these slices meet, often causing players to get stuck or lose speed on them.  
  
This is where the importance of separating visuals from collision comes in. You want your collision on the surfable portion of the ramp to be as simple as possible to avoid these errors. 
In this case you would want to create a copy of your simple ramp and make it into a world brush using the toWorld button and texture it as **tools/toolsplayerclip** or **tools/toolsinvisible**. This creates a separate brush to represent the collision for the ramp and will not appear visible in-game.

<img src="/assets/images/ramps_guide/guide_seperatecollisions.jpg" alt="View of seperate collision brush next to normal ramp" style="display: block; margin: auto;">

Now you can cut the visual representation of the ramp however you want. When finished you need to make sure the cut version of the ramp is not solid. 
To do so, use `Ctrl + T` or double click the ramp if it is already a func_detail and change the class to a func_brush. Change the "Solidity" property of the func_brush to "Never Solid".
Finally move the two versions of the ramp so that they overlap in the exact same position.

<img src="/assets/images/ramps_guide/guide_mergeramp2.jpg" alt="View of func_brush properties" style="display: block; margin: auto;">

<img src="/assets/images/ramps_guide/guide_mergeramp1.jpg" alt="View of final ramp in hammer" style="display: block; margin: auto;">

With your ramp completed, you can use the cordon tool to seal it off and compile the map to view it in-game. At this point in development normally you would just want to test the surf, so you don't need to compile with lighting or vis.

<img src="/assets/images/ramps_guide/guide_ingame.jpg" alt="View of ramp in-game" style="display: block; margin: auto;">

There it is! Absolutely stunning! Looking ready for release!

## Curved Surf Ramps

Although you can do a lot with simple surf ramps, sometimes you will want to add curves to your surf in order to add variety. 
Curved ramps can be helpful on easy maps since beginners will have an easier time landing on them.


### Limitations of Precision

<img src="/assets/images/ramps_guide/guide_vertexprecision_transparent.png" alt="Example of vertex precision loss" style="display: block; margin: auto;">

If you have ever zoomed in really close on off grid brushwork you may have noticed that the vertices act a bit strange. 
Sadly, the way hammer was made does not give mappers infinite precision with their brushwork. 
This means that the editor has to do some guesswork when dealing with vertices that are not aligned with the grid. 
Due to this limitation, vertices left off grid will shift very slightly when compiling and loading the map file.  
  
<img src="/assets/images/ramps_guide/guide_ramp_base.jpg" alt="Surf ramp with a base at the bottom of its segments" style="display: block; margin: auto;">
  
For curved ramps this means that the portion near the bottom of the ramp where segments will meet can have collision errors. 
The standard fix for this has been to add a flat "base" portion at the bottom of the ramp segment that you can't surf on. 
This means that any precision errors would only take place at the base of the ramp and not the surfable portion.  
  
More intricate fixes have been made including hammer modifications such as <a href="https://web.archive.org/web/20190611221800/https://forum.facepunch.com/dev/bvenk/Slammin-Source-map-tools/" target="_blank">Slammin tools</a> 
and <a href="https://github.com/crashfort/HammerPatch" target="_blank">HammerPatch</a>. 
These improve the precision of the stored vertices and help keep brushwork looking the way it's supposed to. 
Momentum hammer also implements a fix similar to HammerPatch.

### Curved Ramps with Func_Detail

To start working on a curved ramp, the first thing you need is a flat one.
  
<img src="/assets/images/ramps_guide/guide_ramp_segment.jpg" alt="A single ramp segment in hammer" style="display: block; margin: auto;">

This can be very short since it will be copied and rotated repeatedly to create the illusion of a curve. 
Generally, ramp segments are rotated by 2 to 5 degrees for each time they are copied. 
Rotating each segment by too much will make the ramp feel bumpy but giving it too little will require far too many segments to create the curve. 
The front and back of the segment can be left as nodraw since when the ramp is finished, most of these faces will not be visible.
  
<img src="/assets/images/ramps_guide/guide_secondsegment.jpg" alt="A second ramp segment with the rotation tool" style="display: block; margin: auto;">

In the side view, hold `Shift` with the first segment selected and drag it to duplicate it. 
Now with your second segment selected, press `Ctrl + M` to bring up the Transformation dialog. 
From here you can rotate the segment. In this example the segment is rotated by 5 degrees on the Y axis.
  
<img src="/assets/images/ramps_guide/guide_secondsegment_rotated.jpg" alt="A second ramp segment after rotating" style="display: block; margin: auto;">
  
Now it's time to line the second segment up to connect it to the first one. 
With the second segment selected, press `Shift + V` or click on the vertex tool button to enable vertex editing. 
Normally this tool is used to edit solids but for this tutorial we will just use it to align brushes. 
Drag a box around the selected segment like you would when selecting it in the 2d view, then hit enter to select all of the segment's vertices.
  
<img src="/assets/images/ramps_guide/guide_align.jpg" alt="Two segments aligned by the vertex tool" style="display: block; margin: auto;">
  
Make sure all of the vertices are red (meaning they are all selected) and drag the bottom corner of the ramp so that it is connects to the other segment at the bottom. 
Ensure that both of these ramps are aligned to grid at this anchor point. Now that you have two segments connected properly, 
you can select them both and use the vertex tool again to align the far bottom corner of the second segment to the grid. 
This is where the next segment will connect.
  
<img src="/assets/images/ramps_guide/guide_align2.jpg" alt="Two segments aligned by the vertex tool" style="display: block; margin: auto;">
  
Use `Shift` and drag with both segments selected to create another duplicate of them. 
Open the transformation dialog again with `Ctrl + M`. You need to rotate these two new segments so they can be added on just like the second one. 
Since there are two segments, double the degrees of rotation needed to connect to the last two. In this case we rotate by 10 degrees.
  
<img src="/assets/images/ramps_guide/guide_duplicate_rotation.jpg" alt="Rotating the new segments" style="display: block; margin: auto;">
  
Just like the previous segments, select the two new segments with the vertex tool and then drag it to align the bottom corner with the first two. 
Afterwards align the new 4 segment ramp to the grid on the farthest bottom corner.
  
<img src="/assets/images/ramps_guide/guide_vertexselect.jpg" alt="Selecting the segments with the vertex tool" style="display: block; margin: auto;">
  
<img src="/assets/images/ramps_guide/guide_align3.jpg" alt="Four segments aligned" style="display: block; margin: auto;">
  
<img src="/assets/images/ramps_guide/guide_align4.jpg" alt="Four segments aligned again" style="display: block; margin: auto;">
  
You can repeat this process as many times as you want as long as you keep every segment aligned to the ones surrounding it. 
For this example, we will copy all four of the segments and do the process one more time, rotating this time by 20 degrees.
  
<img src="/assets/images/ramps_guide/guide_foursegment1.jpg" alt="Four segments have been duplicated" style="display: block; margin: auto;">
  
<img src="/assets/images/ramps_guide/guide_foursegment2.jpg" alt="Four segments have been rotated!" style="display: block; margin: auto;">
  
<img src="/assets/images/ramps_guide/guide_foursegment3.jpg" alt="Four segments have been aligned!" style="display: block; margin: auto;">
  
<img src="/assets/images/ramps_guide/guide_curve3d.jpg" alt="3d view of ramp" style="display: block; margin: auto;">
  
Things are starting to look pretty curvy!  
Let's finish it off by mirroring the segments so it's curved on both sides. 
First off, align the original flat segment to the grid with the vertex tool so that the mirrored segments can be lined up with it.
  
<img src="/assets/images/ramps_guide/guide_align5.jpg" alt="aligned ramp" style="display: block; margin: auto;">
  
<img src="/assets/images/ramps_guide/guide_align6.jpg" alt="aligned ramp" style="display: block; margin: auto;">
  
Next, deselect the first segment then `Shift` and drag to copy every segment except for the flat one.
  
<img src="/assets/images/ramps_guide/guide_mirror1.jpg" alt="copied ramp to be mirrored" style="display: block; margin: auto;">
  
Press `Ctrl + L` with the new ramp selected to mirror the brushes.
  
<img src="/assets/images/ramps_guide/guide_mirror2.jpg" alt="copied ramp mirrored" style="display: block; margin: auto;">
  
Use the vertex tool like before to align the new segment to the old one.
  
<img src="/assets/images/ramps_guide/guide_mirror3.jpg" alt="copied ramp mirrored" style="display: block; margin: auto;">
  
The ramp is almost done, apply textures to the two ends of the ramp that still show nodraw. 
Select the entire ramp and use `Ctrl + T` to make it into a func_detail. 
If all of your segments were already func_detail then `Ctrl + T` will consolidate them all into one entity. 
The dialogue asking for which one to keep doesn't matter much for func_detail.
  
<img src="/assets/images/ramps_guide/guide_final3d.jpg" alt="3d view of final ramp" style="display: block; margin: auto;">
  
You now have a functioning curved ramp, let's see it in game:
  
<img src="/assets/images/ramps_guide/guide_final_ingame.jpg" alt="3d view of final ramp" style="display: block; margin: auto;">
  
Absolutely stunning! It looks like it was made by someone who really knows what they're doing.

### Curved Ramps with Func_Brush

## Modeling Ramps

## Helpful Links

TODO: 
- Finish advanced curved ramps
- Write something about modeling ramps
- Add helpful links (video tutorials and external mapping guides)
- Add header images for sections / subsections