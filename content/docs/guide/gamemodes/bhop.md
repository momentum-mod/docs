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

Bhopping was unintentionally introduced, and discovered, in Quake 1, released in 1996. Players found that strafing increased their speed, and that jumping off the ground allowed them to maintain that speed. Bhopping was birthed from the combination of these techniques, among future refinements, and became popular amongst the Quake speedrunning community. The developers were unhappy with this exploiting of the movement mechanics, and nerfed air strafing in Quake 2 and subsequent titles, though the community found ways to keep the movement tech alive.

In 1998 Half Life was released, based on the Quake and Quake 2 engines, reintroducing air strafing and revitalizing bunny hopping. As in Quake, dedicated players went on to optimize their times by maximizing movement speed with bhopping and related techniques (wall strafing, ceiling strafing, etc.). When Counter-Strike released in 2000, originally a mod for Half Life, staying faithful to Half Life's movement mechanics was a priority, including bhopping. That said, the developers opted to implement a speed cap to keep gameplay balanced. This speed cap was later removed in Counter-Strike: Source in 2004, and bhopping became a core mechanic in the game. At this point, bhopping was as valuable a skill in competitive play as aim or game sense.

As people became more skilled at bhopping, and more fond of using the mechanic for its own sake, a bhopping-specific community began to arise. This arguably began with the release of DeFRaG in 2000, a mod for Quake III Arena. DeFRaG introduced features like timers, ghost mode, and learning tools, making bhopping more accessible to casual players. The mod gave rise to a competitive community, through which players would download custom-created maps, attempt to complete them in the shortest time possible, and upload their times to online leaderboards. This planted the seed for bhop communities, and multiplayer bhop servers, to spread across numerous games, including CSS, CS:GO, Garry's Mod, and Team Fortress 2.

Counter-Strike: Global Offensive was released in 2012, and shortly thereafter Valve once again nerfed bhopping to protect the competitive integrity of the game. This pushed fans of the mechanic further into the custom server scene, and seemed to mark the end of an era for skill-based movement in competitive gaming. Today however, multiple games have leaned back into movement-based gameplay, with battle royale games like Apex Legends and Fortnite, and even single player games like Doom Eternal, and Titanfall 2.

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
