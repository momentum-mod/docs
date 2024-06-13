---
long_title: "Gamemode Guide: Bhop"
categories:
  - guide
tags:
  - gamemode
  - bhop
math: true
---

## What is Bhop?

Bhop, short for "**B**unny **Hop**", is a very popular gamemode found in many games, such as CS:GO, TF2, and others.

The core mechanic, "bhopping", is when the player jumps repeatedly, the moment they hit the ground, allowing them to maintain their current velocity. In order to maximize the likelihood of inputting the jump exactly when you hit the ground, players used to bind jump to the scroll wheel, and then roll their mouse wheel very fast whenever they were about to hit the ground. This is sometimes known as *traditional* style bhopping. This method has fallen out of favor though, as unless the player can frame-perfectly input every jump command the best the player can hope for is a 50% chance of not losing speed. It's more common now to rely on *autobhop*, an addon or mod which inputs a jump on the exact frame the player hits the ground every time. This functionality is built into MomentumMod

## History of Bhop

Bunny hop, commonly referred to as "Bhop" is a basic yet unique movement technique that originated in the early days of first-person shooter (FPS) games, while it's hard to pinpoint the exact time and era of its origin, it was first popularised in modding communities mostly revolving around Quake. 

One of the earliest predecessors to bhop is the game mode called "Defrag" which emerged in the Quake series. Defrag focused on the craft of efficient and skillful movements through various obstacle courses. In no time players realized that through combining jumping and strafing they could gain momentum and navigate much quicker and easier through different obstacles.

As the FPS genre grew, gaining more and more popularity so did bunny hopping. The technique gained significant popularity in the Counter-Strike series and Half-Life 2, in which it was used in many different unique ways to help out with different speedruns. In these games, players discovered that by perfectly timing jumping and strafing, they could maintain or even accelerate their speed.

Bunny hopping became a big part of the Counter-Strike series, with players practicing and perfecting the technique to gain an edge in matches. The skill ceiling for bunny hopping was high, requiring hours and hours of practice and precise timing and coordination to execute successfully and consistently. In professional matches, skilled bunny hoppers could surprise opponents with unexpected speed making it a strategic advantage.

Counter-Strike: Global Offensive (Cs:go) now known as Counter-Strike 2 (CS2) keeps continuing the bunny hopping traditions albeit with significant modifications to make it harder and less consistent whitelist not gaining as much speed as in older source engine games despite that fact there is community made servers for it which are made so you could have the similar feeling to the past while it's still not the same.

(good video to watch https://www.youtube.com/watch?v=n1HowpVX-hU)

## How Bhop Works

Normally when the player hits the ground, they slow down from friction. If the player instead jumps the exact frame they hit the ground, they will maintain their speed. Players can then combine this with air-strafing to accelerate faster and faster with each consecutive hop.

Air-strafing is achieved by hitting the keyboard directional button corresponding to the direction the player is moving their mouse. The player will then gain momentum in the direction they're facing, even as the direction they're facing changes. In order to move quickly in a straight line, players keep alternating directions. With that in mind the sequence of events looks something like this:

1. Jump off the ground
2. Air-strafe left
3. Perform a Bhop (auto or traditional)
4. Air-strafe right

This allows players to gain speed from air strafing while moving in a straight line.

There is a nearly endless amount of complexity in doing this to the greatest effect. The optimal speed for your mouse changes with forward velocity, there are times where it may be optimal to switch directions multiple times in one jump, speed can be gained by landing on a downward facing ramp (especially if falling from a height), and many other techniques can go into getting the best times on a specific map.

## Technical Explanation

Movement in Source is made up of a player's orientation, velocity, and acceleration (each represented by a vector). The acceleration vector is determined by the orientation and which directional keys the player is pressing (the rate of air acceleration is generally about 10 times the player's normal maximum walking speed per second, which is what makes characters feel responsive in mid-air).

Now, in order to prevent players from gaining infinite speed simply by holding W and space, the Source engine adds an air-speed limit (not to be confused with sv_airaccelerate, sv_maxspeed, or sv_maxacceleration). This air speed limit isn't an absolute cap, rather each tick the player's velocity is projected onto their acceleration. If the magnitude of this projection is less than the speed limit, the acceleration is applied clamped to the limit. If this projection is greater than the speed limit, acceleration is ignored. This means that for acceleration vectors very close to the velocity vector, acceleration is almost always ignored if the magnitude of the velocity vector is greater than the speed cap. To put it in perspective, the default air speed limit 30 HU/s. In CS:GO, a player holding the Negev (the heaviest weapon) runs at 150 HU/s, and in TF2 a heavy with a revved-up Brass Beast at 44 HU/s.

To calculate the smallest angle a player can accelerate at in order for this acceleration to get around the speed cap with the expression 

$$ acos (\frac{limit}{\vert{speed}\vert}\) $$

This minimal angle is desireable as the smaller the angle the greater the contribution to forward speed.
