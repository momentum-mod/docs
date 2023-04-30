---
title: trigger_userinput
categories:
  - entity
tags:
  - trigger
  - player
  - map
  - track
---

# trigger_userinput

---

Trigger that fires on user KeyPress if inside trigger.

## Keyvalues

> **Key that fires** (lookedkey&lt;**choices**&gt;)

- **Forward (0)**
- **Back (1)**
- **Move Left (2)**
- **Move Right (3)**
- **Jump (4)**
- **Duck (5)**
- **Attack (6)**
- **Attack 2 (7)**
- **Reload (8)**
- **Speed (9)**
- **Walk (10)**

The default value is 0.

> **Second key to use that fires, if held down at the same time as other keys** (lookedkey2&lt;**choices**&gt;)

- **None** (0)\*\*
- **Forward (1)**
- **Back (2)**
- **Move Left (3)**
- **Move Right (4)**
- **Jump (5)**
- **Duck (6)**
- **Attack (7)**
- **Attack 2 (8)**
- **Reload (9)**
- **Speed (10)**
- **Walk (11)**

The default value is 0.

> **Third key to use that fires, if held down at the same time as other keys** (lookedkey3&lt;**choices**&gt;)

- **None** (0)\*\*
- **Forward (1)**
- **Back (2)**
- **Move Left (3)**
- **Move Right (4)**
- **Jump (5)**
- **Duck (6)**
- **Attack (7)**
- **Attack 2 (8)**
- **Reload (9)**
- **Speed (10)**
- **Walk (11)**

The default value is 0.

## Output

> OnKeyPressed(**void**)

Fires when the desired key is pressed.

> OnKeyHeld(**void**)

Fires when the desired key is held.

> OnKeyReleased(**void**)

Fires when the desired key is released.
