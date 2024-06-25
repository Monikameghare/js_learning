
console.log(`=================Log first and last element from array================`);
const fruitSeasonal=["Banana","Orange","Apple","Mango","Watermelon"];
let arrayfirstelement=fruitSeasonal[0];
let arraylength=fruitSeasonal.length-1;
let arraylastelement1=fruitSeasonal[arraylength]
console.log(arrayfirstelement);
console.log(arraylastelement1);

console.log(`=================Add papaya before banana element================`);
fruitSeasonal.unshift("Papaya");
console.log(`${fruitSeasonal}`);


console.log(`=============Remove the mango element==============`);
const index=fruitSeasonal.indexOf("Mango");
const x=fruitSeasonal.splice(index,1);
console.log(`${fruitSeasonal}`);

console.log(`=============Add Pineapple in last position of array==============`);
fruitSeasonal.push("Pineapple");
console.log(`${fruitSeasonal}`);

console.log(`=============Insert Dragon fruit before watermelon element==============`);
const index1=fruitSeasonal.indexOf("Watermelon");
const x1=fruitSeasonal.splice(index1,0,"Dragaon");
console.log(`${fruitSeasonal}`);

console.log(`=============Replace orange element with Kiwi element==============`);
const index2=fruitSeasonal.indexOf("Orange");
const x2=fruitSeasonal.splice(index2,1,"Kiwi");
console.log(`${fruitSeasonal}`);

console.log(`=============Log the elements from 1 index to 4==============`);
const x3=fruitSeasonal.slice(1,4);
console.log(`${fruitSeasonal}`);

console.log(`=============Log the last three elements from array==============`);
console.log(fruitSeasonal.slice(fruitSeasonal.length-3));









