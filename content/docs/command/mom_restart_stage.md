---
title: mom_restart_stage
categories:
  - command
optional_params:
  - Stage number
  - Track number
safeguard: mom_run_safeguard_restart_stage
tags:
  - timer
  - teleport
---

Restarts the player to the start of the current stage on the current track; the player is teleported to their stage start mark if they have one, otherwise they are teleported to the middle of the stage zone.

Optionally takes a stage number, or both stage and track numbers as parameters.

{{< hint info >}}
This command will only reset the timer if the desired stage and track is not the one the player is currently on.
Also, it deliberately does nothing on linear tracks and in the tricksurf gamemode.
{{< /hint >}}

## Usage Examples

> `mom_restart_stage`

Teleports the player to the start of the stage they are currently on, if they're not already in the zone.

> `mom_restart_stage 4`

Teleports the player to stage 4 of the current track, if they're not already in the zone.

> `mom_restart_stage 1`

Teleports the player to the start of current track, effectively the same functionality as {{< cmdref mom_restart >}}.

> `mom_restart_stage 5 3`

Teleports the player to stage 5 on track 3, if they're not already in the zone.
