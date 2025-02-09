---
long_title: "Gamemode Guide: Climb"
categories:
  - guide
tags:
  - game mode
  - climb
  - kz
  - xc
---

## What is Climb?

Climb, also known as **Kreedz** (KZ) in CS 1.6 and CSGO, or **Xtreme Climb** (XC) in CSS, is a popular community game mode found in every Counter-Strike game.  
Climb is a series of platforming challenges that can be best simplified as "trick jumps" which pull from the big 3 movement disciplines in source:  
**Strafe**, **Bunnyhop** (Bhop), and **Surf** to challenge players in scaling its maps as fast as possible.

## History of Climb

Climb started in Counter-Strike 1.1. A mapper named Kreedz decided to make a fun, mess-around map called **kz_hauntedhouse** that did not have the usual defuse objective for his friends. Kreedz named all his maps with a **kz_** tag as a sort of signature. Kreedz enjoys climbing as a hobby, so he felt that there should be some trees you could climb.  Kreedz found this aspect of the map to be particularly fun and so did others. He started making more mess-around maps with this climbing aspect sprinkled in and eventually made **kz_giantbean** which was entirely focused on climbing and featured a built-in timer made by Kreedz. With the popularity of kz_giantbean and Kreedz making the first timer entity that could be placed into maps, Kreedz formed a community around these climb maps. Mappers would approach Kreedz to have their maps evaluated and if it was deemed to be up to standard, Kreedz would give them the timer entity and allow it to have the **kz_** tag as a seal of approval. Even after Kreedz's departure from mapping, the popularity of these climbing maps was enough to go on to other Counter-Strike games and keep Kreedz as its namesake.
## How Climb Works

### Strafe

Strafe is the most common focus for maps. Strafing can come in the form of Long Jumps and taking indirect lines.  
**Airstrafing** works in the same way as in the Bhop and Surf game modes; using a strafe key (A or D) while guiding the mouse off in that direction causes the player to receive more speed.  
A **Prestrafe** is a technique that has been patched out of Counter-Strike since CSGO but has been re-added for the Climb game mode. While on the ground, players hold **both** the W and strafe keys and guide the mouse into the direction they are moving, right for W+D and left for W+A. Performing a Prestrafe correctly will let you gain speed on the ground. Gaining speed before the jump and while in the air lets you travel further. This is called a **Long Jump**. 
Note that since Airstrafing causes the player to deviate from their intended destination (assuming it is straight in front of them), Long Jumps typically incorporates multiple left and right Airstrafes into a jump which counteract each other and keep the player close to a straight line. These multiple strafes in opposite directions gives the appearance of a "flicky" or "jittery" Airstrafe but a lot of practice goes into syncing the A and D keys with quick but smooth mouse movements.

