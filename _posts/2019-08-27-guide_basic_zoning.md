---
title: Basic Zoning
permalink: /guide/basic-zoning/
category: guide
tags:
  - zones
  - basics
toc: true
---
<img src="/assets/images/guide_headers/guide_basic_zones.jpg" alt="Zone Guide" style="display: block; margin: auto;">

This Guide will cover the most basic usage of the Zoning Tools to create a Start and End Zone.  
> Looking for Stages and Bonuses?  
> Try the [Advanced Zoning Guide](/guide/advanced-zoning/).

## Prerequisites
To follow this Guide you should:
- Be on Momentum 0.8.0+
- Be running Momentum with `-mapping`
- Have the Developer Console enabled and be able to use it

## Opening the GUI
In order to get the GUI to appear, type `mom_zone_showmenu` in the Console, it should look like this:  

<img src="/assets/images/zone_guide/zone_menu.png" alt="Zone Menu" style="display: block; margin: auto;">

<div class="note info">
    <p>
        You will lose the ability to look around at some point and your mouse cursor will re-appear.<br><br>
		To be able to look around again, right-click the GUI.<br><br>
		Right-clicking will toggle between looking around and interacting with the GUI.
    </p>
</div>

To get started, click the ***Enable Zone Editing*** checkbox, the other options will become available.  
You will also see a 3D "cursor" appear where you are looking:  

<img src="/assets/images/zone_guide/3d_cursor.png" alt="3D Cursor" style="display: block; margin: auto;">

This shows where you will be creating the Zone in the map; it snaps to a grid, so it will not follow where you are looking exactly.

## Creating a Zone
In this example the Zone will fill this doorway:

<img src="/assets/images/zone_guide/zone_create_0.png" alt="Creating the Zone 1" style="display: block; margin: auto;">

First, click the ***Create Zone*** button - you will be able to look around again.  

<div class="note info">
    <p>
        If you want to start again at any point, click <b><em>Cancel Zone</em></b>.
    </p>
</div>

Then find one of the corners of the Zone you want to create, so for this example that could be at the rear-right of the doorway:

<img src="/assets/images/zone_guide/zone_create_1.jpg" alt="Creating the Zone 2" style="display: block; margin: auto;">

Click and you'll start to drag out a rectangle on the floor.  
This example will move the cursor to the front-left corner to fill out the doorway:

<img src="/assets/images/zone_guide/zone_create_2.jpg" alt="Creating the Zone 3" style="display: block; margin: auto;">

Once the other corner is where you want it, click again - the rectangle will become a cube.  
Starting moving the mouse upwards to set the height of the Zone:

<img src="/assets/images/zone_guide/zone_create_3.jpg" alt="Creating the Zone 4" style="display: block; margin: auto;">

<div class="note info">
    <p>
        The height of a Zone does not snap to the grid currently, so you will have to eyeball it!
    </p>
</div>

If you are satisfied with the Zone click again and the outline will change colour:

<img src="/assets/images/zone_guide/zone_create_4.jpg" alt="Creating the Zone 5" style="display: block; margin: auto;">

In this example the Zone has become green - it is a Start Zone.

> Want to find out more about Zones?  
> Check the [Zone Types](/guide/zone-types/) Guide.

To create the End Zone, go to where you want it and repeat the process, you should have a red cube this time:

<img src="/assets/images/zone_guide/zone_end.png" alt="End Zone" style="display: block; margin: auto;">

## Saving the Zones
If all goes well you should be able to click ***Save Zones***, close the GUI and test the map.  

Zones are stored in a `.zon` file of the same name as the map.  
So for this example the map is called *"cubemaptest"* so the `maps/` folder will now have a `cubemaptest.zon` file.

> This should be enough for basic testing and Linear maps.  
> For more than one Stage or Bonuses check the [Advanced Zoning](/guide/advanced-zoning/) Guide.
