const redirectHome = () => {
    if(localStorage.getItem("email")){
        location.href = "./index.html"
    }
}

redirectHome()