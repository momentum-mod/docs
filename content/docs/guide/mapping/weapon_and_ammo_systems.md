---
title: Weapon and Ammo Systems
categories:
  - guide
tags:
  - ammo
  - weapon
  - weapons
  - mapping
---
# Ammo System
All **Defrag weapons**, the **RJ Rocket Launcher**, the **Sticky Bomb Launcher**, and **Concs** can be controlled with separate ammo types.  
By default players have infinite ammo.  
Additionally, an ammo limit can be set that doesn't allow the player to have more than a certain amount.

{{<hint info>}}
By default, the player has a **limit of 200** on the maximum amount of ammo they can carry of any type.  
This can be changed with the `SetAmmoLimit` input, where a limit of `-1` means no limit.  
The ammo limit **does not prevent the player from carrying infinite ammo**, it only applies when the player's ammo is finite.
{{</hint>}}

## Pickup Entities

In order to create an **ammo pickup** use [`momentum_pickup_ammo`](/entity/momentum_pickup_ammo) entity.  
The key `AmmoName` controls the type of ammo. It takes a **string** which is one of the names in **the table below**.  
The entity also takes a `PickupAmmo` key which controls how much ammo the player gets.  
{{<hint info>}}
[`momentum_weapon_spawner`](/entity/momentum_weapon_spawner) entity can also give ammo on pickup, controlled by the `PickupAmmo` key.
{{</hint>}}

## Player Inputs

You can use inputs on the player to set, add, or subtract the player's ammo. 
The player can be in one of three states with ammo:

- **Negative ammo** - Can shoot an infinite amount of shots. This is the default.
- **Positive ammo** - Can shoot, each shot will take 1 ammo.
- **Zero ammo**     - Out of ammo, cannot shoot.

Each ammo type supports two related inputs:

- **`SetX`** — Sets the ammo count directly.  
- **`AddX`** — Increases/Decreases the current ammo count by a specified amount.  

| Weapon / Category          | Input                                  | Ammo Name     |
|----------------------------|----------------------------------------|---------------|
| All Weapons                | `SetAmmo`, `AddAmmo`                   | `N/A`         |
| Rocket Launcher (RJ & DF)  | `SetRockets`, `AddRockets`             | `rockets`     |
| Sticky Bomb Launcher       | `SetStickyBombs`, `AddStickyBombs`     | `stickybombs` |
| Concs                      | `SetConcs`, `AddConcs`                 | `concs`       |
| DF Grenade Launcher        | `SetGrenades`, `AddGrenades`           | `grenades `   |
| DF Machine Gun             | `SetBullets`, `AddBullets`             | `bullets`     |
| DF Shotgun                 | `SetShells`, `AddShells`               | `shells`      |
| DF Lightning Gun           | `SetCells`, `AddCells`                 | `cells`       |
| DF Railgun                 | `SetRails`, `AddRails`                 | `rails`       |
| DF Plasma Gun              | `SetPlasma`, `AddPlasma`               | `plasma`      |
| DF BFG                     | `SetBfgRockets`, `AddBfgRockets`       | `bfg_rockets` |




## Examples
- To give infinite rockets: `SetRockets -1`
- To add 30 plasma bolts: `AddPlasma 30`
- To take away 2 sticky bombs: `AddStickyBombs -2`

Example in the screenshot **sets player's rocket count to 4**
![SetRockets Input](/images/ammo_system/set_rockets_input.png)



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

{{<hint warning>}}
Remember to add an ammo trigger to the map's start zone so the player's ammo state is consistent at the start of each run!
{{</hint>}}


# Weapon System
The weapon system allows mappers to give and remove a players weapons via entity logic.  
Weapons can be given to players in two ways:

## Weapon Spawner Entity
The [`momentum_weapon_spawner`](/entity/momentum_weapon_spawner) entity takes a weapon entity name in the `WeaponName` key.  
The entity also has a `ResetTime` key, which is the **amount of time in seconds** before a weapon can be picked up again.   
If this value is negative, then the spawner will **only give a weapon once**.

## Inputs

Weapons can be enabled or disabled using the following inputs:

```
GiveWeapon (weapon name)
RemoveWeapon (weapon name)
```

## Weapon Names
### Gamemode Specific
| Defrag                               | Rocket Jump                      | Sticky Jump                      | Conc                          |
|--------------------------------------|----------------------------------|----------------------------------|-------------------------------|
| `weapon_momentum_df_knife`           | `weapon_momentum_rocketlauncher` | `weapon_momentum_stickylauncher` | `weapon_momentum_concgrenade` |
| `weapon_momentum_df_machinegun`      | `weapon_momentum_shotgun`        | `weapon_momentum_pistol`         |                               |
| `weapon_momentum_df_shotgun`         |                                  |                                  |                               |
| `weapon_momentum_df_rocketlauncher`  |                                  |                                  |                               |
| `weapon_momentum_df_bfg`             |                                  |                                  |                               |
| `weapon_momentum_df_plasmagun`       |                                  |                                  |                               |
| `weapon_momentum_df_grenadelauncher` |                                  |                                  |                               |
| `weapon_momentum_df_lightninggun`    |                                  |                                  |                               |
| `weapon_momentum_df_railgun`         |                                  |                                  |                               |

### Miscellaneous
| Surf, Bhop, Climb, Ahop      |
|------------------------------|
| `weapon_knife`               |
| `weapon_momentum_pistol`     |
| `weapon_momentum_shotgun`    |
| `weapon_momentum_machinegun` |
| `weapon_momentum_sniper`     |
| `weapon_momentum_grenade`    |