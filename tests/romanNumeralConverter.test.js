const convertToRoman = require('../roman-numeral-converter/romanNumeralConverter');

describe('Testing convertToRoman function', () => {
  describe('Checks whether parameter: ', () => {
    test('2 returns string II', () => {
      expect(convertToRoman(2)).toBe('II');
    });
    
    test('3 returns string III', () => {
      expect(convertToRoman(3)).toBe('III');
    });
    
    test('4 returns string IV', () => {
      expect(convertToRoman(4)).toBe('IV');
    });
    
    test('5 returns string V', () => {
      expect(convertToRoman(5)).toBe('V');
    });
    
    test('9 returns string IX', () => {
      expect(convertToRoman(9)).toBe('IX');
    });
    
    test('12 returns string XII', () => {
      expect(convertToRoman(12)).toBe('XII');
    });
    test('16 returns string XVI', () => {
      expect(convertToRoman(16)).toBe('XVI');
    });
    
    test('29 returns string XXIX', () => {
      expect(convertToRoman(29)).toBe('XXIX');
    });
    
    test('44 returns string XLIV', () => {
      expect(convertToRoman(44)).toBe('XLIV');
    });
    
    test('45 returns string XLV', () => {
      expect(convertToRoman(45)).toBe('XLV');
    });
    
    test('68 returns string LXVIII', () => {
      expect(convertToRoman(68)).toBe('LXVIII');
    });
    
    test('83 returns string LXXXIII', () => {
      expect(convertToRoman(83)).toBe('LXXXIII');
    });
    
    test('97 returns string XCVII', () => {
      expect(convertToRoman(97)).toBe('XCVII');
    });

    test('99 returns string XCIX', () => {
      expect(convertToRoman(99)).toBe('XCIX');
    });

    test('400 returns string CD', () => {
      expect(convertToRoman(400)).toBe('CD');
    });

    test('500 returns string D', () => {
      expect(convertToRoman(500)).toBe('D');
    });

    test('501 returns string DI', () => {
      expect(convertToRoman(501)).toBe('DI');
    });

    test('649 returns string DCXLIX', () => {
      expect(convertToRoman(649)).toBe('DCXLIX');
    });

    test('798 returns string DCCXCVIII', () => {
      expect(convertToRoman(798)).toBe('DCCXCVIII');
    });

    test('891 returns string DCCCXCI', () => {
      expect(convertToRoman(891)).toBe('DCCCXCI');
    });

    test('1000 returns string M', () => {
      expect(convertToRoman(1000)).toBe('M');
    });

    test('1004 returns string MIV', () => {
      expect(convertToRoman(1004)).toBe('MIV');
    });

    test('1006 returns string MVI', () => {
      expect(convertToRoman(1006)).toBe('MVI');
    });

    test('1023 returns string MXXIII', () => {
      expect(convertToRoman(1023)).toBe('MXXIII');
    });

    test('2014 returns string MMXIV', () => {
      expect(convertToRoman(2014)).toBe('MMXIV');
    });

    test('3999 returns string MMMCMXCIX', () => {
      expect(convertToRoman(3999)).toBe('MMMCMXCIX');
    });
  });
});