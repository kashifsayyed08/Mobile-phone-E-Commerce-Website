

document.addEventListener("DOMContentLoaded", function () {
    
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    displayCartItems(cart);
});

function displayCartItems(cart) {
    var cartItemsContainer = document.getElementById("cartItems");

    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    
    cart.forEach(function (item) {
        var cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";

        var imageElement = document.createElement("img");
        imageElement.src = item.image;
        imageElement.alt = "";

        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = item.description;

        cartItemDiv.appendChild(imageElement);
        cartItemDiv.appendChild(descriptionElement);

        cartItemsContainer.appendChild(cartItemDiv);
    });
}
