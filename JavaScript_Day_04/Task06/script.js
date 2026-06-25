const balance = Number(prompt("Enter Balance : "));
const withdraw = Number(prompt("Enter Withdrawal amount : "));

if(balance >= withdraw){
    balance = balance - withdraw;
    console.log("Withdrawal Success");    
}
else{
    console.log("Withdrawal Failure");
}