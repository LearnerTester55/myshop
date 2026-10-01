const buyButton = document.getElementById("buyButton");
const message = document.getElementById("message");

buyButton.addEventListener("click", function () {
    message.textContent = "Product added to cart!";
});