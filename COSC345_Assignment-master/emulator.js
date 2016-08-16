var width = 200;
var height = 200;
var clicks = 0;

var canvas_width_pixels = width;
var canvas_height_pixels = height;

var canvas = document.createElement("canvas");
var canvas_create = canvas.getContext("2d");


canvas.width = canvas_width_pixels;
canvas.height = canvas_height_pixels;

document.body.appendChild(canvas);
