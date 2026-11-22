---
title: Group System
categories:
  - guide
tags:
  - rank
  - xp
  - cosmetic
---

Every completion on a map that is not in the **Top 10** is placed into a **group**, from **G1** down to **G6**.

This system also supports extra, linear groups that are currently unused.

<!--more-->

{{< group-ladder >}}

**Climb** is the share of the players ahead of you that you must pass to go from the bottom of a group into the next group up. Orange or red means that promotion is cheap compared with the rest of the ladder, which usually happens on small maps where the minimum group size takes over.

## How groups are calculated

### Parameters

| Symbol                         | Meaning                                                 | Game value |
| ------------------------------ | ------------------------------------------------------- | ---------- |
| {{< katex >}}X{{< /katex >}}   | Number of completions on the map                        | &ndash;    |
| {{< katex >}}p_1{{< /katex >}} | Share of the map that G1 aims to cover                  | 2%         |
| {{< katex >}}F_1{{< /katex >}} | Minimum G1 cutoff (rank)                                | 15         |
| {{< katex >}}n{{< /katex >}}   | Number of log-spaced groups                             | 6          |
| {{< katex >}}q{{< /katex >}}   | Where the log-spaced ladder ends, as a share of the map | 67%        |
| {{< katex >}}k{{< /katex >}}   | Number of extra linear groups after the ladder          | 0          |
| {{< katex >}}g{{< /katex >}}   | Grouping limit, as a share of the map                   | 67%        |
| {{< katex >}}M{{< /katex >}}   | Ranks that are always grouped                           | 100        |
| {{< katex >}}w{{< /katex >}}   | Minimum group size (ranks)                              | 5          |

### Step 1: G1 cutoff

G1 covers the best {{< katex >}}p_1{{< /katex >}} of the map, after Top 10, but never ends before rank {{< katex >}}F_1{{< /katex >}}:

```katex
c_1 = \max\left( F_1,\ \left\lfloor X \cdot p_1 \right\rfloor + 10 \right)
```

### Step 2: Last grouped rank

Groups cover {{< katex >}}g{{< /katex >}}% of the map. The first {{< katex >}}M{{< /katex >}} ranks are always grouped.

```katex
\mathrm{cap} = \min\left( X,\ \max\left( \operatorname{round}(X \cdot g),\ M \right) \right)
```

Everyone ranked after {{< katex >}}\mathrm{cap}{{< /katex >}} is not in any group.

### Step 3: End of the ladder

The log-spaced ladder runs from {{< katex >}}c_1{{< /katex >}} up to

```katex
Q = \max\left( c_1,\ \min\left( \max\left( X \cdot q,\ M \right),\ \mathrm{cap} \right) \right)
```

With the game values {{< katex >}}q = g{{< /katex >}}, so {{< katex >}}Q = \mathrm{cap}{{< /katex >}} and the ladder ends exactly where grouping ends.

### Step 4: Log-spaced groups

The ideal cutoffs of G1 to G{{< katex >}}n{{< /katex >}} are spaced evenly on a logarithmic scale between {{< katex >}}c_1{{< /katex >}} and {{< katex >}}Q{{< /katex >}}:

```katex
\tilde{c}_i = c_1 \cdot \left( \frac{Q}{c_1} \right)^{\frac{i-1}{n-1}}, \qquad i = 1, \dots, n
```

In other words, each ideal cutoff is the previous one multiplied by the same ratio

```katex
r = \left( \frac{Q}{c_1} \right)^{\frac{1}{n-1}}
```

If {{< katex >}}n = 1{{< /katex >}}, the single group simply ends at {{< katex >}}Q{{< /katex >}}.

### Step 5: Extra linear groups

These groups are **not currently used in Momentum Mod** but the system still supports them.

If {{< katex >}}k > 0{{< /katex >}}, another {{< katex >}}k{{< /katex >}} groups split the ranks between the end of the ladder and {{< katex >}}\mathrm{cap}{{< /katex >}} into equal parts, with the last one ending exactly at {{< katex >}}\mathrm{cap}{{< /katex >}}:

```katex
\tilde{c}_{n+j} = c_n + \left( \mathrm{cap} - c_n \right) \cdot \frac{j}{k}, \qquad j = 1, \dots, k
```

The game uses {{< katex >}}k = 0{{< /katex >}}, so there are no extra groups.

### Step 6: Rounding and minimum size

Each ideal cutoff is rounded to a whole rank and then adjusted, in order from G1 down, so that a group holds at least {{< katex >}}w{{< /katex >}} ranks and nothing goes past {{< katex >}}\mathrm{cap}{{< /katex >}}:

```katex
c_i = \max\Big( c_{i-1},\ \min\big( \mathrm{cap},\ \max\left( \operatorname{round}(\tilde{c}_i),\ c_{i-1} + w \right) \big) \Big)
```

Group {{< katex >}}i{{< /katex >}} is then every rank from {{< katex >}}c_{i-1} + 1{{< /katex >}} to {{< katex >}}c_i{{< /katex >}}. When the ladder runs into {{< katex >}}\mathrm{cap}{{< /katex >}} early, which happens on small maps, the last groups end up with the same cutoff as the group before them and are empty.

## Cosmetic XP

Unrelated to groups, cosmetic XP system will be reworked in the future. Leaving it here for now until it gets it's own docs page

Information on how it currently works can be found in [this spreadsheet](https://docs.google.com/spreadsheets/d/1JiHJYsxlGPXAZqCPh7-paJI6U_TH-Ro0H0OWDFCiA74)
