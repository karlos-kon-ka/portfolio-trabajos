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
    var header = document.getElementById("myHeader");

    // Obtén la posición de la parte inferior de la sección de proyectos
    var proyectosBottom = proyectosSection.offsetTop + proyectosSection.offsetHeight;

    if (
        document.body.scrollTop > proyectosBottom ||
        document.documentElement.scrollTop > proyectosBottom
    ) {
        scrollToTopBtn.style.display = "block";
        header.classList.add("hidden"); // Agrega la clase "hidden" para ocultar suavemente la barra de navegación
    } else {
        scrollToTopBtn.style.display = "none";
        header.classList.remove("hidden"); // Elimina la clase "hidden" para mostrar suavemente la barra de navegación
    }

    // Ajuste adicional para ocultar la barra de navegación al ver la sección de proyectos
    var proyectosTop = proyectosSection.offsetTop;

    if (
        document.body.scrollTop > proyectosTop ||
        document.documentElement.scrollTop > proyectosTop
    ) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
}

// Restaurar la barra de navegación cuando se hace clic en el botón de subir
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    var header = document.getElementById("myHeader");
    header.classList.remove("hidden"); // Elimina la clase "hidden" para mostrar suavemente la barra de navegación
});
/**zoomeo */
document.getElementById("miFoto").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});
;


/**animacion */
var foto = document.getElementById("miFoto");

foto.addEventListener("mouseover", function() {
    anime({
        targets: '#miFoto',
        scale: 1.2,
        duration: 500,
        easing: 'easeInOutQuad'
    });
});

foto.addEventListener("mouseout", function() {
    anime({
        targets: '#miFoto',
        scale: 1,
        duration: 500,
        easing: 'easeInOutQuad'
    });
});

/**objetivos */
$(document).ready(function() {
    // Contador para asignar identificadores únicos a los campos
    var contadorObjetivos = 1;

    // Agregar un campo de objetivo al cargar la página
    agregarCampoObjetivo();

    // Función para agregar un nuevo campo de objetivo
    function agregarCampoObjetivo() {
        var nuevoCampo = `<div class="objetivo" id="objetivo${contadorObjetivos}">
                            <textarea placeholder="Escribe tu objetivo aquí"></textarea>
                            <button class="eliminarObjetivo" onclick="eliminarCampoObjetivo(${contadorObjetivos})">Eliminar</button>
                        </div>`;

        $("#objetivosContainer").append(nuevoCampo);
        contadorObjetivos++;
    }

    // Función para eliminar un campo de objetivo
    window.eliminarCampoObjetivo = function(idObjetivo) {
        $(`#objetivo${idObjetivo}`).remove();
    };

    // Agregar evento al botón para agregar objetivos
    $("#agregarObjetivo").on("click", function() {
        agregarCampoObjetivo();
    });
});
