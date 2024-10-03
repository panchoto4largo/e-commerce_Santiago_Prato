const main = document.querySelector("main");
const elemento = window.location.search.split("=")[1];
const carFind = autos.find((autos) => autos.id == elemento);

let etiquetas = `<div class="producto-container">
    <div class="producto-main">
        <div class="left-section">
            <img src="${carFind.url}" alt="Zenbook Pro 14" id="main-image">
        </div>
        <div class="center-section">
            <div class="product-info">
                <h1 class="producto-h1">${carFind.model}</h1>
                <p class="description">${carFind.description}</p>
                <div class="rating">
                    <span>⭐⭐⭐⭐⭐</span> <a href="#">(3)</a>
                </div>
                <p class="original-price">${carFind.price}</p>
                <p class="discounted-price">$25.000 <span class="discount">(5% OFF)</span></p>
                <p class="installments">In 6 installments of $673,799.78</p>
            </div>
        </div>
        <div class="right-section">
            <div class="shipping-info">
                <h3>Free Standard International Shipping.</h3>
                <p>Estimated between Tue, Oct 22 and Wed, Nov 6.</p>
                <p class="bold">25 available</p>
                <div class="quantity-selector">
                    <label for="quantity" class="quantity-label">Quantity:</label>
                    <select id="quantity" class="quantity-dropdown">
                        <option value="1">1 unit</option>
                        <option value="2">2 units</option>
                        <option value="3">3 units</option>
                        <option value="4">4 units</option>
                        <option value="5">5 units</option>
                        <option value="6">6 units</option>
                    </select>
                </div>
            <button class="btn primary-btn">Buy it now</button>
            <button class="btn secondary-btn">Add to cart</button>
        </div>
    </div>
</div>`;

main.innerHTML = etiquetas;