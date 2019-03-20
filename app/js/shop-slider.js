$(document).ready(function(){

	const shopSlider = $('#shopSlider');
	
	// headerSlider.on('initialized.owl.carousel', function(event) {
	// 	$('.slide-controls-number__active').text(event.item.index + 1);
	// 	$('.slide-controls-number__total').text(event.item.count);
	// });

	shopSlider.owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		smartSpeed: 500,
		margin: 2
	});

	// Go to the previous item
	$('#shopSliderLeft').click(function() {
	    shopSlider.trigger('prev.owl.carousel');
	});
	// Go to the next item
	$('#shopSliderRight').click(function() {
	    shopSlider.trigger('next.owl.carousel');
	});

	// headerSlider.on('changed.owl.carousel', function(event) {
	// 	$('.slide-controls-number__active').text(event.item.index + 1);
	// 	$('.slide-controls-number__total').text(event.item.count);
	// });

});