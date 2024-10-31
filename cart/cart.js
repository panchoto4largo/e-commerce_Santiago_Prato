const section = document.querySelector(".cartProducts")
const price = document.querySelector(".finalPrice")
const cart = JSON.parse(localStorage.getItem("cart"))


const products = (cart) =>{
    product = cart.map((el)=>
        `<div>
            <p>Soy uno</p>
        </div>`
    )
    section.innerHTML = product.join().replaceAll(",", "");
}

products(cart)