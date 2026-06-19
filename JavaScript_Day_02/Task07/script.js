const product = {
    productName : "Laptop",
    price: 45000,
    quantity: 0
}

let quantityCount = prompt("How many quantity needed?");
product.quantity = quantityCount;
let total = product.price * product.quantity;

console.log(`Product  : ${product.productName}`);
console.log(`Price  : ${product.price}`);
console.log(`Quantity  : ${product.quantity}`);
console.log(`Total  : ${total}`);

