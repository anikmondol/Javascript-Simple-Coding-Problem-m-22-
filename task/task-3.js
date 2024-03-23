/*

Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

*/ 

function calculateTotal(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPice = 35000;
    const tabletPice = 15000;
    const mobilePice = 20000;

    const totalLaptopPrice = laptopQuantity * laptopPice;
    const totalTabletPice = tabletQuantity * tabletPice;
    const totalMobilePrice = mobileQuantity * mobilePice;

    const total = totalLaptopPrice + totalMobilePrice + totalTabletPice;
    return total;

}


const ans = calculateTotal(1, 1, 1);
console.log(ans);
