const employeeDetails = [
    {
        id: 101,
        name: "Arun",
        salary: 30000,
        bonus: 2000
    },
    {
        id: 102,
        name: "Sanjeeth",
        salary: 35000,
        bonus: 2500
    }
];

function viewEmployee() {
    console.log("View Employee :");
    if (employeeDetails.length > 0) {
        for (let employee of employeeDetails) {
            console.log(employee);
        }
    }
    else {
        console.log("No Employee Found");
    }
}

function addEmployee() {
    const id = Number(prompt("Enter Employee ID : "));
    const name = prompt("Enter Employee Name : ");
    const salary = Number(prompt("Enter Employee Salary : "));
    const bonus = Number(prompt("Enter Employee Bonus : "));

    const details = {
        id: id,
        name: name,
        salary: salary,
        bonus: bonus
    }

    employeeDetails.push(details);
    console.log("Employee added successfully");
    viewEmployee();
}

function searchByID(id) {
    console.log(`Search by ID : ${id}`);

    let employee = employeeDetails.find(emp => emp.id === id);

    if (employee) {
        console.log(employee);
    }
    else {
        console.log("Employee not found");
    }
}


function calculateSalary(id) {
    console.log(`Calculate Salary + Bonus for Employee ID : ${id}`);
    
    let employee = employeeDetails.find(emp => emp.id === id);
    
    if (employee) {
        let totalSalary = employee.salary + employee.bonus;
        console.log(`Employee Name: ${employee.name}, Total Salary = ${totalSalary}`);
    }
    else {
        console.log("Employee not found");
    }
}

function sortSalary(){
    console.log("Sort Employees by Salary : ");

    employeeDetails.sort((a,b)=> a.salary - b.salary);
    viewEmployee();    
}

function removeEmployee(id){
    console.log(`Remove Employee : ${id}`);
    
    let employeeIndex = employeeDetails.findIndex(emp => emp.id === id);

    if(employeeIndex !== -1){
        employeeDetails.splice(employeeIndex, 1);
        console.log("Removed Successfully");
        viewEmployee();
    }
    else{
        console.log("Employee not Found");
        
    }
}

function findByName(name) {
    console.log(`Find by Name : ${name}`);

    let employee = employeeDetails.find(emp => emp.name === name);

    if (employee) {
        console.log(employee);
    }
    else {
        console.log("Employee not found");
    }
}

function displayEmployee(id) {
    console.log("Display Employee Details using Destructuring : ");

    let employee = employeeDetails.find(emp => emp.id === id);

    if (employee) {
        let { id, name, salary, bonus } = employee;
        console.log(`Employee ID : ${id}`);
        console.log(`Employee Name : ${name}`);
        console.log(`Employee Salary : ${salary}`);
        console.log(`Employee Bonus : ${bonus}`);
    }

    else {
        console.log("Employee not found");
    }
}

viewEmployee();
addEmployee();
searchByID(101);
findByName("Sanjeeth");
calculateSalary(102);
displayEmployee(101);
sortSalary();
removeEmployee(102);