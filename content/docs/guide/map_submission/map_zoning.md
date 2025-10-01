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

# General Guidelines
- Zones should **always** use teleport destinations **defined by the mapper** when possible.
- Zones should **always** encompass the teleport destination it's using.
- Regions of zones should **never** overlap
    - Regions should also not touch if it's possible to connect them into a single zone
- All points should **always** be snapped to map geometry whenever possible.
- Checkpoints should be placed in a way that provides the **most consistant** time comparison.
    - Place checkpoint in the middle/end of hallways rather than right after a turn
    - Place checkpoints at the bottom of drops rather than at the top 

![Checkpoint Placement Suggestions](/images/map_porting/zoning_checkpoint_placement2.png)


# Setup
1. Open console (**~** by default, key below ESC)
2. Type `sv_cheats 1`
3. Press **Tab** to open leaderboards
4. Right click to get mouse control and click the button in **bottom left**
    - You also open this menu with `mom_zoning_enable 1` in console

{{<hint info>}}

All zones will save to **/momentum/maps/zones/local**.  
You can access it by **Right Clicking** Momentum Mod in your steam library and selecting **Manage → Browse local files**

{{</hint>}}

![Open Zoning Menu](/images/map_zoning/editor_tab.png)

# Basic information
Zoning menu is split into 4 sections
### Left section
This section is for creating the **main track** and **bonuses**.  
Every **track** can have **stages**
### Middle section
This section is for creating **stages** ( called **courses** in RJ/SJ ).  
Every **stage** measures time for **comparisons** and has it's own **leaderboard**!  
Every **stage** can have it's own **checkpoints**.

{{<hint info>}}

In the zoning menu **stages** are called **segments**.  
That is because of difference in uses between gamemodes.

{{</hint>}}

### Right section
This section is for creating **checkpoints**.  
**Checkpoints** measure time for **comparisons** but **don't have leaderboards**.

