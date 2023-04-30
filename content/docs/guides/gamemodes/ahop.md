---
categories:
  - guide
permalink: /guide/gamemode-ahop/
tags:
  - gamemode
  - info
  - ahop
  - accelerated hop
---

# Gamemode Guide: Ahop

## What is Ahop?

Ahop, short for "**_A_**ccelerated **_Hop_**", comes from the Orange Box versions of Half-Life 2, its episodes, and Portal 1. Ahop comes from [Valve's attempt](#technical-explanation) to remove bunnyhopping in an older version of the game. By either hopping completely backwards or holding/pressing the back movement key while hopping, players can gain extreme amounts of velocity.

Ahop movement can be commonly found in Any% Speedruns for [Half-Life 2](https://www.youtube.com/watch?v=NV-AWxqYAgc), [its episodes](https://www.youtube.com/watch?v=pSe8RMcQHeY) and [Portal 1](https://www.youtube.com/watch?v=mC47O6mKHJY).

The specific version of Ahop implemented in Momentum Mod is based on the one found in Half-Life 2, which includes the player being able to use a "sprint" mechanic, alongside a higher Air Accelerate value.

## History of Ahop

In the days before Valve's Orange Box, Half-Life 2's main method of movement was [Defrag](/guide/gamemode-defrag)-esque, only requiring holding W and jumping to gain moderate amounts of speed. An example can be found in the Half-Life 2 speedrun, "Half-Life 2 Done Quick":

When Valve released the Orange Box in 2007, they bundled Half-Life 2, all of its episodes, Portal and Team Fortress 2 into one package. This updated Half-Life 2 and its episodes to utilize a version of the movement that aimed to "fix" this old-style bunnyhopping across all of the games.

Ahop's unique movement was found by [**Hlook**](https://forums.sourceruns.org/t/episode-2-glitch/1618/7) and [**Spider-Waffle**](https://forum.speeddemosarchive.com/post/portal_source13.html#portal_source13).

Shortly thereafter, Ahop would find its way into Portal 1 and Half-Life 2 speedruns, and is now a common staple in the majority of speedruns for those games.

## How Ahop Works

Ahop's movement is commonly broken down into three distinct categories, [ABH](#accelerated-back-hop-abh), [ASH](#accelerated-side-hop-ash), and [AFH](#accelerated-forwards-hop-afh), but they all center around [one core flaw in Valve's attempted "fix"](#technical-explanation) for the old-style bunnyhopping.

### Accelerated Back Hop (ABH)

Accelerated Back Hop, or ABH, is the easiest of the three methods to perform, however requires the player to face completely backwards.

Jump forward, turn around in the air and hold jump as you land. It's recommended not to hold S or W (or your respective keys for moving forwards and back) while ABHing!

### Accelerated Side Hop (ASH)

Accelerated Side Hop, or ASH, is a slightly harder method to perform, yet offers the player the advantage of being able to face slightly forwards.

To execute this, start an ABH but instead of turning around in the air, adjust your view slightly to the left (or right) and hold S and D (or S and A) to gain speed. Unlike AFH, if you are ASH-ing close to the ground, you can hold your inputs and adjust your aim accordingly to consistently do the trick. However, if you're in the middle of a launch, releasing your inputs is recommended in order not to disturb with your jump and to allow better maneuverability while you're in the air.

### Accelerated Forwards Hop (AFH)

Accelerated Forwards Hop, or AFH, is the hardest of the three methods to perform. It offers the player a directly forwards-facing view, however requires tick-perfect timing on button presses.

Once you've gained some speed while ABH-ing, you can turn around and start pressing S every time you jump, allowing you to see where you're going. In games with relatively high air acceleration like Half-Life 2, the more precise your S-taps are. the more speed you'll preserve since the longer you hold S the more you decelerate yourself while in the air. On the other hand on games like Portal with lower air acceleration, you can simply hold S to do AFH's.

### Technical Explanation

All of the following code can be observed in full on [the publicly-available Source SDK 2013 codebase](https://github.com/ValveSoftware/source-sdk-2013/blob/master/sp/src/game/shared/gamemovement.cpp#L2469) provided by Valve. The following explanation was taken from [the SourceRuns wiki page](https://wiki.sourceruns.org/wiki/Accelerated_Back_Hopping).

#### Calculating Speed

The game goes through a few steps to decide how much to add to the player's speed and whether to subtract instead.

1. Calculate `flSpeedBoostPerc` to figure out the multiplier for calculating the additional speed, and maximum speed for bounding it.  
   The game calculates `flSpeedBoostPerc` based on the state of the player when they jump, so when they are crouched or they are sprinting, it chooses 0.1; for other states like running or walking, it chooses 0.5.

```cpp
float flSpeedBoostPerc = ( !pMoveData->m_bIsSprinting && !player->m_Local.m_bDucked ) ? 0.5f : 0.1f;
```

2. Calculate the initial `flSpeedAddition` which is the amount of speed to add onto the player's existing speed.  
   The way the game calculates the addition speed is to take the absolute value of the product of `mv->m_flForwardMove` and `flSpeedBoostPerc`:

```cpp
float flSpeedAddition = fabs( mv->m_flForwardMove * flSpeedBoostPerc );
```

`mv->m_flForwardMove` is the normal speed the player moves in the state they jumped in, so when they do a sprint jump, it is 320, a running jump is 190, etc.

3. Calculate the maximum speed `flMaxSpeed` for bounding the player's speed later on.

```cpp
float flMaxSpeed = mv->m_flMaxSpeed + ( mv->m_flMaxSpeed * flSpeedBoostPerc );
```

4. Calculate the player's initial new speed `flNewSpeed`  
   It does this by simply taking the `flSpeedAddition` and adding it to the player's initial speed when they jump.

```cpp
float flNewSpeed = ( flSpeedAddition + mv->m_vecVelocity.Length2D() );
```

5. Check if the player's new speed is higher than the maximum. If it is too high, calculate the new amount of speed to apply onto the player using an equation.

```cpp
// If we're over the maximum, we want to only boost as much as will get us to the goal speed
if ( flNewSpeed > flMaxSpeed )
{
    flSpeedAddition -= flNewSpeed - flMaxSpeed;
}
```

After all the steps above, the game takes the newly acquired `flSpeedAddition` and apply it onto the player's speed.

#### Valve's Flaw

Normally, an ABH is done by doing a backwards sprint-jump, crouching in midair, landing and continuing to jump without holding any directional keys. In the calculations below, it's assumed that inputs are frame-perfect without any loss of speed.

When the player sprints and then jump backwards, their speed will be **negative**, and when they land and crouchjump, their speed will be 352 UPS. Ideally `mv->m_flForwardMove` should be 190, but because the player is not holding any directional keys, it is 0 instead. This means the additional speed the player gets will also be 0.

```cpp
float flSpeedAddition = fabs( mv->m_flForwardMove * flSpeedBoostPerc );
                      = fabs( 0 * 0.1 )
                      = 0
```

This means the new speed will also be the same as the old which would be:

```cpp
float flNewSpeed = ( flSpeedAddition + mv->m_vecVelocity.Length2D() );
                 = 0 + 352
                 = 352
```

Because the player's speed is over the threshold when landing (we land at 352 UPS which is higher than the 209 UPS threshold when crouching), the game does the speed bound routine. But since our `flSpeedAddition` is 0, this will come out as **negative**:

```
(1st ABH jump)
flSpeedAddition -= flNewSpeed - flMaxSpeed
                -= flSpeedAddition - (flNewSpeed - flMaxSpeed)
                -= 0 - (352 - 209)
                -= -143
```

And since the player is moving backwards and their speed is **negative**, their new speed will be **_increased_**, in this case it is 495. After 2 more jumps, the speed increase will be massive!

```
(2nd ABH jump)
flSpeedAddition -= flNewSpeed - flMaxSpeed
                -= flSpeedAddition - (flNewSpeed - flMaxSpeed)
                -= 0 - (352 + 143 - 209)
                -= -286

(3rd ABH jump)
flSpeedAddition -= flNewSpeed - flMaxSpeed
                -= flSpeedAddition - (flNewSpeed - flMaxSpeed)
                -= 0 - (352 + 143 + 286 - 209)
                -= -579

```

So, after only 2 jumps, the player's speed becomes 1333 UPS!

{{< hint info >}}
Fun fact!  
The movement was immediately patched out of (or just never inside of) Team Fortress 2, however, upon [inspecting the publicly-available SDK 2013 code](https://github.com/ValveSoftware/source-sdk-2013/blob/master/sp/src/game/shared/gamemovement.cpp#L2469), one may notice that this glitch was actually _intentionally left in by Valve_, under a check to see if the player is in a singleplayer game (`gpGlobals->maxclients == 1`).
{{< /hint >}}
