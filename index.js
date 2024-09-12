const h1 = document.querySelector('h1');
const section = document.querySelector('section');
h1.innerText = 'Productos';

let arr = [];

for(let i = 1; i < 10; i++){
    a = `
        <div class="card m-3">
                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top"  alt="Car ${i}">
                    <div class="card-body">
                        <h5 class="card-title">Car ${i}</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec, eleifend aenean purus dui ornare blandit risus facilisis interdum, cum nostra vulputate sem venenatis felis facilisi.</p>
                        <p class="card-price">$2.100</p>
                        <button type="button" class="btn btn-outline-dark">Buy item</button>
                    </div>
                </div>`
    arr.push(a);
}

section.innerHTML = arr.join().replaceAll(",", "");