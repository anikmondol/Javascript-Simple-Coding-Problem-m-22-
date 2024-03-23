/*

chair ---> 3cft
table ---> 10 cft
bed ---> 50cft

*/


// function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
//     const chairWood = 3
//     const tableWood = 10
//     const bedWood = 50


//     const totalChairCost = chairQuantity * chairWood;
//     const totalTableCost = tableWood * tableQuantity;
//     const totalBedCost = bedWood * bedQuantity;


//     return total = totalChairCost + totalTableCost + totalBedCost;


// }


// const ans = woodQuantity(0, 0, 1);
// console.log(ans);



// ----------------------------------------------------


/*

shirt price ---> 500
pant price ---> 300
shoe price ---> 900

*/


function totalPrice(shirt, pant, shoe) {
   const shirtPrice = 500;
   const pantPrice = 300;
   const shoePrice = 900;


   const totalShirtPrice = shirtPrice * shirt;
   const totalPantPrice = pantPrice * pant;
   const totalShoePrice = shoePrice * shoe;


   const total = totalShirtPrice + totalPantPrice + totalShoePrice;
  
   return total;


}


const total = totalPrice(0, 0, 1);
console.log(total);