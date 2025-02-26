---
title: Submission Guidelines
categories:
  - guide
tags:
  - mapping
  - guidelines
---

# Zoning Requirements
- If a zone region's location has a map teleport destination entity, we *highly* prefer that it is used (rather than a custom arbitrary region destination coordinate) so the spot corresponds to a map teleport destination.

- Make sure each region teleport destination is inside the region.

- Avoid overlapping or touching regions for the same zone which could just be one region.

- Make sure points are placed precisely and aligned well with geometry.

- Fill stage/bonus teleport hub areas with a cancel zone for safety.

- Checkpoints should be placed where they can be hit consistently for better split comparisons. This means placing them in the middle of hallways rather than after a turn where the player can hit the checkpoint sooner or later depending on how much they cut the corner.

# Entity Requirements

## Boosters
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

## Teleports
### Fix Landmark Teleport Angles
- Our trigger_teleport logic uses CS:GO's landmark teleport logic, which is different from older games. It is backwards compatible with older games, but achieving compatibility may require simple adjustments to entity props.
- Landmark teleports originally made for older games may need to be changed to make the angles of the teleport destination and landmark entity match, and disable `UseLandmarkAngles` as well.

### Drop Teleports (Surf Only)
- Set VelocityMode => "Keep Negative Z Velocity Only" on most trigger_teleport entities. Stage teleports (except "staged-linear" maps like omnific) should have this set even if they already have a teleport box.

## Moving Brushes
- Moving/rotating brushes should have cycles that are slow enough to be consistent. Otherwise they should be frozen, slowed down, or deleted.
- **Note:** When save states are implemented, they will reset entities after starting a stage segment which will make it easier to hit cycles more consistently.

## Sounds
Use [Lumper](https://github.com/momentum-mod/lumper/releases) to re-categorize sounds based on their type. This is required for these sounds to be changed by volume sliders.

| Channel | Folder |
| -------- | ------- |
| Map Sound Effects | sfx/ |
| Ambient | ambient/ |
| Music | music/ |
| Movement | player/ |
| Weapons | weapon/ |
| UI | ui/ |

## Collectibles
- Convert complicated collectible system triggers to [Momentum's collectible system entities](/guide/collectibles/) (far less complicated and facilitates future collectibles HUD work)

## Entity class/property restrictions
- Use [Lumper's](https://github.com/momentum-mod/lumper/releases) entity review tool to check for entities that should be removed or replaced.

## Miscellaneous
- (Surf Only) Remove jail timers and teleports from old maps.
- Make sure the map isn't located far from the origin for no reason (should be reasonably centered in Hammer). This will minimize any potential for floating point errors, especially for new maps made with Strata's expanded coordinate limits.
- Make sure the map has physics collisions and that the collisions do not have VPhysics shrinkage
  - **Not Yet Implemented:** Compiling without shrinkage will be a VBSP command line flag which our standard compile settings will include, and then Lumper can check a new flag in the physics lump to make sure this was used. Maps not compiled with Strata's VBSP will need to be re-run through our VBSP with a similar NYI flag (BSP input and BSP output).
