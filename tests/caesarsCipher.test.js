const rot13 = require('../caesars-cipher/caesarsCipher');

describe('Testing rot13 function', () => {
  test('Checks if "SERR PBQR PNZC" cipher is decoded to "FREE CODE CAMP"', () => {
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
  });

  test('Checks if "SERR CVMMN!" cipher is decoded to "FREE PIZZA!"', () => {
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
  });

  test('Checks if "SERR YBIR?" cipher is decoded to "FREE LOVE?"', () => {
    expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
  });

  test('Checks if "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." cipher is decoded to "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
  });
});