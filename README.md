# Extreal.Guide

This guide is created with [Docusaurus 2](https://docusaurus.io/).


## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts the local development server and opens a browser window.
Most changes will take effect immediately, without restarting the server.

## Diagram

- The class diagram is created with [Mermaid](http://mermaid-js.github.io/mermaid/).
  - [mdx-mermaid](https://github.com/sjwall/mdx-mermaid) is introduced.
- Diagrams not using Mermaid are created in PowerPoint.
  - Path: `/work/work.pptx`
  - Screen captures are also included.

## Feature Page Template

Use the 'Feature Page Template' below for the feature pages.

```
## What for?

Tell what this feature is being provided for.

## Specification

Tell the specifications of this feature.
Tell also the concepts necessary to understand the specifications.

## Architecture

Tell the structure of this function using a class diagram.
In case there is interaction between classes, use a sequence diagram to tell the flow of the process.
Sequence diagrams are not required.

## Installation

### Package

Tell which Unity package this feature depends on.

### Dependencies

Tell what other dependent packages need to prepared.

### Settings

Tell how to set up this feature.

## Usage

Provide headings that correspond to the specifications and tell how to use this feature.
Add the heading "XXX to do" to indicate the usage scenario and make it easy to find from the table of contents.
```

## How to Contribute

- The main branch is the latest release, and the develop branch is the latest development.
- Create a branch from the latest development branch and submit a Pull Request.
- We have set up a pull request template so that you can fill it in and let us know the status of your pull request.
- When you have completed your work, request a review from us.
