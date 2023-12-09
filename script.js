   
   
   
   
   
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

   

    // Agrega el evento de desplazamiento al documento
    document.addEventListener('scroll', handleScroll);

    // Restaurar la barra de navegación cuando se hace clic en el botón de subir
    document.getElementById("scrollToTopBtn").addEventListener("click", function () {
        var header = document.getElementById("myHeader");
        header.classList.remove("hidden"); // Elimina la clase "hidden" para mostrar suavemente la barra de navegación
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

/****zoom seccion */




