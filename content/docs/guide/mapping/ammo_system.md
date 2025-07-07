---
title: Ammo System
categories:
  - guide
tags:
  - ammo
  - mapping
---

The ammo system allows mappers to control how many shots the player can fire from weapons that use ammo. All defrag weapons, the RJ rocket launcher, the sticky bomb launcher, and concs can be controlled with separate ammo types. The default state for the player is infinite ammo, but the player's ammo can be changed with player IO inputs and entities. Additionally, an ammo limit can be set that doesn't allow the player to have more than a certain amount.

# Pickup Entities

The [`momentum_pickup_ammo`](/entity/momentum_pickup_ammo) entity can also give the player ammo. The key `AmmoName` controls the type of ammo. It takes a string which is one of these names:

```
"rockets"
"stickybombs"
"concs"
"grenades"
"bullets"
"shells"
"cells"
"rails"
"plasma"
"bfg_rockets"
```

The entity also takes a `PickupAmmo` key which controls how much ammo the player gets. A negative value gives the player infinite ammo. If the player already has infinite ammo, this entity does nothing when the player picks it up.

## Ammo from Weapon Spawners

The [`momentum_weapon_spawner`](/entity/momentum_weapon_spawner) entity gives a certain amount of ammo, controlled by the `PickupAmmo` key. If the value is negative, it gives the player infinite ammo for that weapon. If the value is positive, and the player has less than that amount of ammo, it sets the player's ammo to that amount. Otherwise it only gives 1 ammo. If the value is 0, then it has no effect.

# Player Inputs

The mapper can use inputs on the player to set, add, or subtract the player's ammo. The mapper can change only one type of ammo at a time, or all the ammo types at once. The following inputs control the player's ammo. Which weapon uses which ammo type is listed next to them, but some ammo types aren't currently used by any weapons.

```
SetAmmo          <- all ammo types
SetRockets       <- rocket launcher (RJ and DF)
SetStickyBombs   <- sticky bomb launcher
SetConcs         <- concs
SetGrenades      <- DF grenade launcher
SetBullets
SetShells
SetCells
SetRails
SetPlasma        <- DF plasma gun
SetBfgRockets    <- DF BFG

AddAmmo          <- all ammo types
AddRockets       <- rocket launcher (RJ and DF)
AddStickyBombs   <- sticky bomb launcher
AddConcs         <- concs
AddGrenades      <- DF grenade launcher
AddBullets
AddShells
AddCells
AddRails
AddPlasma        <- DF plasma gun
AddBfgRockets    <- DF BFG
```

The player can be in one of three states with ammo:

1. Negative ammo - Can shoot an infinite amount of shots. This is the default.
2. Positive ammo - Can shoot, each shot will take 1 ammo.
3. Zero ammo     - Out of ammo, cannot shoot.

For example, to set the player's rockets to 4:
![SetRockets Input](/images/ammo_system/set_rockets_input.png)

To give infinite rockets: `SetRockets -1`

To add 30 plasma bolts: `AddPlasma 30`

To take away 2 sticky bombs: `AddStickyBombs -2`

### Trigger Placement

In RJ and SJ, proper trigger placement is required ensure the player starts the jump with the right amount of ammo.  
Try to place triggers such that:  
- It is impossible to miss or avoid any ammo triggers
- The player's ammo is instantly refilled upon failing a jump
- The player's ammo is refilled if they fire but don't leave the start of the jump
- The player cannot get stuck somewhere with zero ammo and no access to an ammo trigger

Here is an example trigger setup for a jump:  
![Example ammo trigger setup](/images/ammo_system/set_rockets_setup_example.png)

The vertical trigger in the hallway is an `OnStartTouch` output, and assures the player will be set to 4 rockets even if they skip over the floor trigger.  
The flat trigger on the floor is 1 hammer unit tall and uses `OnTrigger` instead, and sets the player's rockets to 4 as long as they are on the ground. 

> Remember to add an ammo trigger to the map's start zone so the player's ammo state is consistent at the start of each run!


## Ammo Limit

By default, the player has a limit of 200 on the maximum amount of ammo they can carry of any type. This can be changed with the `SetAmmoLimit` input, where a limit of -1 means no limit. The ammo limit does *not* prevent the player from carrying infinite ammo, it only applies when the player's ammo is finite.

