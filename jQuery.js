
var section1 = $('.section-1');
var burgerMenuCenter = $('<div class="text-center text-2"><a href="#">Featured</a></div><div class="text-center text-3" ><a href="#">Women</a></div><div class="text-center text-5"><a href="#">Men</a></div><div class="text-center text-5"><a href="#">Home</a></div><div class="text-center text-6"><a href="#">Jewelry</a></div><div class="text-center text-7"><a href="#">Beauty</a></div><div class="text-center text-8"><a href="#">Travel</a></div><div class="text-center text-9"><a href="#">Pets</a></div>'); // burger menu open


$('.burger').click(function () {
    if ($('.burger').hasClass('burger')) {
        $('.burger').removeClass('burger').addClass('active');
        section1.text('');
        section1.css('paddingTop', '10px');
        section1.append(burgerMenuCenter).addClass('burger-menu-center');
    }
    else {
        $('.active').removeClass('active').addClass('burger');
        $('.burger-menu-center').removeClass('burger-menu-center').addClass('section-1');
        section1.text('');
        section1.append($('<section class="section-1 section-not-white big-text"><div class= "section-1"><div class="container section-1__flex"><div class="text">Luxury without labels.</div><div class="dot">.</div></div></div></section>'));
    }
})

/* slider 1 */

$('.slider-1__item').slick({
    slidesToShow: 2,
    slidesToScroll: 6,
    arrows: true,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    adaptiveHeight: true,
    variableHeight: true,
    initialSlide: 1,
    centerPadding: '10px',
});

/* slider 2 */

$('.slider-item').slick({
    slidesToShow: 6,
    slidesToScroll: 3,
    focusOnSelect: true,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    adaptiveHeight: true,
    variableHeight: true,
    initialSlide: 3,
    centerPadding: '10px',
});

var menuRight = $('.menu-right'); // menu right

window.addEventListener('resize', (e) => {
    resizeWindow(menuRight);
});

function resizeWindow() {
    if (window.innerWidth < 900) {
        $('.card-text-1').text('Fine, rare materials for optimal performance and durability.');
        $('.card-text-2').text('We believe luxury is defined by the quality of product, not by the price.');
        $('.card-text-3').text('The world`s best manufacturers, the same as top luxury brands.');
        $('.menu-right').css('justifyContent', 'center');
    }
}
resizeWindow();