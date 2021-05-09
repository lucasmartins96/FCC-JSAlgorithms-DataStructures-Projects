function telephoneCheck(str) {
  const telephoneRegex = /^([1]?)\s?(\(\d{3}\)|\d{3})\s?\-?(\d{3})\s?\-?(\d{4})$/g;
  return telephoneRegex.test(str);
}

module.exports = telephoneCheck;
