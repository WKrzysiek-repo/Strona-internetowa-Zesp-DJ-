let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).on('scroll', function () {

    const scrollvalue = $(this).scrollTop();
    const windowHeight = $(window).height();

    const $photo1 = $('.infophoto1');
    const photo1FromTop = $photo1.offset().top;
    const photo1Height = $photo1.height();

    const $photo2 = $('.infophoto2');
    const photo2FromTop = $photo2.offset().top;
    const photo2Height = $photo2.height();

    const $text1 = $('.infotext1');
    const text1FromTop = $text1.offset().top;
    const text1Height = $text1.height();

    const $text2 = $('.infotext2');
    const text2FromTop = $text2.offset().top;
    const text2Height = $text2.height();



    if ($(window).width() < 600) {

        // $(window).scroll(function () {
        //     if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        //         $ibar.removeClass('fas');
        //         $('.dot5').addClass('fas')
        //         $bar1.removeClass('active');
        //     }
        // });

        if (scrollvalue > photo1FromTop + photo1Height - windowHeight) {
            $photo1.addClass('active');
        }

        if (scrollvalue > photo2FromTop + photo2Height - windowHeight) {
            $photo2.addClass('active');
        }

        if (scrollvalue > text1FromTop + text1Height - windowHeight) {
            $text1.addClass('active');
        }

        if (scrollvalue > text2FromTop + text2Height - windowHeight) {
            $text2.addClass('active');
        }

    }

    if (scrollvalue > photo1FromTop + photo1Height / 4 - windowHeight) {
        $photo1.addClass('active');
    }

    if (scrollvalue > photo2FromTop + photo2Height / 4 - windowHeight) {
        $photo2.addClass('active');
    }

    if (scrollvalue > text1FromTop + text1Height / 4 - windowHeight) {
        $text1.addClass('active');
    }

    if (scrollvalue > text2FromTop + text2Height / 4 - windowHeight) {
        $text2.addClass('active');
    }

    if (scrollvalue < 50) {
        $('div').removeClass('active');
    }










})


//nav
const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");
const listicon = document.querySelector("ul");

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");

})

listicon.addEventListener('click', function () {
    column.classList.toggle('show');
    burger.classList.toggle('active');
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
})

$('.fa-mail-bulk').on('click', function () {
    console.log(this);
    $('body,html').animate({
        scrollTop: $('.contact-wrapper').offset().top,
    }, 1000)

})

$('.arrow').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.body-wrapper').offset().top,
    }, 1000)

})

$('nav a, .bar-position a').on('click', function () {
    const goToSection = '#' + $(this).attr('class');

    $('body,html').animate({
        scrollTop: $(goToSection).offset().top,
    }, 500)

})