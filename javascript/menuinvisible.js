
           const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const parent05 = document.getElementById("paren"); // Selecciona el div parent05 por su ID

const body = document.body;


toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
    body.classList.toggle("no-scroll");
    if (!dropDownMenu.classList.contains("open")) {
        dropDownMenu.classList.add("closed"); // Aplica la clase "closed" con la transición lenta
        setTimeout(() => {
            dropDownMenu.classList.remove("closed");
        }, 500); // Duración de la transición (0.5 segundos)
    }
};


const linksInMenu = dropDownMenu.querySelectorAll("a");
    linksInMenu.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Previene el comportamiento predeterminado de la etiqueta <a> (navegación)
            event.preventDefault();

            dropDownMenu.classList.remove("open");
            body.classList.remove("no-scroll");

            // Obtiene el hash (identificador) del enlace para desplazarse a él
            const targetId = link.getAttribute("href").substring(1); // Elimina el "#" del inicio
            const targetElement = document.getElementById(targetId);

            // Desplaza suavemente hasta el elemento de destino
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
 ;
        