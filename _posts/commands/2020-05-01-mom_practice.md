---
title: mom_practice
category: command
tags:
  - practice
cvar_ref: mom_practice_safeguard
---

Toggles practice mode, allowing the player to fly around in noclip. 
The player keeps their position and velocity when toggled off.
Additionally, holding the jump key in this mode prevents the player from being teleported.

If toggled on during a run, 
- the timer will continue to tick
- when toggled off, the player will teleported back to the position where they first toggled it on

### Note:

If the timer is running and [`{{ page.cvar_ref }}`]({{ page.cvar_ref }}) is 1, this command will only activate practice mode if the player is not pressing any movement inputs.