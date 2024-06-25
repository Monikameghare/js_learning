console.log("<=============Length of Square=================>");
function squareOfWordLength(str) {
    var LengthOfWord=str.length;
    var LengthSquare=LengthOfWord*LengthOfWord;    
    console.log(`The length of string ${LengthOfWord}, and square of length of string is: ${LengthSquare}`);
}

squareOfWordLength("Javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("===============Find the string of Length============");
function LengthOfString() {
    var str="I am React Developer";
    console.log(`Given string is: ${str}`);
    var StringLength=str.length;
    var ActualNumbers=str.split(" ").length;
    var Division= StringLength/ActualNumbers;
    var Multiplication= StringLength*ActualNumbers;
    console.log(`Division of string length and total number of words is: ${Division}`);
    console.log(`Division of string length and total number of words is: ${Multiplication}`);
}
LengthOfString();