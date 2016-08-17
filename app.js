locationRequest();
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

if(hr<10) hr='0'+hr;
if(min<10) min='0'+min;
if(sec<10) sec='0'+sec;
if(dd<10) dd='0' + dd;

function calcTimeDifference(timeNow, timeThen){
  var _MS_PER_DAY = 1000 * 60 * 60 * 24;
  var _HR_PER_DAY = 1000 * 60 * 60;
  var utc1 = Date.UTC(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate());
  var utc2 = Date.UTC(timeThen.getFullYear(), timeThen.getMonth(), timeThen.getDate());
  var timeTillW_D = Math.floor((utc2 - utc1) / _MS_PER_DAY);
  if(timeTillW_D === 0){
    var utc3 = timeNow.getHours();
    var utc4 = timeThen.getHours();
    var timeTillW_H = utc4 - utc3;
    return "hours: " + timeTillW_H;
  }
  return "days: " + timeTillW_D;
}


function parseWeatherRain(weatherData){
  for(var i = 0; i < weatherData.length; i++){
    if(weatherData[i].main === "Rain"){
      var main = weatherData[i].main;
      var description = weatherData[i].description;
      var time = weatherData[i].date_time;
      console.log("Time 2 weather: " + time);
      console.log("Time now: " + today);
      var timeBetween = calcTimeDifference(today, time);
      console.log(timeBetween);
      break;
    }
  }
}

function clear_screen(c) {
  //find next clear time

  c.fillText("description", 60,60);
  c.fillText("time 2 weather", 60 ,110);
  c.fillText("temp", 60,150);

}
function rainy_screen(c) {
  //next rainy time
}
function snowy_screen(c) {
  //next snowy time
}
function cloudy_screen(c) {
  //next cloudy time
}

set_screens([
    {left: -1, right: 1, bg: "white", fg: "black", title: "Clear weather",
    draw: clear_screen},
    {left: 0, right: 2, bg: "white", fg: "black", title: "Rainy weather",
      draw: rainy_screen},
    {left: 1, right: 3, bg: "white", fg: "black", title: "Snowy weather",
       draw: snowy_screen},
    {left: 2, right: -1, bg: "white", fg: "black", title: "Cloudy weather",
        draw: cloudy_screen},
   ]);
