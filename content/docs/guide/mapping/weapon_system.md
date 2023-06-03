---
title: Weapon System
categories:
  - guide
tags:
  - mapping
  - weapons
---

The weapon system allows mappers to give and remove a players weapons via entity logic.

# Weapon Spawner Entity

The [`momentum_weapon_spawner`](/entity/momentum_weapon_spawner) entity can be used to give the player a weapon. The entity currently takes a weapon entity name in the `WeaponName` key. The following weapon names can be used:

```
"weapon_momentum_pistol"
"weapon_momentum_shotgun"
"weapon_momentum_machinegun"
"weapon_momentum_sniper"
"weapon_momentum_grenade"
"weapon_momentum_concgrenade"
"weapon_knife"
"weapon_momentum_rocketlauncher"
"weapon_momentum_stickylauncher"
"weapon_momentum_df_plasmagun"
"weapon_momentum_df_rocketlauncher"
"weapon_momentum_df_bfg"
"weapon_momentum_df_grenadelauncher"
```

The entity also has a `ResetTime` key, which is the amount of time in seconds before a weapon can be picked up again. If this value is negative, then the spawner will only give a weapon once. Once we implement a save state system on map reset, this entity should reset along with that, but right now the only way to reset the spawner when it's in this state is to reload the map.

# Inputs

Weapons can be enabled or disabled using the following inputs:

```
GiveWeapon (weapon name)
RemoveWeapon (weapon name)
```

This input uses the same entity names given above for the weapon spawner entity. Only weapons that the player can normally get in the gamemode can be controlled this way. For example, you cannot give the player conc grenades in RJ.

