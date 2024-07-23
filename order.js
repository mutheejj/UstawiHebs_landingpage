const productId = new URLSearchParams(window.location.search).get('id');
const product = products.find((product) => product.id === parseInt(productId));

const orderForm = document.getElementById('order-form');

orderForm.innerHTML = `
    <h2>Order ${product.name}</h2>
    <form id="order-form">
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" value="1" min="1">
        <p>Total Price: <span id="total-price">${product.price}</span></p>
        <button id="proceed-button">Proceed to Checkout</button>
    </form>
`;

const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * product.price;
    totalPriceElement.textContent = totalPrice.toFixed(2);
});

const proceedButton = document.getElementById('proceed-button');
proceedButton.addEventListener('click', () => {
    // Proceed to checkout page
    window.location.href = 'checkout.html';
});