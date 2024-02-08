function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var proyectosSection = document.getElementById("proyectos");
    var header = document.getElementById("myHeader");

    var proyectosBottom = proyectosSection.offsetTop + proyectosSection.offsetHeight;

    if (
        document.body.scrollTop > proyectosBottom ||
        document.documentElement.scrollTop > proyectosBottom
    ) {
        scrollToTopBtn.style.display = "block";
        header.classList.add("hidden");
    } else {
        scrollToTopBtn.style.display = "none";
        header.classList.remove("hidden");
    }

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

var headerHeight = document.querySelector('header').offsetHeight;

document.addEventListener('scroll', function () {
    handleScroll();
});

document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    document.getElementById("myHeader").classList.remove("hidden");
});

function handleScroll() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var opacity = 1 - (scrollPosition / headerHeight);
    opacity = Math.min(1, Math.max(0, opacity));
    document.querySelector('header').style.opacity = opacity;
}











