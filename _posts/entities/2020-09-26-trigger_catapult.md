---
title: trigger_catapult
category: entity
tags:
- trigger
- player
- TF2
tool_texture: trigger_catapult
---
----
![Catapult trigger texture](/assets/images/trigger_catapult/catapult.jpg)


A trigger volume that launches the player at a specified speed towards a target or in a direction. This entity also contains some filtering for the players velocity and entry angle.

## Keyvalues

> Player speed (playerSpeed&lt;**float**&gt;) 

The base speed to launch the player at in units per second.
Default is 450.

> Use threshold check (useThresholdCheck&lt;**integer**&gt;)

Turns on filtering based on the player's speed and entry angle when interacting with the entity. Default is off; 0.

> Entry angle tolerance (entryAngleTolerance&lt;**float**&gt;)

The player's velocity must be pointing this much at the target for the entity to fire. 
Specify a value between -1 and 1; 1 means exactly, 0 means within 180 degrees, and -1 means any angle is accepted. 
This is only used if "Use threshold check" is set to 1.
Default is off; 0.

> Use exact velocity (useExactVelocity&lt;**integer**&gt;)

Try to launch the player at the exact speed specified in "Player speed".
This does not guarantee a valid solution: when "Player speed" is set too low for instance.
In this case it will fall back to the non-exact case which does guarantee a solution.
Default is off; 0.

> Exact solution method (exactVelocityChoiceType&lt;**choices**&gt;)

Choice determining the launch direction for the "Use exact velocity" option, as there can be two valid solutions.

  - 0; Best: This option will minimize the player's entry angle with respect to the launch velocity direction.
  - 1; Solution One: Selects the lower angle.
  - 2; Solution Two: Selects the higher angle.

Default is 0; best.

> Lower threshold (lowerThreshold&lt;**float**&gt;)

Flung player must be within this percentage value and "Upper threshold" in order to activate fling. 
Specify a value between 0 and 1.
This is only used if "Use threshold check" is set to 1.
Default is 0.15.

> Upper threshold (upperThreshold&lt;**float**&gt;)

Flung player must be within "Lower threshold" and this percentage value in order to activate fling.
Specify a value between 0 and 1.
This is only used if "Use threshold check" is set to 1.
Default is 0.30.

> Launch direction (launchDirection&lt;**angle**&gt;) 

Direction (angle) to launch the player in. 

{:.notice--danger}
If porting from TF2 and this is set to exactly vertical, you need to multiply "Player speed" by 1.5.
This does not apply to using the launch target method.

> Launch target (launchTarget&lt;**target_entity_name**&gt;) 

Name of the entity to try to hit when we're launched.

> Only check velocity (onlyVelocityCheck&lt;**integer**&gt;) 

If set to 1, the trigger only checks the velocity of the touching object and doesn't actually catapult it.  
Use in conjunction with the "OnCatapulted" output to create velocity checking triggers. 
Only works when "Use threshold check" is enabled.
Default is off; 0.

> OnThink (OnThink&lt;**integer**&gt;) 

If set to 1, the trigger fires on an interval set by "Interval".
Default is off; 0.

> Interval (Interval&lt;**float**&gt;) 

Time in seconds between updates when "OnThink" is set to 1.
Default is 1.

> Every tick (EveryTick&lt;**integer**&gt;) 

Trigger fires every tick if set to 1.
Default is off; 0.

> Height offset (heightOffset&lt;**float**&gt;) 

Offsets the origin of the player vertically, in units.
Default legacy value is 32 units from TF2.

## Output

> OnCatapulted(**void**)

Fired when the player is successfully launched or when it passes filters for "Only check velocity".
