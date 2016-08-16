<!DOCTYPE html>
<html lang="en">
<head>
	<link type="text/css" rel="stylesheet" href="css/bootstrap.css" />
	<script src="js/jquery.js" type="text/javascript"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		.row {
			padding-top:1.5em;
		}
	</style>
	<script>
		var openWeatherAppId = '8056edf51377902d28bd9e53a5dd97af',
		  openWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast'

		var prepareData = function(units) {
			// Replace loading image
			var cityName = $('#city-name').val()
			// Make ajax call, callback
			if (cityName && cityName != ''){
				cityName = cityName.trim()
				getData(openWeatherUrl, cityName, openWeatherAppId, units)
			}
			else {
				alert('Please enter the city name')
			}
		}
		$(document).ready(function(){
			$('.btn-metric').click(function() {
				prepareData('metric')
			})
			$('.btn-imperial').click(function() {
				prepareData('imperial')
			})

		})
		function getData (url, cityName, appId, units) {
			var request = $.ajax({
				url: url,
				dataType: "jsonp",
				data: {q: cityName, appid: appId, units: units},
				jsonpCallback: "fetchData",
				type: "GET"
			}).fail(function(error){
				console.error(error)
				alert('Error sending request')
			})
		}
		function fetchData (forecast) {
			console.log(forecast)
			var html = '',
			  cityName = forecast.city.name,
				country = forecast.city.country

			html += '<h3> Weather Forecast for ' + cityName + ', ' + country + '</h3>'
			forecast.list.forEach(function(forecastEntry, index, list){
				html += '<p>' + forecastEntry.dt_txt + ': ' + forecastEntry.main.temp + '</p>'
			})

			$('#log').html(html)
		}
	</script>
</head>
<body>
	<div class="container">

		<div class="row">
			<div class="span4 offset 3">
				<h2>Weather App</h2>
				<p>Enter city name to get the weather forecast</p>
			</div>
			<div class="span6  offset1"><input class="span4" type="text" placeholder="Enter the city name" id="city-name" value=""/>
			</div>

		</div>
		<div class="row">
			<div class="span6 offset1"><input type="button" class="btn-primary btn btn-metric" value="Get forecast in metric"/>
			<div class="span6 offset1"><input type="button" class="btn-danger btn btn-imperial" value="Get forecast in imperial"/>
			</div>
		</div>

		<div class="row">
			<div class="span6 offset1">
				<div id="log">Nothing to show yet</div>
			</div>
		</div>

	</div>

</body>
</html>
