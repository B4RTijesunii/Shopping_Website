function loadCheckout() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let listSpot = document.getElementById("checkout-items");
  let totalSpot = document.getElementById("checkout-total");
  let cost = 0;

  listSpot.innerHTML = "";

  if (cartItems.length === 0) {
    listSpot.innerHTML = `<p class="text-muted" style="font-size: 14px;">Your cart is empty.</p>`;
    if (totalSpot) totalSpot.innerText = "$0.00";
    return;
  }

  cartItems.forEach((item) => {
    let price = parseFloat(item.price.replace("$", "")) || 0;
    cost += price;

    listSpot.innerHTML += `
      <div class="d-flex justify-content-between mb-3">
        <div class="d-flex align-items-center gap-2">
          <img src="${item.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;" />
          <span style="font-size: 14px;">${item.name}</span>
        </div>
        <strong style="font-size: 14px;">${item.price}</strong>
      </div>
    `;
  });

  if (totalSpot) totalSpot.innerText = "$" + cost.toFixed(2);
}

// Handle form submission
document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your order! Your items are on the way. 🚚");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});

loadCheckout();
