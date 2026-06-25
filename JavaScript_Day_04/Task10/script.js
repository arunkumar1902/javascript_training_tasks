
// function calculateBonus(id, callback) {
//     const employee = employees.find(emp => emp.id === id);

//     if (!employee) {
//         console.log("Employee Not Found");
//         return;
//     }

//     const bonus = employee.salary * 0.10; // 10% bonus
//     callback(employee, bonus);
// }


// calculateBonus(101, (emp, bonus) => {
//     console.log(`${emp.name}'s Bonus: ₹${bonus}`);
// });



const employees = [];

function addEmployee(id, name, salary){
    const details = {
        employeeID : id,
        employeeName :name,
        employeeSalary : salary
    }
    employees[employees.length] = details;
    console.log(`${name} details added successfully`);
}

function viewEmployee(){
    if(employees.length == 0){
        console.log("No employees");        
    }
    else{
        for(let emp of employees){
            console.log(`ID: ${emp.employeeID}, Name: ${emp.employeeName}, Salary: ${emp.employeeSalary}`);
        }
    }
}

function calculateBonus(id, callback){
    for(let emp of employees){
        if(emp.employeeID === id){
            callback(emp.employeeName, emp.employeeSalary);
            return;
        }
    }
    console.log("Employee Not found");
}

function bonusCalculation(name, salary){
    if(salary>25000){
        console.log(`${name} is Eligible for bonus`);
    }
    else{
        console.log(`${name} is not Eligible for bonus`);
    }
}

function searchEmployee(id){
    for(let emp of employees){
        if(id===emp.employeeID){
            console.log(`Employee Found - ID: ${emp.employeeID}, Name: ${emp.employeeName}, Salary: ${emp.employeeSalary}`);
            return;
        }
    }
    console.log("Employee Not found");
}

function deleteEmployee(id){
    for(let i = 0; i < employees.length; i++){

        if(id === employees[i].employeeID){

            for(let j = i; j < employees.length-1; j++){
                employees[j]=employees[j+1];
            }

            employees.length--;

            console.log(`Employee with ID ${id} removed successfully`);
            return;            
        }
    }
    console.log("Employee not found");
}

function totalEmployees(){
    console.log(`Total Employees : ${employees.length}`);
}

addEmployee(101, "Arun", 20000);
addEmployee(102, "Sanjeeth", 40000);

viewEmployee();

calculateBonus(101, bonusCalculation);
calculateBonus(102, bonusCalculation);

searchEmployee(102);
searchEmployee(112);

totalEmployees();

deleteEmployee(101);
deleteEmployee(131);

viewEmployee();

totalEmployees();
