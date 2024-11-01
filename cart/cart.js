document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector(".cartProducts");
    const price = document.querySelector(".finalPrice");
    const navCart = document.querySelector("#quantity");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCards = (cart) => {
        const cartCard = cart.map((x) => `
            <div class="card row mb-3 ms-1 me-2">
                <div id="cardDiv" class="col-xl-8">
                    <div>
                        <div class="card-body">
                            <div class="d-flex align-items-start border-bottom pb-3">
                                <div class="me-4">
                                    <img src="${x.product.url}" class="avatar-lg rounded" />
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="text-truncate font-size-18">${x.product.model}</h5>
                                </div>
                                <p onclick="removeCart(${x.product.id})">Eliminate</p>
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
                                    <h5>$${(x.quantity * x.product.price).toFixed(2)}</h5> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        div.innerHTML = cartCard.join('');
    };

    function total(cart) {
        const totalAmount = cart.reduce((accumulated, actual) => accumulated + actual.product.price * actual.quantity, 0);
        price.innerText = "$" + totalAmount;
    }

    removeCart = function(id) {
        if (navCart) {
            cart = cart.filter(car => car.product.id !== id);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartCards(cart);
            total(cart);

            let quantity = cart.reduce((accumulated, actual) => accumulated + actual.quantity, 0);
            localStorage.setItem("quantity", quantity);
            navCart.innerText = quantity;
        } else {
            console.error("navCart no está definido");
        }
    };

    window.clearCart = () => {
        console.log("Clearing cart...");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("quantity", 0);
        navCart.innerText = "0";
        cartCards(cart);
        total(cart);
    }

    total(cart);
    cartCards(cart);
});