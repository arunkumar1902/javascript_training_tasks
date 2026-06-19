const customer = {
    name: "Arun",
    age: 24,
    acountNumber: 1234567890,
    accountType: "Salary",
    balance: 30000,
    bank: "SBI",
    location: "Salem"
}

alert("Welcome to our ATM");
alert("---------Please Enter ATM Card---------");

let pin = prompt("Enter ATM Pin number :");
let loginStatus = (pin == 1234);

let withdraw = prompt("Enter withdraw amount : ");
let verifyWithdraw = (customer.balance >= withdraw);

let finalBalance = (loginStatus && verifyWithdraw) ? customer.balance - withdraw : customer.balance;
let transactionStatus =  (loginStatus && verifyWithdraw) ?"Success": "Failed";

customer.balance = finalBalance;


console.log("=======================================");
console.log("              ATM System              ");
console.log("=======================================");
console.log(loginStatus ? "Login Status         : Succes":"Login Status         : Failed, Wrong Pin");
console.log(loginStatus ?`Customer Name        : ${customer.name}`: `Customer Name        : Unknown`);
console.log(loginStatus ?`Account Number       : ${customer.acountNumber}`:`Account Number       : Unknown`);
console.log(loginStatus ?`Account Type         : ${customer.accountType}`:`Account Type         : Unknown`);
console.log(loginStatus ?`Bank Name            : ${customer.accountType}`:`Bank Name            : Unknown`);
console.log(`Transaction Status   : ${transactionStatus}`);
console.log((loginStatus && verifyWithdraw) ?`Total Amount Withdraw: ${withdraw}`: `Total Amount Withdraw: None`);
console.log((loginStatus) ?`Your Current balance : ${customer.balance}`: `Your Current balance : Unknown`);
console.log((loginStatus && verifyWithdraw) ?`Recent Transactions  : Withdrawal amount ${withdraw}`: `Recent Transactions  : None`);
console.log("Thank you for your service");
console.log("=======================================");

