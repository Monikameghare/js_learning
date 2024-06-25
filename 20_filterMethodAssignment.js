console.log(`========Find out numbers which are greater than 50==========`);
const arrayNumber3=[20,11,40,25,23,37,49,9,90,60,2,19];
const newArray3=arrayNumber3.filter((element)=>{
return element>50;
});
console.log(newArray3);

console.log(`========Find out all even numbers==========`);
const arrayNumber4=[20,11,40,25,23,37,49,9,90,60,2,19];
const newArray4=arrayNumber4.filter((element)=>{
return element %2==0;
});
console.log(newArray4);

console.log(`========Find out all odd numbers==========`);
const arrayNumber5=[20,11,40,25,23,37,49,9,90,60,2,19];
const newArray5=arrayNumber5.filter((element)=>{
return element %2==1;
});
console.log(newArray5);

console.log(`========Find out all odd numbers==========`);
const arrayNumber6=[20,11,40,25,23,37,49,9,90,60,2,19];
const newArray6=arrayNumber6.filter((element)=>{
return element%5==0;
});
console.log(newArray6);

console.log(`========Find out all odd numbers==========`);
const arrayNumber7=[20,11,40,25,23,37,49,9,90,60,2,19];
const newArray7=arrayNumber7.filter((element)=>{
return element>=20 && element<=50
});
console.log(newArray7);