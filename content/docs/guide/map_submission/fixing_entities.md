---
title: Fixing Entities and Other Issues
categories:
  - guide
tags:
  - mapping
  - guidelines
weight: 4
---

# Introduction
This guide provides a list of **required modifications** for entities when porting maps.  
It also lists fixes for other [rare issues](#rare-issues) you may encounter when porting.  
If the entity you are looking for is not in here please ask for help in **#map-porting** channel on our [Discord](https://discord.gg/momentummod).  
Detailed information on entities can also be found on [Valve Developer Wiki](https://developer.valvesoftware.com/wiki/Main_Page).

# Boosters
Boosting players can be achieved in various ways and therefore triggers need to be evaluated on a case-by-case basis.  
This guide will teach you how to fix every common scenario.

## trigger_push and trigger_multiple
**trigger_push** applies a constant boost to a player inside it's volume.  
**trigger_multiple** can be used for many purposes, however here we only care about it when it gives the player a singular burst of speed.  
Both need to be modified depending on how you activate them.

1. Open entity tools by typing `devui_show entitytools` in console
    - You can bind this to a key for ease of access, `bind <key> "devui_show entitytools"` in console
2. Open **Boost Triggers** section and find the trigger you want to edit

{{<hint info>}}

**Entity tools** will list all boost triggers on the map. You can teleport to them by clicking **Teleport to Trigger** and fix each one based on scenarios listed below.  
When making these changes it's perfectly fine to export them only once, when you are done with everything, however there is no downside to gradually saving your progress.

{{</hint>}}
{{<hint info>}}

You can change the font size of **Entity Tools** by using `devui_font_scale` command in console.

{{</hint>}}

### Scenario 1: Constant push is required
On some maps it is necessary for the player to be constantly pushed while inside of the trigger.  

#### If the boost is applied in the air / while surfing
3. Check the **cooldown** box and type **1** in the textbox
4. Click **Apply Changes**
5. [Export to Lumper](#export-to-lumper)

![Surf Ramp Boost](/images/map_porting/enforce_a_cooldown.png)

#### If the boost is applied while walking on the ground
3. If the ground is:
    - completely smooth ( no ramps or bumps ), check **Only activate when standing on the ground**
    - not smooth ( has uneven ground or ramps ), add a cooldown to it with [the steps above](#if-the-boost-is-applied-in-the-air--while-surfing)
4. [Export to Lumper](#export-to-lumper)

![Floor boost](/images/map_porting/floor_boost.png)

### Scenario 2: Only a single push matters
In this case modifications are required depending on how you activate the trigger.

#### If you activate the trigger by jumping on it:
3. Click **Convert to OnJump**
4. [Export to Lumper](#export-to-lumper)

![OnJump Boost](/images/map_porting/onjump_boost.png)

#### If you activate the trigger by flying/surfing into it:

3. Add a cooldown with [the steps above](#if-the-boost-is-applied-in-the-air--while-surfing)
4. [Export to Lumper](#export-to-lumper)

#### If you activate the trigger by walking into it:
3. Fail the map/stage and don't move your mouse so you look directly at the trigger
    - You can also set your angle by using `setang X Y Z` command in console
    - If setting the angle manually use multiples of 90 such as `setang 180 0 0` or `setang 0 90 0` to orient yourself properly
4. Walk into the trigger by pressing **W only**
    - The game will automatically get all relevant information after using the trigger in this way
4. Click **Convert to Set Speed**
5. [Export to Lumper](#export-to-lumper)

![Convert To SetSpeed](/images/map_porting/convert_to_setspeed.png)

## trigger_catapult
All catapults that boost the player directly up will be broken in Momentum Mod.  
Fix them by multiplying the value of the **playerSpeed** key by 1.5

![Fix Vertical Catapults](/images/map_porting/fix_vertical_catapults.png)

# Logic
These entites manage logic on the map. They need to be evaluated case-by-case and removed if necessary.

## logic_auto
While **logic_auto** has many use-cases, some maps use it to set server variables. This is not allowed in Momentum Mod.

1. Look through outputs of every **logic_auto**
2. Remove only outputs that have parameters starting with **sv_** or **mp_**
    - Take note of **sv_maxvelocity** if present, you will need to set that value when zoning
    - If **sv_allowbunnyhopping 1** is present, you will need to consider globally allowing bhop on the map, this generally only matters for **Surf**
3. If by the end of that process the entity doesn't have any outputs, you can remove it completely

![Delete Server Commands](/images/map_porting/delete_server_commands.png)

## logic_timer
This entity is generally used for displaying time on Rocket Jump / Sticky Jump / KZ maps.  
Old surf maps however, often use it to teleport players to jail after a set amount of time.
If used for jail, this and all associated entities need to be removed.

1. Determine if **logic_timer** is used for jail, either by playing the map or reading keyvalues such as **targetname**
2. If it's used for jail, copy the **Target Entity Name** to **Value** field
    - Make sure to clear out all other search fields so that no entities are filtered out
3. Remove **all** entities that come up
4. Remove the original **logic_timer**

![Lumper Timer](/images/map_porting/lumper_timer.png)

![Lumper Teleports](/images/map_porting/lumper_teleports.png)

# Other entities
This section lists various entities that have changed behavior in Momentum Mod and require modifications.

## trigger_teleport
Teleports in Momentum Mod retain player speed by default. This needs to be changed depending on gamemode.

### Surf
In surf it's important to modify the way a player is teleported to the start of the map/stage/bonus for consistant timer behavior.  
After applying this fix the timer will stop the moment the player hits the ground ( not when entering the zone ).  
1. Open entity tools by typing `devui_show entitytools` in console
    - You can bind this to a key for ease of access, `bind <key> "devui_show entitytools"` in console
2. Select a teleport destination. You can check where it's located by clicking **Teleport to Destination**
    {{<hint warning>}}

    Make sure you only select destinations at the start of a stage/map/bonus. Do not edit other teleports such as those mid-stage

    {{</hint>}}
3. Select **Keep Negative Z**
4. Redo steps 2-3 for all appropriate destinations
5. [Export to Lumper](#export-to-lumper)

![Keep Negative Z](/images/map_porting/velocity_mode.png)

### Bhop
Some maps force the player to constantly jump to not get teleported.   
This can cause issues when rapidly jumping/sliding up slopes or jumping up a ledge when the triggers are sticking out.
1. Open entity tools by typing `devui_show entitytools` in console
2. Open the **Bhop Trigger Fix** section
3. Click **Fix Bhop Triggers**
4. [Export to Lumper](#export-to-lumper)

![Fix Bhop Triggers](/images/map_porting/fix_bhop_triggers.png)

### Rocket Jump
Sometimes it's possible to hit a teleport while going upwards. This can lead to the player being launched off the platform right after failing.  
You should not blindly edit these using **Entity Tools** as that may lead to breaking teleport jumps.

1. Identify the teleport in Lumper by using **Sync Target** or **Sync Pos** option in **Entity Editor** tab
    - Sync Target will display all entities you are looking at in the game
    - Sync Pos will display all entities in the specified radius around you
    - Sometimes it can be difficult to find proper triggers because of other entities overlapping them, ask on our [Discord](https://discord.gg/momentummod) in **#map-porting** channel if you need help
2. Click on **Add KeyValue**
3. In the **newproperty** field type **velocitymode**
4. In the **newvalue** field type **1**  

![Fix Preserving Speed](/images/map_porting/fix_preserving_speed.png)

## func_button
Shooting a button to activate it in **Rocket Jump** can have a different effect in Momentum Mod compared to TF2.
1. Check all func_button in Lumper
2. Identify those that have an **OnDamaged** output
3. Change **OnDamaged** to **OnPressed**
3. Add **512** to **spawnflags** if it's not already enabled
    - To determine if this flag is enabled divide the value in **spawnflags** by 512 and round down the result. If it's **odd** the flag is enabled
4. If the button is moving very slowly add **1** to **spawnflags** to disable it's movement  

![Fix Buttons](/images/map_porting/fix_buttons.png)

## trigger_gravity
Sometimes **trigger_gravity** is meant to apply permanent gravity changes to the player.   

{{<hint warning>}}

Gravity triggers like that usually come in pairs, one to **modify the gravity**, one **to revert it**.
Make sure you modify all relevant triggers when applying this fix

{{</hint>}}

1. Identify the trigger in Lumper by using **Sync Target** or **Sync Pos** option in **Entity Editor** tab
    - Sync Target will display all entities you are looking at in the game
    - Sync Pos will display all entities in the specified radius around you
    - Sometimes it can be difficult to find proper triggers because of other entities overlapping them, ask on our [Discord](https://discord.gg/momentummod) in **#map-porting** channel if you need help
2. Click on **Add KeyValue**
3. In the **newproperty** field type **persist**
4. In the **newvalue** field type **1**

{{<hint info>}}

It's also possible to resolve this issue using the **Gravity Triggers** section in **Entity Tools** and [exporting to Lumper](/guide/map_submission/fixing_entities/#export-to-lumper).  
That however, only offers an option to modify **all** gravity trigges on the map.  
Please make sure that this fix is applicable to **all of them** before using it.


{{</hint>}}

![Fix Gravity Triggers](/images/map_porting/fix_gravity_triggers.png)

    
# Export to Lumper
The changes made with **Entity Tools** will be reverted once you exit the map.  
Lumper can be used to apply these changes permanently.
1. While still in **Entity Tools** click **Export To Lumper**
    - This will automatically create a config with all changes you made and switch your tab to **Jobs**
2. Run the Job

{{<hint info>}}

Alternatively you can **Export To File** and then apply it in Lumper using the **Stripper(File)** job.  
These files are saved to **/momentum/maps/entitytools_stripper** folder.

{{</hint>}}  

![Apply Patches](/images/map_porting/apply_patches.png)


# Rare Issues
Issues listed in this section are very rare and apply mostly to **old maps**.  
Vast majority of maps **will not** require any of these fixes.  

## Old Bhop Platforms
Some old bhop maps use **func_button** or **func_door** for bhop platform. These should be converted to **func_bhop**
1. Open entity tools by typing `devui_show entitytools` in console
2. Open the **Bhop Block Fix** section
    - If the number of **Bhop Blockfix Entities** is **0** you don't need to fix anything
3. Make sure the checkbox is ticked ( it should be by default )
4. [Export to Lumper](#export-to-lumper)

## Small Models
Maps compiled on an old version of source engine can have models that are too small.
1. Open entity tools by typing `devui_show entitytools` in console
2. Open the **Model Scale Fix** Section
    - Teleport to props to see if they are the correct size
3. Click **Fix All Model Scales**
    - TODO: Is there any scenario where applying this fix breaks models? If not it could be automated
4. [Export to Lumper](#export-to-lumper)

![Small Models Before](/images/map_porting/fix_model_scale_before.png)
![Small Models After](/images/map_porting/fix_model_scale_after.png)

## Stripper Configs
Community servers sometimes apply server side fixes to maps ( mainly applicable to Rocket Jump / Sticky Jump )  
You can apply them permanently to the **.bsp** with Lumper

- [Tempus ( Rocket Jump / Sticky Jump )](https://github.com/waldotf/tempus_stripper_code)

{{<hint danger>}}

While these are sometimes useful, **a lot of them** are not applicable to Momentum Mod.  
Certain configs fix mapper mistakes, such as broken/missing teleports
- These are important and should **probably** be applied unless fixed by other means  

Other configs add visual clarity, such as adding laser beams to visualize zones better.
- These **should not** be applied  

{{</hint>}}

{{<hint info>}}

Read through the config relevant for you map carefully before deciding to apply it.  
Apply your best judgement regarding what configs are relevant to Momentum Mod.  
If you're not sure if you should use them, please ask in **#map-porting** channel on our [Discord](https://discord.gg/momentummod).

{{</hint>}}

1. Download the **.cfg** file
2. Go to **Jobs** tab in Lumper
3. Add the **Stripper (File)** job
4. Provide the path to your downloaded **.cfg** and run the job

![Download Stripper Config](/images/map_porting/download_stripper_config.png)
![Apply Stripper Config](/images/map_porting/apply_stripper_config.png)

## Invalid VMT Files
Momentum Mod uses stricter parsing rules than other source games.  
Fix **.vmt** of broken textures using the **Pakfile Explorer** in Lumper.

![Invalid VMT](/images/map_porting/invalid_vmt.png)
![Invalid VMT Lumper](/images/map_porting/invalid_vmt_lumper.png)

## Missing Skyboxes
Skyboxes will sometimes fail to load in maps compiled with HDR.
1. Go to **Pakfile Explorer** tab
2. Find the **.vmts** of the skybox
    - It will be in **/materials/skybox**
    - There will be 6 pairs of **.vmt** and **.vtf**, one for each side
3. Open every **.vmt** and change the first line to **"Sky_SDR"** (including quotes)

![VTF Edit Sky SDR](/images/map_porting/lumper_sky_sdr.png)
![HDR Skybox](/images/map_porting/hdr_skybox.png)

## Missing Shadows on CS:GO Maps
Some CS:GO maps use cascaded shadow maps (CSM) to create more detailed shadows.  
In Momentum Mod **env_cascade_light** entity must exist for them to display properly.

1. Go to **Entity Editor**
2. Click the **+**
    - This will create an empty entity showing as **\<missing classname!\>** in the list
3. Fill out the new entity using the image below
    - Copy the origin value from any other entity
    
![CSM Lumper](/images/map_porting/csm_lumper.png)
![Missing CSM Entity](/images/map_porting/csm_broken.png)
![Working CSM](/images/map_porting/csm_working.png)

## Corrupt HDR Cubemaps
Some maps from CS:S have corrupted reflections in Momentum Mod.  
In cases we've seen they've been flat blue/black textures.  
1. Download the CS:GO version of the map
    - Check if it exists on [gamebanana](https://gamebanana.com/) or [surfheaven](https://surfheaven.eu/)
2. Open it in lumper and go to the **Pakfile Explorer** tab
3. Export the entire **/materials/maps** folder
4. Close Lumper
    - You may now delete the cs:go port you downloaded
5. Open the map you were porting in Lumper
6. In **Pakfile Explorer** delete the entire **/materials/maps** folder
7. Right click on **/materials** and create a new **/maps** folder
8. Right click on **/maps** → Import Directory
9. Import the **maps** folder you extracted

{{<hint info>}}

If the CS:GO port doesn't exist you can manually delete → import → rename every single **.vtf** file in **/materials/maps** with [this file](https://cdn.discordapp.com/attachments/1370920480910999614/1402525150955700224/c-2569_4133_3847.hdr.vtf?ex=68d2da15&is=68d18895&hm=e1d55c87f0283e7bfde1b2b9372b62d6002314d937f157b7fff9112fd8d02841&)  
You need to make sure all filenames match **exactly** after importing and renaming  
The best way is to copy the **.bsp** for backup and open 2 Lumper windows side by side so that you can copy the filenames from one to the other  
TODO: Rewrite if replacing textures with vtfs is added to lumper

{{</hint>}}

![Corrupt Cubemaps](/images/map_porting/corrupt_cubemaps.png)

## Misplaced / Missing triggers
On very rare occassions maps can have missing or misplaced triggers.  
It's possible to add any rectangular triggers to the map without decompiling by using community made tools and Lumper.
- [vmf_to_stripper](https://github.com/benjl/vmf_to_stripper/) - Allows for converting triggers made in hammer to a stripper config
- [zoneToTrigger](https://github.com/Natanxp2/zoneToTrigger) - Allows for converting [Momentum Mod zones](/guide/map_submission/map_zoning/) to a stripper config

{{<hint danger>}}

Be very careful when modifying maps in this way.  
It's best to contact the mapper to make sure they are fine with whatever you are trying to do.  
You can always ask for help in **#map-porting** channel on our [Discord](https://discord.gg/momentummod).

{{</hint>}}

## Collectibles
Maps with collectibles can be ported in 2 ways:
- Convert the collectible system triggers to [Momentum's collectible system entities](/guide/collectibles/)
- [Zone the map](/guide/map_submission/map_zoning/) using unordered, required checkpoints

{{<hint warning>}}

Converting collectibles to Momentum Mod's system can be complicated.  
There is no one-way-fits-all solution.  
Apply your best judgement when attempting it.

{{</hint>}}

## Moving Brushes

Some maps have moving brushes which have cycles that are too fast to be hit consistently which effectively introduces RNG to competitive runs.    
They should be frozen or deleted **only** if there is **community consensus** around it.  
If you're not sure about this, please ask in **#map-porting** channel on our [Discord](https://discord.gg/momentummod)!

![Moving Brushes](/images/map_porting/moving_brushes.gif)


 
