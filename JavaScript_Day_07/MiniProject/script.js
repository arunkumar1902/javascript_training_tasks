let employees = [
    {
        id: 101,
        name: "Arun",
        salary: 35000
    },
    {
        id: 102,
        name: "Sanjeeth",
        salary: 50000
    },
    {
        id: 103,
        name: "Naveen",
        salary: 45000
    },
    {
        id: 104,
        name: "Kumar",
        salary: 60000
    },
    {
        id: 105,
        name: "Sanjay",
        salary: 30000
    }
];

function viewEmployees() {
    console.log("Employee List : ");

    employees.forEach(emp => {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, Salary: ₹${emp.salary}`);
    });
}

function searchEmployee(id) {
    const emp = employees.find(e => e.id === id);

    if (emp) {
        console.log("Employee Found : ");
        console.log(emp);
    } else {
        console.log("Employee Not Found");
    }
}

function addBonus(amount) {
    employees = employees.map(emp => ({
        ...emp,
        salary: emp.salary + amount
    }));
    viewEmployees();

    console.log("Bonus Added Successfully!");
}

function highestSalary() {
    const emp = employees.reduce((a, b) =>
        a.salary > b.salary ? a : b
    );

    console.log("Highest Salary Employee : ");
    console.log(emp);
}

function lowestSalary() {
    const emp = employees.reduce((a, b) =>
        a.salary < b.salary ? a : b
    );

    console.log("Lowest Salary Employee : ");
    console.log(emp);
}

function totalSalary() {
    const total = employees.reduce((acc, emp) => {
        return acc + emp.salary;
    }, 0);

    console.log(`Total Salary : ₹${total}`);
}

function filterSalary() {
    const result = employees.filter(emp => emp.salary > 40000);

    console.log("Salary above ₹40,000 : ");

    result.forEach(emp => console.log(emp));
}

function employeeReport() {

    console.log("Employee Report : ");

    employees.forEach(emp => {
        console.log(`Employee name : ${emp.name}, ID : ${emp.id}, Salary  :  ₹${emp.salary}`);
    });
}

function showDateTime() {

    const currentDateTime = new Date();

    console.log(`Current Date & Time: ${currentDateTime}`);
}

function fetchProducts() {

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            console.log("Fetched Products : ");
            products.forEach(product =>
                console.log(`Product Title:  ${product.title}, Product Price : ${product.price}`)
            );
        })
        .catch(error => {
            console.log(error)
        });
}

function menu(choice) {

    switch (choice) {

        case 1:
            viewEmployees();
            break;
        case 2:
            searchEmployee(103);
            break;
        case 3:
            addBonus(5000);
            break;
        case 4:
            highestSalary();
            break;
        case 5:
            lowestSalary();
            break;
        case 6:
            totalSalary();
            break;
        case 7:
            filterSalary();
            break;
        case 8:
            employeeReport();
            break;
        case 9:
            showDateTime();
            break;
        case 10:
            fetchProducts();
            break;
        case 11:
            console.log("Program Exited");
            break;
        default:
            console.log("Invalid Choice");
    }

}

menu(1);
menu(2);
menu(3);
menu(4);
menu(5);
menu(6);
menu(7);
menu(8);
menu(9);
menu(10);
menu(11);

