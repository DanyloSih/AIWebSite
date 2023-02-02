const sidebar = document.querySelector('.cart-sidebar');
const closeBtn = document.querySelector('.close-cart-btn');

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Show sidebar on button click
document.querySelector('.show-cart-btn').addEventListener('click', () => {
  sidebar.classList.add('open');
});