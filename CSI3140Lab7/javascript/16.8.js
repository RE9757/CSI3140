/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */

document.addEventListener('DOMContentLoaded', () => {
    fetchProductList();
});

const fetchProductList = () => {
    fetch('../json/summary.json')
        .then(response => response.json())
        .then(products => renderProductCatalog(products))
        .catch(error => console.error('Failed to load product list:', error));
};

const renderProductCatalog = (products) => {
    const catalogHtml = products.map(product => `
        <div class="product-card" id="product-card-${product.id}">
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="${product.title}"
                onmouseenter="loadFullSizeImage('${product.id}')"
                onmouseleave="reloadThumbnail('${product.id}', '${product.thumbnail}')">
            <p>Price: ${product.price}</p>
            <button onclick="displayProductDetails('${product.id}')">Show Description</button>
            <p id="details-${product.id}" style="display:none;"></p>
        </div>
    `).join('');
    document.getElementById('catalog').innerHTML = catalogHtml;
};

const loadFullSizeImage = (productId) => {
    fetch('../json/images.json')
        .then(response => response.json())
        .then(images => {
            const fullSizeImg = images.find(image => image.id === productId);
            if (fullSizeImg) {
                document.querySelector(`#product-card-${productId} img`).src = fullSizeImg.image;
            }
        })
        .catch(error => console.error('Failed to load full-size image:', error));
};

const reloadThumbnail = (productId, thumbnailPath) => {
    document.querySelector(`#product-card-${productId} img`).src = thumbnailPath;
};

const displayProductDetails = (productId) => {
    fetch('../json/descriptions.json')
        .then(response => response.json())
        .then(descriptions => {
            const productDetails = descriptions.find(description => description.id === productId);
            if (productDetails) {
                const detailsElement = document.getElementById(`details-${productId}`);
                detailsElement.innerText = productDetails.description;
                detailsElement.style.display = 'block';
            }
        })
        .catch(error => console.error('Failed to load product details:', error));
};
