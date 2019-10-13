---
title: trigger_momentum_timer_start
category: entity
tags:
 - timer
 - trigger
 - start
---

----
<img src="/assets/images/trigger_momentum_timer_start/start_zone.jpg" alt="start zone" style="display: block; margin: auto;">
  
A <a href="https://developer.valvesoftware.com/wiki/Triggers" target="_blank">trigger</a> entity in Momentum Mod that starts the map or bonus upon leaving it.
  
## Keyvalues

>**Name** (targetname&lt;**string**&gt;)  

The targetname used to identify the entity

>**Parent** (parentname&lt;**targetname**&gt;)  

The name of this entity's parent in the movement hierarchy. Entities with parents move with their parent.

>**Origin (X Y Z)** (origin&lt;**origin**&gt;)

The position of this entity's center in the world. Rotating entities typically rotate around their origin.

>**Start Disabled** (StartDisabled&lt;**boolean**&gt;)

Disable the entity and await activation by other outputs.

>**Global Entity Name** (globalname&lt;**string**&gt;)

Name by which this entity is linked to another entity in a different map. When the player transitions to a new map, entities in the new map with globalnames matching entities in the previous map will have the previous map's state copied over their state.

>**Filter Name** (filtername&lt;**filter**&gt;)

Specifies the name of the filter entity to be used when deciding whether or not an activator can trigger the entity.

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

 >**Speed limit (UPS)** (speed_limit&lt;**float**&gt;)

 The maximum speed in Units Per Second that the user can have while leaving the start zone. The default speed is 350 UPS and it will only be applied depending on the limit speed type.

 >**Look angles** (look_angles&lt;**angle**&gt;)

 Where the player will look when teleported to the start.

 >**Start timer on jump** (start_on_jump&lt;**integer**&gt;)

 Start the timer when the player jumps or leaves the start zone.

 >**Limit speed type** (speed_limit_type&lt;**integer**&gt;)

 How the speed limit will be enforced on players when leaving the start zone:

 - **0**: Limit the speed of the player no matter what.
 - **1**: Limit the speed only when in the air.
 - **2**: Limit the speed only when on the ground.
 - **3**: Limit the speed only on landing.

## Flags

>**Limit leave speed (8192)**  
Applies the speed limit upon leaving the zone.

>**Use look angles (16384)**  
Sets the angle of the player to a predefined value when teleporting to the start zone.

