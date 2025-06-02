---
title: Map Porting
categories:
  - guide
tags:
  - mapping
  - tools
weight: 2
---

# Introduction

This guide gives an overview of all the steps required to officially port a map into Momentum Mod.

Porting is open to everyone, but the number one rule for porters is to **not** significantly change an existing map. We
appreciate porting work but map ultimately belongs to the author, and porters should not make significant visual or
gameplay changes on maps without the author's permission (including Easter eggs, sorry!).

Please try not to rush through ports, and take time to read these docs. We're happy to help with any porting questions
in the #map-porting channel of [our Discord](https://discord.gg/momentummod), ask there if you have any questions.

## Reserving Maps / Getting Permission for Ports

Our stance on whether to port an existing maps is **opt-out**, i.e. we assume it's okay to port a map unless a mapper
explicitly tells us they don't want it ported. Momentum gamemodes are simply too old with too many inactive mappers for
us to get permission in every case, so we've put a great deal of effort into getting porting as unobtrusive as possible.
In the majority of cases, porting to Momentum involves far fewer changes than other games (CS:S → CS:GO, CS:S → TF2
etc...). That being said,

- Mappers can reserve porting their own map or opt out of having their map ported via
  [this form](https://docs.google.com/forms/d/e/1FAIpQLSeheNDY5A960u6GtXCHtt3s_2vZJL3o5tMJ_ZNbYOpb6cx5nQ/viewform).
  - Submissions to that form can be found on
    [this spreadsheet](https://docs.google.com/spreadsheets/d/1KHeWfhGUNpN267CXtPvVdf2h7eQbjPUhWVkE5NimYhg/edit?gid=2051215588#gid=2051215588).
    **Always** check that sheet first before starting a port. If you submit the map and it's been reserved / opted-out
    of porting, we'll reject the submission.
  - If someone has requested it to not be ported, do _not_ spam them requesting to port it.
- Try to verify whether a map has been released on a public forum (e.g. GameBanana, jump.tf forums) before porting.
  - Don't port a map if it seems like it's been released for a single server, unless you can get explicit permission.
- If in doubt, try your best to contact the original mapper.

For mappers porting their own map, restrictions on visual/gameplay changes generally don't apply and you're welcome to
recompile for Momentum -- it's your map.

1. Zone the map in-game or in Hammer
2. Make the required entity modifications using in-game entity tools and/or Hammer
3. Use [Lumper](https://github.com/momentum-mod/lumper/releases) to apply entity modifications to the BSP and remove
   Valve assets
4. Ensure the map is following our [Submission Guidelines](/guide/mapping/submission_guidelines/)
5. Upload the BSP and zone .json file to the [Momentum Mod website](https://momentum-mod.org/maps/submissions)

# Required Entity Modifications

Some entities must be modified to be compatible with Momentum Mod's version of Source engine or replaced with a more
consistent/less exploitable version of the entity. Entities can be modified in-game with the `devui_show entitytools`
command. This command will open an interface with various tools for quickly modifying and fixing map entities and
exporting the changes to a Stripper config.

### Boost Ramps

`trigger_push` entities that push the player into a ramp are very inconsistent and give different speeds depending on
how you jump into it. Replace these with `trigger_setspeed` for a more consistent and less exploitable boost. You will
have to tweak the values to make the boost similar in speed and trajectory to the original `trigger_push`. Enable the
"Strict Mode" option to prevent the trigger from activating at all when the player jumps into it.

![Ramp Boost](/images/map_porting/setspeed.png)

### Fixing Crouchboosts

The player can sometimes activate a boost multiple times while falling into it with the "crouch boost" exploit. This
exploit can be fixed by making push triggers more restrictive. There are various scenarios that require different
approaches to fix crouch boosting:

1. **Surf Ramp Boosts** - These boosts can be fixed by adding a cooldown so that the player has to wait before
   re-activating the trigger. This cooldown will add the following outputs to delay the trigger's re-activation:
   `OnEndTouch !self,Disable,,0` `OnEndTouch !self,Enable,,1`. Eventually when save states are implemented, you will be
   able to make these triggers activate only once until the player fails or restarts the stage by using the "Only Once"
   spawn flag.

![Surf Ramp Boost](/images/map_porting/surf_ramp_boost.png)

2. **Floor Boosts** - In some cases, you can fix crouch boosting by making it so the boost only activates while the
   player is touching the ground. One option to fix this is to change the trigger into a `trigger_multiple` that boosts
   the player with `OnJump !activator,AddOutput,basevelocity # # #` output. Alternatively if you want to allow the
   player to get pushed continually, you can leave it as a `trigger_push`, but use a `filter_momentum_surface_collision`
   filter with the "Touching standable surfaces" option so the boost only applies on the ground. You should only use
   this option if the floor is completely flat, otherwise the boost will re-apply every time the player touches another
   surface. If you have the original vmf and can compile the map, changing the surface below the trigger_teleport into a
   func_conveyor is also an option.

![Floor Boost](/images/map_porting/floor_boost.png)

### Jump Boosts

Boosts that launch the player upwards with `OnEndTouch !activator,Addoutput,basevelocity # # #` should be updated to use
the more consistent `OnJump` output. Sometimes mappers will also make jump pads that reduce the player's gravity. In
these cases, it is recommended to replace these with a `trigger_setspeed` or `trigger_multiple` with an
`OnJump !activator,Addoutput,basevelocity # # #` output.

**Note:** When using entity tools to add an `OnJump` output, the push direction will be incorrect if the `trigger_push`
has an `angles` key value. This can be fixed by removing the `angles` key value with Lumper.

![OnJump Boost](/images/map_porting/onjump_boost.png)

### Landmark Teleports

Landmark teleports on maps made for Source engine versions before CS:GO are no longer working correctly and need to be
updated. The `UseLandmarkAngles` keyvalue needs to be set to 0 and the angles of the landmark entity need to match the
destination entity. The in-game entity tools make this easy by listing all available landmark teleport triggers and
giving you some options for fixing these triggers. In most cases, all teleports can be fixed by clicking the "Fix All
Destination Angles" button. If you need to fix angles for a particular trigger, select it in the list and then click the
"Fix Destination Angles" button.

![Landmark Teleport](/images/map_porting/landmark_tele.png)

### Drop Teleports (Surf Only)

In surf maps, it is common for mappers to use "cages" to reset the player's velocity after they fail or transition
between stages. Players can sometimes exploit these cages with +left binds that allow them to spin in the small area to
gain additional speed at the start of a stage.

![Drop Teleport](/images/map_porting/drop_tele.png)

Momentum Mod introduces the "Keep Negative Z Velocity Only" velocity mode option for `trigger_teleport` that prevents
the player from air strafing while dropping from a stage teleport. All maps that use teleport cages must now use this
new velocity mode to prevent exploits. This can be done with the in-game entity modification tools:
`devui_show entitytools`. Open the "Teleport Velocity Mode" dropdown, select the destination that you want to change to
a drop teleport, and then select the "Keep Negative Z" radio button.

![Velocity Mode Tools](/images/map_porting/velocity_mode.png)

### Jail Timers/Teleports (Surf Only)

Old surf maps sometimes use a `logic_timer` to teleport all players to a jail after a few minutes. These timer entities
and the associated teleport triggers should be removed using Lumper:

![Lumper Timer](/images/map_porting/lumper_timer.png)

![Lumper Teleports](/images/map_porting/lumper_teleports.png)

## Exporting Entity Modifications

Changes with the entity tool can be exported by clicking the "Export All Changes" button. The entity changes are then
written into a \<mapname\>.cfg file in your `maps/entitytools_stripper` folder. These changes can then be applied to the
BSP file using our tool [Lumper](https://github.com/momentum-mod/lumper/releases). Open Lumper and load your BSP file by
going to File -> Open. Then go to the Jobs tab and click on the + icon to add a Stripper job. Load the config file that
was generated from the entity tools and click the run button to apply the Stripper config to the BSP. You can then save
the BSP by going to File -> Save. You can check the "Save Compressed" checkbox if you plan on submitting this version of
the map to the official website.

![Lumper Stripper](/images/map_porting/lumper_stripper.png)

## Other Tools for Entity Modifications

### Hammer

Entities can also be modified in Hammer without having to recompile the entire BSP. This is done by decompiling the map,
making the entity changes, and then compiling with the "Only entities" option checked. The BSP file has to be in the
same directory as the vmf for this to work.

![Only Entities](/images/map_porting/only_entities.png)

### Lumper

[Lumper](https://github.com/momentum-mod/lumper/releases) also has an entity editor that can be used to easily modify
the key/values of entities.

![Lumper Entity Editor](/images/map_porting/lumper_entities.png)

# Map Submission

### Lumper Cleanup

There are a few more things to do before a map can be officially added to the game. Valve assets cannot be uploaded to
the website and must be removed from the BSP's pack file. Fortunately,
[Lumper](https://github.com/momentum-mod/lumper/releases) makes this process very simple and automated. You just need to
run a job to remove the game assets:

![Remove Game Assets](/images/map_porting/lumper_remove_assets.png)

Lumper also lets you review entities for anything that might be worth changing or removing from the map:

![Lumper Entity Review](/images/map_porting/lumper_entity_review.png)

Sounds should be moved into specific folders in order to be compatible with the different volume sliders:

| Channel           | Folder   |
| ----------------- | -------- |
| Ambient           | ambient/ |
| Music             | music/   |
| Movement          | player/  |
| Weapons           | weapon/  |
| UI                | ui/      |

![Lumper Sounds](/images/map_porting/lumper_sounds.png)

### Website Map Submission

Maps submitted to the official website will only be approved if they follow our
[Submission Guidelines](/guide/mapping/submission_guidelines/).

1. Go to the [Momentum Mod Submission Page](https://momentum-mod.org/maps/submissions) and click the "Submit a Map"
   button to begin the submission.

2. Upload the BSP and zone .json file. Uploading the VMF is also recommended since it helps speed up the review process
   in some cases.

3. Fill out the rest of the required details. Use the `mom_screenshot_official` command to take screenshots with the
   official settings for map submissions.

![Website Map Submission](/images/map_porting/website_submission.png)

# Common Issues with Older Maps

When porting maps from older Source engine versions, there are a few issues that might come up due to incompatibilities
with Strata Source.

### HDR Skyboxes

Skyboxes will sometimes fail to load in maps compiled with HDR. This is because the "sky" shader defaults to HDR, but
will fail to load if the textures are not HDR. This issue can be fixed by setting the shader to "Sky_SDR".

![HDR Skybox](/images/map_porting/hdr_skybox.png)

![VTF Edit Sky SDR](/images/map_porting/vtfedit_sky_sdr.png)

### Corrupt HDR Cubemaps

Some maps like surf_cannonball have corrupted HDR cubemaps. The cause of this issue is unknown and there are no known
ways to fix this without decompiling and recompiling the map.

![Corrupt Cubemaps](/images/map_porting/corrupt_cubemaps.png)

### Dark Refraction Textures

Refraction textures in most maps do not render correctly. The cause of this issue is unknown and the only way to fix it
currently is to recompile.

![Corrupt Cubemaps](/images/map_porting/refraction_dark.png)

![Corrupt Cubemaps](/images/map_porting/refaction_fixed.png)

### Invalid VMT Files

Strata Source has stricter VMT parsing rules and will not load VMTs with syntax errors. These invalid VMT files must be
manually fixed in Lumper or VTFEdit in order for the textures to load in game.

![Invalid VMT](/images/map_porting/invalid_vmt.png)

![Invalid VMT Lumper](/images/map_porting/invalid_vmt_lumper.png)

# Other Useful Porting Tools

- [Hammer++](/guide/mapping/hammer_plus_plus_setup/) - Improved Hammer editor
- [CompilePal](https://github.com/ruarai/CompilePal/releases) - Improved expert compilation tools
