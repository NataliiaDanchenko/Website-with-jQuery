const menuRight = document.querySelector('.menu-right'); // menu right
const burger = document.querySelector('.burger'); // burger responsive media screen 900px
const section1 = document.querySelector('.section-1');
const burgerMenuCenter = document.createElement('div'); // burger menu open

burger.addEventListener('click', clickBurger); // open burger menu

function clickBurger() {
    if (burger.classList.contains('burger')) {
        burger.classList.remove('burger');
        burger.classList.add('active');
        burgerMenuCenter.classList.add('burger-menu-center')
        burgerMenuCenter.innerHTML = '<div class="text-center text-2"><a href="#">Featured</a></div><div class="text-center text-3" > <a href="#">Women</a></div><div class="text-center text-5"><a href="#">Men</a></div><div class="text-center text-5"><a href="#">Home</a></div><div class="text-center text-6"><a href="#">Jewelry</a></div><div class="text-center text-7"><a href="#">Beauty</a></div><div class="text-center text-8"><a href="#">Travel</a></div><div class="text-center text-9"><a href="#">Pets</a></div>';
        section1.append(burgerMenuCenter);
    }
    else {
        burger.classList.remove('active');
        burgerMenuCenter.innerHTML = '';
        burgerMenuCenter.classList.remove('burger-menu-center');
        burger.classList.add('burger');
    }
}

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


const cardTextOne = document.querySelector('.card-text-1');
const cardTextTwo = document.querySelector('.card-text-2');
const cardTextThree = document.querySelector('.card-text-3');

/* change text responsive media screen 900px */

window.addEventListener('resize', resizeWindow);

function resizeWindow() {
    if (window.innerWidth < 900) {
        cardTextOne.textContent = 'Fine, rare materials for optimal performance and durability.';
        cardTextTwo.textContent = 'We believe luxury is defined by the quality of product, not by the price.';
        cardTextThree.textContent = 'The world`s best manufacturers, the same as top luxury brands.';
        $('.menu-right').css('justifyContent', 'center');
    }
}

