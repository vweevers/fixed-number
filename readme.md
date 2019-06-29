# fixed-number

**Format numbers, percentages and currencies with a fixed number of digits. Succinct wrapper of [`Intl.NumberFormat`] defaulting to `en-US` locale. In terms of functionality it sits between [`Number.prototype.toFixed`] and the option-rich (and consequently verbose) `Intl.NumberFormat`.**

[![npm status](http://img.shields.io/npm/v/fixed-number.svg)](https://www.npmjs.org/package/fixed-number)
[![node](https://img.shields.io/node/v/fixed-number.svg)](https://www.npmjs.org/package/fixed-number)
[![Travis build status](https://img.shields.io/travis/vweevers/fixed-number.svg?label=travis)](http://travis-ci.org/vweevers/fixed-number)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/fixed-number.svg?label=appveyor)](https://ci.appveyor.com/project/vweevers/fixed-number)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Dependency status](https://img.shields.io/david/vweevers/fixed-number.svg)](https://david-dm.org/vweevers/fixed-number)

## Example

```js
const decimal = require('fixed-number')(1, 3)
const percent = require('fixed-number')(2, 1, 'percent')
const usd = require('fixed-number')(2, 2, 'usd')
const eur = require('fixed-number')(3, 0, 'eur')
const custom = require('fixed-number')(1, 1, '+')

console.log(decimal(123456.78900001)) // '123,456.789'
console.log(decimal(NaN)) // '-.---'
console.log(percent(0.2)) // '20.0%'
console.log(usd(19.99)) // '$19.99'
console.log(eur(19.99)) // '€020'
console.log(custom(2)) // '2.0+'
```

## API

### `format = require('fixed-number')(..)`

Arguments:

- `minimumIntegerDigits` (number, required)
- `exactFractionDigits` (number, required)
- `style` (string): `'decimal'` (default), `'percent'`, a ISO 4217 currency code, or a custom suffix.
- `locale` (string): defaults to `'en-US'` (see [Node.js docs](https://nodejs.org/api/intl.html) for requirements)

Returns a function `format` that when called with a number, returns a formatted string.

## Install

With [npm](https://npmjs.org) do:

```
npm install fixed-number
```

## License

[MIT](LICENSE) © 2017-present Vincent Weevers

[`Intl.NumberFormat`]: https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
[`Number.prototype.toFixed`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
