const api = "https://fakestoreapi.com/products";

const products = document.getElementById("products");
const count = document.getElementById("count");
const search = document.getElementById("search");
const category = document.getElementById("category");

let items = []

fetch(api)
    .then(response => response.json())
    .then(data => {
        items = data;
        count.textContent = `Total Products - ${data.length}`
        displayProducts(data);
    })
    .catch(error => {
        console.log(error);
        products.innerHTML = `
            <h2>❌ Unable to Load Products</h2>
            <h4>Please try again later.</h4>
        `;
    })

function displayProducts(data) {

    products.innerHTML = "";

    if (data.length === 0) {
        count.textContent = `Products Found : 0`
        products.innerHTML = `<h2>No Products Found</h2>`
        return;
    }
    data.forEach((product, index) => {
        let div = document.createElement("div");
        div.className = "productCard";
        div.innerHTML = `
            <h3>Product ${index + 1} : ${product.title}</h3>
            <p>Category : ${product.category}</p>
            <img src=${product.image} alt=${product.title}>
            <p>Rating : ⭐ ${product.rating.rate}</p>
            <b>Price : $ ${product.price}</b>
            <p>${product.description.length > 100 ? `${product.description.substring(0, 100)}...Read More` : product.description}</p>
        `;
        const button = document.createElement("button");
        button.innerHTML = "Buy Now";
        button.addEventListener("click", () => buyProduct(product.title));
        div.appendChild(button);
        products.appendChild(div);
    });

}

function buyProduct(name) {
    alert(`Your Selected Product : ${name}`)
}

search.addEventListener("input", filteredProducts);

category.addEventListener("change", filteredProducts);

function filteredProducts(){
    const searchItem = search.value.toLowerCase();
    const categoryName = category.value.toLowerCase();
    
    const filtered = items.filter(product => {
        const searchProduct = product.title.toLowerCase().includes(searchItem);
        const categoryProducts = categoryName === "allproducts" || product.category === categoryName;
        return searchProduct && categoryProducts; 
    });
    count.textContent = `Products Found : ${filtered.length}`
    displayProducts(filtered);
}