const header = document.querySelector("header")

let nav = [
    {text: "Home", href: "/index.html"},
    {text: "Contact", href: "#contact"},
];

menu = [];

for(items of nav){
    menu.push(`<a class="nav-link" href="${items.href}">${items.text}</a>`)
}


let navCode =    
        `<nav class="navbar navbar-expand-lg d-block bg-body-tertiary fixed-top">
            <div class="container-fluid d-flex">
                <a class="navbar-brand" href="#">E-COMMERCE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav column-gap-2">
                    ${menu.join().replaceAll(",", "")}
                </div>
                <div class="navbar-nav ms-auto me-3">
                    <a class="text-decoration-none text-black fs-4" href="/login/login.html"><i class="bi bi-person"></i></a>
                </div>
            </div>
        </nav>`
header.innerHTML = navCode;