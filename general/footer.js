const footer = document.querySelector("footer")


let footerContent = 
`
<div class="container-fluid text-lg-center text-md-left bg-body-secondary mt-5 sticky-bottom">
    <div class="row p-5 text-black">
        <div class="col-xs-12 col-md-6 col-lg-3">
            <h3>E-COMMERCE</h3>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3 d-flex flex-column">
            <h5>Links</h5>
            <a href="/index.html" class="text-black text-decoration-none">Home</a>
            ${localStorage.getItem("email") ? `<p class="opacity-0">.</p>` : `<a href="/login/login.html" class="text-decoration-none text-black">Login</a>`}
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3 d-flex flex-column">
            <h5>Contacts</h5>
            <a href="https://github.com/panchoto4largo" target="_blank"><i class="bi bi-github text-black mb-2"></i></a>
            <a href="https://www.linkedin.com/in/santiago-prato-157a61280/" target="_blank "><i class="bi bi-linkedin text-black mb-2"></i></a>
        </div>
    </div>
</div>
`;

footer.innerHTML = footerContent;