function success(pos) {
    var crd = pos.coords;

    getWeather(crd.latitude,crd.longitude);
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};


//location request
function locationRequest() {
    navigator.geolocation.getCurrentPosition(success, error);
}


// call to openweathermap api using lat and long
function getWeather(latitude, longitude) {

    jQuery.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude, function (jsonObj) {
        var jsonParsed = JSON.parse(jsonObj);
        var weather = jsonParsed.weather;

        currentWeather.conditionId = weather.id;
        currentWeather.condition = weather.main;
        currentWeather.description = weather.description;

        console.log(weather.id);
        console.log(weather.main);
        console.log(weather.description);



    });
}
