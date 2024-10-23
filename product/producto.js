const main = document.querySelector("main");
const elemento = window.location.search.split("=")[1];
const carFind = autos.find((autos) => autos.id == elemento);

let discount =  Math.round(parseInt(carFind.price)*0.05);
let etiquetas = 
`   
<a class="back btn btn-primary btn-dark rounded-pill mb-3 aling-self-start d-block" href="/index.html" role="button">← RETURN</a>
<div class="product-main container d-flex bg-body-secondary p-4 rounded ms-1">
    <div class="left-section me-5">
        <img src="${carFind.url}" alt="Zenbook Pro 14" id="main-image" class="mb-3">
        <p class="description">${carFind.description}</p>
    </div>
    <div class="right-section d-flex flex-column" style="height: 100%;">
        <div class="mid-section d-flex flex-column flex-grow-1">
            <div>
                <div class="d-flex align-items-end">
                    <h1 class="me-3">${carFind.model}</h1>
                    <p id="rating"><span>★★★★☆</span> 4/5</p>
                </div>
                <div class="d-flex align-items-center">
                    <p class="original-price me-2 text-decoration-line-through">$${carFind.price}</p>
                    <p class="discounted-price text-success">$${carFind.price - discount} <span class="discount text-danger">(5% OFF)</span></p>
                </div>
                <p class="installments">In 6 installments of $673,799.78</p>
            </div>
            <div class="bottom-section d-flex flex-column justify-content-end flex-grow-1">                
                <p class="bold align-self-start">25 available</p>
                <div class="d-flex justify-content-between w-100"> <!-- Hacer que ocupe todo el ancho -->
                    <button class="btn primary-btn btn-outline-dark flex-grow-1 me-2">Buy it now</button>
                    <button class="btn secondary-btn btn-outline-dark flex-grow-1">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</div>`;

main.innerHTML = etiquetas;