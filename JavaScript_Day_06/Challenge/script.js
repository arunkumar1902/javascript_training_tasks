 let employees = [
{
    name: "Naveen",
    id: 101,
    salary: 30000
},
{
    name: "John",
    id: 102,
    salary: 60000
},
{
    name: "Arun",
    id: 103,
    salary: 45000
}
];

console.log("Total Employees:", employees.length);

employees.sort((a, b) => a.salary - b.salary);

let highSalaryEmployee = employees[employees.length - 1];
let lowSalaryEmployee = employees[0];

console.log(`Highest Salary: ${highSalaryEmployee.salary}`);
console.log(`Lowest Salary: ${lowSalaryEmployee.salary}`);

let employeesSalary = employees.map(emp => emp.salary);
let totalSalary = 0;
for (let empSalary of employeesSalary) {
    totalSalary += empSalary;
}
console.log(`Total Salary : ${totalSalary}`);

console.log("Highest Paid Employee:", highSalaryEmployee.name);
console.log("Lowest Paid Employee:", lowSalaryEmployee.name);

let greaterSalaryEmployees = employees.filter(emp => emp.salary > 40000);
console.log("Employees with Salary greater than ₹40,000:", greaterSalaryEmployees);

let searchId = 102;
let emp = employees.find(emp => emp.id === searchId);

if (emp) {
    console.log(`Employee Found: ${emp.name}`);
} else {
    console.log("Employee Not Found");
}

let updatedEmployees = employees.map(emp => ({
    ...emp,
    salary: emp.salary + 5000
}));
updatedEmployees.forEach(emp =>
    console.log(`${emp.name}: ₹${emp.salary}`)
);

console.log("===== Employee Report =====");

updatedEmployees.forEach(emp => {
    console.log(`Employee Name : ${emp.name}`);
    console.log(`Employee ID : ${emp.id}`);
    console.log(`Salary : ${emp.salary}`);   
    console.log("-----------------------------");
});