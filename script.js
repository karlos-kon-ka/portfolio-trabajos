var header = document.getElementById('myHeader');
var hasScrolled = false;

window.addEventListener('scroll', function () {
    if (!hasScrolled) {
        header.classList.add('bounceOnce');
        hasScrolled = true;
    }
});
