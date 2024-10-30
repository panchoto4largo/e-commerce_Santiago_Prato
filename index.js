const h1 = document.querySelector('h1');
const section = document.querySelector('#main');
h1.innerText = 'Cars';

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
    if(input.value === ""){
        cards(autos)
    }else{
        const filtered = autos.filter(auto => auto.model.toLowerCase() === input.value.toLowerCase())
        cards(filtered)
    }
}


filterButton.addEventListener("click", searcher);
resetButton.addEventListener("click", () => {
    input.value = ""
    cards(autos)
});

function cards(autos){
    const card = autos.map((auto) =>
        `<div class="card d-flex mb-3 border flex-column">
            <div class="img-container">
                <img src="${auto.url}" class="card-img-top" alt="${auto.model}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${auto.model}</h5>
                <p class="card-text">${auto.description}</p>
            </div>
            <div class="p-3">
                <a class="btn btn-primary btn-light btn-outline-dark" href="product/producto.html?prod=${auto.id}" role="button">See more</a>
            </div>
        </div>`);

    section.innerHTML = card.join().replaceAll(",", "");
}

cards(autos)