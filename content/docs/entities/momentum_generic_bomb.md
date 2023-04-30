---
title: momentum_generic_bomb 
category: entity
tags:
 - explosion
 - TF2
 - point entity
---

----
Generic Bomb

## Keyvalues

>**Explosion Damage** (damage&lt;**float**&gt;)

Amount of damage to do when exploding. The default value is 50.

>**Explosion Radius** (radius&lt;**float**&gt;)

Explosion radius. The default value is 100.

>**Health** (health&lt;**integer**&gt;)

Health of the bomb. The default value is 1.

>**Explosion Sound** (sound&lt;**sound**&gt;)

Name of the sound effect to play when exploding.

## Input 

>input Detonate(**void**)

Force detonation.

## Output

>OnDetonate(**void**)

Fired when this bomb detonates.