/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let output = 0
  let smallest =prices[0]
  for(let i=1; i<prices.length; i++) {
      if(smallest > prices[i]) {
          smallest = prices[i]
          continue;
      }
      const diff = prices[i] - smallest
      output = Math.max(output, diff)
  }
  
  return output
};