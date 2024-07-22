const products = [
    { id: 1, name: "Herb A", price: "Ksh 1000", description: "Description of Herb A", image: "img/herbA.jpeg" },
    { id: 2, name: "Herb B", price: "Ksh 1500", description: "Description of Herb B", image: "img/herbB.jpeg" },
    { id: 3, name: "Herb C", price: "Ksh 2000", description: "Description of Herb C", image: "img/herbC.jpeg" },
    { id: 4, name: "Herb D", price: "Ksh 2500", description: "Description of Herb D", image: "img/herbD.jpeg" },
    { id: 5, name: "Herb E", price: "Ksh 3000", description: "Description of Herb E", image: "img/herbE.jpeg" },
    { id: 6, name: "Herb F", price: "Ksh 3500", description: "Description of Herb F", image: "img/herbF.jpeg" },
    { id: 7, name: "Herb G", price: "Ksh 4000", description: "Description of Herb G", image: "img/herbG.jpeg" },
    { id: 8, name: "Herb H", price: "Ksh 4500", description: "Description of Herb H", image: "img/herbH.jpeg" },
    { id: 9, name: "Herb I", price: "Ksh 5000", description: "Description of Herb I", image: "img/herbI.jpeg" },
    { id: 10, name: "Herb J", price: "Ksh 5500", description: "Description of Herb J", image: "img/herbJ.jpeg" },
];

const productList = document.getElementById('productList');
const searchBar = document.getElementById('searchBar');

function displayProducts(productsToDisplay) {
    productList.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.dataset.productId = product.id;
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
        `;
        productList.appendChild(productDiv);
    });
}

searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchString)
    );
    displayProducts(filteredProducts);
});

// Initial display of all products
displayProducts(products);

productList.addEventListener('click', (e) => {
    if (e.target.classList.contains('product') || e.target.parentNode.classList.contains('product')) {
        const productId = e.target.dataset.productId || e.target.parentNode.dataset.productId;
        window.location.href = `product.html?id=${productId}`;
    }
});

// Add event listener for product details page
const productDetailsContainer = document.getElementById('productDetailsContainer');

if (productDetailsContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(p => p.id == productId);

    if (product) {
        const productDetailsHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button id="buyButton">Buy Now</button>
            <button id="addToCartButton">Add to Cart</button>
        `;
        productDetailsContainer.innerHTML = productDetailsHTML;

        const buyButton = document.getElementById('buyButton');
        const addToCartButton = document.getElementById('addToCartButton');

        buyButton.addEventListener('click', () => {
            // Add buy now functionality here
            console.log('Buy now button clicked');
        });

        addToCartButton.addEventListener('click', () => {
            // Add add to cart functionality here
            console.log('Add to cart button clicked');
        });
    } else {
        productDetailsContainer.innerHTML = 'Product not found';
    }
}