---
title: Chat Commands
categories:
  - guide
tags:
  - chat
  - say
  - showclips
  - showtriggers
  - spectate
---

This guide covers all of the supported chat commands and potential inputs they have.  
These commands can be entered in chat at any time regardless of being in a lobby or not.

{{< hint info >}}
All commands are activated by using `/` or `!` or `.` and then the trigger keywords listed below.  
Example: `/spec` or `.spec` or `!spec` all trigger the "Spectate Player" command.
{{< /hint >}}

{{< hint danger >}}
Do not make `say <chat_command>` binds! Instead create binds tied directly to the console command equivalent!  
There will never be any exclusive chat commands; they all directly tie to console commands/variables!
{{< /hint >}}

| Command            | Triggers                                         | Functional Equivalent                                                | Examples                                                                                                                                                                                                                             |
| :----------------- | :----------------------------------------------: | :------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Main Teleport      | **`"m", "main"`**                                | **[`mom_main`](/command/mom_main)**                                  | `/m` will teleport the player to the main track.                                                                                                                                                                                     |
| Bonus Teleport     | **`"b", "bonus"`**                               | **[`mom_bonus <bonus>`](/command/mom_bonus)**                        | `/b 2` teleports the player to Bonus Track 2. `/b` does not work and will let you know that it requires a specific track number. Use **`/r`** if you wish to restart the track.                                                      |
| Track Teleport     | **`"r", "restart"`**                             | **[`mom_restart_track`](/command/mom_restart_track)**                | `/r` will restart the player to the start of the current track.                                                                                                                                                                      |
| Stage Teleport     | **`"s", "stage"`**                               | **[`mom_stage <stage>`](/command/mom_stage)**                        | `/s 3` will teleport the player to the third stage of the current track. `/s` with no parameter will teleport the player back to the current stage's start zone acting like `mom_restart_stage` command.                             |
| Set Start Mark     | **`"setstart"`**                                 | **[`mom_start_mark_set`](/command/mom_start_mark_set)**              | `/setstart` while standing in the track start zone will create a start mark, allowing `/r` to teleport you back to the specific spot you are in.                                                                                     |
| Show Player Clips  | **`"clips", "showclips"`**                       | **`r_drawclipbrushes (0, 1, 2)`**                                    | `/clips 2` will set `r_drawclipbrushes` to `2`, which is the solid clipbrush render mode. `/clips` will cycle through the render modes of drawing clipbrushes.                                                                       |
| Show/Hide Triggers | **`"triggers", "showtriggers"`**                 | **`showtriggers_toggle`**                                            | `/triggers` will toggle showing triggers in game.                                                                                                                                                                                    |
| Spectate Player    | **`"spec", "spectate"`**                         | **[`mom_spectate`](/command/mom_spectate)**                          | `/spec goc` while Gocnak is in your lobby will begin spectating Gocnak, even if you are spectating, otherwise, will find the next best target to spectate. `/spec` with no target will place you in spectator mode.                  |
| Stop Spectating    | **`"stopspec", "specstop", "spawn", "respawn"`** | **[`mom_spectate_stop`](/command/mom_spectate_stop)**                | `/spawn` while watching a player in your lobby, or while in free roam, will respawn you, exiting spectate mode. `/spawn` while alive will not do anything, use `mom_respawn` if you wish to return to the map's initial spawn point. |
| Go To Player       | **`"goto"`**                                     | **[`mom_goto <person>`](/command/mom_goto/)**                        | `/goto goc` with Gocnak in your lobby will teleport you to where Gocnak is in the map. `/goto goc` without Gocnak in your lobby will not teleport you.                                                                               |
| Show/Hide Players  | **`"hide"`**                                     | **[`mom_hide_players (0, 1)`](/command/mom_hide_players)**           | `/hide` will toggle visisbility of other players.                                                                                                                                                                                    |
<!-- Not working on 0.10.2 -->
<!-- | Go To Saveloc     | **`"saveloc"`**                                  | **[`mom_saveloc_nav_goto <number>`](/command/mom_saveloc_nav_goto)** | `/saveloc 1` when saveloc 1 exists will teleport you to the specified save.`/saveloc 1` when saveloc 1 does not exist will not teleport you, and instead give an error in chat.                                                                               | -->

Do you have any more commands you'd like to see in the game? Try suggesting them in [our Game repository's issues section](https://github.com/momentum-mod/game/issues/new/choose)!
