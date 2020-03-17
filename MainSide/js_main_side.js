if ($(window).width() > 813) {
    $('.foto1').hover(function () {

        $(this).toggleClass('animate1');
        $('.foto2').toggleClass('animate2');

    })

    $('.foto2').hover(function () {
        $(this).toggleClass('animate1');
        $('.foto1').toggleClass('animate3');
    })

}


$('.foto1').on('click', function () {

    alert('Strona w produkcji');

})

preloader
var preloaderEl = document.querySelector('#preloader');

window.addEventListener('load', function () {
    preloaderEl.classList.add('preloader-hiding');

    preloaderEl.addEventListener('transitionend', function () {
        this.classList.add('preloader-hidden');
        this.classList.remove('preloader-hiding');
    });
});