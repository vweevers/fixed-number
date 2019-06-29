'use strict'

const isCurrency = require('is-currency-code')

module.exports = function formatter (minimumIntegerDigits, exactFractionDigits, style, locale) {
  let currency
  let suffix = ''

  if (style != null && style !== 'percent' && style !== 'decimal') {
    if (isCurrency(style)) {
      currency = style
      style = 'currency'
    } else {
      suffix = style
      style = 'decimal'
    }
  }

  const format = new Intl.NumberFormat(locale || 'en-US', {
    style: style,
    minimumIntegerDigits: minimumIntegerDigits,
    minimumFractionDigits: exactFractionDigits,
    maximumFractionDigits: exactFractionDigits,
    currency: currency
  }).format

  // Prepare a string like "--.--" for NaN values.
  const empty = format(0).replace(/0/g, '-') + suffix

  return function (n) {
    return isNaN(n) ? empty : format(n) + suffix
  }
}
