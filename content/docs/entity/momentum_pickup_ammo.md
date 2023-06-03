---
title: momentum_pickup_ammo
categories:
  - entity
tags:
 - point entity
 - weapons
 - ammo
---

This entity can be used to give the player ammo.

## Keyvalues

>**Reset Time** (ResetTime&lt;**float**&gt;)

The amount of time in seconds before a weapon can be picked up again. If this value is negative, then the spawner will only give a weapon once.

>**Ammo Name** (AmmoName&lt;**string**&gt;)

Name of the ammo type to give the player. Must be one of the names listed on [Ammo System](/guide/ammo-system/).

>**Pickup Ammo** (PickupAmmo&lt;**integer**&gt;)

Amount of ammo to give the player for the specified ammo type. If the value is negative, it gives the player infinite ammo for that weapon. If the value is positive, the player is given that amount of ammo, up to the ammo limit.

