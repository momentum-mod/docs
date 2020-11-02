---
title: trigger_momentum_slide
category: entity
tags:
 - slide
 - trigger
---


----
![surf_sluice slides](/assets/images/trigger_momentum_slide/slides.jpg)

  
A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} volume that allows the player to slide across the surface of a brush without friction. 
This must be placed above the brush in order for the slide to work.


## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

>**Stick player to ground** (StuckOnGround&lt;**integer**&gt;)

 Forces the player to stay on the ground throughout the slide trigger, even if it suddenly curves downwards or launches the player upwards.

>**Allow jumping** (AllowingJump&lt;**integer**&gt;)

 Allow the player to jump while inside the slide trigger. This does not work when the trigger is set to stick players to the ground.

>**Disable gravity** (DisableGravity&lt;**integer**&gt;)

 Removes the effects of gravity on the slide, allowing for people to slide up impossible slopes.

>**Fix Upside Slopes** (FixUpsideSlope&lt;**integer**&gt;)

 When mounting a slide, players can sometimes lose speed. This fix prevents this kind of speed loss.
