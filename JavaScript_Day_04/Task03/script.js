let products = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:1000},
    {name:"Keyboard", price:2000}
];

let total = 0;

function price(prod){
    return prod.price;
}

for(let prod of products){
    total += price(prod);
}

if(total>=5000){
    let discount = total*(10/100);
    total -= discount;
}
console.log(`Total Bill : ${total}`);

