// 当文档加载完成后，调用loadProducts函数
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

// 加载产品概要信息
function loadProducts() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'summary.json', true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var products = JSON.parse(this.responseText);
            displayProducts(products);
        }
    };
    xhr.send();
}

// 显示产品信息
function displayProducts(products) {
    var output = '';
    products.forEach(function(product) {
        output += `<div class="product" id="product-${product.id}">
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="${product.title}"
                onmouseover="showFullImage('${product.id}')"
                onmouseout="showThumbnail('${product.id}', '${product.thumbnail}')">
            <p>Price: ${product.price}</p>
            <button onclick="showDescription('${product.id}')">Show Description</button>
            <p id="description-${product.id}" style="display:none;"></p>
        </div>`;
    });
    document.getElementById('catalog').innerHTML = output;
}

// 显示完整尺寸的图片
function showFullImage(productId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'images.json', true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var images = JSON.parse(this.responseText);
            var imageInfo = images.find(image => image.id === productId);
            if (imageInfo) {
                document.querySelector(`#product-${productId} img`).src = imageInfo.image;
            }
        }
    };
    xhr.send();
}

// 显示缩略图
function showThumbnail(productId, thumbnail) {
    document.querySelector(`#product-${productId} img`).src = thumbnail;
}

// 显示产品描述
function showDescription(productId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'descriptions.json', true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var descriptions = JSON.parse(this.responseText);
            var descriptionInfo = descriptions.find(description => description.id === productId);
            if (descriptionInfo) {
                var descriptionElement = document.getElementById(`description-${productId}`);
                descriptionElement.innerText = descriptionInfo.description;
                descriptionElement.style.display = 'block';
            }
        }
    };
    xhr.send();
}
