function stringHandsOn(){
var str="  Hey you are doing good, keep it up    ";
console.log(`${str}`);
console.log(`Lenght of string is: ${str.length}`);
var str1=str.trim();
console.log(`Length after removing the spaces ${str1.length}`);
console.log(`Total number of extra spaces ${str.length - str1.length}`);
console.log(`First character after trim is: ${str1.charAt(0)} and Last character after trim is: ${str1.charAt(str1.length-1)}`);
var str_split=str1.split(" ");
console.log(str_split);
console.log(`Count of total words after trim is: ${str_split.length}`);
var index=str1.indexOf("good");
console.log(`Index of word good ${index}`);
console.log(`substring starting from index 22 is: ${str.substring(1,22)}`);
console.log(`is string ends with "up"? ${str1.endsWith("up")}`);
console.log(`is string starts with "Hey"? ${str1.startsWith("Hey")}`);
}
stringHandsOn();
