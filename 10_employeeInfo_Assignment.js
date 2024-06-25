const employee=`{
    "name":"Aleix Melon",
    "id":"E0245",
    "role":["Dev","Tester"],
    "age":25,
    "doj":"11-12-2019",
    "married":"false",
    "address":{
        "street":"32, Laham st.",
        "city":"Perth",
        "country":"Australia"
    },
    "referred-by":"E0012"
}`

console.log(typeof employee);
console.log(employee);
const emp=JSON.parse(employee);
console.log(typeof emp);
console.log(emp);
const roleofobject=emp.role;
for (const element of roleofobject) {
    console.log(element);
}

