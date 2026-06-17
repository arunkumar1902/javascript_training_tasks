var employee_name = "Arun Kumar";
let employee_age = 24;
const company_name = "Stackly";
// Print all details using console.log()
console.log("Employee Name : " + employee_name);
console.log("Employee Age : " + employee_age);
console.log("Company Name : " + company_name);

// 5. Show a popup message: "Welcome to Employee Portal"
alert("Welcome to Employee Portal");

// 6. Ask the employee: "Have you completed today's task?"
const task_completion = confirm("Have you completed today's task?");
console.log(task_completion);

// 7. Ask the employee name using prompt().
const name = prompt("Enter your name : ");
console.log(name);

// 8. Display the entered employee name on the webpage.
document.writeln("Welcome " + name);

// 9. Print a success message using console.warn().
console.warn("Task submitted successfully");

// 10. Print an error message using console.error().
console.error("Task submission failed");

// Bonus Task: Update employee age after promotion and print the updated value.
employee_age = 25;
console.log("Employee Age updated: "+ employee_age);