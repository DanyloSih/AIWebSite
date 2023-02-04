const pizzaCards = document.querySelectorAll(".pizza-card");
const pizzaPanel = document.querySelector(".pizza-panel");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 0;

pizzaCards[0].classList.add("active");
let cardsPerPage = Math.floor(pizzaPanel.offsetWidth / pizzaCards[0].offsetWidth * 0.9);

pizzaCards.forEach((card, index) => {
  if (index >= currentIndex && index < currentIndex + cardsPerPage) {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});

prevBtn.addEventListener("click", function () {
  currentIndex =
    currentIndex - cardsPerPage >= 0
      ? currentIndex - cardsPerPage
      : pizzaCards.length - (pizzaCards.length % cardsPerPage);
  pizzaCards.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + cardsPerPage) {
      card.classList.remove("animate-out");
      card.classList.add("animate-in");
      card.style.display = "block";
    } else {
      card.classList.remove("animate-in");
      card.classList.add("animate-out");
      card.style.display = "none";
    }
  });
});

nextBtn.addEventListener("click", function () {
  currentIndex =
    currentIndex + cardsPerPage < pizzaCards.length
      ? currentIndex + cardsPerPage
      : 0;
  pizzaCards.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + cardsPerPage) {
      card.classList.remove("animate-out");
      card.classList.add("animate-in");
      card.style.display = "block";
    } else {
      card.classList.remove("animate-in");
      card.classList.add("animate-out");
      card.style.display = "none";
    }
  });
});
