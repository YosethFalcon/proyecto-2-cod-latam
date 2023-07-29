  //menu del indice
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const menu = document.getElementById("menu");

    // Función para mostrar el menú
    function showMenu() {
      menu.style.display = "block";
    }

    // Función para ocultar el menú
    function hideMenu() {
      menu.style.display = "none";
    }

    // Agregamos el evento clic al botón para mostrar u ocultar el menú
    toggleButton.addEventListener("click", function (event) {
      event.stopPropagation();
      if (menu.style.display === "none") {
        showMenu();
      } else {
        hideMenu();
      }
    });

    // Agregamos un listener para ocultar el menú cuando se hace clic
    document.addEventListener("click", function (event) {
      if (event.target !== toggleButton && event.target.parentNode !== menu) {
        hideMenu();
      }
    });
  });

