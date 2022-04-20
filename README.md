## Pre-requisites

- Node.js >= 14.x

## Prepare Project for Development

- Clone the project

  ```sh
  % git clone git@github.com:fahdilahady/tped.git
  ```

- Prepare the project

  ```sh
  % npm install
  ```

- Run framework tests

  ```sh
  % npm run test:e2e -- --spec features/ui-automation-framework.feature
  ```

- Generate local Allure report

  ```sh
  % npm run report:allure
  ```

## Feature Files

### Reporting

| Tag | Remarks |
|:-|:-|
| `@severity=` |
| `@issue=` \| `@storykey=` |

### Filtration

| Tag | Remarks |
|:-|:-|
| `@ignore` |

## Page Objects

- Stateless object
- Contains element locators
- Contains actions

## Step Definitions

Always import `@qa/core` in step definitions.

```ts
import * as QA from '@qa/core';
```

Cucumber scenario world (i.e. `this`) is now `QA.Core`, which itself is the context and UI manager.

```
