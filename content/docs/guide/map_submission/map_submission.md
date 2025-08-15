---
title: Map Submission
categories:
  - guide
tags:
  - mapping
  - guidelines
weight: 1
---

# Introduction

Momentum’s map submission system is how maps are officially added to Momentum Mod. Once approved, we host all map files and leaderboards, maps show up on the in-game map selector and website, and players are granted XP for playing them (and rank points, in the case of Ranked leaderboards).

Map submission is open to everyone, but we have higher standard than e.g. GameBanana or Steam Workshop. Notably:

- Submissions go through a minimum-week-long public testing period where other players can give feedback
- Submissions must be approved by an approved "Map Reviewer"
- Once a submission is approved, **the submitter can’t modify or delete the map**!

The ultimate goal of this system is to avoid the need for leaderboard wipes, ensuring we catch many bugs as prior to approval as possible.

Map Submissions are either **ports** or **originals**, where a port is a map that’s previously been released in any other game.

If you have any questions about map submission, porting, etc... please ask in the #map-porting channel in our Discord!

# General Rules

- No porn rooms.
- No racism, homophobia etc...
  - Submission is human-moderated and we’re not idiots, don’t submit obvious bait.
- Spooky/horror vibes are fine but try to keep gore to minimum.
- Sponsors are generally fine (e.g. surf_summer, sponsored by Fnatic), but absolutely no gambling sites (CS skins etc.)

## Naming

### Prefixes

Due to number of modes in Momentum with different approaches to map naming, plus the fact some maps are playable in multiple modes, we don't enforce strict gamemode prefixes, or rely on prefixes much in UI or code. In modes like Surf and Bhop, the vast majority of maps use `surf_`/`bhop_` as a prefix, whilst in Climb prefixes are historically all-over-the-place, and Defrag doesn't use prefixes at all. Trying to consolidate everything into a consistent scheme results in endless complications and may make those map names less recognizable to those familiar with them from other games.

