---
title: trigger_momentum_reversespeed
category: entity
tags:
 - trigger
---


----


A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} for reversing the speed of the player in a particular axis.


## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to:

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

>**Reverse horizontal speed** (ReverseHorizontal&lt;**integer**&gt;)

 Whether or not the trigger reverses the player's horizontal (x/y axis) speed.

>**Reverse vertical speed** (ReverseVertical&lt;**integer**&gt;)

 Whether or not the trigger reverses the player's vertical (z axis) speed.

>**Update every intervals** (OnThink&lt;**integer**&gt;)

 If the trigger should update every interval.

>**Interval** (Interval&lt;**float**&gt;)

 The length of an interval in seconds.
