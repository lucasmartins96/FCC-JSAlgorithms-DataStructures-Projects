function convertToRoman(num) {
  const romansNumerals = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }
  const romansNumeralsKeys = Object.keys(romansNumerals);
  let romanNumeralString = '';
  let helperNum = num;

  while (helperNum > 0) {
    let lastSymbol = '';
    romansNumeralsKeys.forEach((symbol) => {
      if (helperNum >= romansNumerals[symbol]) {
        lastSymbol = symbol;
      }
    });
    helperNum -= romansNumerals[lastSymbol];
    romanNumeralString = romanNumeralString.concat(lastSymbol);
  }
  return romanNumeralString;
}

module.exports = convertToRoman;