### Bottom section
This section lists additional properties of zones.  
They are covered [later in the guide](#setting-zone-properties).

![Zoning Menu Showcase](/images/map_zoning/zoning_menu_showcase.png)

# Basic Zoning

## Creating the Start Zone
Every **stage** needs a start zone. 
1. Noclip to the start of the map
    - **g** by default or `noclip` in console 
1. Click **+ Main**
    - You can right click to **toggle mouse control** while the **zoning menu** is open
    - This will automatically create the **main track**, **stage 1** and put you in the **zoning mode**
2. Select one corner of the starting platform
    - The zoning tool will automatically detect vertices and snap to them ( blue indicators in the video below )
    - Make sure you are always snapping to vertices when possible
3. Select the opposite corner of the starting platform
    - If the platform you're zoning is not rectangular see the [Freeform Mode](#freeform-mode) section
4. Choose the height of your zone
    - Make sure the **destination entity** is inside of your zone
    - It's usually above any starting platform ( grey box in the video below )

{{<hint info>}}

Zoning non-rectangular platforms: [Freeform Mode](#freeform-mode).  
Zoning in mid-air: [Box Mode](#box-mode).

{{</hint>}}

{{<hint info>}}

You can always [Edit Zones](#zone-editing) after creating them.

{{</hint>}}

{{<video src="/videos/map_zoning/create_start_zone.mp4">}}


## Creating Stages and Checkpoints
**Stages** and **Checkpoints** are used differently depending on the gamemode.  
Please follow the guide appropriate for your map.  



{{<hint info>}}

Use the same principle as outlined above to create these zones.  
Click on **+Segment** or **+Checkpoint** depending on what's appropriate.  

{{</hint>}}

{{<hint info>}}

Checkpoints should be placed where they can be hit consistently for better split comparisons.  
Middle/End of a hallway is generally preferred  over placing them right at the start. 

{{</hint>}}

{{<hint info>}}

Some maps have **multiple routes** a player can take, **multiple possible endings** or a a hole in geometry that the **zone needs to be placed around**.  
In all of these cases the solution is to add additional regions to relevant zones.  
Read the [Multiple Regions](#multiple-regions) section for more information.

{{</hint>}}

{{<hint warning>}}

For all **surf** maps make sure you set the correct [Safe Height](#safe-height) and [Allow Bhops](#allow-bhop) where necessary.

{{</hint>}}

- [Surf: Linear](/guide/map_submission/map_zoning/#surf-linear)
- [Surf: Staged](/guide/map_submission/map_zoning/#surf-staged)
- [Surf: Staged-Linear](/guide/map_submission/map_zoning/#surf-staged-linear)
- [Rocket / Sticky Jump: No Courses](/guide/map_submission/map_zoning/#rocket--sticky-jump-no-courses)
- [Rocket / Sticky Jump: With Courses](/guide/map_submission/map_zoning/#rocket--sticky-jump-with-courses)
- [Other Gamemodes](/guide/map_submission/map_zoning/#other-gamemodes)

### Surf: Linear
Linear Surf maps should have **1 stage** and **checkpoints** placed throughout the map for **comparisons**.  
**Example: surf_atonement zones**
![Linear Surf Zones](/images/map_zoning/zoning_surf_linear.png)

### Surf: Staged
Staged Surf maps should have a seperate **stage zone** ( called **segment** in the zoning menu ) for every **stage**.  
Those **stage zones** can have **checkpoints** for better comparisons ( usually only used for **really long** stages ).  
**Example: surf_tuscany zones**
![Staged Surf Zones](/images/map_zoning/zoning_surf_staged.png)

### Surf: Staged-Linear
Staged-Linear Surf maps should be zoned **mostly** the same way as [Staged Surf](/guide/map_submission/map_zoning/#surf-staged) maps.  
The only exception being that **Limit Ground Speed** needs to be unchecked for **every stage**.  
**Example: surf_anzchamps zones**
![Staged-Linear Surf Zones](/images/map_zoning/zoning_surf_staged_linear.png)

### Rocket / Sticky Jump: No Courses
Rocket / Sticky Jump maps without any **courses** should have **1 segment** and a **checkpoint** at the start of **every jump**.  
**Example: rj_summer zones**
![RJ/SJ No Courses Zones](/images/map_zoning/zoning_rocket_sticky_jump_no_courses.png)

### Rocket / Sticky Jump: With Courses
Rocket / Sticky Jump maps usually teleport the player back to the hub upon completion of a **course**.  
{{<hint warning>}}

This guide applies only to maps that require courses to end **before** the start of next course.  
If the next course starts at the same spot where the previous course ends, **don't change the main track property** and **don't add checkpoints** to the end of **courses**.   
If you have any questions please ask in **#map-porting** channel on our [Discord](https://discord.gg/momentummod).

{{</hint>}}

1. Uncheck **End segment at next segment start** in **main track** properties
    - This will make the time submit when the player enters **last checkpoint** on a **course** except for the **last course**
    - **Last course** time will **always** submit when player enters the [End Zone](/guide/map_submission/map_zoning/#creating-the-end-zone)
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
Vast majority of maps for gamemodes other than **Surf** and **Rocket / Sticky Jump** will use a **single stage** with **checkpoints**.  
That means they should be zoned identically to [Surf: Linear](/guide/map_submission/map_zoning/#surf-linear) maps.  

{{<hint info >}}

The only difference is that for modes other than Surf the **Limit ground speed** checkbox will be automatically **unchecked**.  
That is the correct behavior so you don't have to worry about it.

{{</hint>}} 

{{<hint warning>}}

When zoning **Defrag** maps, also make sure to make checkpoints [not required](#required-checkpoints)

{{</hint>}}

{{<hint warning>}}

Of course there are exceptions to this rule.  
There is nothing stopping maps for other gamemodes to be staged.  
The reason they are not is simply because of the way different communities create maps.  
Some exceptions are:
- **bhop_sqee** ( Multiple long courses. Every course is a seperate stage because they are fun to compete on individually )
- **df_parkourushi** ( Long parkour courses. In defrag due to technical limitations every course was made to be a seperate map. In Momentum Mod they can be stages )   

In case you encounter these exceptions, apply your best judgement to which method of zoning from above to use.  
When in doubt, don't hesitate to ask for help in **#map-porting** channel on our [Discord](https://discord.gg/momentummod).

{{</hint>}}

## Creating the End Zone
Creating the **End Zone** is as simple as creating any other zone.  
Click on **+End Zone** below **segments** of the track you're zoning to create it.
![Create End Zone](/images/map_zoning/zoning_end_zone.png)

## Creating Bonuses
Creating Bonuses is the exact same process as creating the **Main Track**.  
Start By clicking on **+Bonus** to create it.  
{{<hint info>}}

**Vast** majority ( if not all ) bonuses are essentially short, linear maps.  
Follow the same principles as in [Surf: Linear](/guide/map_submission/map_zoning/#surf-linear) or [Rocket / Sticky Jump: No Courses](/guide/map_submission/map_zoning/#rocket--sticky-jump-no-courses) zoning.

{{</hint>}}

{{<hint info>}}

For **Defrag** specific bonuses read the [Defrag Modifier Bonuses](#defrag-modifier-bonuses) section.

{{</hint>}}

**Example: surf_technique zones**
![Creating Bonues](/images/map_zoning/zoning_bonuses.png)

## Creating Cancel Zones
In order for players to switch tracks by walking into another start zone ( such as walking from **Main Track** to a **Bonus** ), they need to stop their timer first.  
**Cancel zones** stop the timer automatically when they are entered.  
They can either be **global** or **per segment**.  
**Example: surf_bugs zones** ( a **cancel zone** is stopping player's timer before walking into bonuses )
![Cancel Zones Example](/images/map_zoning/zoning_cancel_zone_example.png)


# Setting Zone Properties
## Max Velocity
By default the **Max Velocity** is limited to **3500** for most gamemodes.  
Some **Surf** and **Bhop** maps are designed for higher speeds.  
You can set the **Max Velocity** in **Main Track** properties. 

{{<hint warning>}}

**Max Velocity** always applies to the **entire map**, not only the Main Track.

{{</hint>}}

{{<hint danger>}}

You **have to** press **Enter** after entering the **Max Velocity**, otherwise it won't save.

{{</hint>}}

![Max Velocity](/images/map_zoning/zoning_max_velocity.png)


## Safe Height
Player needs to stand **at or below** the safe height to be able to start the run.  
This setting is generally only relevant to **Surf**.  
{{<hint info>}}

Most maps won't require changing this property.  
Leaving it at **Base for Surf** and **Full Height for Other Gamemodes** will be sufficient.

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
If the zone encompasses a **teleport destination** while zoning, it will be automatically selected for that zone.  
Sometimes multiple **teleport destinations** will be present in one zone, make sure the correct one is chosen and change it in **entity name** section if necessary.

{{<hint warning>}}

In rare cases when you have to create a custom one:  
1. Click **Custom** in the **Teleport Destination** section
    - This will automatically create it at the **center** of your zone
2. Select the angle of the teleport by **looking in the desired direction** and **left clicking**
    - By default angles snap to 45 degress, you don't need to be very precise
3. If you need to, edit the position by clicking the **blue button** next to **position**

{{</hint>}}

![Teleport Destination](/images/map_zoning/zoning_teleport_destination.png)

# Other Zoning Concepts
## Freeform Mode
**Freeform Mode** allows for creation of **polygonal** zones.  
Click **Middle Mouse Button** while zoning to switch between modes.  
{{<video src="/videos/map_zoning/zoning_freeform_mode.mp4">}}

## Box Mode
**Box Mode** allows for creation of zones in mid-air, when there is no geometry to rely on.  
Click **Middle Mouse Button** while zoning to switch between modes.  
You can [Edit the zone](#zone-editing) after placing it.
![Box Mode](/images/map_zoning/zoning_box_mode.png)

## Multiple Regions
Every zone can have multiple, disconnected regions.  
This can be used to zone multiple **routes**, **starting points**, **ends**, or to create **holes in zone geometry**.  
Click the **+** button in zone properties to add a region.  
![Multiple Regions](/images/map_zoning/zoning_multiple_regions.png)

## Defrag Modifier Bonuses
Bonuses in **Defrag** require a different approach than in other modes.  
They use the same **Start and End Zones** as the **Main Track**, but apply **modifiers** to the player.  
Clicking on **+Defrag Modifier Bonus** will create the bonus and allow for editing specific **modifiers**.
![Defrag Modifier Bonuses](/images/map_zoning/zoning_defrag_modifier_bonus.png)

## Zone Editing
Any zone can be edited after it's creation.  
Simply click the **Edit Points** button and choose the side/vertex you want to edit.  
{{<video src="/videos/map_zoning/editing_zones.mp4">}}



# Global Regions
## Allow Bhop
This zone allows the player to bhop without losing speed when they normally wouldn't be able to.  
While this can be used in every mode it's mostly relevant to **Surf**.  
In Momentum Mod Bhopping in **Surf** is only possible when the game finds a 64x64 platform below the player (use `mom_bhop_area_debug 1` to see it).  
In areas where this is insufficient you should use **Allow Bhop** zones.  

{{<hint warning>}}

You might have to reload the map for these zones to take effect.  
Remember to save your zones beforehand!

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


