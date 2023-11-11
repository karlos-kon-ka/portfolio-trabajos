// Función para desplazarse al principio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Mostrar u ocultar el botón basado en el desplazamiento de la página
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var proyectosSection = document.getElementById("proyectos");

    // Obtén la posición de la parte inferior de la sección de proyectos
    var proyectosBottom = proyectosSection.offsetTop + proyectosSection.offsetHeight;

    if (
        document.body.scrollTop > proyectosBottom ||
        document.documentElement.scrollTop > proyectosBottom
    ) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}



/*burbuja*/
document.addEventListener("DOMContentLoaded", function () {
    centrarBurbuja();
    // Evento para recalcular la posición al cambiar el tamaño de la ventana
    window.addEventListener("resize", centrarBurbuja);
});

function centrarBurbuja() {
    const burbuja = document.querySelector(".burbuja");
    // Centrar la burbuja en la mitad de la pantalla
    const leftPos = window.innerWidth / 2 - burbuja.offsetWidth / 2;
    const topPos = window.innerHeight / 2 - burbuja.offsetHeight / 2;
    burbuja.style.left = `${leftPos}px`;
    burbuja.style.top = `${topPos}px`;
}
  /*foto inicio*/
  
  document.addEventListener("DOMContentLoaded", function () {
    const foto = document.getElementById("miFoto");

    foto.addEventListener("mouseenter", function () {
        foto.classList.add("zoomed");
    });

    foto.addEventListener("mouseleave", function () {
        foto.classList.remove("zoomed");
    });
});
