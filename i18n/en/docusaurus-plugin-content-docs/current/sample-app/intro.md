---
sidebar_position: 1
---

# Introduction

This section describes the sample application features.

One of Extreal's goals is to provide a foundation for virtual spaces where people can gather and communicate.
We provide "Holiday" as a sample application equipped with the multiplayer and voice chat features necessary for such a virtual space.

![holiday](../img/holiday.png)

Holiday has a simple stage structure: title screen → avatar selection screen → group selection screen → virtual space.
Holiday employs Redis Pub/Sub (Publish/Subscribe), where you select a host or client on the group selection screen and play in a group.

Holiday will provide the following contents

- [Requirements](./requirements.md)
  - Functional and non-functional requirements for Holiday
- [Architecture](./architecture.md)
  - System and application architecture to realize Holiday's requirements
- [Test Planning](./test-planning.md)
  - How to test Holiday's requirements and test contents
- [Development Guid](./dev-guide.md)
  - How to create Holiday and development rules
- [Repository](https://github.com/extreal-dev/Extreal.SampleApp.Holiday)
  - An application (Unity project) that realizes the requirements of Holiday

We encourage you to use these contents for the following purposes

- Learn how to create applications using Extreal
- Use Extreal as a basis for application development
