$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav:false,
    autoplay:false,
    stopOnHover: true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    autoWidth: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

AOS.init();

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
});

