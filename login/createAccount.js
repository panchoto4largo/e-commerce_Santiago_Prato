function create() {
    const tittle = document.querySelector("h2")
    tittle.innerText = "Create Account"
    const formContainer = document.querySelector(".form-login");
    formContainer.innerHTML = createAccount;
    formContainer.classList.remove("form-login");
    formContainer.classList.add("form-create");
}

let createAccount = `
            <form class ="form-create shadow-lg p-3 mb-5 bg-body-tertiary rounded style="">
            <div class="mb-2">
                <label class="form-label">Full name</label>
                <input name="text" type="text" class="form-control" maxlength="50"/>
            </div>
            <div class="mb-2">
                <label class="form-label">Age</label>
                <input name="number" type="number" class="form-control" maxlength="50"/>
            </div>
            
            <div class="mb-2">
                <label class="form-label">Email address</label>
                <input name="email" type="email" class="form-control" maxlength="50"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input name="password" type="password" class="form-control" maxlength="50"/>
            </div>
            <button type="submit" class="btn btn-primary d-block">Submit</button>
            <a class="fs-6 mt-1 float-end" href="login.html">Login</a>
        </form>
`