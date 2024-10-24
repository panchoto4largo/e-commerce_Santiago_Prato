const form = document.querySelector("form");
const message = document.querySelector("#message");

const sessionAccount = {
    email: "qpdjhon@gmail.com",
    password: "jhonvuelve"
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = form.elements.email.value
    let pwd = form.elements.password.value

    if (sessionAccount.email === email && sessionAccount.password === pwd) {
        localStorage.setItem("email", email)
        localStorage.setItem("password", pwd)
        window.location.href = "../index.html"
    } else {
        message.innerText = "Email or/and password are incorrect"
    }
})