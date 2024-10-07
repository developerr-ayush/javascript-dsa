var maxProfit = function (prices) {
  let max = 0;
  let buyPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (buyPrice < prices[i]) {
      let profit = prices[i] - buyPrice;
      max = Math.max(max, profit);
    } else {
      buyPrice = prices[i];
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
