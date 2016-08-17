locationRequest();
var clear_data = [];
var rain_data = [];
var cloud_data = [];
var snow_data = [];

function parseWeather(weatherData){
  var count_c = 0;
  var count_cd = 0;
  var count_r = 0;
  var count_s = 0;

  for(var i = 0; i < weatherData.length; i++){
    if(weatherData[i].main === "Clear" && count_c === 0){
      var time = weatherData[i].date_time;
      clear_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time),
                        temp: weatherData[i].temp});
      count_c++
    } else if(weatherData[i].main === "Rain" && count_cd === 0){
      var time = weatherData[i].date_time;
      rain_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time),
                        temp: weatherData[i].temp});
      count_cd++
    } else if(weatherData[i].main === "Clouds" && count_r === 0){
      var time = weatherData[i].date_time;
      cloud_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time),
                        temp: weatherData[i].temp});
      count_r++
    } else if(weatherData[i].main === "Snow" && count_s === 0){
      var time = weatherData[i].date_time;
      snow_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time),
                        temp: weatherData[i].temp});
      count_s++
    }
  }
}

function calcTimeDifference(timeThen){
  var today = new Date();
  var _MS_PER_DAY = 1000 * 60 * 60 * 24;
  var _HR_PER_DAY = 1000 * 60 * 60;
  var utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  var utc2 = Date.UTC(timeThen.getFullYear(), timeThen.getMonth(), timeThen.getDate());
  var timeTillW_D = Math.floor((utc2 - utc1) / _MS_PER_DAY);
  var utc3 = today.getHours();
  var utc4 = timeThen.getHours();
  var timeTillW_H = Math.abs(utc4 - utc3);
  return "days: " + timeTillW_D+ " " + "hours: " + timeTillW_H;
}
function clear_screen(c) {
    c.clearRect(0,0,200,200);
    var imageObj = new Image();
    imageObj.onload = function(){
    c.drawImage(imageObj, 0, 0);
    c.fillText("Clear Weather", 55, 20);
    if(clear_data.length != 0){
      c.fillText(clear_data[0].description, 60, 60);
      c.fillText(clear_data[0].timeUntil, 60, 100);
      c.fillText(clear_data[0].temp, 60, 140);
    } else {
      c.fillText("It will not be clear soon", 60, 60);
    }
      };
      imageObj.src = 'images/blue-sky.jpg';
}
function rainy_screen(c) {
  c.clearRect(0,0,200,200);
  var imageObj = new Image();
  imageObj.onload = function(){
  c.drawImage(imageObj, 0, 0);
  c.fillText("Rain Forcast", 55, 20);
  if(rain_data.length != 0){
    c.fillText(rain_data[0].description, 60, 60);
    c.fillText(rain_data[0].timeUntil, 60, 100);
    c.fillText(rain_data[0].temp, 60, 140);
  } else {
    c.fillText("It will not rain soon", 60, 60);
  }
    };
    imageObj.src = 'images/rain-sky.jpg';
}
function snowy_screen(c) {
  c.clearRect(0,0,200,200);
  var imageObj = new Image();
  imageObj.onload = function(){
  c.drawImage(imageObj, 0, 0);
  c.fillText("Snow Forcast", 55, 20);
  if(snow_data.length != 0){
    c.fillText(snow_data[0].description, 60, 60);
    c.fillText(snow_data[0].timeUntil, 60, 100);
    c.fillText(snow_data[0].temp, 60, 140);
  } else {
    c.fillText("It will not snow soon", 60, 60);
  }
    };
    imageObj.src = 'images/snow-sky.jpg';
}
function cloudy_screen(c) {
  c.clearRect(0,0,200,200);
  var imageObj = new Image();
  imageObj.onload = function(){
  c.drawImage(imageObj, 0, 0);
  c.fillText("Cloud Forcast", 55, 20);
  if(cloud_data.length != 0){
    c.fillText(cloud_data[0].description, 60, 60);
    c.fillText(cloud_data[0].timeUntil, 60, 100);
    c.fillText(cloud_data[0].temp, 60, 140);
  } else {
    c.fillText("It will not be cloudy soon", 60, 60);
  }
    };
    imageObj.src = 'images/cloud-sky.jpg';
}
function welcome_screen(c){
  c.clearRect(0,0,200,200);
  var imageObj = new Image();
  imageObj.onload = function(){
  c.drawImage(imageObj, 0, 0);
  c.fillText("WELCOME", 55, 20);
  c.fillText("SHITTY FORCAST APP", 20, 130);
    };
    imageObj.src = 'images/welcome.jpg';

}

set_screens([
    {left: -1, right: 1, bg: "white", fg: "white", draw: welcome_screen},
    {left: 0, right: 2, bg: "white", fg: "white", draw: clear_screen},
    {left: 1, right: 3, bg: "white", fg: "white", draw: rainy_screen},
    {left: 2, right: 4, bg: "white", fg: "white", draw: cloudy_screen},
    {left: 3, right: -1, bg: "white", fg: "white", draw: snowy_screen},
   ]);
