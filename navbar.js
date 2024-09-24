const header = document.querySelector("header")

let nav = [
    {text: "Home", href: "/index.html"},
    {text: "Products", href: "#product"},
    {text: "Contact", href: "#contact"},
];

menu = [];

for(items of nav){
    menu.push(`<a class="nav-link" href="${items.href}">${items.text}</a>`)
}


let navCode =    
        `<nav class="navbar navbar-expand-lg d-block bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">E-COMMERCE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav column-gap-2">
                    ${menu.join().replaceAll(",", "")}
                </div>
                </div>
            </div>
        </nav>`
header.innerHTML = navCode;