function cricket()
{
    var cricket_lover="I love cricket";
    console.log(cricket_lover);    
}
cricket();

function football()
{
    var football_lover="I love football more than cricket";
    console.log(football_lover);
}
football();

console.log("=======function calling with three argument and no return type=======");

function personalDetails(firstName, lastName,collegeName) {
    console.log(firstName,lastName,collegeName);
    console.log("My firstname is: ",firstName);
    console.log("My lastname is: ",lastName);
    console.log("My college name is: ",collegeName);
}
personalDetails("Monika","Meghare","RTMNU");
console.log("=========step3===========");

function addThreeValues(alphanum1,alphanum2,alphanum3) {
    var result=alphanum1+alphanum2+alphanum3;
    console.log("Addition of three values is:", result);    
}
addThreeValues(10.23,600,40);
addThreeValues("Hello "," Good "," Morning");