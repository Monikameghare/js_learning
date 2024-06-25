

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const newArray2 = arrayNumbers.filter( (element)=>{
    return element >=20 && element <=50;
});
console.log(newArray2);