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

Momentum’s map submission system is how maps are officially added to Momentum Mod. Once approved, we host all map files and leaderboards, maps show up on the ingame map selector and website, and players are granted XP for playing them (and rank points, in the case of Ranked leaderboards).

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
- Sponsors are generally fine (e.g. surf_summer, sponsored by Fnatic), but absolutely none gambling sites (CS skins etc.)

## Source Assets

**Assets from other Valve games may not be packed into maps.** It’s common with ports for other games to pack assets e.g. CS:S assets when porting to CS:GO, since it’s very unlikely Valve would ever crack down on servers hosting those maps, but we're not willing to take that risk with Momentum.

If a map includes assets from a game other than HL2 (which is bundled with Momentum), and the player does not have that game mounted:

- Textures will be missing, by default replaced by flat colors approximating the average color of that texture. This should be playable, but visuals will be significantly degraded.
- Models will fall back to a flat textured collision mesh based on the original model, which will be distributed with the game by 1.0.0. Again, playable, but with degraded visuals.
- Sounds will not play.

We appreciate how annoying this is, especially for CS:S which costs money on Steam. If we had a way around this we would take it, but unless someone wants to remake all these assets (in a legally non-dubious way) there’s little more we can do.

During submission you can specify what games your map uses assets from, which will be shown in game UI and used to warn users missing those assets.

Of particular important are assets from less-common Source games (e.g. Portal 1/2), or CS:GO. In CS:GO's case, the assets require opting-in to a special CS2 branch on Steam, which most users won’t have done. Likewise for less common games, the vast majority of players won’t have those assets installed. We strongly recommend you don’t use those assets when making new maps, and it’s not our fault if players complain about missing textures.

## Other Copyright Assets

TODO: Need to draft this with team, complicated

# Quality Guidelines

Map leaderboards can be either ranked or unranked, where unranked maps don’t give ranked points in that gamemode. Whether it's ranked or not depends purely on gameplay quality, not visuals. Submitting lower-quality maps is okay, and we'll accept maps that are unranked in every gamemode they're playable in, so long as they're reasonably playable and some effort has been put in. Though this doesn't mean we want 100 identical bhop strafe spam maps!

Maps should be made with at least one Momentum gamemode in mind, so no deathrun, trade maps or whatever. A notable exception are HL2 maps given they play well in various modes especially Ahop.

Try to avoid overly dark maps. If you’re mapping on a higher than default brightness setting, it’s your fault if people find your map too dark. The mom_screenshot_official command forces your game to default brightness!

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
- Credits (see [Credits TODO!!!](#credits))
- A short description of the map
  - For ports, we usually use GameBanana description or similar if exists, though worth removing things related to stuff removed during porting like jails in Surf, or recommended server settings.
- The original release date of the map
  - For ports, try to find original date on GameBanana or similar. At worst, ask around and set to Jan 1st of the year you think it was released.

## TODO EVERYTHING ELSE

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
  - This is either for maps that are fundamentally impossible to beat in a certain mode, e.g. no Rocket Jump map can be beaten in Surf
  - Or for gamemodes that differ only in certain movement variables, e.g. a map with a Bhop leaderboard can never have a Surf leaderboard since that'd just be lower tickrate/airaccel bhop.
- **In Submission** - At any point during map submission, we generate leaderboards for _every_ gamemode we don't rule out in the way we rule out Disabled leaderboards. Only gamemodes with leaderboards suggested by the submitter are visible in the Beta tab in the Map Selector.

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

# Map Guidelines

## Entities

### Boosters

- Convert segment start boosters to trigger_setspeed (avoid jump/duck strats). Also use the "strict mode" option wherever possible.
- Repeatable trigger_push/trigger_multiple boost (crouch boost, quick circle back around, and/or quick exit + enter side of trigger):
  - Add a cooldown after exiting the boost if it is not on the ground:
    - `OnEndTouch !self,Disable,,0`
    - `OnEndTouch !self,Enable,,1`
  - Convert to trigger_multiple `OnJump` (or possibly `OnLand`) if the boost is on the ground
    - Alternatively, if the "constant push while on the ground" of trigger_push is desirable, it could become a trigger_push with surface collision filter. This is only recommended if the ground is completely flat. If there are multiple surfaces, then the boost will re-apply for every surface that you touch.
- "Launch pad" boosters that can be activated from the side on the way up (e.g. rising platforms with jump boosts)
  - Change `OnEndTouch` output to `OnJump`
- Consider changing gravity-based vertical boosters to basevelocity-based or trigger_setspeed if possible. Gravity boosters have an awkward acceleration profile which can be annoying, but sometimes removing the acceleration period by converting to basevel/setspeed doesn't work depending on the map.

### Teleports

> TODO: Shouldn't all this be in porting guide?

#### Fix Landmark Teleport Angles

- Our trigger_teleport logic uses CS:GO's landmark teleport logic, which is different from older games. It is backwards compatible with older games, but achieving compatibility may require simple adjustments to entity props.
- Landmark teleports originally made for older games may need to be changed to make the angles of the teleport destination and landmark entity match, and disable `UseLandmarkAngles` as well.

#### Drop Teleports (Surf Only)

- Set VelocityMode => "Keep Negative Z Velocity Only" on most trigger_teleport entities. Stage teleports (except "staged-linear" maps like omnific) should have this set even if they already have a teleport box.

### Moving Brushes

- Moving/rotating brushes should have cycles that are slow enough to be consistent. Otherwise they should be frozen, slowed down, or deleted.
- **Note:** When save states are implemented, they will reset entities after starting a stage segment which will make it easier to hit cycles more consistently.

## Sounds/Music

Getting map sounds to be affected by the correct volume sliders has historically been very difficult; fortunately Momentum's sound mixer system makes this much easier.

In your sounds folder, put all sounds (where relevant) in the following subfolders (make sure to update entities/soundscapes paths). Momentum will then load those sounds in those mix groups and appropriate volume sliders should apply.

Sorry if it messes with pakfile organization, but it's a hard requirement: un-mutable music is notoriously annoying and it's essential for all map sound to use the right mix groups.

| Channel  | Folder   |
| -------- | -------- |
| Ambient  | ambient/ |
| Music    | music/   |
| Movement | player/  |
| Weapons  | weapon/  |
| UI       | ui/      |

## Collectibles

> TODO: PORTING GUIDE!!

- Convert complicated collectible system triggers to [Momentum's collectible system entities](/guide/collectibles/) (far less complicated and facilitates future collectibles HUD work)

## Entity class/property restrictions

- Use [Lumper's](https://github.com/momentum-mod/lumper/releases) entity review tool to check for entities that should be removed or replaced.

## Miscellaneous

- (Surf Only) Remove jail timers and teleports from old maps.
- Make sure the map isn't located far from the origin for no reason (should be reasonably centered in Hammer). This will minimize any potential for floating point errors, especially for new maps made with Strata's expanded coordinate limits.
- Make sure the map has physics collisions and that the collisions do not have VPhysics shrinkage
  - **Not Yet Implemented:** Compiling without shrinkage will be a VBSP command line flag which our standard compile settings will include, and then Lumper can check a new flag in the physics lump to make sure this was used. Maps not compiled with Strata's VBSP will need to be re-run through our VBSP with a similar NYI flag (BSP input and BSP output).
