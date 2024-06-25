console.log("<=================Number is even or not==============>")
var EvenOddNumber=function (num1) {
    if (num1 %2==0) {
        //console.log(`Number is even: ${num1}`);
        return "Even";
    }
    else{
        return EvenOddNumber;
    }
}
EvenOddNumber(45);
EvenOddNumber(70);
EvenOddNumber(67);
EvenOddNumber(98);

console.log("<=========Check person is eligible for vote or not========>")
var ElgibleForVote=function (age) {
    if (age >= 18) {
        console.log(`Person is eligible for vote and the age is: ${age}`);
    }
    else{
        console.log(`Person is not eligible for vote and the age is: ${age}`);
    }
}
ElgibleForVote(18);
ElgibleForVote(20);
ElgibleForVote(17);
ElgibleForVote(40);

console.log("<=========Check whether string contain more than 10 character or not========>")
var stringLength=function (str) {
    if (str.length >=10) {
        console.log("string contains more than 10 characters");
    }
    else{
        console.log("string is not contains more than 10 characters");
    }
}
stringLength("Javascript-ES6");

console.log("=============String starts with Java or not=============");
var StringStarts=function (str) {
    if(str.startsWith("Java")){
    console.log(`Given string start with word ${str} `);
    }
    else{
        console.log(`Given string does not start with word ${str} `);
    }
}
StringStarts("Javascript Language");
StringStarts("Programming Language");