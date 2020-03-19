let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


// const $doc = $(document);
// const $header = $('.foto1');
// const $main = $('.main-side');

// $doc.on('scroll', function () {
//     const scrollPos = $doc.scrollTop();

//     const sectionOffset = $main.offset().top;

//     const headerHeight = $header.outerHeight();




//     if (scrollPos < sectionOffset) {
//         $header.css({
//             'filter': 'sepia(' + scrollPos / headerHeight + ')'
//         })

//     }
// })


//button to top
var top_Button = document.querySelector('top1');

$('.top1').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.body-wrapper').offset().top,
    }, 800)

})


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


    const $headersection = $('.head-wrapper');
    const headerFromTop = $headersection.offset().top;
    const headersectionHeight = $headersection.outerHeight();

    const $bodysection = $('.body-wrapper');
    const bodyFromTop = $bodysection.offset().top;
    const bodysectionHeight = $bodysection.outerHeight();

    const $animationsection = $('.photo_animation');
    const animationFromTop = $animationsection.offset().top;
    const animationsectionHeight = $animationsection.outerHeight();

    const $offersection = $('.offer-wrapper');
    const offerFromTop = $offersection.offset().top;
    const offersectionHeight = $offersection.outerHeight();

    const $gallerysection = $('.gallery');
    const galleryFromTop = $gallerysection.offset().top;
    const gallerysectionHeight = $gallerysection.outerHeight();

    const $contactsection = $('.contact-wrapper');
    const contactFromTop = $contactsection.offset().top;
    const contactsectionHeight = $contactsection.outerHeight();

    const $bar1 = $('.status-bar');
    const $ibar = $('.fa-circle');

    if (scrollvalue > headersectionHeight - 100) {
        $bar1.addClass('active');
    } else {
        $bar1.removeClass('active');
    }

    if (scrollvalue < bodysectionHeight + bodyFromTop - 2) {
        $ibar.removeClass('fas');
        $('.dot1').addClass('fas')
    } else if (scrollvalue < animationsectionHeight + animationFromTop) {
        $ibar.removeClass('fas');
        $('.dot2').addClass('fas')
    } else if (scrollvalue < offersectionHeight + offerFromTop - 2) {
        $ibar.removeClass('fas');
        $('.dot3').addClass('fas')
    } else if (scrollvalue < gallerysectionHeight + galleryFromTop) {
        $ibar.removeClass('fas');
        $('.dot4').addClass('fas')
    } else if (scrollvalue < contactsectionHeight + contactFromTop) {
        $ibar.removeClass('fas');
        $('.dot5').addClass('fas')
    }

    if ($(window).width() < 600) {

        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $ibar.removeClass('fas');
                $('.dot5').addClass('fas')
                $bar1.removeClass('active');
            }
        });


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


    //info
    const $column1 = $('.col1');
    const column1FromTop = $column1.offset().top;
    const column1Height = $column1.height();

    const $column2 = $('.col2');
    const column2FromTop = $column2.offset().top;
    const column2Height = $column2.height();

    if (scrollvalue > column1FromTop + column1Height / 4 - windowHeight) {
        $column1.addClass('active');
    }

    if (scrollvalue > column2FromTop + column2Height / 4 - windowHeight) {
        $column2.addClass('active');
    }


    //contact
    const $contact1 = $('.all-contact');
    const contact1FromTop = $contact1.offset().top;
    const contact1Height = $contact1.height();

    if (scrollvalue > contact1FromTop + contact1Height / 4 - windowHeight) {
        $contact1.addClass('active');
    }

    if (scrollvalue < 50) {
        $('div').removeClass('active');
    }


    if (scrollvalue < 50) {
        $('div').removeClass('active');
    }

})


//preloader
var preloaderEl = document.querySelector('#preloader');

window.addEventListener('load', function () {
    preloaderEl.classList.add('preloader-hiding');

    preloaderEl.addEventListener('transitionend', function () {
        this.classList.add('preloader-hidden');
        this.classList.remove('preloader-hiding');
    });
});



//nav
const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("aside");
const listicon = document.querySelector("ul");

if ($(window).width() < 600) {

    burger.addEventListener('click', function () {
        document.querySelector('.all-wrapper').classList.toggle('blur');
        document.querySelector('.arrow').classList.toggle('disable');
    })


    $('.fa-mail-bulk').on('click', function () {

        document.querySelector('.modal-wrap').classList.add('active');
        document.querySelector('.all-wrapper').classList.add('blur')

        document.querySelector('span.hide').addEventListener("click", function () {
            document.querySelector('.modal-wrap').classList.remove('active');
            document.querySelector('.all-wrapper').classList.remove('blur')
        })

        $('body,html').animate({
            scrollTop: $('').offset().top,
        }, 1000)

    })

}


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
    document.querySelector('.all-wrapper').classList.remove('blur');
    document.querySelector('.arrow').classList.remove('disable');
})


//message button
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