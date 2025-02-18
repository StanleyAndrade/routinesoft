// header.js
function loadHeader() {
    fetch("/component/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o header:", error));
}

document.addEventListener("DOMContentLoaded", loadHeader);

// Função para abrir e fechar o menu hamburguer no mobile
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
