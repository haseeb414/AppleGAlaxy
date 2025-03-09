const products = {
    1: { name: "Product 1", price: 20, image: "https://via.placeholder.com/150" },
    2: { name: "Product 2", price: 35, image: "https://via.placeholder.com/150" }
};

function getProductID() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

function loadProduct() {
    const productId = getProductID();
    if (productId && products[productId]) {
        document.getElementById("product-name").innerText = products[productId].name;
        document.getElementById("product-img").src = products[productId].image;
        document.getElementById("product-price").innerText = products[productId].price;
    }
}

function addToCart() {
    const productId = getProductID();
    if (!productId) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products[productId]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById("cart-total").innerText = total;
}

if (window.location.pathname.includes("product.html")) {
    loadProduct();
} else if (window.location.pathname.includes("cart.html")) {
    loadCart();
}
