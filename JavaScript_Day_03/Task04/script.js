const name = prompt("Enter User Name : ");
const balance = Number(prompt("Enter Account balance : "));
const withdraw = Number(prompt("Enter Withdrawal Amount : "));

if(withdraw <= balance){
    console.log("Transaction Successfull");    
}
else{
    console.log("Insufficient Balance");
}