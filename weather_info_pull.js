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

        // var city = jsonObj.city.name;
        // console.log(city);
        
        for (i = 0; i < list.length; i++){
          //find low and high for each day
          var date = new Date(list[i].dt*1000);
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          var hours = date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();
          var formattedTime = day + "/" + month + "/" + year + " "+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            weatherData.push({main: list[i].weather[0].main, description: list[i].weather[0].description,
                              date_time: formattedTime, temp: list[i].main.temp, city: jsonObj.city.name });



                              console.log(weatherData[i]);

         }

    });
}
