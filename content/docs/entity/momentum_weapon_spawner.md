---
title: momentum_weapon_spawner 
category: 
  - entity
tags:
 - point entity
 - weapons
---

This entity can be used to give the player a weapon and ammo for that weapon.

## Keyvalues

>**Reset Time** (ResetTime&lt;**float**&gt;)

The amount of time in seconds before a weapon can be picked up again. If this value is negative, then the spawner will only give a weapon once.

>**Weapon Name** (WeaponName&lt;**string**&gt;)

Name of the weapon to give the player. Must be one of the names listed on [Weapon System](https://docs.momentum-mod.org/guide/mapping/weapon_system/).

>**Pickup Ammo** (PickupAmmo&lt;**integer**&gt;)

Amount of ammo to give the player for the weapon given by the spawner. If the value is negative, it gives the player infinite ammo for that weapon. If the value is positive, and the player has less than that amount of ammo, it sets the player's ammo to that amount. Otherwise it only gives 1 ammo. If the value is 0, then it has no effect.

