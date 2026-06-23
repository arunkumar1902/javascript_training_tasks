const name = prompt("Enter Employee Name : ");
const age = prompt("Enter Employee Age : ");
const department = prompt("Enter Employee Department : ");
const salary = Number(prompt("Enter Employee Salary : "));

const employee_details = {
    employee_name: name,
    employee_age: age,
    employee_department:department,
    employee_salary:salary
};

if(employee_details.employee_salary > 30000){
    console.log("Eligible for Bonus");
}
else{
    console.log("Not Eligible");
}
