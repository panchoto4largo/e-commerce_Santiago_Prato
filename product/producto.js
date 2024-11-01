const main = document.querySelector("main");
const elemento = window.location.search.split("=")[1];
const carFind = autos.find((autos) => autos.id == elemento);

let discount =  Math.round(parseInt(carFind.price)*0.05);


let etiquetas = 
`   
<a class="back btn btn-primary btn-dark rounded-pill my-3 aling-self-start d-block" href="/index.html" role="button">← RETURN</a>
<div class="product-main container d-flex shadow-lg p-4 rounded ms-1">
    <div class="left-section me-5">
        <img src="${carFind.url}" alt="Zenbook Pro 14" id="main-image" class="mb-3">
        <p class="description">${carFind.description}</p>
    </div>
    <div class="right-section d-flex flex-column">
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
                <p class="bold align-self-start">${carFind.stock} available</p>
                ${localStorage.getItem("email") ?
                    `
                    <div class="mb-3 input-group">
                        <button class="btn" onclick="decrease()">-</button>
                        <input type="text" id="numberInput" class="form-control text-center bg-light" value="1" aria-label="Recipient's username with two button addons" disabled>
                        <button class="btn" onclick="increase()">+</button>
                    </div>
                    <div class="d-flex justify-content-between w-100">
                        <button class="btn btn-outline-dark flex-grow-1 me-2">Buy it now</button>
                        <button class="btn btn-outline-dark flex-grow-1" onclick="addToCart()">Add to cart</button>
                    </div>`
                    :`<div class="d-flex justify-content-center w-100">
                            <a href="/login/login.html" class="btn btn-outline-dark unlogged-button">Login to buy</a>
                    </div>`
                }
            </div>
        </div>
    </div>
</div>`;

main.innerHTML = etiquetas;

const counter = document.querySelector("#numberInput");

function increase() {
    const currentValue = parseInt(counter.value);
    if (currentValue < carFind.stock) {
        counter.value = currentValue + 1;
    }
}

function decrease() {
    const currentValue = parseInt(counter.value);
    if (currentValue > 1) {
        counter.value = currentValue - 1;
    }
}

function addToCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    const product = carFind
    const existInCard = cart.some(item => item.product.id === product.id)

    if(existInCard){
        cart = cart.map(item =>{
            if(item.product.id === product.id){
                return{... item, quantity: item.quantity + Number(counter.value)}
            }else{
                return item
            }
        })
    }else{
        cart.push({product: product, quantity: Number(counter.value)})
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    let quantity = cart.reduce((acummulation, actual) => acummulation + actual.quantity, 0)
    localStorage.setItem("quantity", quantity)
    const quantityId = document.getElementById("quantity")
    quantityId.innerText = quantity
    counter.value = "1"
}