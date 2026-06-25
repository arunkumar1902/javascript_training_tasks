let username = "admin";
let password = "12345";

let name = prompt("Enter Username : ");
let pass = prompt("Enter Password : ");

function authenticate(name, pass){
    let  verification = (name===username && pass === password);
    return (verification ? "Login Success": "Invalid Credentials");
}

console.log(authenticate(name,pass));