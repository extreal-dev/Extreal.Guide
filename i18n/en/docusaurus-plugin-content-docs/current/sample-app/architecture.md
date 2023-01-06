---
sidebar_position: 3
---

# Architecture

## System Structure

Users download and use the application from the each store or AWS S3.
The application is distributed with assets such as 3D models and connection information to servers.
Connect to the SaaS and servers required for processing directly from the application.

![system structure](/img/holiday-sys-structure.png)

:::info
This is a sample application and has not been actually placed in each store or AWS S3.
We plan to release our know-how, such as support for screening of each store, in the future.
::::

## Application Structure

The application architecture of Holiday will be the [architecture](/intro#application) assumed by Extreal.
The stages and scenes of Holiday are as follows.

![application structure](/img/holiday-app-structure.png)

The App scene is explained here because it is a special scene, not a separate feature offering.

The App scene is the entry point for the application.
The App scene handles the application initialization process, stage configuration, application state provision, and other processing related to the application as a whole.
