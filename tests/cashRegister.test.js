const checkCashRegister = require("../cash-register/cashRegister");

describe("Testing checkCashRegister function", () => {
  describe("Testing function return", () => {
    test('First return', () => {
      expect(
        checkCashRegister(19.5, 20, [
          ["PENNY", 1.01],
          ["NICKEL", 2.05],
          ["DIME", 3.1],
          ["QUARTER", 4.25],
          ["ONE", 90],
          ["FIVE", 55],
          ["TEN", 20],
          ["TWENTY", 60],
          ["ONE HUNDRED", 100],
        ])
      ).toStrictEqual({
        status: "OPEN",
        change: [["QUARTER", 0.5]],
      });
    });

    test('Second return', () => {
      expect(
        checkCashRegister(3.26, 100, [
          ["PENNY", 1.01],
          ["NICKEL", 2.05],
          ["DIME", 3.1],
          ["QUARTER", 4.25],
          ["ONE", 90],
          ["FIVE", 55],
          ["TEN", 20],
          ["TWENTY", 60],
          ["ONE HUNDRED", 100],
        ])
      ).toStrictEqual({
        status: "OPEN",
        change: [
          ["TWENTY", 60],
          ["TEN", 20],
          ["FIVE", 15],
          ["ONE", 1],
          ["QUARTER", 0.5],
          ["DIME", 0.2],
          ["PENNY", 0.04],
        ],
      });
    });

    test('Third return', () => {
      expect(
        checkCashRegister(19.5, 20, [
          ["PENNY", 0.01],
          ["NICKEL", 0],
          ["DIME", 0],
          ["QUARTER", 0],
          ["ONE", 0],
          ["FIVE", 0],
          ["TEN", 0],
          ["TWENTY", 0],
          ["ONE HUNDRED", 0],
        ])
      ).toStrictEqual({ status: "INSUFFICIENT_FUNDS", change: [] });
    });

    test('Fourth return', () => {
      expect(
        checkCashRegister(19.5, 20, [
          ["PENNY", 0.01],
          ["NICKEL", 0],
          ["DIME", 0],
          ["QUARTER", 0],
          ["ONE", 1],
          ["FIVE", 0],
          ["TEN", 0],
          ["TWENTY", 0],
          ["ONE HUNDRED", 0],
        ])
      ).toStrictEqual({ status: "INSUFFICIENT_FUNDS", change: [] });
    });

    test('Fifth return', () => {
      expect(
        checkCashRegister(19.5, 20, [
          ["PENNY", 0.5],
          ["NICKEL", 0],
          ["DIME", 0],
          ["QUARTER", 0],
          ["ONE", 0],
          ["FIVE", 0],
          ["TEN", 0],
          ["TWENTY", 0],
          ["ONE HUNDRED", 0],
        ])
      ).toStrictEqual({
        status: "CLOSED",
        change: [
          ["PENNY", 0.5],
          ["NICKEL", 0],
          ["DIME", 0],
          ["QUARTER", 0],
          ["ONE", 0],
          ["FIVE", 0],
          ["TEN", 0],
          ["TWENTY", 0],
          ["ONE HUNDRED", 0],
        ],
      });
    });
  });
});
