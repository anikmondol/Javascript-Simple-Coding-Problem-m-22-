/*

first100 ---> 100;
101To200 ---> 90;
above200 ---> 70;


*/ 

function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const seconde100Price = 90;
    const above200Price = 70;


    if(quantity <= 100){
        const total = first100Price * 100;
        return total;
    }else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * seconde100Price;
        const total = first100Total + remainingTotal;
        return total;
    }else{
        const first100Total = 100 * first100Price;
        const seconde100Total =  100 * seconde100Price;
        const remainingQuantity = 200 - quantity;
        const remainingTotal = above200Price * remainingQuantity;
        const total = first100Total + seconde100Total + remainingTotal;
        return total;
    }

}


const price = layeredDiscountedTotal(201);
console.log(price);