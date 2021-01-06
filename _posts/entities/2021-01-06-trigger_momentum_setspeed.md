---
title: trigger_momentum_setspeed
category: entity
tags:
 - trigger
---


----


A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} for setting the speed of the player in a particular axis or direction.
If you want send the player in a specific direction, use a [catapult](/entity/trigger_momentum_catapult/) instead.


## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to:

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

>**Keep horizontal speed** (KeepHorizontalSpeed&lt;**integer**&gt;)

 Whether or not the trigger affects the player's horizontal (x/y axis) speed.

>**Keep vertical speed** (KeepVerticalSpeed&lt;**integer**&gt;)

 Whether or not the trigger affects the player's vertical (z axis) speed.

>**Horizontal speed amount** (HorizontalSpeedAmount&lt;**float**&gt;)

 The horiztonal speed to set the player to.

>**Vertical speed amount** (VerticalSpeedAmount&lt;**float**&gt;)

 The vertical speed to set the player to.

>**Direction** (Direction&lt;**angle**&gt;)

 The direction of the speed applied. Only the yaw is used as the vertical speed is determined by the vertical speed amount.

>**Update every intervals** (OnThink&lt;**integer**&gt;)

 If the trigger should update every interval.

>**Interval** (Interval&lt;**float**&gt;)

 The length of an interval in seconds.

>**Every tick** (EveryTick)&lt;**integer**&gt;)

 If the trigger should update every tick.
