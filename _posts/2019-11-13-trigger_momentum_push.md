---
title: trigger_momentum_push
category: entity
tags:
 - push
 - trigger
---


----
  
A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} volume that modifies the velocity of players that touch it. 
This allows mappers to change how and when the velocity is applied, providing more customization than the normal trigger_push.


## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

>**Push Direction (Pitch Yaw Roll)** (pushdir&lt;**angle**&gt;)

 Defines the direction at which the player will be pushed.

>**Force of the push** (force&lt;**integer**&gt;)

 General force of the push (velocity in units per second). Ignored if the "*Use the direction vector as final force instead of calculating it by force amount*" flag is set.

>**Handling of player's velocity** (increase&lt;**choice**&gt;)

 Defines how the velocity should be applied to the player.

 - **Set player velocity to final push force (0)** 
    - Sets the player's velocity to exactly the force defined in the entity.
 - **Increase the player's current velocity by push final force amount (1)** 
    - Adds the velocity from the push on top of the user's current velocity.
 - **Only set the player's velocity to the final push velocity if player's velocity is lower than final push velocity (2)**
    - Sets the player's velocity to exactly the force defined in the entity but only when the player is moving slower than the push defined.
 - **Act as basevelocity (3)**
    - Sets the basevelocity of the player like a trigger_multiple boost would.

## Flags

>**Only allow for one touch before resetting (1048576)**  
Only allows users to use the boost once before it resets them. This prevents exploits like cboosting.  
***(Enabled by default)***

>**Modify player velocity on StartTouch (2097152)**  
Applies the push to the player when they first enter the trigger (OnStartTouch output).  
***(Disabled by default)***

>**Modify player velocity on EndTouch (4194304)**  
Applies the push to the player when they leave the trigger (OnEndTouch output).  
***(Enabled by default)***

>**Use the direction vector as final force instead of calculating it by force amount (524288)**  
Uses the **Push Direction** value as a value for force instead of using it as an angle alongside the **Force of the push**.  
***(Enabled by default)***
