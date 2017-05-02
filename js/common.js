$(document).ready(function () {
    /*
    * $1 menu js file
    * $2 fixed footer js file
    * $3 fixed elements picture and scrolled content page
    * $4 sliders file import
     *$5 popUp info script
    * */

    //$1
    //= tpl/_menu.js
    
    $('.js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true, //cancil to slide left
		asNavFor: '.js-slider-nav',
		cssEase: 'ease-in',
		draggable: false //can del if debug focusOnSelect
	});
	$('.js-slider-nav').slick({
		slidesToShow: 4,
		//slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-main-slider',
		focusOnSelect: true,
	});
    
});

