let students = [
    {
        name: "Naveen",
        id: 101,
        mark: 85
    },
    {
        name: "John",
        id: 102,
        mark: 45
    },
    {
        name: "Arun",
        id: 103,
        mark: 25
    }
];

for (let student of students) {
    console.log(student);
}

for (let student of students) {
    console.log(student.name);
}

let studentID = 102;

let findStudent = students.find(student => student.id === studentID);

if (findStudent) {
    console.log(`Student with ID ${studentID} : ${findStudent.name}`);
}
else {
    console.log("Student not found");
}

for (let student of students) {
    if (student.mark >= 35) {
        console.log(`${student.name} : Pass`);
    }
}

console.log(`Total Students : ${students.length}`);

// ----------------------------------------------------------

let employees = [
    {
        name: "Naveen",
        salary: 30000
    },
    {
        name: "John",
        salary: 45000
    },
    {
        name: "Arun",
        salary: 60000
    }
];

employees.sort((a, b) => a.salary - b.salary);

console.log(`Highest Salary : ${employees[employees.length - 1].salary}`);
console.log(`Lowest Salary : ${employees[0].salary}`);

employees.forEach(emp => emp.salary += 5000);

for (let emp of employees) {
    console.log(emp);
}

let totalSalary = employees.reduce((acc, emp) => {
    return acc + emp.salary;
}, 0);

console.log(`Total Salary : ${totalSalary}`);

let highSalaryEmp = employees.filter(emp => emp.salary > 40000);

console.log("Employees earning above ₹40,000 :");
for (let emp of highSalaryEmp) {
    console.log(emp);
}

// --------------------------------------------------

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

for (let prod of products) {
    console.log(`Product Name : ${prod.name}`);
}

let totalBill = products.reduce((acc, prod) => {
    return acc + prod.price;
}, 0);
console.log(`Total Bill : ${totalBill}`);

let searchItem = "Mouse";
let searchProduct = products.find(prod => prod.name === searchItem);
if(searchProduct){
    console.log(searchProduct);
}
else{
    console.log("Not Found");    
}

products.forEach(prod => prod.price = prod.price - (prod.price * 0.1));

console.log("Price after Discount 10% :");

for (let prod of products) {
    console.log(prod);
}

let finalBill = products.reduce((acc, prod) => {
    return acc + prod.price;
}, 0);
console.log(`Final Bill : ${finalBill}`);

// -------------------------------------------------

let account = {
    name: "Naveen",
    balance: 50000
};
function deposit(amount) {
    account.balance += amount;
}

function withdraw(amount) {
    if (account.balance >= amount) {
        account.balance -= amount;
    }
    else {
        console.log("Insufficient balance");
    }
}

deposit(10000);
withdraw(5000);

console.log(`Current Balance : ${account.balance}`);

if (account.balance >= 20000) {
    console.log("Balance is above ₹20,000");
}
else {
    console.log("Balance is below ₹20,000");
}

console.log(account);

// --------------------------------------------------

const name = prompt("Enter Username : ");
const pass = prompt("Enter Password : ");

const userName = "Arun";
const password = "123456";

if(name === userName && pass === password){
    console.log(`Welcome ${name}`);    
}
else{
    console.log("Invalid Username or Password");    
}

// ----------------------------------------------------

function signal(color) {
    switch (color.toLowerCase()) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Ready");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Invalid Input");
    }
}

signal("Red");
signal("Yellow");
signal("green");

// ----------------------------------------------------

const bank = {
    name: "Arun",
    balance: 10000
};

function atm(action, amount) {
    switch (action.toLowerCase()) {
        case "balance":
            console.log(`Balance : ${bank.balance}`);
            break;
        case "deposit":
            bank.balance = bank.balance + amount;
            console.log(`Deposit Amount : ${amount}`);
            console.log(`Balance : ${bank.balance}`);
            break;
        case "withdraw":
            if (bank.balance >= amount) {
                bank.balance = bank.balance - amount;
                console.log(`Withdrawal successful, Amount = ${amount}`);
                console.log(`Balance : ${bank.balance}`);
            }
            else {
                console.log("Insufficient Balance");
            }
            break;
        case "exit":
            console.log("Thank You for your service");
            return;
        default:
            console.log("Invalid Request");
    }
}

