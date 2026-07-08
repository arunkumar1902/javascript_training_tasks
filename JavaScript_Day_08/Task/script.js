const api = "https://fakestoreapi.com/products";

let items = [];

const count = document.getElementById("TotalProducts");
const products = document.getElementById("products");

const allProducts = document.getElementById("allProducts");
const belowProducts = document.getElementById("belowProducts");
const aboveProducts = document.getElementById("aboveProducts");
const electronicsProducts = document.getElementById("electronicsProducts");
const mensClothing = document.getElementById("mensClothing");
const womensClothing = document.getElementById("womensClothing");
const jewelleryProducts = document.getElementById("jewelleryProducts");
const showFirstFive = document.getElementById("showFirstFive");
const showLastFive = document.getElementById("showLastFive");
const highRated = document.getElementById("highRated");
const cheapProduct = document.getElementById("cheapProduct");
const costlyProduct = document.getElementById("costlyProduct");

const search = document.getElementById("search");

fetch(api)
    .then(response => response.json())
    .then(data => {
        items = data;
        count.textContent = `Total Products : ${data.length}`;
        displayProducts(data);
    })
    .catch(error => {
        console.log(error);

        products.innerHTML = `
            <h2>❌ Unable to Load Products</h2>
            <h4>Please try again later.</h4>
        `;
    });

function displayProducts(data) {
    products.innerHTML = "";
    data.forEach((product, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>Product ${index + 1}: ${product.title}</h3>
                        <p>Category : ${product.category}</p>
                        <p>Ratings : ⭐ ${product.rating.rate}</p>
                        <p>Price : $ ${product.price}</p>
                        <p>${
                            product.description.length>100 
                            ? `${product.description.substring(0,100)}...Read More`
                            : product.description
                        }</p>`;
        products.appendChild(div);
    });
}

allProducts.addEventListener("click", ()=> displayProducts(items));

belowProducts.addEventListener("click",() => {
    const filteredProducts = items.filter(product => product.price < 100);
    displayProducts(filteredProducts);
});

aboveProducts.addEventListener("click",() => {
    const filteredProducts = items.filter(product => product.price > 100);
    displayProducts(filteredProducts);
});

search.addEventListener("input", ()=>{
    let searchItem = search.value.toLowerCase();
    const filteredProducts = items.filter(product => product.title.toLowerCase().includes(searchItem));
    displayProducts(filteredProducts);
});

electronicsProducts.addEventListener("click", ()=>{
    const filteredProducts = items.filter(product => product.category.toLowerCase() === "electronics");
    displayProducts(filteredProducts);
});

mensClothing.addEventListener("click", ()=>{
    const filteredProducts = items.filter(product => product.category.toLowerCase() === "men's clothing");
    displayProducts(filteredProducts);
});

womensClothing.addEventListener("click", ()=>{
    const filteredProducts = items.filter(product => product.category.toLowerCase() === "women's clothing");
    displayProducts(filteredProducts);
});

jewelleryProducts.addEventListener("click", ()=>{
    const filteredProducts = items.filter(product => product.category.toLowerCase() === "jewelery");
    displayProducts(filteredProducts);
});

showFirstFive.addEventListener("click", ()=>{
    let fiveProducts = items.slice(0,5);
    displayProducts(fiveProducts);
});

showLastFive.addEventListener("click", ()=>{
    let fiveProducts = items.slice(items.length-5, items.length);
    displayProducts(fiveProducts);
});

highRated.addEventListener("click", ()=>{
    let highestRated = [...items].sort((a,b) => b.rating.rate - a.rating.rate);
    displayProducts([highestRated[0]]);
});

cheapProduct.addEventListener("click", ()=>{
    let cheapestProduct = [...items].sort((a,b) => a.price - b.price);
    displayProducts([cheapestProduct[0]]);
});

costlyProduct.addEventListener("click", ()=>{
    let costliestProduct = [...items].sort((a,b) => b.price - a.price);
    displayProducts([costliestProduct[0]]);
});