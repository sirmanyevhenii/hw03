console.log('Hello, I wish you a good day');


// open menu
$('.toggle-btn').click(function() {
	$('.top-menu').toggleClass('top-menu--active');
	$('.toggle-btn__top').toggleClass('toggle-btn__top--active');
	$('.toggle-btn__middle').toggleClass('toggle-btn__middle--active');
	$('.toggle-btn__bottom').toggleClass('toggle-btn__bottom--active');
});

$(document).click(function(event) {
	if ($(event.target).closest('.toggle-btn').length ) return;
	$('.toggle-btn__top').removeClass('toggle-btn__top--active');
	$('.toggle-btn__middle').removeClass('toggle-btn__middle--active');
	$('.toggle-btn__bottom').removeClass('toggle-btn__bottom--active');
	$('.top-menu').removeClass('top-menu--active');
	event.stopPropagation();
});