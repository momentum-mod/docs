---
title: trigger_userinput
category: entity
tags:
- trigger
- player
- map
- track
---
----
Trigger that fires on user KeyPress if inside trigger.

## Keyvalues

> Key that fires (lookedkey&lt;**choices**&gt;)
 - **Forward (0)**
 - **Back (1)**
 - **Move Left (2)**
 - **Move Right (3)**
 - **Jump (4)**
 - **Duck (5)**
 - **Attack (6)**
 - **Attack 2 (7)**
 - **Reload (8)**

The default value is 0.

## Output

> OnKeyPressed(**void**)

Fires when the desired key is pressed.

> OnKeyHeld(**void**)

Fires when the desired key is held.

> OnKeyReleased(**void**)

Fires when the desired key is released.
