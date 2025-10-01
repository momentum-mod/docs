---
title: Map Review Checklist
categories:
  - guide
tags:
  - mapping
  - guidelines
weight: 3
---

This checklist is intended for experienced map porters that already understand general porting concepts.

For more in-depth information on map porting, please see the [map porting](../map_porting) and [zoning](../map_zoning) guides.

# Step 1: Review zones

## Region Geometry
- [ ] Zone points are placed precisely and are well aligned to map geometry
  - Zone points are snapped to map vertices
  - Zones meant to fill a platform go all the way to the edge and not inset slightly
  - Make sure to review all regions if there is more than one
- [ ] Zone regions are not overlapping
- [ ] Zones with multiple regions could not have been achieved with fewer regions
- [ ] Start/Stage zones are large enough to prestrafe in
- [ ] Start/Stage zones encapsulate the restart teleport destination and use it as the teleport destination entity
  - If there is a teleport destination entity present, it should be used (not a custom position)
- [ ] Region heights are not less than 256 units for no reason
  - Regions under a low ceiling should probably end at the ceiling
  - End zone regions at the bottom of a pit the player falls into may be short, even 1 unit tall
- [ ] Regions are not so short that the player could possibly fly over them and have to wait to fall into them (especially end zones)
- [ ] Regions are not so thin that the player could pass through them without activating them.
  - A minimum of 64 units is generally sufficient, but may not be enough if the player is moving exceptionally fast.
- [ ] Regions do not protrude into walls unnecessarily
  - The shape should conform to the geometry, not be lazily covered with a box
  - Multiple regions should be used to cover split paths, not one stretched region
- [ ] The Safe Height is high enough to encapsulate any small protrusions on the floor, but also below platforms that can give the player an unfair height advantage. This includes platforms that cannot be reached just by walking or jumping.
  - Explosive weapon modes should generally use the full height while non-explosive modes should use the base height when possible

## Checkpoint Locations
- [ ] Checkpoints are placed in a way that minor short-term routing differences do not affect timer splits
  - This means placing them in the middle of straightaways rather than after a turn where the player can hit the checkpoint sooner or later depending on how much they cut the corner (see [zoning guidelines](../map_zoning/#general-guidelines))
- [ ] Checkpoints are placed at locations that feel most like the player has reached a new area and has made clear progress through the map.
  - For Bhop maps, this usually means placing checkpoints at locations where the map teleports you to when you fail a section.
  - Generally, the player should not get sent back before a checkpoint when they fail.
- [ ] Checkpoints are fairly evenly spaced and not too close together.
  - A rough rule of thumb is checkpoints should be at least 10 seconds apart in a reasonably optimized run.
- [ ] Checkpoints are unskippable and marked "required" except where absolutely necessary.
  - Even when a map has skips, it is usually reasonable to place checkpoints in a way that they are not bypassable.
- [ ] Checkpoints are marked "ordered" except where necessary, even if it does not appear physically possible to activate them in an arbitrary order.
- [ ] Checkpoints with multiple regions positioned in mirrored paths should be equivalent

## Other
- [ ] Max velocity should be the mapper intended value
  - This is sometimes found on a point_servercommand. Other times this is only listed where the map was downloaded from.
- [ ] Cancel zones are used in hub/stage select areas if it is possible to return to hub area without teleporting with a command.
- [ ] Start/Stage zones with multiple regions in distinct locations with their own teleport destinations should assign each destination to the appropriate region, rather than using the same one for all regions.
- [ ] When the map uses a filter entity to gate progress to the area a zone is in, the zone should be assigned that filter entity even if the zone cannot be physically reached without the filter due to a filtered teleport trigger in the way.
  - This is for general safety and also because it allows zones to be given a different appearance when they are untriggerable.
- [ ] (Optional) Stages and bonuses may have names where appropriate to make them easier to identify. Names should only be used when they are intuitive and in the spirit of the map, like the fruit-themed stages of surf_fruits. Track names should not just be used as mapper credits in a collaborative map.
- [ ] (Surf only) "Limit ground speed" option should be enabled for stages unless you are supposed to bhop in start zones during a full map run
- [ ] (Surf only) Carefully review intended bhop platforms and add Allow Bhop regions if needed
  - Use `mom_bhop_area_debug 1` and jump on the ground to check the automatic bhop platform detection.
  - Review WR videos for ramp spine bhops or other commonly allowed bhop skips.

# Step 2: Review in-game entities with entity tools

- [ ] **Teleport Velocity Mode Tool:** Teleport destinations are marked as "Keep Negative Z" when the map design intends to stop the players horizontal velocity, including when there is a floating "cage".
- [ ] **Boost Triggers Tool:** Check boost triggers for exploits (see [required entity conversions guide](../map_porting/#required-entity-modifications))
  - For boosts at the start of tracks that were turned into `trigger_setspeed`, make sure the boost gives the same speed as when walking into the original trigger. Use the "Restore Original Trigger" and "Reload from BSP" buttons (if available) to easily do a before-and-after comparison. Also make sure these boosts have Strict Mode enabled, and do not use "Ignore" mode for vertical speed.
- [ ] **Gravity Triggers Tool:** Gravity triggers should persist gravity changes when the player exits the volume in CS:S maps, but not in CS:GO maps
- [ ] **Model Scale Fix Tool:** Check for any incorrectly sized props
- [ ] **Bhop Trigger Fix Tool (Bhop only):** If the map uses mpbhop triggers (triggers that force bhopping with targetname filters), check if they have been converted
- [ ] **Bhop Block Fix Tool (Bhop only):** If the map uses func_button/func_door bhop platforms, check if they have been converted to func_bhop

# Step 3: Other in-game things to review
- [ ] Refraction textures don't have a dark tint (requires recompile?)
- [ ] Maps don't have invalid textures, cubemaps, skyboxes or models
- [ ] CS:GO maps have an `env_cascade_light` entity if they use CSM shadows

# Step 4: Lumper review
- [ ] Check for invalid entities ("Entity Review" tab)
- [ ] Remove weapon strip entities unless adding/removing weapons is a part of the gameplay
- [ ] Check for Valve assets in the pakfile
- [ ] Check that any custom music files are categorized as such using the appropriate subdirectory
- [ ] (Surf only) Make sure there is no active "jail" system

# Step 5: Submission page review
- [ ] Description should mostly match GameBanana submission
- [ ] Date created should match the date on GameBanana
- [ ] Credits should match GameBanana submission
- [ ] Screenshots ideally should showcase iconic/memorable parts of the map. Taking similar screenshots to the ones on GameBanana is also recommended.
- [ ] Extra suffixes like _njv, _fix, or _ksf that are not required to fully distinguish the map are removed from the map name.
- [ ] jump_ prefix is renamed to rj_ or sj_
- [ ] Required games match what is displayed in Lumper
