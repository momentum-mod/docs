---
title: mom_weapon_speed_lower_enable
categories:
  - var
cvar_ref: mom_weapon_speed_lower
default_value: 1
maximum_value: 1
minimum_value: 0
tags:
  - weapon
  - viewmodel
---

# mom_weapon_speed_lower_enable

If enabled, changing weapons will lower the previous weapon at a speed set in [`{{ page.cvar_ref }}`](/var/{{ page.cvar_ref }}).
When disabled, the weapon will be immediately lowered.
