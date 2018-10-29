---
title: Doing Time 1.4
date: 2012-09-10
category:
- Doing Time
tags:
- Doing Time
---
[Doing Time](/doing-time) version 1.4 is now [available on the App Store](http://axsw.co/gdZJa6).

This update includes the following changes:

-   __A new application icon.__ In this release, I simplified a number of things under the hood, as well as some preferences, and so I made the application icon cleaner to reflect this as well.
-   __Simpler preferences.__ _Doing Time_ is a daily counter. I had a complex preference item that allowed the user to set the time (down to five minute increments) that Today would be considered over in _Doing Time_. I have replaced that with a per-event setting to treat Today as either a completed day or a remaining day in the event being tracked. This also made the date calculations significantly simpler under the hood.
-   __Aggressively redraw events.__ _Doing Time_ now takes additional steps to ensure that events are redrawn more frequently, with the added benefit that _Doing Time_ should now be a better-behaving background app and use less memory when another app is in use.
-   __Refactored code.__ I rewrote the date calculations mechanism to reduce a lot of complexity, and removed everything that was not being used.
