//scrolling text feature
$(function() {
	$('#example').vTicker();
});

//weather tracker feature
$(document).ready(function() {
	$.simpleWeather({
		woeid: 615702,
		unit : 'f',
		success : function(weather) {
			html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
			html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
			html += '<li class="currently">' + weather.currently + '</li>';
			html += '</ul>';

			$("#weather").html(html);
		},
		error : function(error) {
			$("#weather").html('<p>' + error + '</p>');
		}
	});
}); 