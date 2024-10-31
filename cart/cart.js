const div = document.querySelector(".cartProducts");
const price = document.querySelector(".finalPrice");
const cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart)

const cartCards = (cart) =>{
    const cartCard = cart.map((x) =>
        `
        <div class="card row mb-3 ms-1 me-1">
            <div id="cardDiv" class="col-xl-8">
                <div>
                    <div class="card-body">
                        <div class="d-flex align-items-start border-bottom pb-3">
                            <div class="me-4">
                                <img src="${x.product.url}" class="avatar-lg rounded"/>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <h5 class="text-truncate font-size-18">${x.product.model}</h5>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-4">
                                <p class="text-muted mb-2">Price</p>
                                <h5 class="mb-0 mt-2">$${x.product.price}</h5>
                            </div>
                            <div class="col-md-4">
                                <p class="text-muted mb-2">Amount</p>
                                <h5 class="mb-0 mt-2">${x.quantity}</h5>
                            </div>
                            <div class="col-md-4">
                                <p class="text-muted mb-2">Total</p>
                                <h5>$${(x.quantity * x.product.price)}</h5> <!-- Formatear a 2 decimales -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    )
    div.innerHTML = cartCard.join('     ').replaceAll(",", "");
}

cartCards(cart)