# Extreal.Guide

This guide is created with [Docusaurus 2](https://docusaurus.io/).


## Installation

```
$ yarn
```

## Local Development

This guide are available in Japanese(ja) and English(en).

- ja
  ```
  /docs
  ```
- en
  ```
  /i18n/en
  ```

Local development cannot check multiple languages simultaneously.
The following command is used to check `ja`.

```
yarn start
```

This command starts the local development server and opens a browser window.
Most changes will take effect immediately, without restarting the server.

The following command is used to check `en`.

```
yarn start --locale en
```

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

Tell the structure of this feature using a class diagram.
In case there is interaction between classes, use sequence diagrams to tell the flow of the process.
Sequence diagrams are not required.

## Installation

### Package

Tell which Unity package this feature depends on.

### Dependencies

Tell what other dependent packages need to be prepared.

### Settings

Tell how to set up this feature.

## Usage

Provide headings that correspond to the specifications and tell how to use this feature.
Add the heading "Do XXX" indicating the usage scenario to make it easier to find from the table of contents.
```

## How to Contribute

- The main branch is the latest release, and the develop branch is the latest development.
- Create a branch from the latest development branch and submit a Pull Request.
- As we have set up a Pull Request template, fill it out and let us know the status of your Pull Request.
- When you have completed your work, request a review from us.

## How to Release

- Update the version number on the Unreleased page.
  - `docs/release/unreleased.md`
  - `i18n/en/docusaurus-plugin-content-docs/current/release/unreleased.md`
- Rename the Unreleased page to the released version.
  - `docs/release/unreleased.md`
  - `i18n/en/docusaurus-plugin-content-docs/current/release/unreleased.md`
- Tagging a new version
  - https://docusaurus.io/docs/versioning#tagging-a-new-version