- For ports, maps should keep the same prefix/lack of prefix as their original game.
  - The only exception is Rocket Jump and Sticky Jump, which should use `rj_` or `sj_` instead of `jump_`, unless the map is genuinely designed for both gamemodes equally (having an offclass route doesn't matter).
- For new maps, follow the convention for that gamemode, e.g. Surf should be `surf_` since the _vast_ majority of existing surf maps in those modes use that prefix, whilst Defrag doesn't have a prefix.
  - For genuine hybrid-gamemode maps we're relatively open to anything, feel free to ask if unsure. Conventions may develop in the future, we'll see.

### Suffixes

Some versions of maps have sufffixes like `_fix`, `_njv`; we remove those, since porting should always be taking into account fixes/removing jails anyway.

Filename overlaps with other versions of maps from other games is inevitable, most Momentum ports require modifying the BSP in some way and we're not going to put `_mom` on everything! Maps can be updated during and after submission without changing names; the game handles versioning using file hashes, not file names.

## Source Assets

**Assets from other Valve games may not be packed into maps.** It’s common with ports for other games to pack assets e.g. CS:S assets when porting to CS:GO, since it’s very unlikely Valve would ever crack down on servers hosting those maps, but we're not willing to take that risk with Momentum.

If a map includes assets from a game other than HL2 (which is bundled with Momentum), and the player does not have that game mounted:

- Textures will be missing, by default replaced by flat colors approximating the average color of that texture. This should be playable, but visuals will be significantly degraded.
- Models will fall back to a flat textured collision mesh based on the original model, which will be distributed with the game by 1.0.0. Again, playable, but with degraded visuals.
- Sounds will not play.

We appreciate how annoying this is, especially for CS:S which costs money on Steam. If we had a way around this we would take it, but unless someone wants to remake all these assets (in a legally non-dubious way) there’s little more we can do.

During submission you can specify what games your map uses assets from, which will be shown in game UI and used to warn users missing those assets.

Of particular important are assets from less-common Source games (e.g. Portal 1/2), or CS:GO. In CS:GO's case, the assets require opting-in to a special CS2 branch on Steam, which most users won’t have done. Likewise for less common games, the vast majority of players won’t have those assets installed. We strongly recommend you don’t use those assets when making new maps, and it’s not our fault if players complain about missing textures.

The _one_ case where we may allow packing official assets is from Source games we don't mount at all. For example, surf_mesa uses a stalactite prop from HL2: Episode 2, and visuals are significantly degraded without it. In that instance, we'll allow packing the single prop, but this is case-by-case and only acceptable for non-"Hero" assets, i.e. relatively generic, not a major part of that game's aesthetics.

## Other Copyright Assets

TODO: Need to draft this with team, complicated

# Quality Guidelines

Map leaderboards can be either ranked or unranked, where unranked maps don’t give ranked points in that gamemode. Whether it's ranked or not depends purely on gameplay quality, not visuals. Submitting lower-quality maps is okay, and we'll accept maps that are unranked in every gamemode they're playable in, so long as they're reasonably playable and some effort has been put in. Though this doesn't mean we want 100 identical bhop strafe spam maps!

Maps should be made with at least one Momentum gamemode in mind, so no deathrun, trade maps or whatever. A notable exception are HL2 maps given they play well in various modes especially Ahop.

Try to avoid overly dark maps. If you’re mapping on a higher than default brightness setting, it’s your fault if people find your map too dark. The `mom_screenshot_official` command forces your game to default brightness!

# Preparing a map for submission

To submit a map you'll need

- A compiled map file (_.bsp_)
  - If you're submitting an original map, please read over the guidelines on this page.
  - If you're submitting a port, make sure to follow our [Porting Guidelines](./map_porting.md) for how to port a map correctly.
- A zone file (_.json_)
  - See the [Zoning Guide](./map_zoning.md) for how to zone a map
  - If you're submitting a WIP map to private testing, you at least need a minimal zone file with a main track start and end zone.
- Up to 5 screenshots of the map (see [Screenshots](#screenshots))
- Suggestions for tiers of each leaderboard and whether they'll be ranked or not (see [Leaderboards](#leaderboards))
- Credits (see [Credits](#credits))
- A short description of the map
  - For ports, we usually use GameBanana description or similar if exists, though worth removing things related to stuff removed during porting like jails in Surf, or recommended server settings.
- The original release date of the map
  - For ports, try to find original date on GameBanana or similar. At worst, ask around and set to Jan 1st of the year you think it was released.

## Leaderboards

Map leaderboards exist relative to a given gamemode (e.g. Surf) and track type + track num (e.g. Main track, Bonus 2, etc...). In the future this will also include styles (e.g. Half-Sideways).

The primary types of leaderboards are:

- **Ranked** - Has a leaderboard, and runs contribute to Rank Points
  - Shown in the "Ranked" tab in the Map Selector
- **Unranked** - Has a leaderboard, but runs don’t give Rank points
  - Shown in the "Unranked" tab in the Map Selector
  - If an Unranked leaderboard gets popular, we can consider moving it to Ranked.

You suggest Ranked/Unranked status, tiers and tags during initial submission of the map, in whatever gamemodes you think are appropriate, and can edit them up until the map is approved.

![Leaderboard Suggestions](/images/map_submission/leaderboard_suggestions.png)

The final state is set upon leaving Final Approval by an admin/moderator. Submitter suggestions are very significant influence on tiers and final leaderboard types, though in some cases we may choose not to rank a mode that was requested by the submitter, or to provide leaderboards for a mode that wasn’t requested, if testers thought it played well.

Just because a map isn’t marked as Ranked doesn’t make it a bad map; just we want to maintain a high standard. We hope this provides a way for some lesser quality beginner maps or legacy maps to be supported, without requiring players compete on them for points.

There's also the following, rarer types of leaderboards:

- **Hidden** - Has a leaderboard, but
  - Doesn't show up in the Map Selector
  - Doesn't have a tier
  - Players need to launch the map specifically in the leaderboard's gamemode to see it
  - Generated when no Ranked/Unranked leaderboard was set during Final Approval, but we don't automatically rule it out as Disabled.
  - If a hidden leaderboard gets popular, we can consider moving it to Unranked
- **Disabled** - Has no leaderboard
  - This is decided programmatically, and rules out certain combinations we don't want to allow.
  - For example we don't allow Bhop on a Surf map, since that'd just be Surf with lower tickrate/airaccel (_100tick Surf_ might _be a thing in the future, but we're wary of potential leaderboards splitting. In the meantime, we don't want people using Bhop instead!_).
- **In Submission** - At any point during map submission, we generate leaderboards for _every_ gamemode we don't rule out in the way we rule out Disabled leaderboards. Only gamemodes with leaderboards suggested by the submitter are visible in the Beta tab in the Map Selector.

## Credits

Credits are split into 4 categories:

- **Authors**
  - For collabs this can be multiple people
  - Doesn't usually include artists, but can be if they were essential to overall vision of the map and they made lots of original stuff
  - Shouldn't include bonus makers!
- **Contributors**
  - Bonus makers (good to include specific bonus numbers in the description)
  - Texture artists / modelers / assets
- **Testers**
  - Anyone that did significant testing during the map's development
  - You don't have to manually include everyone that left reviews during public testing
- **Special Thanks**
  - Miscellaneous, can be friends or whatever

Credits are either genuine Momentum players, or "placeholders". Placeholders are Momentum accounts don't have a real Steam account associated with them -- generally people who've never created a Momentum account (by launching the game on Steam, or signing in to our [dashboard](https://dashboard.momentum-mod.org) for the first time). If you know that someone _doesn't_ have a Momentum account, it's still worth searching for their username since there may be an existing account for them already. If that person signs up for Momentum in the future, they should contact a moderator and any placeholder accounts referring them can be merged into their real account.

Map porters should, by default, not add themselves to credits. For any map with type "Port" (as opposed to "Original"), the porter is the submitter of the map, which we track separately. We try to limit credits to people involved when the map was first created, but we'll have profile stats and badges in the future for tracking credits and porters! The one exception is when a map was significantly changed or restyled during porting.

## Screenshots

To take screenshots for your map, use the `mom_screenshot_official` command. Map screenshots feature heavily in our website and game UI so are standardized to a fixed resolution and aspect ratio.

This command will

- Take a PNG screenshot at 2560x1440 resolution (this works even if your monitor is a lower resolution!)
- Hide game UI and zones
- Set `mat_brightness` to 1
- Enable `png_supersample` which provides high quality anti-aliasing
- Clear any decals in the map

All graphic settings are restored to their previous values after the screenshot is taken.

You should aim for 5 screenshots, of stuff that represents the map well. If in doubt, have a look at screenshots of existing maps for examples.

# The Submission Pipeline

Maps go through several stages before being they can be approved:

## Private Testing

This is an opt-in stage for mappers that want to use our system to share a map with specific people. Maps will show up in the "Beta" map selector tab for you and anyone you invite.

It's completely optional - obviously you can share maps manually without using Momentum stuff. Our site hopefully just makes sharing updates easier, plus leaderboards and replays work the same as the rest of Momentum.

Zones are required due to how our backend works. At minimum you'll need to create a start and end zone to first submit the map, but these can be improved at any point later on. Maps can be in Private Testing for as long as you want, so long as the map is being actively worked on.

Once you're ready for public testing, go to the Map Edit page, and change the status to Content Approval.

## Content Approval

Maps need basic approval from a mod or reviewer before being publicly visible. As soon you change a map to Content Approval we get notified internally and will review ASAP. Once approval, the map automatically enters Public Testing.

## Public Testing

Maps spend a minimum of 1 week in public testing, where any player can play the map in-game via the "Beta" tab in the map selector, and leave reviews via the map page on the dashboard.

Some reviews are subjective and won't require fixing. For technical issues however official reviewers may mark a review "Requires Resolving", especially for flagging porting issues.

## Final Approval

Once a week of Public Testing has elapsed and all "Requires Resolving" reviews are resolved, you can transfer to Final Approval via the Map Edit page.

During Final Approval a mod/admin sets which leaderboards are Ranked/Unranked/Disabled and what their tiers are. This will usually be in line with what you suggest, but could change if others disagree (TODO: Should have more docs on tiering in the future!).

Once this is done the map is fully Approved and appears in the Ranked/Unranked tabs of the map selector depending on leaderboards for the player's current gamemode.

{{< hint danger >}}

Once a map is Approved you no longer have the ability to submit new versions or modify the map in any way, including leaderboards. Please make sure you're completely happy with stuff before you enter Final Approval!

{{< /hint >}}

# Map Guidelines

## Compression

BSP files can be compressed using either [BSPZIP](https://developer.valvesoftware.com/wiki/BSPZIP) or [Lumper](/guide/map_submission/map_porting/#lumper). This reduces file size on player's disks and significantly reduces hosting costs, so compression is _mandatory_.

To compress a BSP with Lumper, simply open it, check the _File > Save Compressed_ box and save again.

![Lumper Compression Option](/images/map_submission/lumper_compression.png)

## Entities

### Moving Brushes

- Moving/rotating brushes should have cycles that are slow enough to be consistent. Otherwise they should be frozen, slowed down, or deleted.
- **Note:** When save states are implemented, they will reset entities after starting a stage segment which will make it easier to hit cycles more consistently.

## Sounds/Music

Getting map sounds to be affected by the correct volume sliders has historically been very difficult; fortunately Momentum's sound mixer system makes this much easier.

In your sounds folder, put all sounds (where relevant) in the following subfolders (make sure to update entities/soundscapes paths). Momentum will then load those sounds in those mix groups and appropriate volume sliders should apply.

This might mess with existing pakfile organization, but it's a hard requirement: un-mutable music is notoriously annoying, all map sounds must use the correct mix groups.

| Channel  | Folder   |
| -------- | -------- |
| Ambient  | ambient/ |
| Music    | music/   |
| Movement | player/  |
| Weapons  | weapon/  |
| UI       | ui/      |

## Miscellaneous

- Make sure the map isn't located far from the origin for no reason (should be reasonably centered in Hammer). This will minimize any potential for floating point errors, especially for new maps made with Strata's expanded coordinate limits.
- Make sure the map has physics collisions and that the collisions do not have VPhysics shrinkage
  - **Not Yet Implemented:** Compiling without shrinkage will be a VBSP command line flag which our standard compile settings will include, and then Lumper can check a new flag in the physics lump to make sure this was used. Maps not compiled with Strata's VBSP will need to be re-run through our VBSP with a similar NYI flag (BSP input and BSP output).
