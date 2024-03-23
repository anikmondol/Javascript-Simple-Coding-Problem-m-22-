const disha = 56;
const salman = 96;


if(disha > salman){
    console.log('disha get the food');
}else{
    console.log('salman get the food');
}


// inside a function


function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;

    }
}


const max1 = getMax(20, 30);
const max2 = getMax(55, 66);
const ultimateMax = getMax(max1, max2)
console.log(ultimateMax);
