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
Momentum’s map submission system is how maps are officially added to Momentum Mod.  
Map submission is open to everyone, but we have higher standard than e.g. GameBanana or Steam Workshop. Notably:
- Submissions go through a **minimum-week-long** public testing period where other players can give feedback
- Submissions must be approved by an **Official Reviewer**
- Once a submission is approved, **the submitter can’t modify or delete the map**!

The ultimate goal of this system is to avoid the need for leaderboard wipes, ensuring we catch as many bugs prior to approval as possible.

# Map Submission Pipeline
Before any map is officially added to Momentum Mod it needs to go through several steps to ensure it has been ported correctly.

## Private Testing (Optional)
- Maps in private testing are only visible to the **players you choose** and **moderators**.  
    - You can invite a maximum of 20 players
    - Players invited to **private testing** need to accept the invite through a notification
- Maps can stay in private testing as long as they are being actively developed.    
- After 6 months of no updates, a warning will be sent to the submitter and in the case of no response the map will be deleted from our servers.

![Private Testing](/images/map_submission/private_testing.png)

## Content Approval
Before going into **public testing** maps need to be **reviewed by a moderator**.  
Maps are put into **content approval** automatically if **private testing** is not enabled during submission.  
**Moderators** are responsible for ensuring that:
- There is no sexually explicit material, racism, homophobia, etc.
- There are no links to scam/gambling sites
- There isn't any obviously copyrighted content
- Map is of high enough quality that it deserves a spot in public testing

