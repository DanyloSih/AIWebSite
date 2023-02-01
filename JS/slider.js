const pizzaCards = document.querySelectorAll(".pizza-card");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 0;

pizzaCards[currentIndex].classList.add("active");

prevBtn.addEventListener("click", function() {
  pizzaCards[currentIndex].classList.remove("active");
  currentIndex = currentIndex > 0 ? currentIndex - 1 : pizzaCards.length - 1;
  pizzaCards[currentIndex].classList.add("active");
});

nextBtn.addEventListener("click", function() {
  pizzaCards[currentIndex].classList.remove("active");
  currentIndex = currentIndex < pizzaCards.length - 1 ? currentIndex + 1 : 0;
  pizzaCards[currentIndex].classList.add("active");
});