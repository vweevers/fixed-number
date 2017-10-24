# fixed-number

**Format numbers, percentages and currencies with a fixed number of digits. Succinct wrapper of [`Intl.NumberFormat`] defaulting to `en-US` locale. In terms of functionality it sits between [`Number.prototype.toFixed`] and the option-rich (and consequently verbose) `Intl.NumberFormat`.**

[![npm status](http://img.shields.io/npm/v/fixed-number.svg?style=flat-square)](https://www.npmjs.org/package/fixed-number) [![node](https://img.shields.io/node/v/fixed-number.svg?style=flat-square)](https://www.npmjs.org/package/fixed-number) [![Travis build status](https://img.shields.io/travis/vweevers/fixed-number.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/fixed-number) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/fixed-number.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/fixed-number) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Dependency status](https://img.shields.io/david/vweevers/fixed-number.svg?style=flat-square)](https://david-dm.org/vweevers/fixed-number)

## example

```js
const decimal = require('fixed-number')(1, 3)
const percent = require('fixed-number')(2, 1, 'percent')
const usd = require('fixed-number')(2, 2, 'usd')
const eur = require('fixed-number')(3, 0, 'eur')

console.log(decimal(123456.78900001)) // '123,456.789'
console.log(percent(0.2)) // '20.0%'
console.log(usd(19.99)) // '$19.99'
console.log(eur(19.99)) // '€020'
```

## api

### `format = require('fixed-number')(..)`

Arguments:

- `minimumIntegerDigits` (number, required)
- `exactFractionDigits` (number, required)
- `style` (string): `'decimal'` (default), `'percent'` or a ISO 4217 currency code.
- `locale` (string): defaults to `'en-US'` (see [Node.js docs](https://nodejs.org/api/intl.html) for requirements)

Returns a function `format` that when called with a number, returns a formatted string.

## install

With [npm](https://npmjs.org) do:

```
npm install fixed-number
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers

[`Intl.NumberFormat`]: https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
[`Number.prototype.toFixed`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
