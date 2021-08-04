let prices1 = [7,1,5,3,6,4]; // 5
let prices2 = [7,6,4,3,1]; // 0

const maxProfit = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const current = prices[i];

        if (current < minPrice) {
            minPrice = current;
        }

        if (current - minPrice > maxProfit) {
            maxProfit = current - minPrice;
        }
    }

    
    return maxProfit;
}

console.log(maxProfit(prices1));