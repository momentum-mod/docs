---
title: Fixing Entities and Other Issues
categories:
  - guide
tags:
  - mapping
  - guidelines
weight: 3
---

# Setup
Some **fixes** and **required modifications** can be automated using in-game **Entity Tools**.  
Changes made with **Entity Tools** need to be [Exported To Lumper](#export-to-lumper) and then saved in the **.bsp**.

1. Open **Entity Tools** by typing `devui_show entitytools` in console
2. Go through each section of the **Entity Tools** and follow to guide to apply correct fixes

{{<hint info>}}

You can change the font size of **Entity Tools** by using `devui_font_scale` command in console.

{{</hint>}}

{{<hint info>}}

When making these changes it's perfectly fine to [Export](#export-to-lumper) them only once, when you are done with everything, however there is no downside to gradually saving your progress.

{{</hint>}}

# Entity Tools
## Teleport Velocity Mode
Teleports in Momentum Mod **retain player speed** by default.  
This needs to be **sometimes changed** as explained in scenarios below.  
Go through each **teleport destination** by clicking **Teleport To Destination** and apply relevant fixes.  
{{<expander title="How is the entity modified?">}}
**Entity Tools** match every trigger that teleports the player to chosen destination and add/change the **velocitymode** keyvalue.
- 0: Retain Speed
- 1: Reset Speed
- 2: Keep Negative Z Velocity
- 3: Redirect Velocity ( not available as an automatic conversion )
{{</expander>}}

### Keep Negative Z
This mode is **generally** only relevant to **Surf**.  
Apply it to all teleports that are meant to **completely stop** player's **horizontal** momentum.  

{{<hint info>}}
Use `r_drawclipbrushes 1` in console or `/clips` in chat to enable clip brushes.  
If the **teleport destination** is inside of a clip box, you should apply this fix
{{</hint>}}

{{<hint warning>}}

When the player hits a teleport with this mode selected:
- They lose all control until they land on the ground  
- Zones are not activated until the player hits the ground
{{</hint>}}

![Keep Negative Z](/images/map_porting/velocity_mode.png)

### Reset
Apply this mode to all teleports that are meant to completely reset player's momentum.  
Examples include:
- **Rocket Jump and Sticky Jump** teleports that launch the player off the **platform** when hit with an **upwards angle**
- **Conc and Ahop** fail teleports

![Fix Preserving Speed](/images/map_porting/fix_preserving_speed.png)

## Boost Triggers
Both **trigger_push** and **trigger_multiple** can be used for boosting the player.  
They need to be converted depending on how the boost is applied.  
Teleport to **every trigger** and apply a modification **if it fits** into one of the **following scenarios**.

### Scenario 1: The boost is applied in the air / while surfing

1. Check the **cooldown** box and type **1** in the textbox
2. Click **Apply Changes**

{{<expander title="How is the entity modified?">}}
The chosen trigger has two **OnEndTouch** outputs added.  
First one disables it immediately after a player exits it's volume.  
Second one re-enables it after chosen duration.
![Cooldown Details](/images/map_porting/cooldown_details.png)
{{</expander>}}
![Surf Ramp Boost](/images/map_porting/booster_cooldown.png)

### Scenario 2: The boost is applied by jumping on it

1. Click **Convert to OnJump trigger_multiple**

{{<expander title="How is the entity modified?">}}
Matched trigger's **OnEndTouch** output is modified to **OnJump**
{{</expander>}}
![OnJump Boost](/images/map_porting/onjump_boost.png)

### Scenario 3: The boost is applied by walking into it
1. Fail the map/stage and don't move your mouse so you look directly at the trigger
    - You can also set your angle by using `setang X Y Z` command in console
    - If setting the angle manually use multiples of 90 such as `setang 0 180 0` or `setang 0 90 0` to orient yourself properly
2. Walk into the trigger by pressing **W only**
    - The game will automatically get all relevant information after using the trigger in this way
3. Click **Convert to Set Speed**

{{<expander title="How is the entity modified?">}}
Chosen trigger is converted into **trigger_setspeed**.  
Example of the trigger conversion on **surf_fruits**:
![SetSpeed Pre Conversion](/images/map_porting/setspeed_details_pre.png)
![SetSpeed Post Conversion](/images/map_porting/setspeed_details.png)
{{</expander>}}

![Convert To SetSpeed](/images/map_porting/convert_to_setspeed.png)

### Scenario 4: The boost is applied while walking / standing on the ground
1. If the ground is:
    - completely smooth ( no ramps or bumps ), check **Only activate when standing on the ground**
    - not smooth ( is uneven or has ramps ), add a cooldown to it with [the steps above](#scenario-1-the-boost-is-applied-in-the-air--while-surfing)

{{<expander title="How is the entity modified?">}}
**filter_momentum_surface_collision** is added to the bsp with keyvalues:  
**filtermode: 1**  
**spawnflags: 7** 

That filter is then applied to the chosen trigger by adding the **filtername** keyvalue corresponding to filter's **targetname**
{{</expander>}}

![Floor boost](/images/map_porting/floor_boost.png)


## Gravity Triggers
Sometimes **trigger_gravity** is meant to apply permanent gravity changes to the player.   

{{<hint warning>}}

Gravity triggers like that usually come in pairs, **one to modify the gravity, one to revert it**.  
Make sure you modify all relevant triggers when applying this fix.  

{{</hint>}}

{{<hint danger>}}

Do **NOT** apply this fix if the trigger is meant to modify gravity **only** when a player is inside of it's volume.

{{</hint>}}

1. Go to the **Gravity Triggers** section.
2. Identify triggers that are meant to modify gravity **permantently** and check **persist** for them.

{{<expander title="How is the entity modified?">}}
**persist: 1** keyvalue is added to the chosen trigger
{{</expander>}}

![Fix Gravity Triggers](/images/map_porting/gravity_persist.png)

## Model Scale Fix
Maps compiled on an old version of source engine can have models that are too small.
1. Open entity tools by typing `devui_show entitytools` in console
2. Open the **Model Scale Fix** Section
    - Teleport to props to see if they are the correct size
3. Click **Fix All Model Scales**

{{<hint info>}}

Either all models need this fix, or none of them do.  
There are no known cases of models having to be fixed individually.

{{</hint>}}

{{<expander title="How is the entity modified?">}}
**scaletype** keyvalue is changed to **1 ( Non-Hierachical )**
{{</expander>}}

![Small Models Before](/images/map_porting/fix_model_scale_before.png)
![Small Models After](/images/map_porting/fix_model_scale_after.png)


## Bhop Trigger Fix
Some maps force the player to **constantly jump** to not get teleported.   
This can cause issues when **rapidly jumping/sliding up slopes** or jumping up a ledge when the triggers are sticking out.  
If this option is available in the **Entity Tools**, you should **always** use it.

{{<expander title="How is the entity modified?">}}
Maps forcing players to constantly bhop do so by using **filter_activator_name** and applying / removing it from the player after a delay using **OnTrigger** outputs.  

**Entity Tools** add **filter_activator_context** to the bsp with keyvalues:  
**Negated: 1**  
**ResponseContext: _mom_leftground:\***  

These 2 filters are then combined into a **filter_multi**.  
All **trigger_teleport** using the original filter are modified to use the new **filter_multi**.  
All **trigger_multiple** originally applying the **targetname** to the player have their outputs modified:
1. Original **OnTrigger** outputs are converted to **OnLand**
![Fix Bhop Triggers](/images/map_porting/bhop_triggerfix_details_output_changes.png)
2. New outputs are added to fix improrer trigger activation
![Fix Bhop Triggers](/images/map_porting/bhop_triggerfix_details_new_outputs.png)
{{</expander>}}

![Fix Bhop Triggers](/images/map_porting/fix_bhop_triggers.png)

## Bhop Block Fix
Some old bhop maps use **func_button** or **func_door** for bhop platform. These should be converted to **func_bhop**.  
If this option is available in the **Entity Tools**, you should **always** use it.  


{{<expander title="How is the entity modified?">}}
All **func_door** are converted to **func_bhop**.
![Block Fix](/images/map_porting/bhop_blockfix.png)
{{</expander>}}

## Export to Lumper
The changes made with **Entity Tools** will be reverted once you exit the map.  
Lumper can be used to apply these changes permanently.
1. While still in **Entity Tools** click **Export To Lumper**
    - This will automatically create a config with all changes you made and switch your tab to **Jobs**
2. Run the Job
3. Click **File → Save** to save your changes

{{<hint info>}}

In order to check if everything was applied correctly you will have to reload the map in the game.  

{{</hint>}}

{{<hint info>}}

Alternatively you can **Export To File** and then apply it in Lumper using the **Stripper(File)** job.  
These files are saved to **/momentum/maps/entitytools_stripper** folder.

{{</hint>}}  

![Apply Patches](/images/map_porting/export_to_lumper.png)


# Modifications in Lumper

## func_button
Some buttons reset their position **much slower** in Momentum Mod.  
Add **1** to **spawnflags** in order to disable their movement

![Fix Buttons](/images/map_porting/fix_buttons.png)


## logic_timer
This entity is generally used for displaying time on Rocket Jump / Sticky Jump / KZ maps.  
Old surf maps however, often use it to teleport players to **jail** after a set amount of time.  
If used for **jail**, this entity needs to be removed.

![Lumper Timer](/images/map_porting/lumper_timer.png)


# Rare Issues
Issues listed in this section are very rare and apply mostly to **old maps**.  
Vast majority of maps **will not** require any of these fixes.  

## Stripper Configs
Community servers sometimes apply server side fixes to maps ( mainly applicable to Rocket Jump / Sticky Jump )  
You can apply them permanently to the **.bsp** with Lumper

- [Tempus ( Rocket Jump / Sticky Jump )](https://github.com/waldotf/tempus_stripper_code)

{{<hint danger>}}

While these are sometimes useful, **a lot of them** are not applicable to Momentum Mod.  
Certain configs fix mapper mistakes, such as broken/missing teleports.
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

## Collectibles
When porting maps with collectibles make sure that they function correctly **according to the mapper's original design**.  
Verify that the state of collectibles is **properly reset** when restarting or switching tracks.  
Some maps won't require any fixes.  

Maps that do need to be fixed can be ported in 2 ways:
- Convert the collectible system triggers to [Momentum's collectible system entities](/guide/collectibles/)
- [Zone the map](/guide/map_submission/map_zoning/) using unordered, required checkpoints

{{<hint warning>}}

Converting collectibles to Momentum Mod's system can be complicated.  
There is no one-way-fits-all solution.  
If needed, please ask for help in **#map-porting** channel on our [Discord](https://discord.gg/momentummod)!

{{</hint>}}

## Moving Brushes

Some maps have moving brushes which have cycles that are too fast to be hit consistently which effectively introduces RNG to competitive runs.    
They should be frozen or deleted **only** if there is **community consensus** around it.  
If you're not sure about this, please ask in **#map-porting** channel on our [Discord](https://discord.gg/momentummod)!

![Moving Brushes](/images/map_porting/moving_brushes.gif)


 
