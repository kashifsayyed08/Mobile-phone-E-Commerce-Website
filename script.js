
function addToCart() {
    var phoneImage = "mobile.png";
    var phoneDescription = "Habibi Phone 1 - Cutting-edge technology meets elegant design.";

    var cartItem = {
        image: phoneImage,
        description: phoneDescription,
    };

    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

   
    window.location.href = "cart.html";
}
