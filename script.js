// Sample products data
const products = [
    { id: 1, name: "Product 1", price: 10, image: "https://img.freepik.com/free-photo/brown-leather-shoes_74190-2610.jpg?uid=R144468810&ga=GA1.1.1909349191.1687715742&semt=ais_hybrid" },
    { id: 2, name: "Product 2", price: 20, image: "https://img.freepik.com/premium-photo/beautiful-stylish-shoes-sports-white-background_261642-2521.jpg?uid=R144468810&ga=GA1.1.1909349191.1687715742&semt=ais_hybrid" },
    { id: 3, name: "Product 3", price: 30, image: "https://img.freepik.com/premium-photo/isolated-unisex-modern-style-jogging-shoes_999476-2223.jpg?uid=R144468810&ga=GA1.1.1909349191.1687715742&semt=ais_hybrid" },
    { id: 4, name: "Product 4", price: 40, image: "https://img.freepik.com/free-photo/woman-shoes_1203-8750.jpg?uid=R144468810&ga=GA1.1.1909349191.1687715742&semt=ais_hybrid" },
];

// Cart to store selected items
let cart = [];

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} added to the cart.`);
    }
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function for checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert(`Checkout successful! You have ${cart.length} items in your cart.`);
        cart = []; // Clear the cart
        updateCartCount();
    } else {
        alert('Your cart is empty.');
    }
});

// Initialize the products display
displayProducts();
