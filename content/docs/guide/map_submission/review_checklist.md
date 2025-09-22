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

- [ ] Zone points are placed precisely and well aligned to map geometry
  - Zone points are snapped to map vertices
  - Make sure to also review all regions if there is more than one
- [ ] Zones are large enough to prestrafe in
- [ ] Start zones encapsulate the restart teleport destination and use them as the target destination entity
- [ ] Zone regions are not overlapping and are a single shape if possible
- [ ] Checkpoints are placed where they can be hit consistently for better split comparisons
  - This means placing them in the middle of hallways rather than after a turn where the player can hit the checkpoint sooner or later depending on how much they cut the corner (see [zoning guidelines](../map_zoning/#general-guidelines))
- [ ] The safe height is high enough to encapsulate any small extrusions on the floor, but also below climbable platforms that can give the player an unfair height advantage
  - Explosive weapon modes should generally use the full height while non-explosive modes should use the base height when possible 
- [ ] Max velocity should match point_servercommand settings if applicable
- [ ] Cancel zones are used in hub/stage select areas (only needed if it is possible to return to hub area from stages/bonuses)
- [ ] (Optional) Stages and bonuses should have names where appropriate to make them easier to identify
- [ ] (Surf only) Limit ground speed option should be enabled unless you are supposed to bhop in start zones
- [ ] (Surf only) Carefully review intended bhop platforms and add allow bhop triggers if needed
  - Sometimes allow bhop zones are needed for stage end platforms. Use `mom_bhop_area_debug 1` to check the geometry.
  - Review WR video for ramp spine bhops or other intended bhop skips

# Step 2: Review in-game entities with entity tools

- [ ] **Teleport Velocity Mode Tool:** Teleport destinations are marked as "Keep Negative Z" when inside of small player clip cages
- [ ] **Boost Triggers Tool:** Check boost triggers for exploits (see [required entity conversions guide](../map_porting/#required-entity-modifications))
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
- [ ] Check if ambient sounds and music are in the appropriate folders
- [ ] (Surf only) Remove logic_timer entities that teleport players to the jail

# Step 5: Submission page review
- [ ] Description should mostly match GameBanana submission
- [ ] Date created should match the date on GameBanana
- [ ] Credits should match GameBanana submission
- [ ] Screenshots ideally should showcase iconic/memorable parts of the map. Taking similar screenshots to the ones on GameBanana is also recommended.
- [ ] _njv or _fix suffix is removed from the map name
- [ ] jump_ prefix is renamed to rj_ or sj_
- [ ] Required games match what is displayed in Lumper
