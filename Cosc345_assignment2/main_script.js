


var width_cell = 20;			// width of the world in actual cells
var height_cell = 15;		// height of the world in actual cells
var square_size_block = 10;

var title = "Sunny weather";

var creature_color = "yellow";
var text_colour = "black";

var rubs_text = "rubs code";




var canvas_width_pixels = width_cell*square_size_block;		
var canvas_height_pixels = height_cell*square_size_block;  


//this allows the creation of the actual canvas

var canvas = document.createElement("canvas");					// Create the Canvas element
var canvas_create = canvas.getContext("2d");                    // call this with what you want to do, eg draw and write
canvas.width = canvas_width_pixels;
canvas.height = canvas_height_pixels;
document.body.appendChild(canvas);


document.getElementById("buttonleft").addEventListener("click", displayDate);

function displayDate() {
    canvas_create.fillStyle = creature_color;
    canvas_create.fillRect(10,10,180,50);
    
    canvas_create.fillStyle = text_colour;
    
    canvas_create.font = "30px Arial";
    canvas_create.fillText(rubs_text,10,50);
    
    
    
}






