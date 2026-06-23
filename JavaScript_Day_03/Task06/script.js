const foodItems = [
  "Pizza",
  "Burger",
  "Biryani",
  "Dosa",
  "Pasta",
  "Sushi",
  "Salad",
  "Ice Cream"
];

console.log("First Item : " + foodItems[0]);
console.log("Last Item : " + foodItems[foodItems.length - 1]);

console.log("All Food Items : ");

for(let item of foodItems){
    console.log(item);    
}
