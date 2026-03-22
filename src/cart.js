function showMyCart() {
  let myShoes = JSON.parse(localStorage.getItem("cart")) || [];
  let listSpot = document.getElementById("cart-items-list");
  let totalSpot = document.getElementById("cart-total-price");

  if (!listSpot) return; // Safety check

  listSpot.innerHTML = "";
  let cost = 0;

  myShoes.forEach((shoe, index) => {
    listSpot.innerHTML += `
          <div class="d-flex align-items-center justify-content-between border rounded p-3 mb-3 shadow-sm bg-white">
        <div class="d-flex align-items-center">
            <img src="${shoe.image}" style="width:80px;" class="me-3 rounded">
            <p class="mb-0"><strong>${shoe.name}</strong> - ${shoe.price}</p>
        </div>
        
        <button onclick="removeItem(${index})" class="btn btn-danger btn-sm">Remove</button>
    </div>
`;
    // Math fix: remove 'N' and add it up
    cost += parseInt(shoe.price.replace("N", "")) || 0;
  });

  totalSpot.innerText = "N" + cost;
}

function removeItem(index) {
  let myShoes = JSON.parse(localStorage.getItem("cart")) || [];
  myShoes.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(myShoes));
  showMyCart();
}

function emptyMyBag() {
  localStorage.removeItem("cart");
  showMyCart();
}

// Run it!
showMyCart();
