const productId = new URLSearchParams(window.location.search).get('id');
const product = products.find((product) => product.id === parseInt(productId));

const orderForm = document.getElementById('order-form');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const buyerNameInput = document.getElementById('buyer-name');
const buyerEmailInput = document.getElementById('buyer-email');
const buyerPhoneInput = document.getElementById('buyer-phone');
const placeOrderButton = document.getElementById('place-order-button');

quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * product.price;
    totalPriceElement.textContent = totalPrice.toFixed(2);
});

placeOrderButton.addEventListener('click', (e) => {
    e.preventDefault();
    const buyerName = buyerNameInput.value;
    const buyerEmail = buyerEmailInput.value;
    const buyerPhone = buyerPhoneInput.value;
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * product.price;


    sendNotification(product.name, buyerName, buyerEmail, buyerPhone, quantity, totalPrice);
});

async function sendNotification(productName, buyerName, buyerEmail, buyerPhone, quantity, totalPrice) {
    const API_KEY = "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";
    const SENDER_EMAIL = "johnmuthee547@gmail.com";
    const RECIPIENT_EMAIL = "johnmuthee547@gmail.com";

    const payload = {
        sender: { email: SENDER_EMAIL, name: "Ustawi Herbs" },
        to: [
            { email: RECIPIENT_EMAIL },
            { email: buyerEmail }
        ],
        subject: `New Order: ${productName}`,
        textContent: `
            A new order has been placed for ${productName}.

            Buyer Details:
            Name: ${buyerName}
            Email: ${buyerEmail}
            Phone: ${buyerPhone}

            Order Details:
            Quantity: ${quantity}
            Total Price: ${totalPrice.toFixed(2)}
        `,
    };

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': API_KEY,
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            alert('Order placed successfully! You will receive a confirmation email soon.');
            window.location.href = 'thankyou.html';
        } else {
            const errorData = await response.json();
            console.error('Error sending email:', errorData);
            alert('Failed to send email. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email. Please try again.');
    }
}
