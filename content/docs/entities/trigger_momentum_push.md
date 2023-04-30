---
title: trigger_momentum_push
categories:
  - entity
tags:
  - push
  - trigger
---

# trigger_momentum_push

A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} volume that modifies the velocity of players that touch it.
This allows mappers to change how and when the velocity is applied, providing more customization than the normal `trigger_push`.

## Keyvalues

> **Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to:

- **-1**: All Tracks
- **0**: Main Map
- **1+**: Bonus Tracks

> **Push Direction (Pitch Yaw Roll)** (pushdir&lt;**angle**&gt;)

Defines the direction at which the player will be pushed.

> **Force of the push** (force&lt;**integer**&gt;)

General force of the push (velocity in units per second).
Ignored if the "_Use the direction vector as final force instead of calculating it by force amount_" flag is set.

> **Push mode** (increase&lt;**choice**&gt;)

Defines how the velocity should be applied to the player.

- **0; Set velocity**: Sets the player's velocity to exactly the force defined in the entity.
- **1; Add velocity**: Adds the velocity from the push on top of the user's current velocity.
- **2; Set velocity if lower**: Sets the player's velocity to exactly the force defined in the entity but only when the player is moving slower than the push defined.
- **3; Add velocity if lower**: Adds the velocity from the push on top of the user's current velocity but only when the player is moving slower than the push defined.
- **4; Basevelocity**: Sets the basevelocity of the player like a `trigger_multiple` boost would.
- **5; Variable push**: Applies an increasing/decreasing (can be a curve) impulse every tick over a specified duration.

Default is "Add velocity if lower"; 3.

> **Variable push duration** (varpushduration&lt;**float**&gt;)

Duration of a variable push in seconds. Ignored if "Push mode" is not "Variable Push".
Default is 1.

> **Variable push bias** (varpushbias&lt;**float**&gt;)

The curve bias of a variable push.
Higher values bias the curve towards the end.
0.5 is linear.
Ignored if "Push mode" is not "Variable Push".
Default is linear; 0.5.

> **Variable push mode** (varpushincrease&lt;**choices**&gt;)

Defines whether the variable push increases or decreases over its duration.
Ignored if "Push mode" is not "Variable Push".
Default is decreasing; 0.

- **0; Decreasing**:
- **1; Increasing**:

## Flags

> **Only allow for one touch before resetting (1048576)**  
> Only allows users to use the boost once before it resets them. This prevents exploits like cboosting.  
> **_(Enabled by default)_**

> **Modify player velocity on StartTouch (2097152)**  
> Applies the push to the player when they first enter the trigger (OnStartTouch output).  
> **_(Disabled by default)_**

> **Modify player velocity on EndTouch (4194304)**  
> Applies the push to the player when they leave the trigger (OnEndTouch output).  
> **_(Enabled by default)_**

> **Use the direction vector as final force instead of calculating it by force amount (524288)**  
> Uses the **Push Direction** value as a value for force instead of using it as an angle alongside the **Force of the push**.  
> **_(Enabled by default)_**
