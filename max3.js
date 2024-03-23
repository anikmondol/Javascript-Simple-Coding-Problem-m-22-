const num1 = 56;
const num2 = 89;
const num3 = 68;


if(num1 > num2 && num1 > num3){
    console.log('jim is the big');
}else if(num2 > num1 && num2 > num3){
    console.log('tim is the big');
}else{
    console.log('kim is the always big');
}

// --------------------------------------

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
}


// const max = maxOfThree(100, 20, 30);
// console.log(max);



// ------------------------


const max = Math.max(121, 44, 454, 787);
console.log(max);
const min =  Math.min(121, 44, 454, 787);
console.log(min);