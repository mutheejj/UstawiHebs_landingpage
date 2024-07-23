// script.js
const checkoutForm = document.getElementById('checkout-form');

checkoutForm.innerHTML = `
    <h2>Checkout</h2>
    <form id="checkout-form">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <label for="address">Address:</label>
        <input type="text" id="address" required>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" required>
        <button id="confirm-button">Confirm Order</button>
    </form>
`;

const confirmButton = document.getElementById('confirm-button');
confirmButton.addEventListener('click', () => {
    // Send order information to email and display confirmation message
    sendOrderInformation();
    alert('Order confirmed! You will receive a confirmation email shortly.');
});

async function sendOrderInformation() {
    const formData = new FormData(document.getElementById('checkout-form'));
    const orderData = {
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        product: product.name,
        quantity: parseInt(quantityInput.value),
        totalPrice: totalPriceElement.textContent,
    };

    const TOKEN = "<YOUR-TOKEN-HERE>";
    const SENDER_EMAIL = "<SENDER ADDRESS@YOURDOMAIN.COM>";
    const RECIPIENT_EMAIL = "<RECIPIENT@EMAIL.COM>";
    const BUYER_EMAIL = orderData.email;

    const client = new MailtrapClient({ token: TOKEN });

    // Send email to admin
    client
        .send({
            from: { name: "Ustawi Herbs", email: SENDER_EMAIL },
            to: [{ email: RECIPIENT_EMAIL }],
            subject: `New Order: ${orderData.product}`,
            text: `A new order has been placed for ${orderData.product}.`,
        })
        .then(console.log)
        .catch(console.error);

    // Send confirmation email to buyer
    client
        .send({
            from: { name: "Ustawi Herbs", email: SENDER_EMAIL },
            to: [{ email: BUYER_EMAIL }],
            subject: `Order Confirmation: ${orderData.product}`,
            text: `Thank you for your order! Your order details are as follows: ...`,
        })
        .then(console.log)
        .catch(console.error);
}