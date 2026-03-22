let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");
    const image = button.getAttribute("data-image");

    console.log("Button clicked!", name, price, image);

    cart.push({ name, price, image });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
  });
});
