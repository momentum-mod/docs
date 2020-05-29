---
title: mom_weapon_speed_lower_enable
category: var
tags:
  - weapon
  - viewmodel
minimum_value: 0
maximum_value: 1
default_value: 1
cvar_ref: mom_weapon_speed_lower
---

If enabled, changing weapons will lower the previous weapon at a speed set in [`{{ page.cvar_ref }}`](/var/{{ page.cvar_ref }}). 
When disabled, the weapon will be immediately lowered.