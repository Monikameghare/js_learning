
console.log(`=====================FInd total elements length=========================`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers.length);

console.log(`================Find first and last element in array====================`);
const arrayNumbers1=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers1[0]);
const lastElement=arrayNumbers1.length-1;
const lastArrayElement=arrayNumbers1[lastElement];
console.log(lastArrayElement);

console.log(`===============Log third last element and log it====================`);
const arrayNumbers2=[20,31,40,25,23,11,29,9,60,2,11];
// const lastThirdIndex=arrayNumbers2.slice(arrayNumbers2.length-3);
const lastThirdIndex=arrayNumbers2.length-3;
const lastThirdElement=arrayNumbers2[lastThirdIndex];
console.log(lastThirdElement);

console.log(`===============Find even numbers elements and log it====================`);
const arrayNumbers3=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers3.length; index++) {
    const element = arrayNumbers3[index];
    if(element%2==0)
        console.log(element);    
}

console.log(`===============Find odd numbers elements and log it====================`);
const arrayNumbers4=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers4.length; index++) {
    const element = arrayNumbers4[index];
    if(element%2!=0)
        console.log(element);    
// }

console.log(`===============Find even positioned numbers elements and sum it====================`);
const arrayNumbers5=[20,31,40,25,23,11,29,9,60,2,11];
let sum=0;
for (let index = 0; index < arrayNumbers5.length; index++) {
    const element = arrayNumbers5[index];     
    if(index %2==0){
        sum=sum+element;
    }
    console.log(sum);
}

console.log(`===============Find odd positioned numbers elements and sum it====================`);
const arrayNumbers6=[20,31,40,25,23,11,29,9,60,2,11];
let sumodd=0;
for (let index = 0; index < arrayNumbers6.length; index++) {
    const element = arrayNumbers6[index];     
    if(index %2==1){
        sumodd=sumodd+element;
    }
    console.log(sumodd);
}

console.log(`===============Sum of all elements from array and log it====================`);
const arrayNumbers7=[20,31,40,25,23,11,29,9,60,2,11];
let sumall=0;
for (let index = 0; index < arrayNumbers7.length; index++) {
    const element = arrayNumbers7[index];
    sumall=sumall+element;    
}
console.log(sumall);

console.log(`===============Numbers which are multiple of 5====================`);
const arrayNumbers8=[20,31,40,25,23,11,29,9,60,2,11];
//let sumall=0;
for (let index = 0; index < arrayNumbers8.length; index++) {
    const element = arrayNumbers8[index];
    if(element %5==0){
        console.log(element);
    }
}

console.log(`===============Includes 115 in array or not====================`);
const arrayNumbers9=[20,31,40,25,23,11,29,9,60,2,11];
let result=arrayNumbers9.includes(115);
console.log(result);

console.log(`===============Includes 23 in array or not====================`);
const arrayNumbers10=[20,31,40,25,23,11,29,9,60,2,11];
let result1=arrayNumbers10.includes(23);
console.log(result1);

console.log(`=============Insert number 55,66 at index 3 and log array==============`);
// const index1=fruitSeasonal.indexOf("Watermelon");
const arrayNumbers11=[20,31,40,25,23,11,29,9,60,2,11];
const x1=arrayNumbers11.splice(3,0,55,66);
console.log(`${arrayNumbers11}`);

console.log(`=============Delete 3 elements starting from index 4==============`);
const arrayNumbers12=[20,31,40,25,23,11,29,9,60,2,11];
const x2=arrayNumbers12.splice(4,3);
console.log(`${arrayNumbers12}`);


