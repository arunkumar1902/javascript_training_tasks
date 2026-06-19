let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * (10/100);
let finalSalary = totalSalary - tax;

console.log(` Total Salary  : ${totalSalary}`);
console.log(` Tax  : ${tax}`);
console.log(` Final Salary  : ${finalSalary}`);
