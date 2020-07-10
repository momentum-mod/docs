---
title: mom_restart_stage
category: command
tags:
  - timer
  - teleport
optional_params:
  - Stage number
  - Track number
ccom_ref: mom_restart
---

Teleports the player to the start of the current stage on the current track. 
Optionally takes a stage, or both stage and track parameters, with the default track being the current track.

This command will reset the timer if the desired stage and track is not the one the player is currently on.

## Usage Examples

> `mom_restart_stage`

Teleports the player to the start of the stage they are currently on.

> `mom_restart_stage 4`

Teleports the player to stage 4 of the current track.

> `mom_restart_stage 1`

Teleports the player to the start of current track, effectively the same functionality as [`{{ page.ccom_ref }}`](/command/{{ page.ccom_ref }}).

> `mom_restart_stage 5 3`

Teleports the player to stage 5 on track 3.
