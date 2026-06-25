const employees = [
    {
        name: "Arun",
        id:101,
        salary:17000
    },
    {
        name: "Sanjay",
        id:102,
        salary:25000
    },
    {
        name: "Sanjeeth",
        id:103,
        salary:45000
    }
];

for(let emp of employees){
    if(emp.salary >=20000){
        console.log(`${emp.name} : Eligible for Bonus`);
    }
    else{
        console.log(`${emp.name} : Not Eligible for Bonus`);
    }
}