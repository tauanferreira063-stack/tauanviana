const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusMsg.textContent = "Mensagem enviada com sucesso!";
    statusMsg.style.color = "green";

    form.reset(); // limpa os campos
});

// MENU RESPONSIVO
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
//////////////// Observador para animar elementos ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

// Seleciona tudo que deve animar
document.querySelectorAll('.fade-in, .zoom-in, .slide-left, .slide-right')
        .forEach(el => observer.observe(el));
