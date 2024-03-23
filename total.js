const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200}
]


function getTotal(products){
    let sum = 0;
    for(let product of products){
       sum += product.price;
    }
    return sum;
}


const total = getTotal(products);
console.log(total);