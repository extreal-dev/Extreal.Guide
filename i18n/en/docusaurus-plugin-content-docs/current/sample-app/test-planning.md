---
sidebar_position: 4
---

# Test Planning

The following are added to the [Test Type & Test Perspective Catalog](https://fintan.jp/page/1456/) to determine test methods and acceptance criteria.

- Review

## Review

- Test Method
  - Peer review of all deliverables
  - Merge is restricted by GitHub branch settings
  - Approval by at least one person and Resolved for all Conversations are merge requirements
- Pass Criteria
  - All feedback has been addressed

## Syntax check

- Test Method
  - Static analysis using [Roslyn Analyzers](https://github.com/dotnet/roslyn-analyzers) and [Code Cracker](https://github.com/code-cracker/code-cracker)
- Pass Criteria
  - No problem

## Functional test

- Test Method
  - Manual test
  - [test case](./test-case.md#functional-test)
- Pass Criteria
  - All cases passed, 100% test coverage

## Data compatibility test

Not applicable.

## Business scenario test

This will be done in conjunction with functional test.

## Configuration test

- Test Method
  - Manual testing on Chrome
  - [test case](./test-case.md#functional-test)
- Pass Criteria
  - All cases passed, 100% test coverage

## Security test

- Test Method
  - Self-check of [security-related links](https://fintan-contents.github.io/mobile-app-crib-notes/reference/security/awesome-sites)
- Pass Criteria
  - No problem

## Performance test

- Test Method
  - Select Massively and run for 1.5 hours with Massively selected and 100 people accessing the virtual space
  - Select Light and run for 1.5 hours with Massively selected and 10 people accessing the virtual space
  - The number of accesses will be secured by a test application
    - The test application will have no UI and only player operation will be performed
  - Visually determine the application's acceptance criteria using PC at hand
  - Application CPU usage/memory usage is monitored and data is used to determine acceptance criteria
- Pass criteria
  - No frame dropping or stoppage of the application
  - CPU utilization/memory usage of the application must be within a certain range, and there must be no memory leaks or other problems

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
  - [test case](./test-case.md#failure-test)
- Pass Criteria
  - All cases passed

## Operational scenario test

The following aspects have not yet been implemented as we do not operate in production.

- Ability to start/stop servers according to procedures
- Ability to recover from server failure according to procedures
- Staff should be able to enter the application and monitor normal operation

## Migration test

The following aspects have not yet been implemented as we do not release.

- The next version and the current version must work in the production environment
- The version upgrade is available

## Current vs. new comparison test

Not applicable.

## Usability test

Not implemented due to sample application.
