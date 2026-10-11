---
title: Rank Points
categories:
  - guide
tags:
  - rank
  - leaderboards
math: true
aliases:
  - /guide/ranking_cosmetic_xp/
---

Every time you finish a run on a ranked leaderboard, you earn rank points. Your points from every ranked map in a gamemode and style are added together, and that total places you in the rankings for that gamemode. You can see the rankings on the website under **Community > Rankings**, and your own ranks and points on your profile.

{{< hint info >}}
The rank points system is still being tuned, so the values on this page may change. When they do, everyone's points are recalculated automatically.
{{< /hint >}}

## Which Runs Earn Points

A run earns points if:

- The map is **approved** (released). Maps that are still in submission or testing don't award points.
- The leaderboard is **ranked**. Unranked and hidden leaderboards don't award points.

Main tracks, stages, and bonuses can all award points. Only your personal best on each leaderboard counts, so improving a time replaces your old points rather than adding to them.

Each gamemode and style has its own rankings. For example, points from Surf leaderboards only count towards the Surf rankings, and points from Sideways Surf only count towards the Sideways Surf rankings.

## How Points Are Calculated

The points for a run are made up of two parts:

$$ Points = V \cdot s + M $$

- $ V $ is the **pool**: the total number of points the leaderboard is worth.
- $ s $ is your **share** of the pool, which depends on your rank.
- $ M $ is the **completion award**: a flat amount you get for finishing the map at all.

Points are always rounded to a whole number, and every finish is worth at least 1 point.

### The Pool

Harder and more popular leaderboards are worth more points:

$$ V = P \cdot T \cdot N^{\alpha} $$

where $ N $ is the number of players who have finished the leaderboard, and $ T $ is the **tier multiplier**:

$$ T = b^{(tier - 1)} $$

Each tier is worth about 29% more than the one below it, so a tier 10 map is worth roughly 10 times as much as a tier 1 map. The number of completions has a smaller effect: a tier 1 leaderboard with 10 completions has a pool of 579 points, one with 1,000 completions has a pool of 2,769, and one with 10,000 completions has a pool of 6,058.

### Your Share

The world record always gets the full pool, the last place time gets none of it, and everyone in between gets a share that falls off quickly at first and then more slowly:

$$ s = \frac{rank^{-\gamma} - N^{-\gamma}}{1 - N^{-\gamma}} $$

On a leaderboard with 1,000 completions, rank 2 gets about 70% of the world record's share, rank 10 about 30%, and rank 100 about 7%. This means the top of a leaderboard is very valuable, but there are still points to be gained from improving your time anywhere on the leaderboard.

### Completion Award

Finishing a map always awards a flat number of points based on its tier:

$$ M = m \cdot P \cdot T $$

The completion award is kept small compared to the pool, so improving your time on maps you've already finished is worth about as much as finishing new ones.

### Values

| Value      | Current value | What it does                                                             |
| ---------- | ------------- | ------------------------------------------------------------------------ |
| $ P $      | 264.45        | Overall scale of all points                                              |
| $ b $      | 1.293         | How much more each tier is worth than the one below it                   |
| $ \alpha $ | 0.34          | How much more a leaderboard with more completions is worth               |
| $ \gamma $ | 0.5           | How quickly points fall off from the world record. Higher is steeper     |
| $ m $      | 0.1           | Size of the completion award, as a fraction of $ P \cdot T $             |

| Tier | Tier multiplier | Completion award | Pool with 100 completions |
| ---- | --------------- | ---------------- | ------------------------- |
| 1    | 1.00            | 26               | 1,266                     |
| 2    | 1.29            | 34               | 1,637                     |
| 3    | 1.67            | 44               | 2,116                     |
| 4    | 2.16            | 57               | 2,736                     |
| 5    | 2.80            | 74               | 3,538                     |
| 6    | 3.61            | 96               | 4,574                     |
| 7    | 4.67            | 124              | 5,915                     |
| 8    | 6.04            | 160              | 7,648                     |
| 9    | 7.81            | 207              | 9,889                     |
| 10   | 10.10           | 267              | 12,786                    |

### Examples

A tier 1 map with 1,000 completions:

| Rank   | 1     | 2     | 3     | 5     | 10  | 50  | 100 | 250 | 500 | 1,000 |
| ------ | ----- | ----- | ----- | ----- | --- | --- | --- | --- | --- | ----- |
| Points | 2,796 | 1,958 | 1,587 | 1,215 | 840 | 340 | 222 | 117 | 64  | 26    |

A tier 4 map with 295 completions:

| Rank   | 1     | 2     | 10    | 50  | 100 | 295 |
| ------ | ----- | ----- | ----- | --- | --- | --- |
| Points | 4,010 | 2,780 | 1,140 | 406 | 233 | 57  |

## Stages and Bonuses

Stages and bonuses use the same calculation as the main track, but their points are scaled down so that they don't outweigh the main track:

- **Stages**: all of a map's stages together are worth about **half** of the main track. Each stage's points are divided by the number of stages, then halved. Stages don't have their own tier, so they use the main track's tier.
- **Bonuses**: all of a map's ranked bonuses together are worth about **a quarter** of the main track. Each bonus's points are divided by the number of ranked bonuses on the map, then divided by 4. Bonuses use their own tier.

For example, on a tier 3 map with 10 stages, the world record on a stage with 400 completions is worth 172 points, compared to 3,435 for the world record on a main track with 400 completions. On a map with two ranked tier 2 bonuses, the world record on a bonus with 150 completions is worth 239 points.

{{< hint info >}}
Unranked bonuses don't award points, and they don't take a share of the bonus points either. If a bonus becomes ranked or unranked, the points for the map's other bonuses are recalculated.
{{< /hint >}}

## Rank Groups

Your runs on your profile are labelled with where they place on their leaderboard: **WR** for a world record, **Top 10** for ranks 2 to 10, or one of six **rank groups** below that. Rank groups are just labels, and don't affect your points.

The groups split the players outside of the top 10 into percentile bands. Group 6 covers up to two thirds of those players, and each group above it ends at half the percentile of the group below:

| Group | Ends at the top...  |
| ----- | ------------------- |
| 1     | 2.08%               |
| 2     | 4.17%               |
| 3     | 8.33%               |
| 4     | 16.67%              |
| 5     | 33.33%              |
| 6     | 66.67%              |

So on a leaderboard with $ N $ completions, group $ k $ ends at rank:

$$ 10 + \left\lfloor \frac{2}{3} (N - 10) \div 2^{(6 - k)} \right\rfloor $$

On smaller leaderboards, the groups always end at least at ranks 20, 35, 60, 100, 150, and 200, so that the top groups don't shrink down to only a few players. Runs past the end of group 6 aren't in a group.

For example, on a leaderboard with 1,622 completions:

| Group | Ranks       |
| ----- | ----------- |
| 1     | 11 - 43     |
| 2     | 44 - 77     |
| 3     | 78 - 144    |
| 4     | 145 - 278   |
| 5     | 279 - 547   |
| 6     | 548 - 1,084 |
