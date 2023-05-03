---
title: Chat Commands
categories:
  - guide
tags:
  - chat
  - commands
  - say
  - showclips
  - showtriggers
  - spec
---

This guide covers all of the supported chat commands and potential inputs they have. These commands can be entered in chat at any time regardless of being in a lobby or not.

{{< hint info >}}
All commands are activated by using "/" or "!" or "." and then the trigger keywords listed below. Example: "/spec" or ".spec" or "!spec" all trigger the "Spectate Player" command.
{{< /hint >}}
{{< hint danger >}}
Do not make "say binds"!! Instead, prefer to create binds to the linked commands. There will never be any exclusive chat commands; they all directly tie to console commands/variables!
{{< /hint >}}
| Command | Triggers | Functional Equivalent | Examples |
| :---------------- | :----------------------------------------------: | :------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bonus Teleport | **`"b", "bonus"`** | **[`mom_restart <bonus>`](/command/mom_restart)** <br>(or `"/r <bonus>"`) | `/b 2` teleports the player to Bonus Track 2.<br>`/b` does not work and will let you know that it requires a specific track number. Consider doing **`/r`** if you wish to restart the track. |
| Track Teleport | **`"r", "restart"`** | **[`mom_restart`](/command/mom_restart)** | `/r 3` will restart the player to bonus track 3.<br>`/r` with no parameter will restart the player to the start of the current track. |
| Stage Teleport | **`"s", "stage"`** | **[`mom_restart_stage`](/command/mom_restart_stage)** | `/s 3` will teleport the player to the third stage of the current track.<br>`/s` with no parameter will teleport the player back to the current stage's trigger. |
| Set Start Mark | **`"setstart"`** | **[`mom_start_mark_create`](/command/mom_start_mark_create)** | `/setstart` while standing in the track start zone will create a start mark, allowing `/r` to teleport you back to the specific spot you are in. |
| Show Player Clips | **`"clips", "showclips"`** | **`r_drawclipbrushes (0, 1, 2)`**<br>(it cycles through these unless you specify the number) | `/clips 2` will set `r_drawclipbrushes` to `2`, which is the solid clipbrush render mode.<br>`/clips` will cycle through the render modes of drawing clipbrushes. If they're off, they go to 1 (wireframe), if on 1, to 2 (solid), if on 2, to 0 (off) and loops. |
| Show Triggers | **`"triggers", "showtriggers"`** | **`showtriggers_toggle`** | `/triggers` will toggle showing triggers in game. On if they're off, off if they're on. |
| Spectate Player | **`"spec", "spectate"`** | **[`mom_spectate`](/command/mom_spectate)** | `/spec goc` while Gocnak is in your lobby will begin spectating Gocnak, even if you are spectating, otherwise, will find the next best target to spectate.<br>`/spec` with no target will place you in spectator mode. |
| Stop Spectating | **`"stopspec", "specstop", "spawn", "respawn"`** | **[`mom_spectate_stop`](/command/mom_spectate_stop)** | `/spawn` while watching a player in your lobby, or while in free roam, will respawn you, exiting spectate mode.<br>`/spawn` while alive will not do anything, consider using **`/r -1`** if you wish to return to the map's initial spawn point. |
| Go To Player | **`"goto"`** | **[`mom_lobby_teleport <person>`](/command/mom_lobby_teleport/)** | `/goto goc` with Gocnak in your lobby will teleport you to where Gocnak is in the map.<br>`/goto goc` without Gocnak in your lobby will not teleport you, and instead give an error in chat. |
| Go To Saveloc | **`"saveloc"`** | **[`mom_saveloc_nav_goto <number>`](/command/mom_saveloc_nav_goto)** | `/saveloc 1` when saveloc 1 exists will teleport you to the specified save.<br>`/saveloc 1` when saveloc 1 does not exist will not teleport you, and instead give an error in chat. |

Do you have any more commands you'd like to see in the game? Try suggesting them in [our Game repository's issues section](https://github.com/momentum-mod/game/issues/new/choose)!
