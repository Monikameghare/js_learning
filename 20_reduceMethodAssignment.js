console.log(`========sum of all numbers using reduce and in traditional way==========`);
let arrayNumber7=[20,11,40,25,23,37,49,9,90,60,2,19];
const newArray7=arrayNumber7.reduce((runningTotal,value)=>{
return runningTotal+value;
},0);
console.log(newArray7);

console.log(`========Numbers Multiple of 5 and sum it==========`);
let arrayNumber8=[20,11,40,25,23,37,49,9,90,60,2,19];
const newArray8=arrayNumber8.filter((value)=>{
return value%5==0;
});
console.log(newArray8);
const reduceArray=newArray8.reduce((runningTotal1,value)=>{
return runningTotal1+value;
},0);
console.log(reduceArray);