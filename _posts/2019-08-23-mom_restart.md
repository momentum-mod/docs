---
title: mom_restart
category: command
tags:
  - timer
---

Restarts the player to the start trigger. Optionally takes a track number (default is main track).

## Usage Examples

> `mom_restart`

This will teleport the player to the start of the current track.

> `mom_restart 2`

This will teleport the player to the start of track 2. If the player is not on track 2, the command will also set their timer to track 2.

## Notes

If no start zone is found, the player will be teleported to a spawn position.