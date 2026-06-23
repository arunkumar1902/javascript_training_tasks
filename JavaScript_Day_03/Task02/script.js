const name = prompt("Enter Product name : ");
const price = Number(prompt("Enter Product price : "));
const quantity = Number(prompt("Enter Product quantity : "));

const total_bill = quantity * price;

let final_amount = total_bill;
let discount = total_bill * (10/100);

if(total_bill > 5000){
    final_amount = total_bill - discount;
}

console.log("Final Amount : " + final_amount);