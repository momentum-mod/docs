---
title: Building The Game
permalink: /guide/building-the-game/
category: guide
tags:
  - build
  - github
toc: true
toc_sticky: true
---
![Build Guide](/assets/images/guide_headers/guide_building_the_game.jpg){:style="display:block; margin: auto;"}

This Guide covers the general method of building the latest code from GitHub for Momentum for Windows, Linux and macOS.
## Prerequisites
To make use of this page, you should:  
- Be using the Administrator account of the machine you're using
- Have a pot of coffee (optional)

{:.notice--info}
**Important Note**  
You'll need Momentum activated on your Steam account in order to test online features or mount assets from other games automatically!
New Steam keys are currently reserved for users that are making contributions to the game.

## Cloning

Download [***GitHub Desktop***](https://desktop.github.com/), it will require a bit of setup, and may require an account.

Go to the [***Main Page***](https://github.com/momentum-mod/game) and click ***Clone or Download > Open in Desktop***:  

![Github Open In Desktop](/assets/images/build_guide/build0.png)

You should have cloned the `develop` branch.  

If not, switch to it from the top (if you're using GitHub Desktop).  

It may also be called `origin/develop`:  

![Develop Branch Github Desktop](/assets/images/build_guide/build1.png)

{:.notice--info}
Your installation of GitHub Desktop may look different, but should otherwise function the same.

## Windows
Download Momentum Mod on Steam or grab the `MomentumDev` folder from [***Google Drive***](https://drive.google.com/file/d/1HD1Mh8JrCBqP2sh8WJCpfybJGI4BPcZ4/view?usp=sharing).

Download [***Visual Studio 2019***](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16).

Your installation only requires the "Desktop development with C++" workload:

![Desktop development with C++ selected](/assets/images/build_guide/build_desktop_c++.png)

If you downloaded Momentum Mod from Steam, create an extra folder somewhere called `MomentumDev`, and copy everything from your `steamapps/common/Momentum Mod` folder to it. Then delete the `momentum` folder from `MomentumDev`.

Otherwise if you downloaded the `MomentumDev` folder from Google Drive, extract it somewhere.

Edit the `creategameprojects.ps1` file to point the `$path` variable to the full path of the `MomentumDev` folder.  

This script will create a symlink of your `mp/game/momentum` folder into the `MomentumDev` folder automatically for you, which allows you to test changes immediately and run the debugger from Visual Studio.

![creategameprojects screenshot](/assets/images/build_guide/build2.png)

Run `creategameprojects.bat` **as administrator**.

![running creategameprojects](/assets/images/build_guide/build3.png)

{:.notice--info}
If you can't run it as administrator, start `cmd.exe` as Administrator, then change directory to the Git clone, and run it from `cmd.exe`.

Open `momentum.sln`, go start the pot of coffee, come back a minute later, and click Build...  

![Visual Studio build screenshot](/assets/images/build_guide/build4.png)

...then go finish the pot of coffee and pour yourself some.

Click *Debug*.  

![Visual Studio debug screenshot](/assets/images/build_guide/build5.png)

{:.notice--info}
You can launch with no debugger attached by pressing `CTRL+F5` instead...

{:.notice--danger}
...but if a crash occurs no useful information can be gathered!

## Linux
Install the following dependencies:
```
sudo apt-get install build-essential gcc-multilib g++-multilib
```

Git clone the [Steam Runtime repository](https://github.com/ValveSoftware/steam-runtime).

Go into its directory and run: 
```
./setup_chroot.sh --i386
```

Download Momentum Mod on Steam **(see the important note at the top of this page)** or from [***Google Drive***](https://drive.google.com/file/d/1tF7Bh6tp3YjaFj2PxybMoPnsavRKAJRK/view).

Clone this repository wherever you'd like.

Create an extra folder somewhere called `MomentumDev`, and copy all of the files from your Steam's `steamapps/common/Momentum Mod` directory into this folder.  

So for example, to get at the game's binaries, it should look like `MomentumDev/momentum/bin`. 

Now, delete the `momentum` folder inside `MomentumDev`.

Symlink the `mp/game/momentum/` folder from your Git clone over to this `MomentumDev` folder, so that the binaries you end up compiling automatically copy over.  

To compile the game, run the following commands in the `mp/src/` directory of your clone:
```
./creategameprojects  
sudo schroot --chroot steamrt_scout_i386 -- make -f games.mak
```

Make sure Steam is open, and you should be able to run `./hl2.sh -game momentum` in the `MomentumDev` folder to launch the game.

{:.notice--danger}
**Unfortunate Note**  
Developing on Linux is going to be a chore, and is best reserved for Windows.  
If we ever convert the project to CMake, this unfortunate note will go away, but blame VPC for not generating any good Linux development files for the time being.


## macOS
  
macOS support has been dropped indefinitely due to the operating system [no longer supporting 32 bit applications](https://support.apple.com/en-ca/HT208436).
 
