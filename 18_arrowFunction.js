// Arrow Function

let Multiply=() => {
console.log(2*2);
}
Multiply();


let Multiply1=(n1,n2) => {
    console.log(2*2);
    }
    Multiply(2,2);
    


    let Multiply2=(n1,n2) => {
        var result=console.log(n1*n2);
        return result
        }
        Multiply(2,2);

// Arrow Function 
let multiply = (n1, n2) => {
    const result =n1*n2;
    return result;
}
const value = multiply(2, 9);
console.log(value);        