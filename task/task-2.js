/*

Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/ 

function findsSmallest(names){
    let smallestName = names[0];
   for(const name of names){
    if(name.length < smallestName.length){
        smallestName = name;
    }
   }
   return smallestName;
}




const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const ans = findsSmallest(heights2);
console.log(ans);