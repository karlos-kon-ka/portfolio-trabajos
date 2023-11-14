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
    // Almacena la altura del header
    var headerHeight = document.querySelector('header').offsetHeight;

    // Función para manejar el evento de desplazamiento
    function handleScroll() {
        // Obtiene la posición actual del desplazamiento
        var scrollPosition = window.scrollY || window.pageYOffset;

        // Aplica la clase header-hidden si el desplazamiento es mayor que la altura del header
        if (scrollPosition > headerHeight) {
            document.querySelector('header').classList.add('header-hidden');
        } else {
            document.querySelector('header').classList.remove('header-hidden');
        }
    }

    // Agrega el evento de desplazamiento al documento
    document.addEventListener('scroll', handleScroll);

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


    // desaparece barra nav
    window.eliminarCampoObjetivo = function(idObjetivo) {
        $(`#objetivo${idObjetivo}`).remove();
    };

    // Agregar evento al botón para agregar objetivos
    $("#agregarObjetivo").on("click", function() {
        agregarCampoObjetivo();
    });
});


// Función para manejar el evento de desplazamiento
function handleScroll() {
    // Obtiene la posición actual del desplazamiento
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Calcula la opacidad en función de la posición de desplazamiento
    var opacity = 1 - (scrollPosition / headerHeight);

    // Asegura que la opacidad esté en el rango de 0 a 1
    opacity = Math.min(1, Math.max(0, opacity));

    // Actualiza la opacidad del header
    document.querySelector('header').style.opacity = opacity;
}

// Agrega el evento de desplazamiento al documento
document.addEventListener('scroll', handleScroll);
/**optimizacion */
/**optimizacion */
$(document).ready(function() {
    var header = $('#myHeader');
    var headerHeight = header.outerHeight();

    // Función para manejar el evento de desplazamiento
    function handleScroll() {
        var scrollPosition = $(window).scrollTop();
        var opacity = Math.max(0, 1 - (scrollPosition / headerHeight));

        // Utilizar una transición para suavizar el cambio de opacidad
        header.css('transition', 'opacity 0.3s ease-in-out');
        header.css('opacity', opacity.toFixed(2));
    }

    // Agregar transición suave al cargar la página
    handleScroll();

    $(window).scroll(handleScroll);

    // ... (resto del código)
});


/**UL */
document.addEventListener('DOMContentLoaded', function() {
    // Array de objetivos
    const objetivosArray = [
        "Desarrollar nuevas habilidades",
        "Contribuir al éxito del equipo",
        "Aprender continuamente",
        // Puedes agregar más objetivos según sea necesario
    ];

    // Obtener la lista de objetivos
    const objetivosList = document.getElementById('objetivosList');

    // Crear elementos de lista y agregarlos a la lista
    objetivosArray.forEach(function(objetivo) {
        const listItem = document.createElement('li');
        listItem.classList.add('objetivo');
        listItem.textContent = objetivo;
        objetivosList.appendChild(listItem);
    });
});
/**fotos animacion-desaparicion */

    var imagenContainer = document.getElementById('imagenContainer');

    imagenContainer.addEventListener('mouseenter', function () {
        imagenContainer.classList.add('foto-container');
    });

    imagenContainer.addEventListener('mouseleave', function () {
        imagenContainer.classList.remove('foto-container');
    });




