let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
// if u want the drawer to disappear right after u click on smth
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

function sendmail(event) {
    event.preventDefault();
    var name = document.getElementById("name");
    var msg  = document.getElementById("message");
    var add  = document.getElementById("email");
    var mess = msg.value;

    if(!name.value || !mess) {
        emptyerror();
        return false;
    }
    emailjs.send("service_oyf6nn1", "template_crm63pm", {
        to_name: "Shreetama",
        from_name: name.value,
        from_email: add.value,
        message: mess,
    }).then((response) => {
        success();
    }).catch((error) => {
        emptyerror();
    });
}

function emptyerror() {
    Swal.fire({
        title: "Oops!",
        text: "Fields cannot be empty :(",
        icon: "error",
    });
}
function success() {
    Swal.fire({
        title: "Email sent successfully!",
        text: "We reply in 24 hours :)",
        icon: "success",
    });
}
// Header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});