atm("balance");
atm("deposit", 2000);
atm("Withdraw", 4000);
atm("Exit")

// -------------------------------------------------------

let score = [10, 25, 40, 60, 80, 100];

score.sort((a, b) => a - b);

console.log(`Highest Score : ${score[score.length - 1]}`);
console.log(`Lowest Score : ${score[0]}`);

const totalScore = score.reduce((acc, score) => {
    return acc + score;
}, 0);
console.log(`Total Score : ${totalScore}`);

const averageScore = totalScore / (score.length);
console.log(`Average Score : ${averageScore}`);

// ----------------------------------------------

const age = Number(prompt("Enter your age : "));

const confirmation = confirm("Do you want to watch the movie?");

if(age >= 18 && confirmation){
    console.log("Allowed for movie");
}
else{
    console.log("Not allowed");    
}

// ------------------------------------------------------

const token = Number(prompt("Enter Token (1-3):"));

switch (token) {
    case 1:
        console.log("Doctor A");
        break;

    case 2:
        console.log("Doctor B");
        break;

    case 3:
        console.log("Doctor C");
        break;

    default:
        console.log("Invalid Token");
}

// ----------------------------------------------

let fruits = ["Apple", "Orange", "Banana"];

fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Grapes");
console.log(fruits);

fruits.splice(2, 1, "Gauva");
console.log(fruits);

const newFruits = fruits.slice(1, 3);
console.log(newFruits);

// ----------------------------------------

let employeesDetails = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];

const updatedSalary = employeesDetails.map(emp => ({
    ...emp,
    salary: emp.salary + 5000
}));

console.log("Updated Employee Salary");
for(let emp of updatedSalary){
    console.log(emp);    
}

const filteredEmployees = updatedSalary.filter(emp => emp.salary > 30000);
console.log("Employees with Salary greater than ₹30,000 : ");
for(let emp of filteredEmployees){
    console.log(emp);    
}

const totalEmployeeSalary = updatedSalary.reduce((acc, emp)=>{
    return acc + emp.salary;
}, 0);
console.log(`Total Salary : ${totalEmployeeSalary}`);

const highSalaryEmployee = updatedSalary.some(emp => emp.salary > 60000);
console.log(`Employee earns more than ₹60,000 : ${highSalaryEmployee}`);

const everyEmployee = updatedSalary.every(emp => emp.salary>15000);
console.log(`Employee earns more than ₹15,000 : ${everyEmployee}`);

// -----------------------------------------------------

let company=" Stackly IT ";

const upperCase = company.toUpperCase();
console.log(upperCase);

const lowerCase = company.toLowerCase();
console.log(lowerCase);

const trimCompany = company.trim();
console.log(trimCompany);

const replaceCompany = company.replace("IT", "Software");
console.log(replaceCompany);

const a = company.includes("Stackly");
console.log(a);

const b = company.split(" ");
console.log(b);

// ---------------------------------------------

const interval = setInterval(() => {
    const currentTime = new Date();
    console.log(currentTime);
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped after 10 seconds.");
}, 10000);

// ---------------------------------------------

const api = "https://fakestoreapi.com/products";

fetch(api).then(response => response.json())
    .then(products =>{

        console.log("Product Titles : ");
        products.forEach(product => 
            console.log(product.title)
        );

        console.log("Product Prices : ");
        products.forEach(product => 
            console.log(product.price)            
        );

        console.log("Products costing more than ₹100 :");
        products.forEach(product => {
            if(product.price > 100){
                console.log(product.title);
            }
        })

        console.log(`Total Products : ${products.length}`);
        
        console.log("Category Names : ");
        products.forEach(product => 
            console.log(product.category)
            
        )
              
    })
    .catch(error => {
        console.log(error);        
    });
