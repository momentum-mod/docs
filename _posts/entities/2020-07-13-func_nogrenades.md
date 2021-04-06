---
title: func_nogrenades
category: entity
tags:
 - func
 - trigger
 - TF2 
 - limit
 - explosion
 - rocket jump
 - sticky jump
 - conc
tool_texture: trigger_nogrenades
---

----
![Nogrenade trigger texture](/assets/images/func_nogrenades/func_nogrenades.jpg)

Rockets, stickybombs, conc grenades, and other explosives will not detonate/explode inside this area.

## Keyvalues

> Explosive prevention method (explosion_prevention_type&lt;**choices**&gt;)

Determines the method of explosive prevention.

 - **0**: "[Default] Fizzle explosives upon detonation. This is the TF2 default."
 - **1**: "Fizzle only airborne (handheld concs included) explosives upon detonation."
 - **2**: "Fizzle upon landing instead of on attempted detonation."
 - **3**: "Fizzle explosive immediately upon it entering the trigger."
