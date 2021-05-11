/*
|  Currency Unity   |      Amount      |
|:-----------------:|:----------------:|
|       Penny       |   $0.01 (PENNY)  |
|       Nickel      |  $0.05 (NICKEL)  |
|       Dime        |    $0.1 (DIME)   |
|      Quarter      |  $0.25 (QUARTER) |
|      Dollar       |     $1 (ONE)     |
|   Five Dollars    |     $5 (FIVE)    |
|    Ten Dollars    |     $10 (TEN)    |
|   Twenty Dollars  |   $20 (TWENTY)   |
|One-hundred Dollars|$100 (ONE HUNDRED)|

*/
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let sumCidAmount = cid.reduce((acc, cidElement) => acc + cidElement[1], 0);
  const unitDolar = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  }
  const changeObj = { status: "OPEN", change: [] }

  if (change === sumCidAmount) {
    changeObj.status = 'CLOSED';
    changeObj.change = cid;
    return changeObj;
  }

  if (change > sumCidAmount) {
    changeObj.status = 'INSUFFICIENT_FUNDS';
    changeObj.change = [];
    return changeObj;
  }

  for (let index = cid.length - 1; index >= 0; index -= 1) {
    const [unit, amount] = cid[index];
    change = parseFloat(change.toPrecision(4));
    if (change >= unitDolar[unit] && amount > 0) {
      const amountBillOrCoinNeeded = Math.floor(change / unitDolar[unit]);
      const amountBillOrCoinCidUnit = amount / unitDolar[unit];
      if (amountBillOrCoinNeeded >= amountBillOrCoinCidUnit) {
        change -= amount;
        changeObj.change.push([unit, amount]);
      } else {
        const valueToSubtracted = (unitDolar[unit] * amountBillOrCoinNeeded);
        change -= valueToSubtracted;
        changeObj.change.push([unit, valueToSubtracted]);
      }
    }
  }
  if (change !== 0) {
    changeObj.status = 'INSUFFICIENT_FUNDS';
    changeObj.change = [];
    return changeObj;
  }
  return changeObj;
}

module.exports = checkCashRegister;
