
console.log(`===================Add 10 into each element using map=======================`);
const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];
const newArray=arrayNumber.map((element)=>{
    return element+10;
});
console.log(newArray);

console.log(`===================Cube the array each element using map=======================`);
const arrayNumber1=[20,11,40,25,23,11,9,31,60,2,19];
const newArray1=arrayNumber1.map((element)=>{
    return element*element*element;
});
console.log(newArray1);

console.log(`===========Add index value into its corresponding array element==========`);
const arrayNumber2=[20,11,40,25,23,11,9,31,60,2,19];
const newArray2=arrayNumber2.map((element,index)=>{
    return element+index;
});
console.log(newArray2);