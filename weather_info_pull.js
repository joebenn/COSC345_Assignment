var API_key = "8056edf51377902d28bd9e53a5dd97af";

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
    jQuery.getJSON('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&APPID=' + API_key, function (jsonObj) {

        var list = jsonObj.list;
        for (i = 0; i < list.length; i++) {
          console.log(list[i].weather[0].main);
          console.log(list[i].weather[0].description);
          console.log(list[i].dt_txt);
          console.log(list[i].main.temp-273.15);
          console.log("---------")
}






    });
}
