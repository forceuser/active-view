# active-view | [![Build Status](https://travis-ci.org/forceuser/active-view.svg?branch=master)](https://travis-ci.org/forceuser/active-view) [![Coverage Status](https://img.shields.io/codecov/c/github/forceuser/active-view/master.svg)](https://codecov.io/gh/forceuser/active-view) [![npm repository](https://img.shields.io/npm/v/active-view.svg)](https://www.npmjs.com/package/active-view)

Tiny and convenient reactive data manager, inspired by MobX. Automatically detects associated data and performs updates to your views or everything dependent on that data when it changes. Implemented with javascript Proxy objects

## Installation

#### Install as npm package

```shell
npm i active-view --save
```

#### Or simply download \*.js file

active-view@{{version}} minified file: [active-view.min.js](https://github.com/forceuser/active-view/releases/download/{{version}}/active-view.min.js)

#### Or just load from CDN

```html
<script src="//cdn.rawgit.com/forceuser/active-view/{{version}}/dist/active-view.min.js">
</script>
```

And then use **activeView** as global variable
```html
<script>

</script>
```
## [Documentation](./DOCUMENTATION.md)

## Example

Run example with [runkit](https://npm.runkit.com/active-view)

```js

```

## Compatibility

#### Browsers

Chrome | Edge | Firefox | Internet Explorer | Opera | Safari
-------|------|---------|-------------------|-------|-------
49 | 12 | 18 | *No support* | 36 | 10

#### Servers/runtimes

Supported on **Node.js** version **6** and higher

#### Proxy compatibility tables

https://kangax.github.io/compat-table/es6/#test-Proxy

http://caniuse.com/#feat=proxy
