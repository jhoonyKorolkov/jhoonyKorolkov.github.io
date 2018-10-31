$(document).ready(function () {
	$('.js-link').hover(function () {
    $('.js-link').toggleClass('active-link-js')
    $('.tab1').slideToggle();
  });

})