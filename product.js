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
const addToCartButton = document.getElementById('addToCartButton');

buyButton.addEventListener('click', () => {
    // Send notification to admin email
    sendNotification(product.name);
    alert(`You have purchased ${product.name}!`);
});

addToCartButton.addEventListener('click', () => {
    // Add product to cart
    console.log(`Added ${product.name} to cart`);
    alert(`Added ${product.name} to cart`);
    // Update cart count in navigation bar
    //...
});

async function sendNotification(productName) {
    const TOKEN = "<YOUR-TOKEN-HERE>";
    const SENDER_EMAIL = "<SENDER ADDRESS@YOURDOMAIN.COM>";
    const RECIPIENT_EMAIL = "<RECIPIENT@EMAIL.COM>";

    const client = new MailtrapClient({ token: TOKEN });

    client
        .send({
            from: { name: "Ustawi Herbs", email: SENDER_EMAIL },
            to: [{ email: RECIPIENT_EMAIL }],
            subject: `New Order: ${productName}`,
            text: `A new order has been placed for ${productName}.`,
        })
        .then(console.log)
        .catch(console.error);
}