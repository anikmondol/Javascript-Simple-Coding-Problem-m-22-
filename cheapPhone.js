const phones = [
    {name: 'Samsung', price: 20, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 32, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 15, camera: '12mp', color: 'black'},
    {name: 'Htc', price: 72, camera: '12mp', color: 'black'},
]



function getMax(phones){
    let max = phones[0];
    for(let phone of phones){
        if(phone['price'] > max['price']){
            max = phone;
        }
    }
    return max;
}


const max = getMax(phones);
console.log(max);
















// --------------------------------------------

// get minPrice ---> array of object

// function getCheapPhone(phones){
//     let cheap = phones[0];
//     for(let phone of phones){
//         if(phone['price'] < cheap['price']){
//             cheap = phone;
//         }
//     }
//     return cheap;
// }


// const cheap = getCheapPhone(phones);
// console.log(cheap);