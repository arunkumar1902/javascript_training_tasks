let employeeName = prompt("Enter Employee Name : ");
let employeeAge = prompt("Enter Employee Age : ");
let joinStatus = confirm("Do you want to join our company?");

alert(
    joinStatus ? `Welcome ${employeeName}` : "Thank you"
);
