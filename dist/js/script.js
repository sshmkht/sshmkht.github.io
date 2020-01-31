$(document).ready(function(){
  $('.portfolio__slider').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
    {
     breakpoint: 992,
     settings: {
      dots: false,
      arrows: false,
    }
  }
  ]
});

//burger nav 
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        })
    })
})

//smooth scroll and pageup
$(window).scroll(function() {
  if ($(this).scrollTop() > 1400) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href='#home'], a[href='#about'], a[href='#portfolio'], a[href='#certificates']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

//modal
$('[data-modal=contacts]').on('click', function() {
  $('.contacts__overlay, #contacts').fadeIn('slow');
});
$('.contacts__close').on('click', function() {
  $('.contacts__overlay, #contacts').fadeOut('slow');
})



new WOW().init();
});