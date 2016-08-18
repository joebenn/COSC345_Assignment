
function locationRequest() {
    "use strict"
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(pos) {
    "use strict"
    var crd = pos.coords;
    getWeather(crd.latitude,crd.longitude);
}

function error(err) {
    "use strict"
    console.warn("ERROR(" + err.code + "): " + err.message);
}

function getWeather(latitude, longitude) {
    "use strict"
  jQuery.getJSON(String.format(API_URL, latitude, longitude, API_KEY), function (jsonObj) {
      var city = jsonObj.city;
      jsonObj.list.forEach(function (weatherPeriod) {
          var weatherObj = {
              main: weatherPeriod.weather[0].main,
              description: weatherPeriod.weather[0].description,
              date_time: new Date(weatherPeriod.dt * 1000),
              temp: weatherPeriod.main.temp,
              city: city.name
          };

          parseWeather(weatherObj);
      });

      loadScreens();
  });
}

