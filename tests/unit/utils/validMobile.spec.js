// utils/validate.js

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validMobile (str) {
  return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(
    str
  )
}
