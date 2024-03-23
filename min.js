const prices = [100000, 16000, 12000, 700000];


function getMin(prices){
    let min = prices[0]
    for(let price of prices){
       if(price < min){
        min = price
       }
    }
    return min;
}

const min = getMin(prices);
console.log(min);