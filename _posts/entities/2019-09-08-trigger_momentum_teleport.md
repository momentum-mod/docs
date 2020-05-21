---
title: trigger_momentum_teleport
category: entity
tags:
 - teleport
 - trigger
---


----
![teleport trigger](/assets/images/trigger_momentum_teleport/momentum_teleport.jpg)
  
A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} volume that teleports entities that touch it. Entities are teleported to the Remote Destination. The entity can have its Angles and Velocity reset by boolean settings. This extends the functionality of the regular trigger_teleport.


## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

>**Stop player on teleport** (stop&lt;**boolean**&gt;)

 Resets the velocity of the player after being teleported to the Remote Destination.

>**Reset the player angles on teleport** (resetang&lt;**boolean**&gt;)

 Resets the view angles of the player after being teleported to the Remote Destination.

## Flags

>**Teleport the player on EndTouch() instead of StartTouch() (8388608)**  
Teleports the user to the Remote Destination when the player leaves the trigger instead of when they first touch it.

