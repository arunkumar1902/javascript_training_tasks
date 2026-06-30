function yearlySalary(salary) {
    return salary * 12;
}

console.log(`Yearly Salary : ₹${yearlySalary(45000)}`);

// ---------------------------------

const score = 72;

function status() {
    if (score >= 35) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
}

status();

// -------------------------------------

const burger = 180;
const quantity = 3;

function totalBill() {
    return burger * quantity;
}

console.log(`Total Bill : ₹${totalBill()}`);

// -----------------------------------------

const employeeName = "Arun";
const department = "Frontend";

function welcome(name, dept) {
    console.log(`Welcome ${name}`);
    console.log(`Department:  ${dept}`);
}

welcome(employeeName, department);

//  ----------------------------------------

const price = 5000;
const discount = 500;

function finalAmount() {
    return price - discount;
}

console.log(`Final Amount : ${finalAmount()}`);

// ------------------------------------------


function success(callback) {
    console.log("Login Successfull");
    callback();
}
function loading() {
    console.log("Loading Dashboard...")
}

success(() => loading());

// ----------------------------------------

function ordered(callback) {
    console.log("Order Received");
    callback();
}
function prepare(callback) {
    console.log("Preparing");
    callback();
}
function deliver(callback) {
    console.log("Out for Delivery");
    callback();
}
function final() {
    console.log("Delivered");
}

ordered(
    () => prepare(
        () => deliver(
            () => final()
        )
    )
);

// ---------------------------------------

function* coupons() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

const offer = coupons();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// ---------------------------------------

function bonus(salary) {
    return function (bonusAmount) {
        console.log(`Total Salary : ${salary + bonusAmount}`);
    }
}

bonus(50000)(5000);

//  -------------------------------------

const employeePersonal = {
    name: "Arun",
    age: 23
};

const employeeOffice = {
    department: "Frontend",
    salary: 5000
};

const employeeDetails = {
    ...employeePersonal,
    ...employeeOffice
};

console.log(employeeDetails);

//  --------------------------------------

const cart1 = ["Apple", "Orange", "Mango"];
const cart2 = ["Tomato", "Potato"];

const carts = [...cart1, ...cart2];
console.log(carts);

// ---------------------------------------------

function student(name, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    console.log(`Student : ${name}`);
    console.log(`Total Marks : ${total}`);
    console.log(`Average : ${average}`);
}

student("Arun", 90, 85, 88, 95);

// ------------------------------------------------

const obj = {
    name: "Laptop",
    productPrice: 65000,
    brand: "Dell",
    stock: 20
};

const {name, productPrice} = obj;
console.log(`Name: ${name}`);
console.log(`Price: ${productPrice}`);

// ----------------------------------------------------

const customerDetails = [111,"Arun","Salem",9876543210];

const [ID, Name, City] = customerDetails;

console.log(`ID: ${ID}`);
console.log(`Name: ${Name}`);
console.log(`City: ${City}`);

// ----------------------------------------------

const productCart = ["Mobile","Laptop"];

productCart.push("Headphone");

console.log(productCart);

// -----------------------------------

productCart.pop();
console.log(productCart);

// ---------------------------------------

const employeeNames = ["Rahul","Arun","John","David"];

employeeNames.splice(2, 1,"Naveen");

console.log(employeeNames);

//  -----------------------------------

const searchProduct = ["Mouse","Keyboard","Monitor","Laptop"];

console.log(searchProduct.includes("Laptop"));

// --------------------------------------

const employeeSalaries = [25000,45000,30000,70000];

console.log(employeeSalaries.sort((a,b) => a-b));

//  ----------------------------------------

const message = ["Hi","Hello","How are you?","Good Morning"];

const reverseMessage = message.reverse();

console.log(reverseMessage);