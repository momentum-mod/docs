---
title: Advanced Zoning
permalink: /guide/advanced-zoning/
category: guide
tags:
  - zones
  - advanced
toc: true
toc_sticky: true
---
<img src="/assets/images/guide_headers/guide_advanced_zoning.jpg" alt="Advanced Zone Guide" style="display: block; margin: auto;">

This Guide will cover most other things regarding the Zoning Tools, as well as more advanced uses.  

> Looking for the Basics?  
> Read the [Basic Zoning](/guide/basic-zoning/) Guide.  

## Prerequisites
To follow this Guide you should:
- Know the [basics](/guide/basic-zoning/) of using the Zoning Tools
- Be on Momentum 0.8.0+
- Be running Momentum with `-mapping`
- Have the Developer Console enabled and be able to use it

## More on Auto Mode
Whilst the Auto Mode can work for the basic Start and End Zone setup, it has a somewhat hidden option to create Stages instead of the End Zone through a toggled cvar: `mom_zone_auto_make_stage`  

This will only apply once the Start Zone has been created.  
<div class="note info">
    <p>
        You should bind this to a key for ease of use, although there is currently a bind to the Right Alt key by default. There is no visual indication but if you check the cvar, it will have changed.
    </p>
</div>

## Stages and Checkpoints
Stages and Checkpoints cannot be created with the Auto Mode in the Zoning Tools, so you must change it manually via the drop-down menu.  

> Want to know more about Stages and Checkpoints?  
> Check the [Zone Types](/guide/zone-types/) Guide.

## Concave and more complex Zone shapes
If you want a more interesting Zone shape, the "Point-based Zone Construction" option is what you're looking for.  

Whilst checked, when you begin to draw out a Zone, things will look different:  

<img src="/assets/images/zone_guide/adv_point_2.png" alt="Drawing out a line" style="display: block; margin: auto;">

You will begin to draw out a line instead of a rectangle. Click again and it will become a triangle when you move the mouse again:  

<img src="/assets/images/zone_guide/adv_point_3.png" alt="Now it is a triangle" style="display: block; margin: auto;">

And as mentioned before you can have concave shapes like so:  

<img src="/assets/images/zone_guide/adv_point_4.png" alt="Concave shape" style="display: block; margin: auto;">

Once you have made the shape you want, you have to use the **Enter** key to move on to extruding it upwards as clicking will only continue to make more lines.  

<img src="/assets/images/zone_guide/adv_point_5.jpg" alt="Vertical extrusion" style="display: block; margin: auto;">


Once the height is where you want it, press **Enter** again.  

<img src="/assets/images/zone_guide/adv_point_6.jpg" alt="Zone done" style="display: block; margin: auto;">

The Zone will change colour and be finalised.  

> Want to find out more about the Zones in Momentum?  
> Check the [Zone Types](/guide/zone-types/) Guide.

<div class="note info">
    <p>
        Make sure to click <b><em>Save Zones</em></b> when you are done!
    </p>
</div>

## Track Number
Track Number defines whether the Zones you create are for the main map or any bonuses that it might have.  

By default, this number will be 0, which indicates that you are creating Zones for the main map.  

If it is above 0, then you are creating Zones for a Bonus instead, the number corresponding to which Bonus it is.  

*For example, Track Number 3 would be for the 3rd bonus.*

## Zone Number
This number is for the ordering of Zones.  

It is set to 0 by default, which means it is automatically assigned so this is for any ones you want to manually specify.  

Start triggers begin at 1, so anything you specify should start at 2.