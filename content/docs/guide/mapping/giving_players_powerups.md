---
title: Giving Players Powerups
categories:
  - guide
tags:
  - defrag
  - mapping
  - powerups
---

Two powerups are implemented: Haste and Damage Boost. They can be given or removed with these inputs:

`SetHaste (time in seconds)`

`SetDamageBoost (time in seconds)`

If time = 0, the effect will be removed. If time < 0, then the effect will last indefinitely until removed.

There are also powerup entities: [`momentum_powerup_haste`](/entity/momentum_powerup_haste) and [`momentum_powerup_damage_boost`](/entity/momentum_powerup_damage_boost). They both take a `ResetTime` key like the weapon spawner entity. The haste powerup takes a `HasteTime` key, and the damage boost powerup takes a `DamageBoostTime` key. They are both specified in seconds the same way as the inputs.
