function showMyCart() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let listSpot = document.getElementById("cart-items-list");
  let totalSpot = document.getElementById("cart-total-price");
  let grandTotalSpot = document.getElementById("cart-grand-total");
  let emptyState = document.getElementById("cart-empty-state");

  if (!listSpot) return;

  listSpot.innerHTML = "";
  let cost = 0;

  if (cartItems.length === 0) {
    // Show empty state, hide summary totals
    if (emptyState) emptyState.style.display = "block";
    if (totalSpot) totalSpot.innerText = "$0.00";
    if (grandTotalSpot) grandTotalSpot.innerText = "$0.00";
    return;
  }

  // Hide empty state if there are items
  if (emptyState) emptyState.style.display = "none";

  cartItems.forEach((item, index) => {
    // Parse price — handles "$49.99" or "49.99" formats
    let price = parseFloat(item.price.replace("$", "")) || 0;
    cost += price;

    listSpot.innerHTML += `
      <div class="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm bg-white">
        <div class="d-flex align-items-center">
          <img src="${item.image}" style="width: 80px; height: 80px; object-fit: cover;" class="me-3 rounded" />
          <div>
            <p class="mb-0 fw-bold">${item.name}</p>
            <p class="mb-0 text-muted" style="font-size: 14px;">${item.price}</p>
          </div>
        </div>
        <button onclick="removeItem(${index})" class="btn btn-danger btn-sm">Remove</button>
      </div>
    `;
  });

  let formattedTotal = "$" + cost.toFixed(2);
  if (totalSpot) totalSpot.innerText = formattedTotal;
  if (grandTotalSpot) grandTotalSpot.innerText = formattedTotal;
}

function removeItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  showMyCart();
}

function emptyMyBag() {
  localStorage.removeItem("cart");
  showMyCart();
}

// Run on page load
showMyCart();
