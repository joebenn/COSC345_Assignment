var title = "Sunny weather";
var background_colour_screen = "white";
var screen1_text_colour = "black";
var screen1_title1 = "Sunny weather info here";

var title = "Rainy weather";
var screen2_text_colour = "black";
var screen2_title2 = "Rainy weather info here";

var title = "Snowy weather";
var screen3_text_colour = "black";
var screen3_title3 = "Snowy weather info here";

var title = "Cloudy weather";
var screen4_text_colour = "black";
var screen4_title4 = "Cloudy weather info here";



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