const telephoneCheck = require('../telephone-number-validator/telephoneNumberValidator');

describe('Testing telephoneCheck function', () => {
  describe('Testing function return', () => {
    test('Checks if the returned value is boolean', () => {
      expect(telephoneCheck('555-555-5555')).toBe(true);
      expect(telephoneCheck('55555-5555')).toBe(false);
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

  describe('Testing cases that must return false', () => {
    const resultTest = false;
    test('Testing with the string "555-5555"', () => {
      expect(telephoneCheck('555-5555')).toBe(resultTest);
    });

    test('Testing with the string "5555555"', () => {
      expect(telephoneCheck('5555555')).toBe(resultTest);
    });

    test('Testing with the string "1 555)555-5555"', () => {
      expect(telephoneCheck('1 555)555-5555')).toBe(resultTest);
    });

    test('Testing with the string "123**&!!asdf#"', () => {
      expect(telephoneCheck('123**&!!asdf#')).toBe(resultTest);
    });

    test('Testing with the string "55555555"', () => {
      expect(telephoneCheck('55555555')).toBe(resultTest);
    });

    test('Testing with the string "(6054756961)"', () => {
      expect(telephoneCheck('(6054756961)')).toBe(resultTest);
    });

    test('Testing with the string "2 (757) 622-7382"', () => {
      expect(telephoneCheck('2 (757) 622-7382')).toBe(resultTest);
    });

    test('Testing with the string "0 (757) 622-7382"', () => {
      expect(telephoneCheck('0 (757) 622-7382')).toBe(resultTest);
    });

    test('Testing with the string "-1 (757) 622-7382"', () => {
      expect(telephoneCheck('-1 (757) 622-7382')).toBe(resultTest);
    });

    test('Testing with the string "2 757 622-7382"', () => {
      expect(telephoneCheck('2 757 622-7382')).toBe(resultTest);
    });

    test('Testing with the string "10 (757) 622-7382"', () => {
      expect(telephoneCheck('10 (757) 622-7382')).toBe(resultTest);
    });

    test('Testing with the string "27576227382"', () => {
      expect(telephoneCheck('27576227382')).toBe(resultTest);
    });

    test('Testing with the string "(275)76227382"', () => {
      expect(telephoneCheck('(275)76227382')).toBe(resultTest);
    });

    test('Testing with the string "2(757)6227382"', () => {
      expect(telephoneCheck('2(757)6227382')).toBe(resultTest);
    });

    test('Testing with the string "2(757)622-7382"', () => {
      expect(telephoneCheck('2(757)622-7382')).toBe(resultTest);
    });

    test('Testing with the string "555)-555-5555"', () => {
      expect(telephoneCheck('555)-555-5555')).toBe(resultTest);
    });

    test('Testing with the string "(555-555-5555"', () => {
      expect(telephoneCheck('(555-555-5555')).toBe(resultTest);
    });

    test('Testing with the string "(555)5(55?)-5555"', () => {
      expect(telephoneCheck('(555)5(55?)-5555')).toBe(resultTest);
    });

    test('Testing with the string "55 55-55-555-5"', () => {
      expect(telephoneCheck('55 55-55-555-5')).toBe(resultTest);
    });
  });
});