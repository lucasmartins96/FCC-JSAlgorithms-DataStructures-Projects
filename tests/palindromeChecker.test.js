const palindrome = require('../palindrome-checker/palindromeChecker');
describe('Testing palindrome function', () => {
  describe('Testing function return', () => {
    test('Checks if the returned value is boolean', () => {
      expect(palindrome('teste')).toBe(false);
      expect(palindrome('teste')).not.toBe('teste');
    });
  })

  describe('Testing cases that must return true', () => {
    const resultTest = true;
    test('Testing with the string "eye"', () => {
      expect(palindrome('eye')).toBe(resultTest);
    });

    test('Testing with the string "_eye"', () => {
      expect(palindrome('_eye')).toBe(resultTest);
    });

    test('Testing with the string "race car"', () => {
      expect(palindrome('race car')).toBe(resultTest);
    });

    test('Testing with the string "A man, a plan, a canal. Panama"', () => {
      expect(palindrome('A man, a plan, a canal. Panama')).toBe(resultTest);
    });

    test('Testing with the string "never odd or even"', () => {
      expect(palindrome('never odd or even')).toBe(resultTest);
    });

    test('Testing with the string "My age is 0, 0 si ega ym."', () => {
      expect(palindrome('My age is 0, 0 si ega ym.')).toBe(resultTest);
    });

    test('Testing with the string "0_0 (: /-\\ :) 0-0"', () => {
      expect(palindrome("0_0 (: /-\\ :) 0-0")).toBe(resultTest);
    });
  });

  describe('Testing cases that must return false', () => {
    const resultTest = false;
    test('Testing with the string "not a palindrome"', () => {
      expect(palindrome('not a palindrome')).toBe(resultTest);
    });

    test('Testing with the string "nope"', () => {
      expect(palindrome('nope')).toBe(resultTest);
    });

    test('Testing with the string "almostomla"', () => {
      expect(palindrome('almostomla')).toBe(resultTest);
    });

    test('Testing with the string "1 eye for of 1 eye."', () => {
      expect(palindrome('1 eye for of 1 eye.')).toBe(resultTest);
    });

    test('Testing with the string "five|\\_/|four"', () => {
      expect(palindrome('five|\\_/|four')).toBe(resultTest);
    });
  });

})