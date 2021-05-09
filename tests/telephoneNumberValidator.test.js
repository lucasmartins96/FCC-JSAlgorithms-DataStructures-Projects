const telephoneCheck = require('../telephone-number-validator/telephoneNumberValidator');

describe('Testing telephoneCheck function', () => {
  describe('Testing function return', () => {
    test('Checks if the returned value is boolean', () => {
      expect(telephoneCheck('555-555-5555')).toBe(true);
      expect(telephoneCheck('555555-5555')).toBe(false);
      expect(telephoneCheck('555-555-5555')).not.toBe('555-555-5555');
    });
  });

  describe('Testing cases that must return true', () => {
    const resultTest = true;
    test('Testing with the string "1 555-555-5555"', () => {
      expect(telephoneCheck('1 555-555-5555')).toBe(resultTest);
    });

    test('Testing with the string "1 (555) 555-5555"', () => {
      expect(telephoneCheck('1 (555) 555-5555')).toBe(resultTest);
    });

    test('Testing with the string "5555555555"', () => {
      expect(telephoneCheck('5555555555')).toBe(resultTest);
    });

    test('Testing with the string "555-555-5555"', () => {
      expect(telephoneCheck('555-555-5555')).toBe(resultTest);
    });

    test('Testing with the string "(555)555-5555"', () => {
      expect(telephoneCheck('(555)555-5555')).toBe(resultTest);
    });

    test('Testing with the string "1(555)555-5555"', () => {
      expect(telephoneCheck('1(555)555-5555')).toBe(resultTest);
    });

    test('Testing with the string "1 555 555 5555"', () => {
      expect(telephoneCheck('1 555 555 5555')).toBe(resultTest);
    });

    test('Testing with the string "1 456 789 4444"', () => {
      expect(telephoneCheck('1 456 789 4444')).toBe(resultTest);
    });
  });
});