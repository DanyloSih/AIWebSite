const shoppingCart = document.querySelector(".cart-sidebar");
const totalPrice = document.querySelector(".cart-total");
let cart = [];
let total = 0;

const addToCart = function (event) {
  const pizzaCard = event.target.parentElement;
  const pizzaImage = pizzaCard.querySelector("img").src;
  const pizzaName = pizzaCard.querySelector("h2").textContent;
  const pizzaPrice = pizzaCard.querySelector(".pizza-price").textContent;

  const cartItem = `
    <div class="cart-item">
      <img src="${pizzaImage}" alt="${pizzaName}">
      <div class="cart-item-info">
        <div class="cart-item-name">${pizzaName}</div>
        <div class="cart-item-price">${pizzaPrice}</div>
      </div>
    </div>
  `;

  shoppingCart.insertAdjacentHTML("beforeend", cartItem);
  cart.push({ pizzaImage, pizzaName, pizzaPrice });
  total += parseInt(pizzaPrice.split("₴")[1]);
  totalPrice.textContent = `Total: ₴${total}`;
};

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => button.addEventListener("click", addToCart))