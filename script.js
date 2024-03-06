document.addEventListener('scroll', function () {
    handleScroll();
});


window.addEventListener('scroll', function () {
    scrollFunction();
});

function handleScroll() {
    var headerHeight = document.querySelector('header').offsetHeight; // Calcular la altura del encabezado cada vez que se llame a handleScroll
    var scrollPosition = window.scrollY || window.pageYOffset;
    var opacity = 1 - (scrollPosition / headerHeight);
    opacity = Math.min(1, Math.max(0, opacity));
    document.querySelector('header').style.opacity = opacity;
}





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}



document.getElementById("scrollToTopBtn").onclick = function() {
    scrollToTop();
  };
  
  function scrollToTop() {
    const scrollStep = -window.scrollY / (1000 / 15);
    const scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  





  // Obtener el elemento .snake
const snake = document.getElementById('snake');

// Función para mostrar la serpiente
function showSnake() {
    snake.style.visibility = 'visible';
}

// Detectar el evento de scroll en la ventana
window.addEventListener('scroll', function() {
    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY;

    // Si el scroll ha alcanzado cierta posición (por ejemplo, 300px desde la parte superior)
    if (scrollPosition >= 300) {
        // Mostrar la serpiente
        showSnake();
    }
});
