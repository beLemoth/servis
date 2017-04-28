(function() {
	'use strict';

	// photo gallery
	$('#gallery').photobox('a',{ time:0 });

	// preloader

	$(window).on('load', function () {
		$('.preloader').delay(350).fadeOut('slow');

    	// product list count

    	var items = $('.prod-item-wrap');
		if (items) {
			var cnt = items.length;
			var width = (cnt%4)?((cnt%5)?(100/3):(100/5)):(100/4);
			$(items).each( function (number) {
				$(this).css('width', width+'%');
			});
		};
	});

	// parallax
	var intro = $('.intro');

	if(intro) {

		var speed = 10;		// скорость прокрутки
        $(window).scroll(function() {
            var yPos = 30-($(window).scrollTop() / speed); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + '%';
            // Создаем эффект Parallax Scrolling
            intro.css({ backgroundPosition: coords });
        });
	};
        

	// maps

	if ($('div').is('#map')) {
		var map = new GMaps({
	  		el: '#map',
			lat: 52.79640,
			lng: 27.54820,
			width: '100%',
			height: '600px',
			zoom: 17			
		});

		map.addMarker({
			lat: 52.79640,
			lng: 27.54820,
			title: 'ОДО "Сервис"',
			infoWindow: {
	  			content: '<p>ОДО "Сервис" ул. Строителей, д.1Г</p>'
			}
		});
	};
	

})();

	