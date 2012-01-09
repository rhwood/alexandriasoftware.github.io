---
layout: page
title: "JMRI Browser"
date: 2012-01-07 10:15
comments: true
sharing: true
footer: true
---
{% img right no-border /images/jmri-browser-iphone-vert.png 256 561 'JMRI Browser connects your iPhone to your Model Railroad' %}
JMRI Browser controls your Model Railroad from your iPhone.

JMRI Browser for iPhone and iPod Touch controls DCC-equipped model railroads that can be controlled through [JMRI](http://jmri.org).

<!-- [Beta test](http://axsw.co/rnMwiY) JMRI Browser. -->

JMRI Browser will be available by February.

Features
--------
### Control Your Layout
Sensors, turnouts, locomotives, even power to your layout, are all directly controlled with JMRI Browser.

### JMRI Panels
Most JMRI Panels can be loaded and used within JMRI Browser.

### Bonjour Networking
JMRI Browser automatically discovers running JMRI web servers using Bonjour networking.

Requirements
------------
### DCC or C/MRI Controlled Model Railroad
JMRI uses Digital Command Control (DCC) or a Computer/Model Railroad Interface (C/MRI) to control your model railroad.

### JMRI
JMRI Browser is supported with JMRI version 2.14 and the current development version. Older versions of JMRI may work, however, not all features will be supported. JMRI 2.14 is recommended.

### Wireless Networking
JMRI Browser works over a local wireless (Wi-Fi) network. Bluetooth and 3G networking are not supported.

Bonjour (or ZeroConf) Networking is recommended but not required. Bonjour Networking allows JMRI Browser to automatically discover JMRI servers. If Bonjour Networking is disabled on your wireless network, JMRI servers will need to be entered manually.

Resources
---------
### What is JMRI?
The Java Model Railroad Interface, or JMRI, is a suite of applications for controlling model railroads from a computer through either Digital Command Control (DCC) or the Computer/Model Railroad Interface (C/MRI). JMRI runs on any computer running Linux, Mac OS X, or Microsoft Windows. [More Info...](http://jmri.org)

### Supported Systems
JMRI Browser supports all systems supported by JMRI. JMRI supports most current DCC systems as well as C/MRI. [More Info...](http://jmri.org/help/en/html/hardware/index.shtml)

### Why?
I am a model railroaders and often run trains with [Northern Virginia NTRAK](http://nvntrak.org). To keep myself occupied while deployed in Afghanistan, I started creating a Centralized Traffic Control (CTC) system for the iPad using JMRI. JMRI Browser was originally developed to test a generic interface to JMRI for the intended CTC system. The JMRI Browser concept expanded from a simple test case for the CTC application into a demonstration application for the _[JMRI Framework](http://www.axsw.co/jmri/framework/)_ for iOS and Mac OS X. The JMRI Framework is an open source framework for developing JMRI applications for iOS and Mac OS X.

Support
-------
### Why can't I...?
JMRI exposes only a limited subset of its core functionality to external devices. While JMRI Browser has the ability to view everything shared by JMRI, and to control every item that JMRI allows to be controlled by external devices, JMRI will not allow everything on you layout to be shared with external devices, and only allows certain items it does share to be controlled externally. JMRI exposes the following items:

- Memory Variables (readonly)
- Open Panels
- Power
- Roster
- Routes
- Sensors
- System and Java Versions (readonly)
- Throttles (JMRI Browser throttles are limited to locomotives in the roster)
- Turnouts

JMRI only shares already open panels with external devices. While it is possible for some panels to open other panels, or even to close themselves, it is not possible to arbitrarily open a panel from JMRI Browser. Please note that some actions in a panel may open dialog windows that can only be viewed on the computer running JMRI, or may only be meaningful in a context on that computer's display.

### Contact Us
[Contact Us directly](/contact)

Discuss JMRI Browser in the [JMRI Users Group](http://groups.yahoo.com/group/jmriusers/) on [Yahoo!](http://yahoo.com).
