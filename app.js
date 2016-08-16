locationRequest();

for(i = 0; i < weatherData.length; i++){
  console.log(weatherData[i]);
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = dd+'/'+mm+'/'+yyyy;
console.log(today);

function clear_screen(c) {}
function rainy_screen(c) {}
function snowy_screen(c) {}
function cloudy_screen(c) {}

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
