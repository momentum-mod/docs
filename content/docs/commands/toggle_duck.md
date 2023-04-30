---
title: toggle_duck
categories:
  - command
ccom_ref1: mom_restart
ccom_ref2: mom_restart_stage
ent_ref1: trigger_teleport
ent_ref2: trigger_momentum_teleport_progress
ent_ref3: trigger_momentum_multihop
ent_ref4: trigger_momentum_onehop
tags:
  - movement
  - player
---

# toggle_duck

Toggles duck input. Toggle resets when hitting a fail teleport (see [`{{ page.ent_ref1 }}`](/entity/{{ page.ent_ref1 }}), [`{{ page.ent_ref2 }}`](/entity/{{ page.ent_ref2 }}), [`{{ page.ent_ref3 }}`](/entity/{{ page.ent_ref3 }}), and [`{{ page.ent_ref4 }}`](/entity/{{ page.ent_ref4 }})), and when restarting a map or stage via [`{{ page.ccom_ref1 }}`](/command/{{ page.ccom_ref1 }}) or [`{{ page.ccom_ref2 }}`](/command/{{ page.ccom_ref2 }}) respectively.
