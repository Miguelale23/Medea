document.addEventListener("touchstart", function () {
    let oculto1 = document.getElementById("oculto1");
    let oculto2 = document.getElementById("oculto2");

    // Obtiene la posición de la sección con respecto al viewport
    let oculto1Position = oculto1.getBoundingClientRect().top;
    let oculto2Position = oculto2.getBoundingClientRect().top;

    let windowHeight = window.innerHeight;

    // Si la sección está en la vista, activa la animación
    if (oculto1Position < windowHeight * 1.5) { 
        oculto1.classList.add("oculto1-shown");
    }
    if (oculto2Position < windowHeight * 1.5){
        oculto2.classList.add("oculto2-shown");
    }
});