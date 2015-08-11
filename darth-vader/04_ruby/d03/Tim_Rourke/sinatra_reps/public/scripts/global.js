$(document).on('ready', function() {

	main = $('main');

	$('body').on('click', '.site-navigation', function(e) {
		e.preventDefault();

		function getAjax(url) {
			$.ajax({
				type: 'get',
				dataType: 'json',
				url: url,
				success: function(data) {
					console.dir(data)

					var result = "";

					for (var index in data) {
						console.log(data[index]);
						result += '<p>' + '<em>' + index + ':</em>&nbsp;' + data[index] + '</p>';	
					}
					
					$(main).html($('<article class="ajaxResponse">' + result + '</article>'));
				}

			});			
		}

		getAjax(e.target.getAttribute('href'));

		return false;

	});
});