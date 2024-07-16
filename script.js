const products = [
    { name: "Herb A", price: "Ksh 1000", description: "Description of Herb A", image: "img/herbA.jpeg" },
    { name: "Herb B", price: "Ksh 1500", description: "Description of Herb B", image: "img/herbB.jpeg" },
    { name: "Herb C", price: "Ksh 2000", description: "Description of Herb C", image: "img/herbC.jpeg" },
    { name: "Herb D", price: "Ksh 2500", description: "Description of Herb D", image: "img/herbD.jpeg" },
    { name: "Herb E", price: "Ksh 3000", description: "Description of Herb E", image: "img/herbE.jpeg" },
    { name: "Herb F", price: "Ksh 3500", description: "Description of Herb F", image: "img/herbF.jpeg" },
    { name: "Herb G", price: "Ksh 4000", description: "Description of Herb G", image: "img/herbG.jpeg" },
    { name: "Herb H", price: "Ksh 4500", description: "Description of Herb H", image: "img/herbH.jpeg" },
    { name: "Herb I", price: "Ksh 5000", description: "Description of Herb I", image: "img/herbI.jpeg" },
    { name: "Herb J", price: "Ksh 5500", description: "Description of Herb J", image: "img/herbJ.jpeg" },
];

const productList = document.getElementById('productList');
const searchBar = document.getElementById('searchBar');

function displayProducts(productsToDisplay) {
    productList.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
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
