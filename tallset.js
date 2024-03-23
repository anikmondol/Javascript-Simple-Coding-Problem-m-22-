const heights = [65, 66, 72, 78, 60, 65];

// function getMax(numbers){
//     let logiest = numbers[0]
//     for(let number of numbers){
//        if(number > logiest){
//         logiest = number;
//        }
//     }
//     return logiest;
// }


// const max = getMax(heights);
// console.log(max);


// ----------------------------------------


function getLowest(numbers){
    let lowest = numbers[0]
    for(let number of numbers){
        if(number < lowest ){
            lowest = number;
        }
    }
    return lowest;
}


const lowest = getLowest(heights);
console.log(lowest);