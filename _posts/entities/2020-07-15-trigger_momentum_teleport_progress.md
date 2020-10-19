---
title: trigger_momentum_teleport_progress
category: entity
tags:
 - trigger
 - map
 - track
 - teleport
---

----
Trigger that teleports the player to their last touched trigger_momentum_progress.

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
