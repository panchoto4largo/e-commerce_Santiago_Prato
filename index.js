const h1 = document.querySelector('h1');
const section = document.querySelector('#main');
h1.innerText = 'Productos';

const allButton = document.querySelector("#all");
const modernButton = document.querySelector("#modern");
const vintageButton = document.querySelector("#vintage");

const resetButton = document.querySelector("#resetButton");
const filterButton = document.querySelector("#filterButton");
const input = document.querySelector("input");


const filterProducts = (category) => {
    const productsToShow = autos.filter(auto => auto.category === category)
    cards(productsToShow)
}

allButton.addEventListener("click",() => {cards(autos)});
modernButton.addEventListener("click", () => {filterProducts("Modern")});
vintageButton.addEventListener("click", () =>{filterProducts("Vintage")});

const searcher = () => {
  const filtered = autos.filter(auto => auto.model.toLowerCase() === input.value.toLowerCase())
  cards(filtered)
}

const resetInput = () => (input.value = "");

filterButton.addEventListener("click", searcher);
resetButton.addEventListener("click", () => {
    resetInput
    cards(autos)
});

function cards(autos){
    const card = autos.map((auto) =>
        `<div class="card d-flex mb-3 border"> 
            <img src="${auto.url}" class="card-img-top" alt="Nike Air Zoom Pegasus 39 Shield">
            <div class="card-body">
                <h5 class="card-title">${auto.model}</h5>
                <p class="card-text">${auto.description}</p>
                <a class="btn btn-primary btn-light btn-outline-dark align-self-end" href="product/producto.html?prod=${auto.id}" role="button">See more</a>
            </div>
        </div>`);

    section.innerHTML = card.join().replaceAll(",", "");
}

cards(autos)