While the standard for **public testing** is **not high** we expect mappers to put effort into creating their maps.  
Maps that are **very short** with **simple gameplay** will be rejected outright.  
If your map can be recreated in a **short amount of time** by someone with **barely any** mapping knowledge, it will **not be accepted**.  
If your map is still in very early development phases, please use **private testing** or **relevant mapping channels** on our [Discord](https://discord.gg/momentummod) for feedback.

## Public Testing
Maps in **public testing** are available to **everyone** in game through the **beta tab**.  

- While in **public testing**, you can keep **updating the map**, nothing is final at this stage.  
- Maps are required to stay in **public testing** for **minimum a week** before any further steps are taken.  
- At this stage players are able to review your map through [Dashboard](https://dashboard.momentum-mod.org/maps/beta) or the **#map-review** channel on our [Discord](https://discord.gg/momentummod).

After **minimum a week** you can move your map to **Final Review**.

{{<hint info>}}
When updating the map, you don't need to provide every file again.  
Only upload files that have changed.
{{</hint>}}

![Beta Tab](/images/map_submission/beta_tab.png)

## Final Review
Maps in **final review** need to be approved by an **Official Reviewer** before moving forward.  
**Official Reviewers** ensure that the map conforms to technical standards outlined in [Map Porting](https://docs.momentum-mod.org/guide/map_submission/map_porting/) and [Map Zoning](https://docs.momentum-mod.org/guide/map_submission/map_zoning/) guides.  

{{<hint info>}}
[Map Review Checklist](https://docs.momentum-mod.org/guide/map_submission/review_checklist/) that **Official Reviewers** follow is public.  
Feel free to follow it yourself to ensure that your map meets all the criteria required to move to the next stage.
{{</hint>}}

## Ranked / Unranked
After the map has been **approved** it will be officially added to the game by a **moderator**.  
**Moderators** will take into account **player's reviews** and **opinions of the gamemode's council** to select **ranking status** and **the tier** of each track.  

{{<hint info>}}
For detailed explanation of **Ranked** and **Unranked** tracks check the [Leaderboards](#leaderboards) section
{{</hint>}}

# Map Submission
In order to submit a map first you need to **log in** on [Momentum Mod's Dashboard](https://dashboard.momentum-mod.org/).  
Navigate to **Your Maps** page and press **Submit a Map**.

![Submit a Map](/images/map_submission/submit_a_map.png)

## Files
### BSP File
This is the **main map file**.  
Momentum Mod uses compressed **.bsp** files instead of **.bz2** files.  
Follow the [Map Porting Guide](/guide/map_submission/map_porting/) to properly prepare your map for submission.

### Zones File
This is a **.json** file that describes Momentum Mod's zones.  
Follow the [Zoning Guide](/guide/map_submission/map_zoning) to prepare the zones before submission.

### VMF File
This is a project file that can be opened in the map editor ( Hammer ).  
You **don't need** to upload it as it's **entirely optional**.  
You **should not** decompile existing maps to provide this file.

![Submission Files](/images/map_submission/submission_files.png)

## Details
### Map Name
This field is automatically filled after uploading the **.bsp**.  
Map Name should be **the same** as the name of the **.bsp**.  

Map Names should be modified for Momentum Mod in the following ways:
- All version information **affixes** should be removed. Examples include **_a12**, **_njv**, **_ksf**, **fix**, **_b2**, etc.
- Jump maps need to have their **prefix** changed from **jump_** to **rj_** or **sj_** depending on for which gamemode the map was originally made
- All other **prefixes and affixes** can remain **unmodified**

{{<hint info>}}
Momentum Mod does not require specific prefixes for the map to function correctly, however general conventions still apply.  
**Surf** maps should use **surf_** prefix, **Bhop** maps should use **bhop_** prefix etc.  
There are exceptions to this rule, **jump_rush** was created with both **Rocket and Sticky Jump** in mind and so the name of the map was unchanged in Momentum Mod.  
**KZ1.6** and **Defrag** don't use standard prefixes and renaming them is not required.
{{</hint>}}

### Submission Type
#### Original
Choose this if the map you're submitting is **new** and the version you're uploading was **not previously released** in any other game.
#### Port
Choose this if you're submitting a map **made by someone else**, or your own map **previously released in other games** that **wasn't modified** for Momentum Mod.

### Creation Date
Original creation date of the map, you can find it in following places depending on the gamemode:
- Surf/Bhop - Map's [Gamebanana Page](https://gamebanana.com/) is your best bet, if that doesn't exist check the **Steam Workshop**.
- Rocket and Sticky Jump - Use the last update date on [Jump.tf Forum](https://jump.tf/forum/)
- Defrag - Use the [WorldSpawn](https://ws.q3df.org/about/) submission date

If you can't find the submission date in above mentioned sources, try looking up videos of the map for **approximate creation year**.  
Input **1st January** of that year as the creation date and mention that the date is inaccurate in the [Porting Changelog](#porting-changelog).

### Youtube ID (Optional)
This is a link to the **official showcase** of the map.  
If the map you're porting doesn't have one, **omit this field**.

### Required Games
If the map you're porting uses **Valve assets** from **other Source games** they need to be [removed from the .bsp](/guide/map_submission/map_porting/#step-1-remove-valve-assets).  
Only users with relevant games installed will be able to see them.  
You can check which games are required using the **Required Games** tab in [Lumper](#TODO:LUMPER_PAGE)

### Description
Using the **original description** written by the author is **highly preferred**.  
You can find those on [Jump.tf Forum](https://jump.tf/forum/), [Gamebanana](https://gamebanana.com/), or **Steam Workshop**.  
Descriptions however, should sometimes be modified:
- **Do not include** any credits, you should instead fill out the [Credits](#credits) section instead
- **Do not include** any settings required for the game to function in other games

If there is no original description, **write your own**.  
Just **one or two sentences** is enough, it does not have to be elaborate

### Porting Changelog
If you have chosen **Port** as the [Submission Type](#submission-type), the **porting changelog** textbox will appear.  
In the **porting changelog** you should include:
- Any **non-standard** modifications done to the map
- Any issues you ran into that need special attention
- Any unresolved issues
- Any Valve assets [left in on purpose](/guide/map_submission/map_porting/#step-1-remove-valve-assets) during porting
- Inaccurate map creation date if it's impossible to find it

![Submission Details](/images/map_submission/submission_details.png)

## Images
You can use a maximum of **5 screenshots**, 1 for the thumbnail and 4 for the gallery.  
All screenshots need to be taken in Momentum Mod using `mom_official_screenshot` console command.  
{{<hint info>}}
Some mappers provide their own screenshots on [Gamebanana](https://gamebanana.com/), [Jump.tf Forum](https://jump.tf/forum/), or **Steam Workshop**.  
While you **may not use those screenshots directly**, feel free to **recreate them** using the above-mentioned command.   
{{</hint>}}

![Submission Images](/images/map_submission/submission_images.png)

## Credits
Credit section is split into 4 categories.  
Make sure you fill them out correctly using [Gamebanana](https://gamebanana.com/), [Jump.tf Forum](https://jump.tf/forum/), **Steam Workshop** or **In-Game Credit Textures**.
- **Authors**
  - For collabs this can be multiple people
  - Doesn't usually include artists, but can be if they were essential to overall vision of the map and they made lots of original stuff
  - Shouldn't include bonus mappers!
- **Contributors**
  - Bonus mappers - provide the information on which bonus they made in the credit description **( not map description )**
  - Texture artists / modelers / assets
- **Testers**
  - Anyone that did significant testing during the map's development
  - You don't have to manually include everyone that left reviews during public testing
- **Special Thanks**
  - Miscellaneous
  - People who have helped during map creation in any way that doesn't fit into other sections
![Submission Credits](/images/map_submission/submission_credits.png)


## Leaderboards
### Ranking Status
**All maps** include leaderboards for **every gamemode**.  
Unselected leaderboards **remain hidden** and can only be viewed when the map is **loaded in that specific mode**.  
Hidden leaderboards are treated as **Unranked**.

The primary types of leaderboards are:
- **Ranked** - Runs **contribute** to overall rank points
  - Shown in the **Ranked**" tab in the Map Selector
- **Unranked** - Runs **don't contribute** to player's rank points
  - Shown in the **Unranked** tab in the Map Selector
  - If an **Unranked leaderboard** gets popular, we will consider moving it to **Ranked**

Ranking status depends on the **quality of the track** but these 2 rules always apply:
- In surf, **bhop only** bonuses should be **Unranked**. They **should also not have** Bhop leaderboards
- In other modes, **single stage** bonuses should be **Unranked**
    - Full course bonuses can be **Ranked** (eg. sj_garbage b1)

### Tiers
Momentum Mod uses a **10 Tier System** for all gamemodes.  
That means the tiers **won't map 1:1** to tiers from other games.  
When submitting a map choose an approximate tier based on your personal experience, it will be later refined by the **gamemode's council**. 

![Submission Leaderboards](/images/map_submission/submission_leaderboards.png)
