---
title: XP Systems
categories:
  - guide
tags:
  - rank
  - xp
  - experience
  - cosmetic
---

# Ranking Points & Cosmetic XP

## Ranked-Points System

**The points you earn from your time on a map is the sum of the points awarded from each of these 3 systems described below: WR/top10 points + formula points + group points.**

{{< hint info >}}
The systems described here are complete; we are in agreement that this is what the Ranked-Points should look like. The values chosen for percentiles, WR points, etc. are still up for debate; however, these should be simple to change later, should we decide to change them, because of the design of the system. For now, we consider the values to be informed-guess placeholders.
{{< /hint >}}

> There are no 'base completion points'; the formula system somewhat accounts for this, but we've determined that it is not worth having a system of its own

<sub>Aside -- Motivation;</sub>

<sub>Times ranked beyond the top10 are awarded points according to 2 systems: the Group system, and a Formula system. The group system rewards discrete bundles of points for players ranking within certain 'percentile' blocks. The formula system awards points simply according to a formula with a single parameter -- the player's rank.
The group system should award more points than the formula system; it should be the primary goal of the player to improve to the next group. The formula system simply provides bonus ranked points for improving within a group, so the player does not feel like intermediate improvements are a waste of effort.</sub>

### WRs and Top10s system

WRs award a fixed number of points for all maps. For now, we set this to be 3,000 points.
Ranks 2-10 award some percentage of the WR points.

```
Rank 1 = 3000 points = 100% of WR
Rank 2 = 2250 points = 75% of WR
Rank 3 = 2040 points = 68% of WR
Rank 4 = 1830 points = 61% of WR
Rank 5 = 1710 points = 57% of WR
Rank 6 = 1590 points = 53% of WR
Rank 7 = 1515 points = 50.5% of WR
Rank 8 = 1440 points = 48% of WR
Rank 9 = 1365 points = 45.5% of WR
Rank 10 = 1290 points = 43% of WR
```

### Formula system

