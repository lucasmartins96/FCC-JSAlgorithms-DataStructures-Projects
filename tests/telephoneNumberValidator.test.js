const telephoneCheck = require('../telephone-number-validator/telephoneNumberValidator');

describe('Testing telephoneCheck function', () => {
  describe('Testing function return', () => {
    test('Checks if the returned value is boolean', () => {
      expect(telephoneCheck('555-555-5555')).toBe(true);
      expect(telephoneCheck('555555-5555')).toBe(false);
      expect(telephoneCheck('555-555-5555')).not.toBe('555-555-5555');
    });
  });
});