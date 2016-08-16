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

function onClickleft() {
    clicks -= 1;
    if(clicks === -1){
      clicks += 1;
    }
    click_tracker()
};

 function onClickright() {
     clicks += 1;
     if(clicks === 4){
       clicks -= 1;
     }
     click_tracker()
 };

function click_tracker() {
 if(clicks === 0 ){
   screen1();
 }else if(clicks === 1) {
   screen2();
 }else if(clicks === 2){
   screen3();
 }else if(clicks === 3){
   screen4();
 }
}

var title = "Clear weather";
var background_colour_screen = "white";
var screen1_text_colour = "black";
var screen1_title1 = "Clear weather info here";

var title = "Rainy weather";
var screen2_text_colour = "black";
var screen2_title2 = "Rainy weather info here";

var title = "Snowy weather";
var screen3_text_colour = "black";
var screen3_title3 = "Snowy weather info here";

var title = "Cloudy weather";
var screen4_text_colour = "black";
var screen4_title4 = "Cloudy weather info here";
//Handles navigation to the left


function screen1() {
  //This will eveutally house files which deal with displaying the pulled weather infomation
    canvas_create.fillStyle = background_colour_screen;
    canvas_create.fillRect(10,10,180,120);
    canvas_create.fillStyle = screen1_text_colour;
    canvas_create.font = "15px Arial";
    canvas_create.fillText(screen1_title1,10,50);
}

function screen2() {
    canvas_create.fillStyle = background_colour_screen;
    canvas_create.fillRect(10,10,180,120);
    canvas_create.fillStyle = screen2_text_colour;
    canvas_create.font = "15px Arial";
    canvas_create.fillText(screen2_title2,10,50);

}

function screen3() {
    canvas_create.fillStyle = background_colour_screen;
    canvas_create.fillRect(10,10,180,120);
    canvas_create.fillStyle = screen3_text_colour;
    canvas_create.font = "15px Arial";
    canvas_create.fillText(screen3_title3,10,50);
}

function screen4() {
    canvas_create.fillStyle = background_colour_screen;
    canvas_create.fillRect(10,10,180,120);
    canvas_create.fillStyle = screen4_text_colour;
    canvas_create.font = "15px Arial";
    canvas_create.fillText(screen4_title4,10,50);
}

screen1();
