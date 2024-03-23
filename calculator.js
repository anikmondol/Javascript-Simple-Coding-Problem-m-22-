function add(num1, num2){
    const result = num1 + num2;
    return result;
}



function sub(num1, num2){
    const result = num1 - num2;
    return result;
}



function mul(num1, num2){
    const result = num1 * num2;
    return result;
}



function div(num1, num2){
    const result = num1 / num2;
    return result;
}


function calculator(a, b, operation){
    if(operation === 'sum'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a, b);
        return result;
    }
    else if(operation === 'mul'){
        const result = mul(a, b);
        return result;
    }
    else if(operation === 'div'){
        const result = div(a, b);
        return result;
    }
    else{
        return `only 'sum', 'sub', 'mul', 'div' allowed`
    }
}


const ans = calculator(5, 7, "sum");
console.log(ans);