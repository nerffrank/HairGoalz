// cart.js

// Function to get cart from localStorage or initialize empty
function getCart() {
  return JSON.parse(localStorage.getItem("hairgoalz_cart")) || [];
}

// Function to save cart back to localStorage
function saveCart(cart) {
  localStorage.setItem("hairgoalz_cart", JSON.stringify(cart));
}

// Add to cart functionality
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const image = button.dataset.image;

    const cart = getCart();

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name,
        price,
        image,
        quantity: 1
      });
    }

    saveCart(cart);
    alert(`${name} added to cart!`);
  });
});
