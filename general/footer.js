const footer = document.querySelector("footer")


let footerContent = 
`
<div class="container-fluid text-center text-md-left mt-5" style="background: #E4E4E4;">
    <div class="row p-5 text-black">
        <div class="col-12 col-md-6 col-lg-3 mb-4">
            <h3>E-COMMERCE</h3>
        </div>
        <div class="col-12 col-md-6 col-lg-3 d-flex flex-column mb-4">
            <h5>Links</h5>
            <a href="/index.html" class="text-black text-decoration-none">Home</a>
            ${localStorage.getItem("email") ? `<p class="d-none"></p>` : `<a href="/login/login.php" class="text-decoration-none text-black">Login</a>`}
        </div>
        <div class="col-12 col-md-6 col-lg-3 d-flex flex-column mb-4">
            <h5>Contacts</h5>
            <a href="https://github.com/panchoto4largo" target="_blank" class="mb-2"><i class="bi bi-github text-black"></i></a>
            <a href="https://www.linkedin.com/in/santiago-prato-157a61280/" target="_blank" class="mb-2"><i class="bi bi-linkedin text-black"></i></a>
        </div>
    </div>
</div>
`;

footer.innerHTML = footerContent;