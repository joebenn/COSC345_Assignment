var API_key = "8056edf51377902d28bd9e53a5dd97af";
var GoogleReverse_API_key = "AIzaSyAFQCoNkswg-dlXmtlkixr6s2fwwb3cCDM";
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


    jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + "," + longitude+ '&key=' + GoogleReverse_API_key, function (gjsonObject){

    var object_g = gjsonObject.list;
    console.log(gjsonObject.list);



    });


    jQuery.getJSON('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude +
                    "&units=metric" + '&APPID=' + API_key, function (jsonObj) {

        var list = jsonObj.list;
        console.log(list.length);
        for (i = 0; i < list.length; i++){
          weatherData.push({main: list[i].weather[0].main, description: list[i].weather[0].description, date_time: list[i].dt_txt,
temp: list[i].main.temp });
        //i += 8;
        }

        for(i = 0; i < weatherData.length; i++){
          //console.log(list[i].weather[0].main);
          console.log(weatherData[i]);

          var date = new Date(list[i].dt*1000);
          // Hours part from the timestamp

          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          var hours = date.getHours();
          var minutes = "0" + date.getMinutes();
          var seconds = "0" + date.getSeconds();
          var formattedTime = day + "/" + month + "/" + year + " "+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

          console.log(formattedTime);







          // if(list[i].weather[0].main = "cloudy"){
          //   console.log(list[i].weather[0].main);
          // } else if (list[i].weather[0].main = "Thunderstorm"){
          //   console.log(list[i].weather[0].main);
          // } else if (list[i].weather[0].main = "Drizzle") {
          //   console.log(list[i].weather[0].main);
          // } else if (list[i].weather[0].main = "Rain") {
          //   console.log(list[i].weather[0].main);
          // } else if (list[i].weather[0].main = "Snow") {
          //   console.log(list[i].weather[0].main);
          // } else if (list[i].weather[0].main = "Atmosphere") {
          //   console.log(list[i].weather[0].main);
          // } else if (list[i].weather[0].main = "Clear") {
          //   console.log(list[i].weather[0].main);
          // }

        }


    });
}
