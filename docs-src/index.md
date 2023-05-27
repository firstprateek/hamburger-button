---
layout: page.11ty.cjs
title: <hamburger-button> ⌲ Home
---

# &lt;hamburger-button>

`<hamburger-button>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<hamburger-button>` is just an HTML element. You can it anywhere you can use HTML!

```html
<hamburger-button></hamburger-button>
```

  </div>
  <div>

<hamburger-button></hamburger-button>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<hamburger-button>` can be configured with attributed in plain HTML.

```html
<hamburger-button name="HTML"></hamburger-button>
```

  </div>
  <div>

<hamburger-button name="HTML"></hamburger-button>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<hamburger-button>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;hamburger-button&gt;</h2>
    <hamburger-button .name=${name}></hamburger-button>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;hamburger-button&gt;</h2>
<hamburger-button name="lit-html"></hamburger-button>

  </div>
</section>
