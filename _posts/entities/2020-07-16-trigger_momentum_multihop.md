---
title: trigger_momentum_multihop
category: entity
tags:
 - trigger
 - map
 - bhop
 - player
---
----
Trigger that allows for multiple hops inside of it, and teleports the player if they stay inside for longer than the hold time.

## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this teleport belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

Default is -1.

>**Remote Destination** (target&lt;**target_destination**&gt;)  

The entity specifying the point to which the player should be teleported.

>**Stop player on teleport** (stop&lt;**choices**&gt;)
 - **0**: False
 - **1**: True

Resets the velocity of the player after being teleported to the Remote Destination. Default is true.

>**Reset the player angles on teleport** (resetang&lt;**choices**&gt;)
 - **0**: False
 - **1**: True

Resets the view angles of the player after being teleported to the Remote Destination. Default is true.

>**Fail Teleport** (fail&lt;**choices**&gt;)
 - **0**: False
 - **1**: True

Indicates whether this teleport is for failing a level. Default is false.

>**Hold Time (seconds)** (hold&lt;**float**&gt;)

If the player is in this trigger for longer than this (in seconds), teleport them to the most recent progress trigger.
The default value is 0.5.
