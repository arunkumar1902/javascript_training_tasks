const details = {
    name:"Arun",
    id:"EMP2903",
    department:"Development",
    experience:3,
    salary:50000,
    bonus:5000,
}
const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"]

const username = prompt("Enter User Name : ");
const password = prompt("Enter User Password : ");
let loginStatus = (username === "Arun" && password ==="12345");

let attendance = prompt("Enter attendence percentage : ");
let company = prompt("Enter Company Name :")
let companyLocation = prompt("Enter Company Location :")


console.log("==========================");
console.log("     EMPLOYEE DETAILS     ");
console.log("==========================");
console.log(`Employee Name : ${details.name}`);
console.log(`Employee ID   : ${details.id}`);  
console.log(`Department    : ${details.department}`);
console.log(`Experience    : ${details.experience} years`);
console.log(`Salary        : ₹${details.salary}`);
console.log(`Bonus         : ₹${details.bonus}`);
console.log(`Final Salary  : ₹${details.salary + details.bonus}`);
console.log(`Skills        : ${skills}`);
console.log(`Attendence    : ${attendance}%`);
console.log(`Exam Status   : ${attendance >= 50 ? "Eligible" : "Not Eligible"}`);
console.log(`Login Status  : ${loginStatus ? "Success" : "Failed"}`);
console.log(`Company       : ${company}`);
console.log(`Location      : ${companyLocation}`);
console.log("==========================");
