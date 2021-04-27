function palindrome(str) {
  const newStr = str.toLowerCase().replace(/\_|\W/g, '');
  const reversedStr = newStr.split('').reverse().join('');
  return newStr === reversedStr;
}

module.exports = palindrome;
