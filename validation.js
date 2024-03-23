function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please give me number'
    } else {
        const result = num1 * num2;
        return result;
    }
}


const ans = multiply('1', 7);
// console.log(ans);


function fullName(first, second) {
    if (typeof first !== 'string' || typeof second !== 'string') {
        return 'give me string'
    } else {
        const result = `${first} ${second}`
        return result;
    }
}

const ans1 = fullName('mondal');
// console.log(ans1);


function getPrice(products){
    if(typeof products !== 'object'){
        console.log('give me objects');
    }else if(typeof products.price === "undefined"){
        return 'give me price value'
    }
    const price = products.price;
    return price;
}

const ans2 = getPrice({phone: 'iphone'});
// const ans2 = getPrice('a');
// console.log(ans2);


function getSeconde (array){
    if(Array.isArray(array) === false){
        return 'give me array'
    }
    const second = array[2];
    return second;
}

// const ans3 = getSeconde([10, 22, 33]);
const ans3 = getSeconde(2)
console.log(ans3);