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

employees.sort((a, b) => a.salary - b.salary);

let highSalaryEmployee = employees[employees.length - 1];

console.log(`Highest Salary: ${highSalaryEmployee.salary}`);
console.log(`Employee Name: ${highSalaryEmployee.name}`);

// ----------------------------------------

let searchId = 103;

let searchEmployee = employees.find(emp => emp.id === searchId);

if (searchEmployee) {
    console.log("Employee Found");
    console.log(`Name : ${searchEmployee.name}`);
    console.log(`Salary : ${searchEmployee.salary}`);
}
else {
    console.log("Employee Not Found");
}

// ----------------------------------------------

let bonus = 5000;

for (let emp of employees) {
    console.log(`${emp.name} : ${emp.salary + bonus}`);
}

// -------------------------------------------

let employeesExp = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];

for (let emp of employeesExp) {
    if (emp.experience >= 5) {
        console.log(`${emp.name} : Senior Employee`);
    }
    else {
        console.log(`${emp.name} : Junior Employee`);
    }
}

// ------------------------------------

let employeesName = employees.map(emp => emp.name);

for (let emp of employeesName) {
    console.log(emp);
}

// ---------------------------------------------

let employeesID = employees.map(emp => emp.id);

for (let empID of employeesID) {
    console.log(empID);
}

// ------------------------------------------

let employeesSalary = employees.map(emp => emp.salary);
let totalSalary = 0;
for (let empSalary of employeesSalary) {
    totalSalary += empSalary;
}
console.log(`Total Salary : ${totalSalary}`);

// ------------------------------

for (let emp of employees) {
    if (emp.salary >= 40000) {
        console.log(emp.name);
    }
}

// ---------------------------------

let newEmployees = employees.map(emp => ({
    ...emp,
    salary: emp.salary + 5000
}));
for (let emp of newEmployees) {
    console.log(`${emp.name} : ${emp.salary}`);
}

// -----------------------------------------

employees.forEach(emp => {
    console.log(`Employee Name : ${emp.name}`);
    console.log(`Employee ID : ${emp.id}`);
    console.log(`Salary : ${emp.salary}`);   
    console.log("-----------------------------");
});