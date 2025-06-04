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
in the _#map-porting_ channel of [our Discord](https://discord.gg/momentummod), ask there if you have any questions.

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

# Source Map Basics

Momentum map porting primarily about manipulating **BSP** file, the format for _compiled_ Source engine map. In rare
cases it may be required to decompile a map to a **VMF** file to edit in Hammer (Source's map editor), but since
recompiling causes lighting recalculations and other small changes, we stick to modifying existing BSPs whenever
possible.

As a format BSPs are notoriously complex (see the [VDC page](<https://developer.valvesoftware.com/wiki/BSP_(Source)>)),
consisting of numerous _lumps_ all with different data structures. Fortunately for us, porting we generally just care
about a few:

## The Entity Lump

[Entities](https://developer.valvesoftware.com/wiki/Entity) are responsible for the interactive parts of a map, such as
teleporters, spawn points, and triggers.

They can be either **point** entities, which have a single position in the map, or **brush** entities, which are defined
by a brush shape in the map. We can modify any properties in an entity, _besides_ the position of a brush entity, such
as a trigger.

Entities are simple _key-value pairs_, where the key is the name of the property and the value is its value.

Here's an example `info_player_counterterrorist` entity in Lumper, taken from a CS:S map:

![Lumper Example](/images/map_porting/lumper_info_ct.png)

- `classname` designates the entity as a `info_player_counterterrorist`; all it takes to change the type of an entity is
  to change that value.
- `origin` is the position of the entity in the map, changing in Lumper/Hammer and saving/recompiling will change the
  position of the entity, so where you spawn.
- `angles` is the rotation of the entity when you spawn.

Generally, we're not overly fussy with spawn points in maps -- if you have an `info_player_start` entity we use that,
otherwise if multiple `info_player_terrorist/counterterrorist` entities we always use the first one in the entity lump.

This isn't a required modification, but porters are welcome to clean up the additional spawn points -- usually if you
have multiple spawns, they're place in a grid and none are quite centered. To do this, all you'd need to do is

- delete all but one `info_player_terrorist/counterterrorist` entities
- change its classname to `info_player_start` (though not really necessary)
- find the center of the room in-game, and set it's `origin` to that coordinate.

## The Pakfile Lump

The [Pakfile](<https://developer.valvesoftware.com/wiki/BSP_(Source)#Pakfile>) lump contains all the map's assets, such
as textures, sounds, and models. It's essentially a ZIP file stored inside the map. When the map is loaded, the game
mounts those assets alongside the currently loaded assets from Momentum and other mounted games (e.g. CS:SS, TF2, etc.).

The pakfile is also used to store cubemaps, which are used for environment reflections and lighting in the map,
generated by the `buildcubemaps` command in-game.

# The Toolkit

## Lumper

The primary tool for porting maps is [Lumper](https://github.com/momentum-mod/lumper), a tool made by us specifically
for modifying BSP files. It functions as a successor to tools like [VIDE](https://developer.valvesoftware.com/wiki/VIDE)
and [Entspy](https://developer.valvesoftware.com/wiki/Entspy), but supports Strata Source BSPs and contains features
specifically aimed at map porting and reviewing. It includes:

- **Entity Editor** - Create and modify entities in the map
- **Pakfile Explorer** - View and edit the pakfile as a file tree. Can be used to remove or pack assets, as well as
  automatically refactor references to assets in other lumps.
- **Texture Browser** - View all textures map, similar to Hammer, great for moderation.
- **Jobs** - Automated tasks that can be run on the BSP, such as
  - Remove official Valve assets
  - Apply [Stripper](https://www.bailopan.net/stripper/) configs
  - Batch replace textures
- **Entity Review** - Points out invalid or dangerous entities in the map
- **Compressed BSP saving** - Saves the BSP in a compressed format, which is required for map submissions
- **Map Summary** - Reviews content the BSP according to map submission requirements

![Lumper Example](/images/map_porting/lumper_example.png)

To use Lumper, download the latest release from the
[Lumper releases page](https://github.com/momentum-mod/lumper/releases) (it contains an auto-updater!). Lumper is a
standalone application, so you can run it without installing anything. Just extract the ZIP file and run from anywhere.

{{< hint info >}} For Windows users, you can run the `RegisterLumperURLProtocol.ps1` with PowerShell to register the
`lumper://` URL protocol. This allows you to open BSP files directly from dashboard map pages, useful for reviewing.
{{< /hint >}}

You can use Lumper to open any BSP, modify accordingly, and save it.

Please note that Lumper does _not_ currently contain an undo/redo buffer, so be careful when making changes, and save
regularly -- Lumper will create backups file in the same directory by default.

### Game Sync

When editing entities, it can be difficult to determine find specific entities in the Entity Editor. You can use
`getpos` and `setpos` in-game alongside Entity Editor filters and entity `origin` properties to find entities, but we
also have a system called **Game Sync** which drastically improves this workflow.

To enable game sync, launch the game on the current map loaded in Lumper, set `sv_cheats 1` then
`mom_lumper_sync_enable 1`. Then, press the "Connect to Game Sync" button in the top-right corner of Lumper. You should
be able to:

- Sync your current in-game position with the "Spherical Radius" filter
- Sync the entity you're currently looking at with the keyvalue filters
- Teleport to entities by pressing the arrow icon on the Entity Editor list
- Automatically export In-Game Entity Tool Stripper configs into Lumper

### Map Summary

Lumper's "Map Summary" info box (_Tools > Map Summary_) is a quick way to summarize the current state of the map as you
port. Map Reviewers will always use this tool to check the map before approving it, so it's a good idea to check it
yourself as you go.

![Lumper Map Summaries](/images/map_porting/lumper_map_summary.png)

## In-Game Entity Tools

Some entities must be modified to be compatible with Momentum Mod's version of Source engine or replaced with a more
consistent/less exploitable version of the entity.

Entities can be modified in-game with the `devui_show entitytools` command. This command will open an interface with
various tools for quickly modifying and fixing map entities, and can modify those entities in-game in real-time,
allowing you to test the changes without reloading the map.

![Lumper Map Summaries](/images/map_porting/entitytools_example.png)

{{< hint info >}} Entity Tools uses ImGui which can have very small fonts on large monitors. You can use
`devui_font_scale` to change the font size, `2` is a good value. {{< /hint >}}

### Exporting to Lumper

Entity Tools changes in-game entity in real-time, but to permanently apply to a BSP, it generates a
[Stripper](https://www.bailopan.net/stripper/) config file that can be used to use in [Lumper](#lumper).

To export changes made in the Entity Tools by clicking the "Export To File" button. The entity changes are then written
into a \<mapname\>.cfg file in your `maps/entitytools_stripper` folder. To open in Lumper, go to the **Jobs** page,
create a _Stripper (File)_ job, and load it from disk.

Or, if you have Game Sync enabled, you can just click the "Export to Lumper" button in the Entity Tools, which will
immediately create a _Stripper (Text)_ job.

Once a job is created, you can run it by clicking the "Run" button. This will apply the changes to the BSP file in
Lumper. You can see the applied changes in the logs panel, as well as in the modified entities (marked by \*) in the
Entity Editor.

![Example Entity Tools Export](/images/map_porting/lumper_entitytools_export.png)

## Hammer

Entities can also be modified in Hammer without having to recompile the entire BSP. This is done by decompiling the map,
making the entity changes, and then compiling with the "Only entities" option checked. The BSP file has to be in the
same directory as the vmf for this to work.

![Only Entities](/images/map_porting/only_entities.png)

# Required Modifications

## Entity Review

Lumper's entity review tool that will point out entities that are not supported by Momentum, or should always be
replaced with a different entity.

If an entity is marked as **Invalid** or **Warning** it'll generally have comments explaining issues and what to replace
it with. Invalid entities **must** be replaced or removed, while warnings are just suggestions -- but don't ignore them!

Pressing the "Edit" button on the right side of an entity in the Entity Review page takes you to the Entity Editor, and
filters by just that entity. If you're not sure of the entity's purpose, teleporting in-game using
[Game Sync](#game-sync) is helpful. You can also press the **VDC Reference** button on a page for that entity to see its
docs on the Valve wiki. And if in doubt please, ask in the _#map-porting_ channel on Discord!

## In-game Entity Modifications

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

## Textures

Maps will occasionally contain textures we don't want to include:

- Pornography, racist memes, edgy stuff
  - We're not overly strict about this -- relatively few maps we're aware of that have this issue, mainly old combat
    surf maps with "porn rooms".
  - If something seems questionable and you're not sure, just ask in Discord.
- Obviously copyrighted assets from other games / other IP
  - See [map submission guidelines](/guide/map_submission/map_submission/#other-copyright-assets)
  - This is often hard to tell and case-by-case, just look out for anything _extremely_ glaring.
  - Again, ask in Discord if in doubt.

Lumper's **Texture Browser** is a fast way to quickly review all textures in the map, and can replace any bad textures
with a placeholder.

![Lumper Texture Browser](/images/map_porting/lumper_texture_browser.png)

The easiest way to replace a texture is to modify any VMTs files that refer to the VTF file in question.

- Find any instances of VMTs files that refer to that VTF file in the Pakfile Explorer
  - Currently we don't have automation for this, but it's usually relatively obvious
- Replace the `$basetexture` value (maybe also `$bumpmap` and others) with some other texture on the map that won't look
  out-of-place
- Remove original the VTF file via Texture Browser / Pakfile Explorer

{{< hint info >}} Source engine textures are stored in **VTF** files, which are the actual image files, and **VMT**
files, which are the material definitions for those textures.

VMTs are text files that define how the texture is used in the game, such as its shader type, properties, and other
settings. VMTs are _usually_ stored in the same directory as the VTF files, and have the same name as the VTF file, but
with a `.vmt` extension.

Note that multiple VMT files can refer to the same VTF file, so you may need to check multiple VMTs if the texture is
used in multiple places. {{< /hint >}}

## Packed Game Assets

The pakfile lump commonly contains licensed assets from Valve assets, which we
[cannot include](/guide/map_submission/map_submission/#source-assets).

Lumper contains a hash-based manifest file of all these assets, so removing them is very straightforward, just run the
**Remove Game Assets** job.

![Remove Game Assets](/images/map_porting/lumper_remove_assets.png)

## Sounds

Sounds should be moved into specific folders in order to use the appropriate volume sliders:

| Channel  | Folder   |
| -------- | -------- |
| Ambient  | ambient/ |
| Music    | music/   |
| Movement | player/  |
| Weapons  | weapon/  |
| UI       | ui/      |

Lumper makes this process easy, by automatically detecting entities and soundscapes that use these sounds (in fact it
works for all assets!) and updating their paths. Simply drag-drop the sounds you want to move into the appropriate
folder/subfolder, then press "Yes" to the dialog that appears.

_Note, path refactoring is very technically complex and has had issues in the past, worth testing in game_

# Common Issues Porting Older Maps

When porting maps from older Source engine versions, there are a few issues that might come up due to incompatibilities
with Strata Source.

## HDR Skyboxes

Skyboxes will sometimes fail to load in maps compiled with HDR. This is because the "sky" shader defaults to HDR, but
will fail to load if the textures are not HDR. This issue can be fixed by setting the shader to "Sky_SDR".

![HDR Skybox](/images/map_porting/hdr_skybox.png)

![VTF Edit Sky SDR](/images/map_porting/vtfedit_sky_sdr.png)

## Corrupt HDR Cubemaps

Some maps like surf_cannonball have corrupted HDR cubemaps. The cause of this issue is unknown and there are no known
ways to fix this without decompiling and recompiling the map.

![Corrupt Cubemaps](/images/map_porting/corrupt_cubemaps.png)

## Dark Refraction Textures

Refraction textures in most maps do not render correctly. The cause of this issue is unknown and the only way to fix it
currently is to recompile.

![Corrupt Cubemaps](/images/map_porting/refraction_dark.png)

![Corrupt Cubemaps](/images/map_porting/refaction_fixed.png)

## Invalid VMT Files

Strata Source has stricter VMT parsing rules and will not load VMTs with syntax errors. These invalid VMT files must be
manually fixed in Lumper or VTFEdit in order for the textures to load in game.

![Invalid VMT](/images/map_porting/invalid_vmt.png)

![Invalid VMT Lumper](/images/map_porting/invalid_vmt_lumper.png)
