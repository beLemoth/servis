(function() {
	'use strict';

	// photo gallery
	$('#gallery').photobox('a',{ time:0 });

	// preloader

	$(window).on('load', function () {
    	$('.preloader').delay(350).fadeOut('slow');
	});

	// maps

	if ($('div').is('#map')) {
		var map = new GMaps({
	  		el: '#map',
			lat: 52.79800,
			lng: 27.54900,
			width: '600px',
			height: '600px',
			zoom: 17			
		});

		map.addMarker({
			lat: 52.79800,
			lng: 27.54900,
			title: 'ОДО "Сервис"',
			infoWindow: {
	  			content: '<p>ОДО "Сервис"</p>'
			}
		});
	};
	

})();

	