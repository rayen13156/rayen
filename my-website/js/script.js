const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartIcon = document.querySelector('.cart-icon');
const closeCart = document.getElementById('close-cart');

const addButtons = document.querySelectorAll('.add-cart');

addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const name = card.dataset.name;
        const price = card.dataset.price;
        const li = document.createElement('li');
        li.textContent = `${name} - ${price}`;
        cartItems.appendChild(li);
        cartModal.classList.add('show');
    });
});

cartIcon.addEventListener('click', () => {
    cartModal.classList.add('show');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('show');
});
