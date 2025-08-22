document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Added!';
    setTimeout(() => btn.textContent = 'Add to Cart', 1000);
  });
});