window.addEventListener("scroll", function () {
    let oculto1 = document.getElementById("oculto1");

    // Obtiene la posición de la sección con respecto al viewport
    let oculto1Position = oculto1.getBoundingClientRect().top;

    let windowHeight = window.innerHeight;

    // Si la sección está en la vista, activa la animación
    if (oculto1Position < windowHeight / 2) { 
        oculto1.classList.add("oculto1-shown");
    }
});