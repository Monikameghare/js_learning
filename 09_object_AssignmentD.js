const professor={
    Name:"Monika Meghare",
    Age:30,
    Subject:"Maths",
    City:"Nagpur",
    Department:"Mathematics",
    Degree:{
    engineering:"CSC",
    PHD:"Advance Company" ,
    Diploma:"CTE"   
    },
    Certificate:["Hacker Rank Participation","Certificates in IFE Codes","Certificates in Advance Programming"], 
}
console.log(professor);
professor.totalExperince="14"
console.log(`Total experience is: ${professor.totalExperince}`);
console.log(`Before Department ${professor.Department}`);
professor.Department="Physics";
console.log(`After Department ${professor.Department}`);

professor.Certificate.splice(2,0,"Oracle Certified");
console.log(`After adding the certificate in 2nd index of array is: 
${professor.Certificate}`);
const arrayNew=professor.Certificate.length-1;
const elementArray=professor.Certificate[arrayNew];
console.log(elementArray);
console.log(professor);