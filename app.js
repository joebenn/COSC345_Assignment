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
      clear_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time)});
      count_c++
    } else if(weatherData[i].main === "Rain" && count_cd === 0){
      var time = weatherData[i].date_time;
      rain_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time)});
      count_cd++
    } else if(weatherData[i].main === "Clouds" && count_r === 0){
      var time = weatherData[i].date_time;
      cloud_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time)});
      count_r++
    } else if(weatherData[i].main === "Snow" && count_s === 0){
      var time = weatherData[i].date_time;
      snow_data.push({description: weatherData[i].description, timeUntil: calcTimeDifference(time)});
      count_s++
    }
  }
}

console.log(snow_data.length);



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
    c.fillText("Clear Weather", 55, 20);
  //find next clear time
  if(clear_data.length != 0){
    c.fillText(clear_data[0].description, 60, 60);
    c.fillText(clear_data[0].timeUntil, 60, 100);
  } else {
    c.fillText("It will not be clear soon", 60, 60);
  }


}
function rainy_screen(c) {
  c.clearRect(0,0,200,200);
  c.fillText("Rainy Weather", 55, 20);
  if(rain_data.length != 0){
    c.fillText(rain_data[0].description, 60, 60);
    c.fillText(rain_data[0].timeUntil, 60, 100);
  } else {
    c.fillText("It will not rain soon", 60, 60);
  }
}
function snowy_screen(c) {
  c.clearRect(0,0,200,200);
  c.fillText("Snowy Weather", 55, 20);
  if(snow_data.length != 0){
    c.fillText(snow_data[0].description, 60, 60);
    c.fillText(snow_data[0].timeUntil, 60, 100);
  } else {
    c.fillText("It will not be snowy soon", 60, 60);
  }
}
function cloudy_screen(c) {
  c.clearRect(0,0,200,200);
  c.fillText("Cloudy Weather", 55, 20);
  if(cloud_data.length != 0){
    c.fillText(cloud_data[0].description, 60, 60);
    c.fillText(cloud_data[0].timeUntil, 60, 100);
  } else {
    c.fillText("It will not be cloudy soon", 60, 60);
  }
}
function welcome_screen(c){
  c.clearRect(0,0,200,200);
  c.fillText("WELCOME", 55, 20);
}

set_screens([
    {left: -1, right: 1, bg: "white", fg: "black", draw: welcome_screen},
    {left: 0, right: 2, bg: "white", fg: "black", draw: clear_screen},
    {left: 1, right: 3, bg: "white", fg: "black", draw: rainy_screen},
    {left: 2, right: 4, bg: "white", fg: "black", draw: snowy_screen},
    {left: 3, right: -1, bg: "white", fg: "black", draw: cloudy_screen},
   ]);
