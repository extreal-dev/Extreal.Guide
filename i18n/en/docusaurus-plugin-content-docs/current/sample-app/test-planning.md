---
sidebar_position: 4
---

# Test Planning

The following are added to the [Test Type & Test Perspective Catalog](https://fintan.jp/page/1456/) to determine test methods and acceptance criteria.

- Review
- Mobile Applications

## Review

- Test Method
  - Peer review of all deliverables
  - Merge is restricted by GitHub branch settings
  - Approval by at least one person and Resolved for all Conversations are merge requirements
- Pass Criteria
  - All feedback has been addressed

## Mobile Application

The following aspects are not yet implemented as they will be addressed in the future.

- Behavior when an application transitions to/from the background or loses focus
- Battery drain when using applications

## Syntax check

- Test Method
  - Static analysis using [Roslyn Analyzers](https://github.com/dotnet/roslyn-analyzers) and [Code Cracker](https://github.com/code-cracker/code-cracker)
- Pass Criteria
  - No problem

## Functional test

- Test Method
  - Manual test
  - [test-case](/sample-app/test-case#functional-test)
- Pass Criteria
  - All cases passed, 100% test coverage

## Data compatibility test

Not applicable.

## Business scenario test

This will be done in conjunction with functional test.

## Configuration test

- Test Method
  - Manual testing on Android, iOS and Win
  - Conducted with wired earphones with microphone
  - [test-case](/sample-app/test-case#functional-test)
- Pass Criteria
  - All cases passed, 100% test coverage

## Security test

- Test Method
  - Self-check of [security-related links](https://fintan-contents.github.io/mobile-app-crib-notes/reference/security/awesome-sites)
- Pass Criteria
  - No problem

## Performance test

- Test Method
  - Run for 1.5 hours with 90 people accessing the virtual space
  - The number of accesses will be secured by a test application
    - The test application will have no UI and only player operation will be performed
  - Visually determine the application's acceptance criteria using several devices at hand
  - The server monitors CPU/memory usage and determines passing criteria based on the data
- Pass criteria
  - No frame dropping or stoppage of the application
  - CPU utilization/memory usage of the multiplayer server must be within a certain range, and there must be no memory leaks or other problems

## Stress test

This will be done in conjunction with performance test.

## Volume test

Not applicable.

## Long run test

This will be done in conjunction with performance test.

## Failure test

- Test Method
  - Manual Testing
    - Manually generate a failure event
  - [test case](/sample-app/test-case#failure-test)
- Pass Criteria
  - All cases passed

## Operational scenario test

The following aspects have not yet been implemented as we do not operate in production.

- Server startup/shutdown procedures must be followed
- Server recovery procedures must be followed in the event of a server failure
- Staff should be able to enter the application and monitor normal operation

## Migration test

The following aspects have not yet been implemented as we do not release to the stores (Google Play, Apple Store).

- The next version and the current version must work in the production environment
  - If released to the store, the next version and the current version must run in the production environment
- The version upgrade is available

## Current vs. new comparison test

Not applicable.

## Usability test

Not yet implemented as it is planned to be improved in the future.
