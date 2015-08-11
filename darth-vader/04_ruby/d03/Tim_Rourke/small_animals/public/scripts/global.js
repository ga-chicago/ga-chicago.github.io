$(document).on('ready', function() {

	main = $('main');

	star = '<span>♥</span>';

	function getAjax(url) {
			$.ajax({
				type: 'get',
				dataType: 'json',
				url: '/api' + url,
				success: function(data) {
					
					$('.animal__name').html(data.name);

					$('.animal__habitat-name').html(data.habitat);

					$('.animal__image').attr('src', data.picture_url);

					$('.animal__image').attr('alt', data.name);

					$('.animal__description').html(data.description);

					numStars = "";
					for (var i = 0; i < data.cuteness; i++) {
						numStars += star;
					}
					$('.animal__rating-stars').html( numStars );

				}

			});			
		};

		getAjax('/kittens');

	$('body').on('click', '.site-navigation', function(e) {
		e.preventDefault();

		

		getAjax(e.target.getAttribute('href'));

		return false;

	});

});