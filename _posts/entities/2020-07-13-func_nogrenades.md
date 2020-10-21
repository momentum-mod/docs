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


Rockets and grenades will not detonate inside this area.


## Keyvalues

> Explosive prevention method (explosion_prevention_type&lt;**choices**&gt;)

Determines the method of explosive prevention.

 - **0**: "[Default] As in TF2, prevents explosives from detonating inside this trigger."
 - **1**: "Prevent stickybomb detonation only if the stickybomb is airborne."
 - **2**: "Destroy stickybombs upon them landing, instead of on attempted detonation."
 - **3**: "Destroy explosive (rocket/stickybomb/etc.) immediately upon it entering the trigger."
