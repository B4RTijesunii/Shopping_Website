function loadCheckout() {
  let myShoes = JSON.parse(localStorage.getItem("cart")) || [];
  let listSpot = document.getElementById("checkout-items");
  let totalSpot = document.getElementById("checkout-total");
  let cost = 0;

  listSpot.innerHTML = "";

  myShoes.forEach((shoe) => {
    listSpot.innerHTML += `
            <div class="d-flex justify-content-between mb-2">
                <span>${shoe.name}</span>
                <strong>${shoe.price}</strong>
            </div>
        `;
    cost += parseInt(shoe.price.replace(/[^\d]/g, "")) || 0;
  });

  totalSpot.innerText = "N" + cost;
}

// Handle the "Purchase" button
document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your order! Your shoes are on the way. 🚚");

  // Clear the cart after buying
  localStorage.removeItem("cart");
  window.location.href = "index.html"; // Go back to home
});

loadCheckout();