Points awarded is some equation of the form `A / (rank + B)`, where `A` is a scaling constant, and `B` is a smoothing constant.\
We choose `A` = 50000, `B` = 49.\
In this case the graph shows our equation `Points = 50000 / (rank + 49)`\
![Formula Graph](https://i.imgur.com/wjoJYNg.png)

{{< hint info >}}
X axis designates player rank on a map,\
y axis designates points awarded
{{< /hint >}}

<sub>Ex:<br>
Player sets a time of rank 468 on a map with 1333 completions.<br>
Formula points awarded = `50000 / (468 + 49)` = 96.7 => 97 points. (Note that the # of completions on the map did not affect the points awarded!)</sub>

### (New) Group System

(based on @Joe's & Jux's comments about minimum group sizes)\
(plus lots of help from Jux and Aux)

4 groups, loosely 'percentile'-based (in fact, a function of #completions, but not as simple as a percentage). Instead of calculating group boundaries directly from percentiles, we calculate group _sizes_ based on a simple maximizing function --

Group size = `max(A(x), minSize)`

<sup>_max(A, B) simply returns the value of the larger parameter._<br>
_A is a function of #completions, minSize_</sup>

Group 1 always starts at rank 11, and its size is determined from its group size formula.

The formula to determine group size, `A(x)` (where `x` is the # of completions of the map), is\
`_A(x) = SF * (x^E)`, where `SF` and `E` are defined uniquely for each group:\
`SF` = Scale factor, `E` = Exponent

```
Group 1: E = 0.5, SF = 1
Group 2: E = 0.56, SF = 1.5
Group 3: E = 0.62, SF = 2
Group 4: E = 0.68, SF = 2.5
```

minSize is another parameter which varies per group:

```
Group 1: minSize = 10
Group 2: minSize = 45
Group 3: minSize = 125
Group 4: minSize = 250
```

<sup>Ex.<br>
On a map with 400 completions:

```
Group 1 size = max(1 * 400^0.5, 10) = max(20, 10) = 20
Group 2 size = max(1.5 * 400^0.56, 45) = max(42.98, 45) = 45
Group 3 size = max(2 * 400^0.62, 125) = max(82, 125) = 125
Group 4 size = max(2.5 * 400^0.68, 250) = max(147, 250) = 250
```

<sup>Therefore:</sup>

```
Group 1 = ranks 11-30 (begins from rank 11, contains 20 spots)
Group 2 = ranks 31-75 (begins from rank 31 = end of G1, contains 45 spots)
Group 3 = ranks 76-200 (begins from rank 76 = end of G2, contains 125 spots)
Group 4 = ranks 201-450 -- note this exceeds #completions (400)! So it extends all the way to rank 400, and anyone who completes the map is automatically in at least group 4.
```

**Group Points**:\
 <sup>(going by WR points = 3000) (no particular pattern; eyeballed). Keep in mind that you also get points from the formula!</sup>

```
Group 4 = 90 points = 3% of WR
Group 3 = 210 points = 7% of WR
Group 2 = 390 points = 13% of WR
Group 1 = 600 points = 20% of WR
```

## Cosmetic XP

> For more advanced info about cosmetics\
> Make a copy of [The spreadsheet](https://docs.google.com/spreadsheets/d/1JiHJYsxlGPXAZqCPh7-paJI6U_TH-Ro0H0OWDFCiA74)

### 0 - 50

| Level | Exp in level | Total exp |
| ----- | ------------ | --------- |
| 001   | 21,000       | 21,000    |
| 002   | 22,000       | 43,000    |
| 003   | 23,000       | 66,000    |
| 004   | 24,000       | 90,000    |
| 005   | 25,000       | 115,000   |
| 006   | 26,000       | 141,000   |
| 007   | 27,000       | 168,000   |
| 008   | 28,000       | 196,000   |
| 009   | 29,000       | 225,000   |
| 010   | 30,000       | 255,000   |
| 011   | 42,000       | 297,000   |
| 012   | 44,000       | 341,000   |
| 013   | 46,000       | 387,000   |
| 014   | 48,000       | 435,000   |
| 015   | 50,000       | 485,000   |
| 016   | 52,000       | 537,000   |
| 017   | 54,000       | 591,000   |
| 018   | 56,000       | 647,000   |
| 019   | 58,000       | 705,000   |
| 020   | 60,000       | 765,000   |
| 021   | 83,000       | 848,000   |
| 022   | 86,000       | 934,000   |
| 023   | 89,000       | 1,023,000 |
| 024   | 92,000       | 1,115,000 |
| 025   | 95,000       | 1,210,000 |
| 026   | 98,000       | 1,308,000 |
| 027   | 101,000      | 1,409,000 |
| 028   | 104,000      | 1,513,000 |
| 029   | 107,000      | 1,620,000 |
| 030   | 110,000      | 1,730,000 |
| 031   | 144,000      | 1,874,000 |
| 032   | 148,000      | 2,022,000 |
| 033   | 152,000      | 2,174,000 |
| 034   | 156,000      | 2,330,000 |
| 035   | 160,000      | 2,490,000 |
| 036   | 164,000      | 2,654,000 |
| 037   | 168,000      | 2,822,000 |
| 038   | 172,000      | 2,994,000 |
| 039   | 176,000      | 3,170,000 |
| 040   | 180,000      | 3,350,000 |
| 041   | 225,000      | 3,575,000 |
| 042   | 230,000      | 3,805,000 |
| 043   | 235,000      | 4,040,000 |
| 044   | 240,000      | 4,280,000 |
| 045   | 245,000      | 4,525,000 |
| 046   | 250,000      | 4,775,000 |
| 047   | 255,000      | 5,030,000 |
| 048   | 260,000      | 5,290,000 |
| 049   | 265,000      | 5,555,000 |
| 050   | 270,000      | 5,825,000 |

### 50 - 100

{{< hint info >}}
| Type | Amount | Percentage |
|----------------------|------------|------------|
{{< /hint >}}
| Per-level increase | 750,000 | 277.78% |
| Total exp difference | 31,180,000 | 635.28% |

| Level | Exp in level | Total exp  |
| ----- | ------------ | ---------- |
| 051   | 326,000      | 6,151,000  |
| 052   | 332,000      | 6,483,000  |
| 053   | 338,000      | 6,821,000  |
| 054   | 344,000      | 7,165,000  |
| 055   | 350,000      | 7,515,000  |
| 056   | 356,000      | 7,871,000  |
| 057   | 362,000      | 8,233,000  |
| 058   | 368,000      | 8,601,000  |
| 059   | 374,000      | 8,975,000  |
| 060   | 380,000      | 9,355,000  |
| 061   | 447,000      | 9,802,000  |
| 062   | 454,000      | 10,256,000 |
| 063   | 461,000      | 10,717,000 |
| 064   | 468,000      | 11,185,000 |
| 065   | 475,000      | 11,660,000 |
| 066   | 482,000      | 12,142,000 |
| 067   | 489,000      | 12,631,000 |
| 068   | 496,000      | 13,127,000 |
| 069   | 503,000      | 13,630,000 |
| 070   | 510,000      | 14,140,000 |
| 071   | 588,000      | 14,728,000 |
| 072   | 596,000      | 15,324,000 |
| 073   | 604,000      | 15,928,000 |
| 074   | 612,000      | 16,540,000 |
| 075   | 620,000      | 17,160,000 |
| 076   | 628,000      | 17,788,000 |
| 077   | 636,000      | 18,424,000 |
| 078   | 644,000      | 19,068,000 |
| 079   | 652,000      | 19,720,000 |
| 080   | 660,000      | 20,380,000 |
| 081   | 749,000      | 21,129,000 |
| 082   | 758,000      | 21,887,000 |
| 083   | 767,000      | 22,654,000 |
| 084   | 776,000      | 23,430,000 |
| 085   | 785,000      | 24,215,000 |
| 086   | 794,000      | 25,009,000 |
| 087   | 803,000      | 25,812,000 |
| 088   | 812,000      | 26,624,000 |
| 089   | 821,000      | 27,445,000 |
| 090   | 830,000      | 28,275,000 |
| 091   | 930,000      | 29,205,000 |
| 092   | 940,000      | 30,145,000 |
| 093   | 950,000      | 31,095,000 |
| 094   | 960,000      | 32,055,000 |
| 095   | 970,000      | 33,025,000 |
| 096   | 980,000      | 34,005,000 |
| 097   | 990,000      | 34,995,000 |
| 098   | 1,000,000    | 35,995,000 |
| 099   | 1,010,000    | 37,005,000 |
| 100   | 1,020,000    | 38,025,000 |

### 100 - 150

{{< hint info >}}
| Type | Amount | Percentage |
|----------------------|------------|------------|
{{< /hint >}}
| Per-level increase | 1,000,000 | 98.04% |
| Total exp difference | 86,480,000 | 327.43% |

| Level | Exp in level | Total exp   |
| ----- | ------------ | ----------- |
| 101   | 1,520,000    | 39,545,000  |
| 102   | 1,520,000    | 41,065,000  |
| 103   | 1,520,000    | 42,585,000  |
| 104   | 1,520,000    | 44,105,000  |
| 105   | 1,520,000    | 45,625,000  |
| 106   | 1,520,000    | 47,145,000  |
| 107   | 1,520,000    | 48,665,000  |
| 108   | 1,520,000    | 50,185,000  |
| 109   | 1,520,000    | 51,705,000  |
| 110   | 1,520,000    | 53,225,000  |
| 111   | 1,520,000    | 54,745,000  |
| 112   | 1,520,000    | 56,265,000  |
| 113   | 1,520,000    | 57,785,000  |
| 114   | 1,520,000    | 59,305,000  |
| 115   | 1,520,000    | 60,825,000  |
| 116   | 1,520,000    | 62,345,000  |
| 117   | 1,520,000    | 63,865,000  |
| 118   | 1,520,000    | 65,385,000  |
| 119   | 1,520,000    | 66,905,000  |
| 120   | 1,520,000    | 68,425,000  |
| 121   | 1,520,000    | 69,945,000  |
| 122   | 1,520,000    | 71,465,000  |
| 123   | 1,520,000    | 72,985,000  |
| 124   | 1,520,000    | 74,505,000  |
| 125   | 1,520,000    | 76,025,000  |
| 126   | 2,020,000    | 78,045,000  |
| 127   | 2,020,000    | 80,065,000  |
| 128   | 2,020,000    | 82,085,000  |
| 129   | 2,020,000    | 84,105,000  |
| 130   | 2,020,000    | 86,125,000  |
| 131   | 2,020,000    | 88,145,000  |
| 132   | 2,020,000    | 90,165,000  |
| 133   | 2,020,000    | 92,185,000  |
| 134   | 2,020,000    | 94,205,000  |
| 135   | 2,020,000    | 96,225,000  |
| 136   | 2,020,000    | 98,245,000  |
| 137   | 2,020,000    | 100,265,000 |
| 138   | 2,020,000    | 102,285,000 |
| 139   | 2,020,000    | 104,305,000 |
| 140   | 2,020,000    | 106,325,000 |
| 141   | 2,020,000    | 108,345,000 |
| 142   | 2,020,000    | 110,365,000 |
| 143   | 2,020,000    | 112,385,000 |
| 144   | 2,020,000    | 114,405,000 |
| 145   | 2,020,000    | 116,425,000 |
| 146   | 2,020,000    | 118,445,000 |
| 147   | 2,020,000    | 120,465,000 |
| 148   | 2,020,000    | 122,485,000 |
| 149   | 2,020,000    | 124,505,000 |
| 150   | 2,020,000    | 126,525,000 |

### 150 - 200

{{< hint info >}}
| Type | Amount | Percentage |
|----------------------|-------------|------------|
{{< /hint >}}
| Per-level increase | 1,000,000 | 49.50% |
| Total exp difference | 135,480,000 | 207.08% |

| Level | Exp in level | Total exp   |
| ----- | ------------ | ----------- |
| 151   | 2,520,000    | 129,045,000 |
| 152   | 2,520,000    | 131,565,000 |
| 153   | 2,520,000    | 134,085,000 |
| 154   | 2,520,000    | 136,605,000 |
| 155   | 2,520,000    | 139,125,000 |
| 156   | 2,520,000    | 141,645,000 |
| 157   | 2,520,000    | 144,165,000 |
| 158   | 2,520,000    | 146,685,000 |
| 159   | 2,520,000    | 149,205,000 |
| 160   | 2,520,000    | 151,725,000 |
| 161   | 2,520,000    | 154,245,000 |
| 162   | 2,520,000    | 156,765,000 |
| 163   | 2,520,000    | 159,285,000 |
| 164   | 2,520,000    | 161,805,000 |
| 165   | 2,520,000    | 164,325,000 |
| 166   | 2,520,000    | 166,845,000 |
| 167   | 2,520,000    | 169,365,000 |
| 168   | 2,520,000    | 171,885,000 |
| 169   | 2,520,000    | 174,405,000 |
| 170   | 2,520,000    | 176,925,000 |
| 171   | 2,520,000    | 179,445,000 |
| 172   | 2,520,000    | 181,965,000 |
| 173   | 2,520,000    | 184,485,000 |
| 174   | 2,520,000    | 187,005,000 |
| 175   | 2,520,000    | 189,525,000 |
| 176   | 3,020,000    | 192,545,000 |
| 177   | 3,020,000    | 195,565,000 |
| 178   | 3,020,000    | 198,585,000 |
| 179   | 3,020,000    | 201,605,000 |
| 180   | 3,020,000    | 204,625,000 |
| 181   | 3,020,000    | 207,645,000 |
| 182   | 3,020,000    | 210,665,000 |
| 183   | 3,020,000    | 213,685,000 |
| 184   | 3,020,000    | 216,705,000 |
| 185   | 3,020,000    | 219,725,000 |
| 186   | 3,020,000    | 222,745,000 |
| 187   | 3,020,000    | 225,765,000 |
| 188   | 3,020,000    | 228,785,000 |
| 189   | 3,020,000    | 231,805,000 |
| 190   | 3,020,000    | 234,825,000 |
| 191   | 3,020,000    | 237,845,000 |
| 192   | 3,020,000    | 240,865,000 |
| 193   | 3,020,000    | 243,885,000 |
| 194   | 3,020,000    | 246,905,000 |
| 195   | 3,020,000    | 249,925,000 |
| 196   | 3,020,000    | 252,945,000 |
| 197   | 3,020,000    | 255,965,000 |
| 198   | 3,020,000    | 258,985,000 |
| 199   | 3,020,000    | 262,005,000 |
| 200   | 3,020,000    | 265,025,000 |
