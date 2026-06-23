let username = "admin";
let password = "12345";

const name = prompt("Enter userName : ");
const pass = prompt("Enter password : ");

if(name === username && pass === password){
    console.log("Login Successful");
}
else{
    console.log("Invalid Username or password");    
}