Sometimes you may not be able to take a direct line due to an obstruction.  
The two most common forms of this are rounding a corner (often without being able to see the next platform) and 2 platforms separated by a thin wall.
In this case, air strafing is not used to gain speed but as a form of air control. The principle is the same but typically smooth turns that stay close to the wall are needed (don't bump into the wall or else you will take out all your speed and fall straight down!).  

### Bunnyhop (Bhop)

Bhop has reduced potential compared to the Bhop game mode.  
Bhopping has its own speed cap: **TBD (Momkz)**.      **380 (KZT)**,      **300 (1.6 Climb)**. The default running speed in all Climb modes is 250.  
This cap is separate from the **max velocity** cap (how fast the engine lets you go before not bothering to give any more speed 3500 by default).  
Any time you jump the Bhop speed cap will be used meaning even if the player gained speed purely through falling or surfing,  
as soon as they try to jump off the ground with this speed, the cap will activate. If the player reaches this cap and tries to jump again,  
their speed will be reset to:  **TBD (MomClimb)**,     **380 (KZT)**,       **240 (1.6 Climb)**.  
>[!NOTE] 
>Friction is applied after the Bhop speed cap, so an imperfect Bhop will reduce your speed starting from the reset amount

However, this Bhop cap still allows the player to gain more speed than a Prestrafe hence, Bhopping has the potential to go further than a Long Jump. Useful to remember when dealing with difficult Long Jumps (although this may form a bad habit if relied upon).  
Bhop jumps can also be required by the mapper by using "Bhop Blocks" that teleport you back if you try standing on them, same as the Bhop game mode. Conversely, mappers can also add triggers that disable Bhops inside an area.  

### Surf

Surf is very similar to its game mode counterpart. KZT  is 128 tick, MomClimb and 1.6 Climb are 100 tick while the Surf game mode is 66 tick. This means gaining speed is quicker and losing speed is harder in Climb compared to Surf.  
Maps made with MomClimb and KZT in mind can have traditional surf sections. The length and difficulty of these sections are entirely up to the map. Usually they are much shorter (sometimes only 1 ramp) compared to dedicated Surf maps.  
1.6 Climb has a special version of Surf called **Slide**.  
1.6 Climb has much lower air acceleration (10aa compared to MomClimb and KZT's 100aa). This means players can't as easily flick onto a ramp ("board") and generate speed or flick off a ramp and generate height.    
Because of this "Slide" sections are usually brief and focus on keeping on the board rather than gaining enough speed to fly off.

Remember that in any movement mode you can always slide up gentle slopes with just 'W' while looking at the slope!

### Stamina (Jump-Land Penalty) [1.6 Climb Only]

Any time the player jumps (not when they are in the air for any other reason such as falling off something) a timer starts for about 1.31 seconds.
Whenever the player lands, they will be slowed for however much time is left on the timer. The severity of the slowdown is also proportional to how much time is left on the timer, so you will move slower at the beginning of the timer compared to near the end of the timer.
For reference, if a player jumps and lands on flat ground about 0.66 seconds or about half the time is taken.
This means that jumping up to something slows you down longer and harder since you land earlier while jumping to something beneath will slow you less for a shorter duration or not at all if the timer completely expires.  
>[!IMPORTANT]
>The slowdown affects both horizontal and vertical movement: running is slower but also your jump height is reduced

A Bhop, even a perfect one, does not circumvent the vertical movement penalty: Bhops will always get smaller height compared to a normal jump, unless the Bhop was done after falling long enough to expire the stamina timer, or the Bhop was done after walking off a platform rather than jumping off.  
Thus, Bhops may not always give you the best distance or be able to reach high places, but it is important to keep the exceptions in mind.  
[for more technical details and exact values, refer to this doc](https://kzguide.gitlab.io/techniques/stamina/).

---
## Advanced Techniques 
Climb has some techniques of its own rarely seen outside of its game mode.

### Fast Ladder Climbing 
Ladders can be climbed by "walking into them". If you are directly facing the ladder hold W, if sideways A/D. If you face the ladder diagonally you can climb the ladder both ways. If you hold W and A/D the speeds add onto each other resulting in a much faster climb.    

### Ladder Jump
The speed you gain from fast ladder climbing is enough to fling you into the air! This technique does not have anything to do with inputting jump (which just pushes you off the ladder) and is more like surfing. The way you flick off dictates your trajectory, and whether you trade speed for height and vice versa.  However, unlike surfing there is no acceleration or deceleration on ladders, so speed changes instantly when you move your mouse or change inputs.

### Crouch Bhop
Bhopping starting in a crouch position. If a jump is started from a standing position, crouching in the air will raise your collision box up 18 units (you tuck in your legs). If you start in a crouched position and jump you will not be able to get this extra 18 units of height.  
This is great when trying to avoid map hazards like low ceilings, since you stay low to the ground while keeping a small collision box if you choose to stay crouched.  ![crouch bhop](/images/climb/Crouch_Bhop.png)
>[!NOTE]
>Crouching will also limit your ability to turn in the air and thus gain speed as well.  

### Standup (1.6 Climb Only)
For maximum airtime, it is best to stay crouched as you are about to land, but what if you need airtime but want to land in a standing position? If you are in a crouching position close enough to the ground (less than 18 units away) the engine will not let you uncrouch since you'll clip into the floor, instead it waits until the moment you've hit the ground or more space has opened beneath you and uncrouches. This behavior gives you a grace period to execute a normally frame-perfect (or tick-perfect) outcome of being in a standing position as soon as you land.
>[!NOTE]
>The faster you are falling, the shorter the grace period is

### Standup Bhop (1.6 Climb Only)
Combines a Standup with a Bhop. The result is you gain extra airtime and distance with your crouch, but your next jump is in the standing position meaning you can “tuck in your legs” again and get the extra 18 units of height. This technique is especially useful in 1.6 Climb since you will also bleed slightly more time off stamina by staying in the air longer.   
Standup Bhops are not a replacement for regular Bhops or Crouch Bhops, since you may prefer to land sooner and jump sooner or need to avoid map hazards.  

### Double Duck [1.6 Climb only]
In 1.6 Climb, while on the ground pressing crouch and releasing it before you are fully crouched will cause the game to uncrouch you prematurely, the result is that you pop 18 units off the ground (very small compared to a jump) you can improve this height by crouching again in the air resulting in being 36 units off the ground (better but still small compared to a jump).  Binding crouch to the scroll wheel makes these rapid crouches easier. 
you can use Double Ducks to climb small humps without wasting time overshooting with a jump, but in addition to this they have one big advantage over jumps:
**crouching is not considered a jump, so the jump-land penalty does not activate.**  
This means you can gain speed with air strafing without worrying about slowing down upon landing. This is used in Count Jumps.  If you wish to perform a Standup version that will give the most airtime it is better to have another bind for crouch on a keyboard so that it can be held.


### Count Jump [1.6 Climb only]
Done by first gaining speed with a Prestrafe then Double Ducking to gain more speed in the air, land then finally jump. It can also be used in a Bhop sequence where doing another jump would result in over/under shooting the next platform, in this case the double duck is used as a "mini-jump" in the sequence and must be timed just like a Bhop. This is also sometimes called a **Count Jump**.    
### Duck Roll [1.6 Climb only]
Sometimes called Ground Strafing or G-Strafing  in Counter-Strike, Duck Roll is its given name in Half-life so for consistency's sake It will be called Duck Roll.  
It is a "Bhop" sequence comprised entirely of rapid Double Ducks. This lets you get past the Bhop speed cap since it is not considered a jump. It is very hard to maintain Duck Rolls given how much more frequently you must crouch compared to jumps in a Bhop sequence. Duck Rolls are vertically limited, so even with more speed they may not reach a place a Bhop can. In Climb it is usually used after landing from a surf or slide to maintain high speed. Since Duck Rolls are just many Double Ducks, it is possible to perform a Standup version that requires holding crouch for a little bit after doing a Double Duck which preserves speed a little better. 
Duck Roll’s effectiveness heavily depends on the map.  

### High Jump [1.6 Climb only] 
In Source and Goldsrc there exists a property called **edge friction** it decides what factor that "normal" friction will be multiplied by when a player is close to an edge. If it is set higher than 1, you will slow down every time you are close to the edge of a platform. These are the edge frictions for each Climb mode:  **TBD (MomClimb)**,     **1 (KZT)**,       **2 (1.6 Climb)**. 
>[!NOTE]
> Currently, 1.6 Climb is the only Climb mode whose edge friction is different than the normal friction

>[!IMPORTANT]
>You are considered to be next to an edge if:   
>**In the direction you are moving (not facing), 36/18 units down and 16 units forward from the player’s origin  
>(This works out to be the bottom edge of your collision box) spawn a box of identical dimensions to the player’s collision box  
>(32 unit width, 32 unit depth, 72/36 unit height) whose origin is from that point,
>move the box down 34 units while checking if it intersects with anything. If there was nothing in its path, the player is next to an edge**.  
>**[unit/unit -> units if standing/units if crouching]**.

To simplify, if the player were to move an additional 16 units in their current direction, then fall straight down 70 units would they, at any time, collide with anything from the waist down?  If not, edge friction is enabled
![high jump](/images/climb/High_Jump.png)  
In most cases this works as intended; two examples that were not considered edges had platforms/walls so close that the player would not have fell or would need to be precisely placed so that the edge check is initially true but fails at some point after. It is not very feasible to detect exactly how far away a platform is nor is it useful to negate edge friction for a platform that is that close. Most players would naturally jump a bit before the edge to land on a platform that close. This is where the High Jump comes in.   
There is a way to "trick" the game into thinking you are not next to an edge even when you are on a high up platform with nothing close. Remember the engine only checks in the direction you are moving, so if you are moving in a direction that causes the “edge check box” to touch something, you are not considered "next to an edge" regardless of how close you actually are to one. We can use this to maintain a normal speed. High Jumps are typically done by moving perpendicular to the edge you want to jump from while sticking very close it, and then only turning towards the edge for your pre-strafe. This minimizes the amount of time you are slowed down due to edge friction while still gaining some speed from the pre-strafe. The shape of the platform plays a big role in High Jumps, a small square platform can't really be taken advantage of by this trick. 

### Comboing 
More of a general term, this describes chaining jumps together in a fluid motion, which just like in fighting games, is not obligatory for casual play but is a cornerstone skill built off the fundamentals and is required to be competitive.
