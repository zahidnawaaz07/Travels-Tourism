function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({behaviour:'smooth'});
}

document.getElementById('contactForm').addEventListener("submit", function(e) {
    e.preventDefault(),

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name === "" || number === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textontent = "Please fill all blamks😯";
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Message sent Successfully😉";
        document.getElementById("contactForm").reset();
    }
})