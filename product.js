const productId = new URLSearchParams(window.location.search).get('id');
const product = products.find((product) => product.id === parseInt(productId));

const productDetails = document.getElementById('productDetails');

productDetails.innerHTML = `
    <div class="product-container">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <div class="actions">
            <button id="buyButton">Buy Now</button>
        </div>
    </div>
`;

const buyButton = document.getElementById('buyButton');

buyButton.addEventListener('click', () => {
    // Redirect to order page with product ID
    window.location.href = `order.html?id=${productId}&name=${product.name}&price=${product.price}`;
});