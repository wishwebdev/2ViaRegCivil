document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const closeButton = document.querySelector(".menu__close-button");
    const menu = document.querySelector(".menu");
  
    // Função para abrir e fechar o menu
    function toggleMenu() {
      menu.classList.toggle("open");
    }
  
    // Evento de clique no botão hamburguer
    menuToggle.addEventListener("click", function() {
      toggleMenu();
    });
  
    // Evento de clique no botão de fechar
    closeButton.addEventListener("click", function() {
      toggleMenu();
    });
  
    // Evento de clique nos links do menu para fechar o menu
    menu.querySelectorAll("a").forEach(function(link) {
      link.addEventListener("click", function() {
        toggleMenu();
      });
    });
  });