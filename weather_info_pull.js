var API_key = "8056edf51377902d28bd9e53a5dd97af";
var weatherData = [];

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
    jQuery.getJSON('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude +
                    "&units=metric" + '&APPID=' + API_key, function (jsonObj) {

        var list = jsonObj.list;
        for (i = 0; i < list.length; i++){
          weatherData.push({main: list[i].weather[0].main, description: list[i].weather[0].description, date_time: list[i].dt_txt,
                            temp: list[i].main.temp });
        }
        //prints weatherData to the console
        for(i = 0; i < weatherData.length; i++){
          console.log(weatherData[i]);
        }

    });
}
