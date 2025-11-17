---
title: Map Zoning
categories:
  - guide
tags:
  - mapping
  - guidelines
weight: 4
---

# Introduction
Zones allow players to measure and submit times to the leaderboards.  
This guide focuses on zoning using Momentum Mod's **in-game tool**.   
Zoning using **Hammer** is briefly covered in [this section](#hammer-zoning)

## Glossary
| Term                            | Definition                                                                                                 |
|---------------------------------|------------------------------------------------------------------------------------------------------------|
| **Track**                       | A timed part of the map with a start and an end, and a leaderboard for players to compete on.              |
| **Main Track**                  | The main track of a map. Every map has exactly one Main Track.                                             |
| **Bonus Track**                 | A Track distinct from the Main Track, often shorter than the Main Track.                                   |
| **Segment / Stage / Course**    | A section within the Main Track which has its own leaderboard.                                             |
| **Zone**                        | A trigger that controls the run timer when players enter or exit it.                                       |
| **Region**                      | A volume component of a Zone. Each Zone is made of one or more Regions, which may be in different areas.   |
| **Checkpoint**                  | A type of zone used within a Segment that activates a timer split when touched; it does not save progress. |
| **Global Region**               | A special type of region that applies to all tracks; some manipulate more than just the timer.             |
| **Region Teleport Destination** | The location and rotation the player is teleported to when using a command to restart or change tracks.    |

## Examples
![Zone Example 1](/images/map_zoning/zones_example_1.png)

# General Guidelines
## Checkpoint placement
**Checkpoints** should be placed in a way that provides the **most consistant** time comparison  
- Place checkpoint in the middle/end of hallways rather than right after a turn
- Place checkpoints at the bottom of drops rather than at the top 

![Checkpoint Placement Suggestions](/images/map_porting/zoning_checkpoint_placement2.png)

## Zone Height
- If the zone is **right under a ceiling**, it should extend **all the way up** to it
- If there is **no ceiling above**, the zone should be **at least 256u** tall
    - Zones can be taller than that if it fits the geometry of the map better
- **Start zone's height** should be set based on **gameplay and timing needs**
    - Unless there is a reason, it should also follow the guidelines above
- **End zones** that the player has to **fall into** can be as short as **1u**


# Setup
1. Open console (**~** by default, key below ESC)
2. Type `sv_cheats 1`
3. Press **Tab** to open leaderboards
4. Right click to get mouse control and click the button in **bottom left**
    - You also open this menu with `mom_zoning_enable 1` in console

{{<hint info>}}
You can **right click** to **toggle mouse control** while the **zoning menu** is open
{{</hint>}}

{{<hint info>}}

All zones will be saved to **/momentum/maps/zones/local** folder.  
You can access it by **Right Clicking** Momentum Mod in your steam library and selecting **Manage → Browse local files**

{{</hint>}}

![Open Zoning Menu](/images/map_zoning/editor_tab.png)

# Basic information
Zoning menu is split into 4 sections
### Left section
This section is for creating the **main track**, **bonuses**, and **global regions**.  
**Main track** can have multiple **segments**
{{<hint info>}}

[Global Regions](#global-regions) always affect the player, no matter what track they are playing on.

{{</hint>}}
### Middle section
This section is for creating **segments** ( **stages** in Surf, **courses** in RJ/SJ ) and the **end zone**.  
Every **segment** measures time for **comparisons** and has it's own **leaderboard**!  
Every **segment** can have it's own **checkpoints**.

### Right section
This section is for creating **checkpoints**.  
**Checkpoints** measure time for **comparisons** but **don't have leaderboards**.

### Bottom section
This section lists additional properties of zones.  
They are covered [later in the guide](#setting-zone-properties).

![Zoning Menu Showcase](/images/map_zoning/zoning_menu_showcase.png)

# Basic Zoning

## Creating the Start Zone
Every **segment** needs a **start zone**.  
Every **start zone** needs to have an associated **teleport destination entity**
{{<hint info>}}
- Entities **defined by the mapper** should **always** be used if they exist. They will be **chosen automatically** when creating a zone encompassing them.
- Entities should **always** be encompassed by the start zone
{{</hint>}}

1. Go to the start of the map
1. Click **+ Main**
    - This will automatically create the **main track**, **segment 1** and put you in the **zone edit mode** 
2. Select one corner of the starting platform
    - The zoning tool will automatically detect vertices and snap to them ( blue indicators in the video below )
    - Make sure you are **always** snapping to vertices if possible
3. Select the opposite corner of the starting platform
    - If the platform you're zoning is not rectangular see the [Freeform Mode](#freeform-mode) section
4. Choose the height of your zone ( please follow the [zone height requirements](#zone-height))
    - The entity will **turn green** when encompassed by the region
    - The entity is usually above any starting platform ( grey box in the video below )
5. If necessary, change the [Safe Height](#safe-height) of your zone

{{<hint warning>}}
Start zones should **always** use teleport destination entities **defined by the mapper** when they exist.
{{</hint>}}

{{<hint info>}}

Zoning non-rectangular platforms: [Freeform Mode](#freeform-mode).  
Zoning in mid-air: [Box Mode](#box-mode).

{{</hint>}}

{{<hint info>}}

You can always [Edit Zones](#zone-editing) after creating them.

{{</hint>}}

{{<video src="/videos/map_zoning/create_start_zone.mp4">}}


## Creating Segments and Checkpoints
**Segments** and **Checkpoints** are used differently depending on the gamemode.  
Please follow the guide appropriate for your map.  

{{<hint info>}}

When zoning **multiple routes** or **around a hole in geometry** instead of creating extra zones, you should be adding [Additional Regions](#multiple-regions) to a single zone.

{{</hint>}}

{{<hint warning>}}

On **Surf** maps, make sure to create [Allow Bhop](#allow-bhop) zones where necessary.

{{</hint>}}

- [Surf: Linear / Bhop](/guide/map_submission/map_zoning/#surf-linear--bhop)
- [Surf: Staged](/guide/map_submission/map_zoning/#surf-staged)
- [Surf: Staged-Linear](/guide/map_submission/map_zoning/#surf-staged-linear)
- [RJ / SJ / Conc: No Courses](#rj--sj--conc-no-courses)
- [RJ / SJ / Conc: With Courses](#rj--sj--conc-with-courses)
- [Other Gamemodes](/guide/map_submission/map_zoning/#other-gamemodes)

### Surf: Linear / Bhop
Linear Surf / Bhop maps should have **1 segment** and **checkpoints** placed throughout the map for **comparisons**.  

{{<hint info>}}

**Checkpoints** should generally be at least 10s apart
- This does not have to be very precise, it's fine to place checkpoints at longer intervals if that fits the gameplay better.
- You can watch WR videos and place checkpoints in approximate spots

{{</hint>}}
**Example: surf_atonement zones**
![Linear Surf Zones](/images/map_zoning/zoning_surf_linear.png)

### Surf: Staged
Staged Surf maps should have a seperate **segment** for every **stage**.  
**Segments** for very long stages can have **additional Checkpoints** added within them for **extra timer splits** when comparing runs.  
**Example: surf_tuscany zones**
![Staged Surf Zones](/images/map_zoning/zoning_surf_staged.png)

### Surf: Staged-Linear
Staged-Linear Surf maps should be zoned **mostly** the same way as [Staged Surf](#surf-staged) maps.  
The only exception being that **Limit Ground Speed** needs to be unchecked for **every segment**.  
**Example: surf_anzchamps zones**
![Staged-Linear Surf Zones](/images/map_zoning/zoning_surf_staged_linear.png)

### RJ / SJ / Conc: No Courses
Rocket / Sticky Jump maps without any **courses** should have **1 segment** and a **checkpoint** at the start of **every jump**.  
**Example: rj_summer zones**
![RJ/SJ No Courses Zones](/images/map_zoning/zoning_rocket_sticky_jump_no_courses.png)

### RJ / SJ / Conc: With Courses
Rocket / Sticky Jump maps usually teleport the player back to the hub upon completion of a **course**.  
{{<hint warning>}}

This guide applies only to maps that require courses to end **before** the start of next course.  
If the next course starts at the same spot where the previous course ends, **don't change the main track property** and **don't add checkpoints** to the end of **courses**.   
If you have any questions please ask in **#map-porting** channel on our [Discord](https://discord.gg/momentummod).

{{</hint>}}

1. Uncheck **End segment at next segment start** in **main track** properties
    - This will make the time submit when the player enters **last checkpoint** on a **course** except for the **last course**
    - **Last course** time will **always** submit when player enters the [End Zone](#creating-the-end-zone)
![RJ/SJ Courses Properties](/images/map_zoning/zoning_rocket_sticky_jump_courses_properties.png)
2. For every **course except last**:
    1. Create a **new segment** at the first jump
    2. Add a **checkpoint** to the start of every jump
    3. Add a **checkpoint** to the end platform ( before being teleported to the hub )
3. For the **last course**:
    1. Create a **new segment** at the first jump
    2. Add a **checkpoint** to the start of every jump
        - **Do not** add a checkpoint to the end of this course

**Example: rj_deserted zones** ( notice that the end of **course 1** is zoned with a **checkpoint** )
![RJ/SJ Courses](/images/map_zoning/zoning_rocket_sticky_jump_courses.png)

### Other Gamemodes
Vast majority of maps for gamemodes other than those described above will use a **single segment** with **checkpoints**.  
That means they should be zoned identically to [Surf: Linear / Bhop](http://localhost:1313/guide/map_submission/map_zoning/#surf-linear--bhop) maps. 

{{<hint warning>}}

When zoning **Defrag** maps, also make sure to make checkpoints [not required](#required-checkpoints)

{{</hint>}}

{{<hint warning>}}

Of course there are exceptions to this rule.  
There is nothing stopping maps for other gamemodes to be staged.  
The reason they are not is simply because of the way different communities create and play maps.  

In case you encounter these exceptions, apply your best judgement to which method of zoning from above to use.  
When in doubt, don't hesitate to ask for help in **#map-porting** channel on our [Discord](https://discord.gg/momentummod).

{{</hint>}}

## Creating the End Zone
Creating the **End Zone** is as simple as creating any other zone.  
Click on **+End Zone** below **segments** of the track you're zoning to create it.

{{<hint info>}}

Every track can have only **One End Zone**.  
If the track needs to end in multiple separate areas, add [Additional Regions](#multiple-regions) to the **End Zone**.

{{</hint>}}

{{<hint warning>}}

In other games **End Zones** might be pushed back a couple units from the edge of the platform.  
This is the case because of a bug that allowed players to activate the zone by hitting the side of a platform without landing on it.  
This bug is **fixed** in Momentum Mod.  
When creating **End Zones** make sure they are snapped to vertices like any other zone.

{{</hint>}}

![Create End Zone](/images/map_zoning/zoning_end_zone.png)

## Creating Bonuses
Creating Bonuses is the exact same process as creating the **Main Track**.  
Start By clicking on **+Bonus** to create it.  
{{<hint info>}}

Bonuses are essentially short, linear maps.  
Follow the same principles as in [Surf: Linear / Bhop](#surf-linear--bhop) or [RJ / SJ / Conc: No Courses](#rj--sj--conc-no-courses) zoning.

{{</hint>}}

{{<hint info>}}

For bonuses on Defrag maps which are **copies of the Main Track** but with additional gameplay modifiers read the [Defrag Modifier Bonuses](#defrag-modifier-bonuses) section.

{{</hint>}}

**Example: surf_technique zones**
![Creating Bonues](/images/map_zoning/zoning_bonuses.png)

## Creating Cancel Zones
**Cancel zones** in Momentum Mod are used for two main reasons:
1. **Preventing hub abuse**

    Some maps place teleports to each stage inside the hub.  
    Without a **cancel zone**, players could go back to the hub from the start zone, trigger zones on every stage, and finish only the last one to submit an invalid time.

2. **Allowing for clean track switching**

    On some maps, players can walk between the main track and bonuses without noclip.  
    A timer for another track **cannot prime** while a different track timer is running.  
    **Cancel zones** are used to **stop the active timer automatically** when entered.

{{<hint info>}}
Cancel zones can either be **global** or **per segment**.
{{</hint>}}
**Example: surf_bugs zones** ( a **cancel zone** is stopping player's timer before walking into bonuses )
![Cancel Zones Example](/images/map_zoning/zoning_cancel_zone_example.png)


# Setting Zone Properties
## Max Velocity
This setting changes maximum allowed velocity on **the entire map** ( not only the main track ).
- **Empty Field**: Uses gamemode defaults
- **Value is 0**: Uncapped velocity
- **Any other value**: Caps maximum velocity to that value

{{<expander title="What are the defaults for each gamemode?">}}
**Surf / RJ / SJ / Ahop**: 3500  
**Conc**: 2000  
**Others**: Uncapped
{{</expander>}}

{{<hint danger>}}

You **have to** press **Enter** after inputting **Max Velocity**, otherwise it won't save.

{{</hint>}}

![Max Velocity](/images/map_zoning/zoning_max_velocity.png)


## Safe Height
The player needs to stand **at or below** the safe height to be able to prime the timer before starting.  
This setting is generally only relevant to **Surf** and **Bhop**, other modes use **Full Height** by default.  
{{<hint warning>}}

Make sure that safe height encompasses any **small protrusions** in the **start zones**.  
Pay special attention to **zone markings** on **Bhop maps** as those are often solid and require **raising the safe height by 2-3 units**.

{{</hint>}}

![Safe Height Property](/images/map_zoning/zoning_safeheight_properties.png)
![Safe Height Property](/images/map_zoning/zoning_safeheight_example.png)

## Required Checkpoints
Uncheck **Checkpoints Required** in **Segment** properties to allow players to submit times without hitting every checkpoint.

{{<hint info>}}

Some maps might include **large skips** that will make the player not hit every checkpoint.  
Additionally most **Defrag** maps don't require checkpoints to be hit.  

{{</hint>}}

![Required Checkpoints](/images/map_zoning/zoning_checkpoints_required.png)

## Unordered Checkpoints
Some maps allow the player to choose the order in which they complete it.  
This setting can also be used to simulate [Collectibles](/guide/collectibles/).

![Ordered Checkpoints](/images/map_zoning/zoning_checkpoints_ordered.png)


## Teleport Destination
This is the spot player will be teleported to when restarting a run/stage.  
Original teleport destinations set by the mapper are **highly preferred** over custom ones.  
If the zone encompasses a **teleport destination** during creation, it will be automatically selected.  
Sometimes multiple **teleport destinations** will be present in one zone, choose the one the map sends the player to when they **fail a section**.

{{<hint warning>}}

In rare cases when you have to create a custom one:  
1. Click **Custom** in the **Teleport Destination** section
    - This will automatically create it at the **center** of your zone
2. Select the angle of the teleport by **looking in the desired direction** and **left clicking**
    - By default angles snap to 45 degress, you don't need to be very precise
3. If you need to, edit the position by clicking the **blue button** next to **position**

{{</hint>}}

![Teleport Destination](/images/map_zoning/zoning_teleport_destination.png)

## Filters
Maps sometimes block players from progessing before certain triggers are hit.  
In Momentum Mod additional protection should be given to zones, by disabling them unless the player meets filter conditions.   
TODO: Mention negated filters when that's implemented.  
TODO: Find a map where this could be demonstrated easily with a screenshot/video

# Other Zoning Concepts
## Freeform Mode
**Freeform Mode** allows for creation of **polygonal** zones.  
Click **Middle Mouse Button** while zoning to switch between modes.  
{{<video src="/videos/map_zoning/zoning_freeform_mode.mp4">}}

## Box Mode
**Box Mode** allows for creation of zones in mid-air, when there is no geometry to rely on.  
Start by placing the box in the air and then [edit it](#zone-editing) to expand the zone as needed.  
To switch to this mode, click the **Middle Mouse Button** twice while zoning, **before placing any points**.  
![Box Mode](/images/map_zoning/zoning_box_mode.png)

## Multiple Regions
Every zone can have multiple, disconnected regions.  
This can be used to zone multiple **routes**, **starting points**, **ends**, or to create **holes in zone geometry**.  
Click the **+** button in **zone properties** to add a region.  
{{<hint warning>}}
- Regions should **never** overlap
- Regions should **not touch** if it's possible to connect them into a single zone
{{</hint>}}
![Multiple Regions](/images/map_zoning/zoning_multiple_regions.png)

## Defrag Modifier Bonuses
Bonuses in **Defrag** require a different approach than in other modes.  
They use the **same zones** as the **Main Track**, but apply **modifiers** to the player.  
Clicking on **+Defrag Modifier Bonus** will create the bonus and allow for editing specific **modifiers**.
![Defrag Modifier Bonuses](/images/map_zoning/zoning_defrag_modifier_bonus.png)

## Zone Editing
Any zone can be edited after it's creation.  
Simply click the **Edit Points** button and choose the point you want to edit.  
- Corners - Allow you to edit the XY position of an individual vertex
- Edges - Allow you to create additional vertices
- Sides - Allow you to move a side along it's axis
    - The zone must be a rectangle to use this option.
{{<video src="/videos/map_zoning/editing_zones.mp4">}}


# Global Regions
## Allow Bhop
This zone allows the player to bhop without losing speed when they normally wouldn't be able to.  
While this can be used in every mode it's mostly relevant to **Surf**.  
In Momentum Mod, bhopping in **Surf** is only possible when the game finds a 64x64 platform below the player (use `mom_bhop_area_debug 1` to see it).  
In areas where this is insufficient you should use **Allow Bhop** zones.  

{{<hint warning>}}

The effects of "Allow Bhop" Zones as well as the "Force Enable Bhop" property are not active while in zoning mode.

{{</hint>}}

**Example: surf_bugs zones** (normally the player wouldn't be able to bhop on this platform, but the **Allow Bhop** zone overrides this behavior).
![Allow Bhop](/images/map_zoning/zoning_allow_bhop.png)


## Allow Overbounces
Only applicable to **Defrag**.  
In Momentum Mod overbounces are **disabled** by default.  
In order to enable them create **Ovebounce Zones**.  

![Allow Overbounces](/images/map_zoning/zoning_allow_overbounces.png)

# Hammer Zoning

If you would rather zone maps in Hammer, follow this guide instead.

## Hammer Zone Entities

Open the vmf file for the map that you want to zone and go to the start area. Place a `zone_timer_start` trigger in the area where you want the start zone to be and set the "Restart Destination" field to the destination where you want the player to start.

![Start Zone](/images/map_porting/start_zone.png)

If you are zoning a staged map, use `zone_timer_stage` triggers for the stage start zones (starting at stage 2). For linear maps, use `zone_timer_checkpoint` to add checkpoints throughout the map. Use `zone_timer_end` for the map end zone.

## Bonus Tracks

Bonuses can be created by using a `zone_timer_start` trigger and setting the "Track Number" property to the bonus number. Bonuses cannot have stages, but they can have checkpoints. The `zone_timer_checkpoint` and `zone_timer_end` triggers also need to have their "Track Number" set to the bonus number.

## Generating Zones with ZoneMaker

After all of your zones are set up, you can generate the zones by running `zonemaker.exe` on the vmf. Strata Hammer will have this tool included in the compile options:

![ZoneMaker](/images/map_porting/zonemaker.png)

If there is a problem with how your zones are set up, ZoneMaker will fail and display an error in the compile log:

![ZoneMaker Error](/images/map_porting/zonemaker_error.png)


