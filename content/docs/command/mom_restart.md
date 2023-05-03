---
title: mom_restart
categories:
  - command
optional_params:
  - Track number
safeguard: mom_run_safeguard_restart
tags:
  - timer
  - teleport
---

Restarts the player to the start of the current track; the player is teleported to their start mark if they have one, otherwise they are teleported to the middle of the start zone.
If there is no start zone, the player will be teleported to the spawn position.

Optionally takes a track number as a parameter, which can be used to get to bonus'.

In the tricksurf gamemode this teleports the player back to their currently tracked trick, if there is any.

## Usage Examples

> `mom_restart -1`

This will teleport the player to the spawn point.

> `mom_restart 0`

This will teleport the player to the start of the main track (track 0).

> `mom_restart`

This will teleport the player to the start of the current track.

> `mom_restart 1`

This will teleport the player to the start of bonus 1 (track 1). If the player is not on bonus 1, the command will also set their timer to bonus 1.
Use `mom_restart 2` to get to bonus 2, `mom_restart 3` to get to bonus 3, etc.
