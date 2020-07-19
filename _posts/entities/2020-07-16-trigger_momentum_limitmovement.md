---
title: trigger_momentum_limitmovement
category: entity
tags:
- trigger
- player
- map
- ahop
- bhop
- limit
- restrict
- movement
---
----

Trigger that prevents the player from doing specific keypress movements.

## Keyvalue

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this trigger belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

## Flags

 >**Prevent the player from moving forward (8192)**

 ***(Disabled by default)***
 >**Prevent the player from moving to the left (16384)**
 
 ***(Disabled by default)***
 >**Prevent the player from moving to the right (32768)**
 
 ***(Disabled by default)***
 >**Prevent the player from moving backward (65536)**
 
 ***(Disabled by default)***
 >**Prevent the player from jumping (131072)**
 
 ***(Disabled by default)***
 >**Prevent the player from crouching (262144)**
 
 ***(Disabled by default)***
 >**Prevent the player from bhopping (524288)**
 
 ***(Disabled by default)***
 >**Prevent the player from walking (1048576)**
 
 ***(Disabled by default)***
 >**Prevent the player from sprinting (2097152)**

  ***(Disabled by default)***