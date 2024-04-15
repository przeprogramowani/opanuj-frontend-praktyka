# @przeprogramowani/design-tokens

Design Tokens are the smallest pieces of the design system — such as colors, typography, spacing, and more. They are used in place of hard-coded values to maintain a scalable and consistent visual system for UI development.

## Installation

```bash
npm install @przeprogramowani/design-tokens
```

## Usage

We provide tokens in three formats: CSS, JS and TS. You can import them in your project as needed.

### CSS

To use the CSS Custom Properties from our package, add the following import to the main CSS file or to the `<head>` of your HTML page:

```css
@import 'path_to_node_modules/@przeprogramowani/design-tokens/dist/css/tokens.css';
```

Or in JavaScript, if you use a bundler that supports CSS imports:

```js
import '@przeprogramowani/design-tokens/dist/css/tokens.css';
```

### JS/TS

```js
import { ButtonTextColor } from '@przeprogramowani/design-tokens';
```
