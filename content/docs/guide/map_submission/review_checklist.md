---
title: Map Review Checklist
categories:
  - guide
tags:
  - mapping
  - guidelines
weight: 3
---

# Step 1: Review zones

- [ ] Zones are aligned to map geometry
  - Zone corners are snapped to map vertices
- [ ] Zones are large enough to prestrafe in
- [ ] Start zones encapsulate the restart teleport destination
  - Discuss with team. Is this necessary to check as long as the zone has a valid tp dest?
- [ ] Is the safe height high enough to encapsulate any small platforms on the floor
  - Non-explosive modes should generally use base height unless 
- [ ] (Staged surf maps only) Limit ground speed option should be enabled unless you are supposed to bhop in start zones
- [ ] Max velocity should match point_servercommand settings if applicable
- [ ] (Optional) Stages and bonuses should have names where appropriate to make them easier to identify
- [ ] Cancel zones are used in hub/stage select areas
- [ ] Carefully review intended bhop platforms and add allow bhop triggers if needed
  - Sometimes allow bhop zones are needed for stage end platforms. Use `mom_bhop_area_debug 1` to check geometry.
  - For surf maps, review WR video for spine bhops or other intended bhop skips

# Step 2: Review in-game entities with entity tools

- [ ] Teleport destinations are marked as "Keep Negative Z" when sent to player clip cages
- [ ] Check boost triggers for exploits (see [required entity conversions guide](../map_porting/#required-entity-modifications))
- [ ] Check for gravity triggers. These triggers will persist gravity changes when the player exits the volume in CS:S maps, but not in CS:GO maps
- [ ] Check if any props are incorrectly sized
- [ ] (Bhop maps only): If they use mpbhop triggers, check if they have been converted
- [ ] (Bhop maps only): If they use func_button/func_door bhop platforms, check if they have been converted to func_bhop

# Step 3: Lumper review
- [ ] Check for invalid entities
- [ ] Check for Valve assets in the pakfile
- [ ] Check if ambient sounds and music are in the appropriate folders
- [ ] (Surf maps only) Remove logic_timer entities that teleport players to the jail

# Step 4: Submission page review
- [ ] Description should mostly match gamebanana submission
- [ ] Date created should match the date on gamebanana
- [ ] Credits should match gamebanana submission
- [ ] Screenshots ideally should showcase iconic/memorable parts of the map
- [ ] Remove _njv and _fix from map name
- [ ] Required games match what is displayed in Lumper

# Zoning Requirements

- TODO: More stuff!!
- If a zone region's location has a map teleport destination entity, we _highly_ prefer that it is used (rather than a custom arbitrary region destination coordinate) so the spot corresponds to a map teleport destination.
- Make sure each region teleport destination is inside the region.
- Avoid overlapping or touching regions for the same zone which could just be one region.
- Make sure points are placed precisely and aligned well with geometry.
- Fill stage/bonus teleport hub areas with a cancel zone for safety.
- Checkpoints should be placed where they can be hit consistently for better split comparisons. This means placing them in the middle of hallways rather than after a turn where the player can hit the checkpoint sooner or later depending on how much they cut the corner.

![Checkpoint Placement Suggestions](/images/map_porting/zoning_checkpoint_placement.png)
