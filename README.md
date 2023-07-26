## Vuejs online playground
[VueJs Online playground](https://play.vuejs.org/)
## Vue JS Important concepts

- built in directives: v-text v-html v-if v-show v-else v-else-if

- if else if else code block

```html
<div v-if=" type === 'A'">A</div>
<div v-else-if=" type === 'B'">B</div>
<div v-else-if=" type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```
- for loop

```html
    <div v-for="item in employees" :key="item.id">
      <li>{{ item.name }}</li>
   </div>
```

- Very important read: https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key
- GOTCHA:
-  It is recommended to provide a key attribute with v-for whenever possible, unless the iterated DOM content is simple (i.e. contains no components or stateful DOM elements), or you are intentionally relying on the default behavior for performance gains.

- for loop with a component

```html
<todo :for="(todo,index) in todos"
    :key="todo.id"
    :propTitle="todo.title"
    @todoEvent="methodInComponent(event)">
</todo>
```
OR

```html
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
```
OR

```html
<MyComponent v-for="item in items" :key="item.id" />
```

- computed properties vs methods
- computed are cached and lazy evaluated.
- looks like a computed gotcha: https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j

- class attribute
```html
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }">
</div>
```
OR 
==============================================================
```js
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
```
 We can also bind to a computed property that returns an object. This is a common and powerful pattern:
 ```js data() {
  return {
    isActive: true,
    error: null
  }
},

computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

```html
<div class="static active" :class="classObject"></div>
<div :class="[isActive, errorClass]"></div>

<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

for inline styles

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div :style="styleObject"></div>
<div :style="[baseStyles, overridingStyles]"></div>
```
==============================================================






# job-search

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
