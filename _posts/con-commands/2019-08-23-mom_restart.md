---
title: mom_restart
category: command
tags:
  - timer
  - teleport
optional_params:
  - Track number
---

Restarts the player to the start trigger. Optionally takes a track number (default is main track).

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

## Notes

If no start zone is found, the player will be teleported to a spawn position.

