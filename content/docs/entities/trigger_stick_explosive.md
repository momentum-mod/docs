---
title: trigger_stick_explosive
categories:
  - entity
tags:
  - rocket jump
  - sticky jump
  - conc
  - trigger
---

# trigger_stick_explosive

---

A [trigger](https://developer.valvesoftware.com/wiki/Triggers){:target="blank"} volume that can stick explosives to or inside of its area.

## Keyvalues

> **Method of explosive stick** (mode&lt;**choices**&gt;)

Explosive sticking behavior.

- **0**: Stick on collision inside this area
- **1**: Stick on entering this area

Defaults to 0.

## Input

> Stick(**void**)

Sticks all explosives in this area.

> Unstick(**void**)

Unsticks all explosives in this area.

> Explode(**void**)

Explodes all explosives in this area.

> Fizzle(**void**)

Fizzles all explosives in this area.
