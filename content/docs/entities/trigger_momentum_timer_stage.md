---
title: trigger_momentum_timer_stage
category: entity
tags:
 - timer
 - trigger
 - stage
ccom_ref: mom_restart_stage
tool_texture: trigger_stage
---

----
![Stage tool texture](/assets/images/trigger_momentum_timer_stage/stage.jpg)
  
A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} entity in Momentum Mod that marks the start of a stage.  
It is used on Staged maps and can be reset to via [`{{ page.ccom_ref }}`](/command/{{ page.ccom_ref }}).

{:.notice--danger}
Stage Zones cannot be used at the same time as Checkpoint Zones.

> Looking for more general info on Zones?   
> Check the [Zone Types page](/guide/zone-types/).

## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

 >**Zone Number** (zone_number&lt;**integer**&gt;)

 The zone number of the trigger: 

 - Zone number 0 is reserved for invalid and stop triggers.
 - Zone number 1 is reserved for start triggers.
 - Zone numbers 2 and up are for stage / checkpoint triggers.  

>**Remote Destination** (target&lt;**target_destination**&gt;)  

The entity specifying the point to which the player should be teleported.