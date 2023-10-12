# ESLint Plugin: No Self-Enclosing Div

## Overview

This ESLint plugin provides a rule to disallow self-enclosing empty `<div />` tags in JSX. Self-closing `<div />` tags that have no attributes will be flagged, and a suggested fix to replace it with a React fragment (`<></>`) will be provided.

## Installation

To install the plugin, navigate to your project's root directory and run:

```bash
npm install /path/to/your/eslint-plugin-no-empty-divs
```

Or, if you're using Yarn:

```bash
yarn add file:/path/to/your/eslint-plugin-no-empty-divs
```

## Configuration

After installing, add `no-empty-divs` to the `plugins` section of your `.eslintrc` configuration file. You can then specify the rule you want to use under the `rules` section.

### Example Configuration

```json
{
  "plugins": ["no-empty-divs"],
  "rules": {
    "no-empty-divs/no-self-enclosing-div": "error"
  }
}
```

## Rule Details

The `no-self-enclosing-div` rule checks for empty, self-enclosing `<div />` elements in JSX code. If such an element is found, it will be flagged, and ESLint will suggest replacing it with a React fragment (`<></>`).

### Examples

#### Invalid

```jsx
const MyComponent = () => {
  return <div />;
};
```

#### Valid

```jsx
const MyComponent = () => {
  return <></>;
};
```

## Auto-Fix

The rule supports auto-fixing. When running ESLint with the `--fix` flag, it will automatically replace any invalid self-enclosing `<div />` tags with a React fragment (`<></>`).

```bash
eslint --fix path/to/your/file.tsx
```

Or, if you're using Nx:

```bash
nx run-many --target=lint --all --fix
```

## License

MIT
