'use strict'

const isCurrency = require('is-currency-code')

module.exports = function formatter (minimumIntegerDigits, exactFractionDigits, style, locale) {
  let currency

  if (style != null && style !== 'percent' && style !== 'decimal') {
    if (isCurrency(style)) {
      currency = style
      style = 'currency'
    } else {
      throw new Error('Third argument must be a valid style or currency string')
    }
  }

  return new Intl.NumberFormat(locale || 'en-US', {
    style: style,
    minimumIntegerDigits: minimumIntegerDigits,
    minimumFractionDigits: exactFractionDigits,
    maximumFractionDigits: exactFractionDigits,
    currency: currency
  }).format
}
