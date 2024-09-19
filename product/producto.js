const main = document.querySelector('main');

class Product {
    constructor(titulo, detalle, precio, stock, imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const objeto = new Product("Auto", "Buenisimo", 10000, 1, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg");

const a = `
            <div class="card m-3">
                        <img src="${objeto.imagen}" class="card-img-top"  alt="Car 1">
                        <div class="card-body">
                            <h5 class="card-title">${objeto.titulo}</h5>
                            <p class="${objeto.detalle}</p>
                            <p class="card-price">${objeto.precio}</p>
                            <p class="card-text">Quedan disponibles ${objeto.stock}</p>
                        </div>
                    </div>`;

main.innerHTML = a