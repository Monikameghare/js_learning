console.log(`Count the vowels in string`);
var str="I am very good IT Developer";
var counter="aeiou";
var count=0;
for (let index = 0; index < str.length; index++) {
    var lowerString=str.charAt(index).toLowerCase();    
    // if(lowerString.includes.counter && lowerString == ' ')    {
        if(counter.includes(lowerString)){
        count++;
    }
}
console.log(`Total vowels in given string is: ${count}`);

console.log(`=================Sum of cubes from 1 to 5 numbers===============`);
function sumofcube(){
    var number=0;
    var sum=0;
    for (let index = 1; index <= 5; index++) {
        number=  index*index*index; 
        sum=  sum+number; 
    }
    console.log(`Sum of cube of numbers from 1 to 5 is:  ${sum}`);
}
sumofcube();


console.log(`=================Odd Position Characters===============`);
function oddPositioneChars(str){
    var result="";
for (let index = 0; index < str.length; index++) {
    var ch=str.charAt(index);
    if(index %2 == 1 && ch != ' ')
    {  
        result=result+ch;          
    }    
}
console.log(result);
}
oddPositioneChars("Hard work always pays back");
oddPositioneChars("Soon I will be UI IT Champ");
