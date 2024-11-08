document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".cartProducts");
    const price = document.querySelector(".finalPrice");
    const navCart = document.querySelector("#quantity");
    const buttons = document.querySelector("#button-div");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCards = (cart) => {
        if (cart.length < 1) {
            list.innerHTML = `<p class="text-center fs-4 fw-bold">Cart is empty</p>`;
            buttons.innerHTML =`<a class="btn btn btn-success" href="/index.html">Keep buying</a>`
            return;
        }
        const cartCard = cart.map((x) =>`
            <div class="card row mb-3 ms-1 me-2">
                <div id="cardDiv" class="col-xl-8">
                    <div>
                        <div class="card-body">
                            <div class="d-flex align-items-start border-bottom pb-3">
                                <div class="me-4">
                                    <img src="${x.product.url}" class="avatar-lg rounded" />
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="text-truncate fs-3">${x.product.model}</h5>
                                </div>
                                <p id="eliminate" onclick="removeCart(${x.product.id})" class="text-danger">Eliminate</p>
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
        list.innerHTML = cartCard.join('');
        buttons.innerHTML = `
        <a class="btn btn-success me-2" href="">Checkout</a>
        <button class="btn btn-danger" onclick="clearCart()">Clear cart</button>
        `
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
        function clearAll() {
            console.log("Clearing cart...");
            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("quantity", 0);
            navCart.innerText = "0";
            cartCards(cart);
            total(cart);
        }
    
        Swal.fire({
            title: "Are you sure?",
            text: "To delete all products",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                clearAll();
            }
        });
    };
    
    total(cart);
    cartCards(cart);
    }
);