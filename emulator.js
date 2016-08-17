var width = 200;
var height = 200;

var canvas_width_pixels = width;
var canvas_height_pixels = height;

var canvas = document.createElement("canvas");
var canvas_create = canvas.getContext("2d");


canvas.width = canvas_width_pixels;
canvas.height = canvas_height_pixels;

document.body.appendChild(canvas);

var screens, current;

function set_current(screen_object) {
  current = screen_object;
  canvas_create.fillStyle = current.bg;
  canvas_create.fillRect(10, 10, 180, 120);
  canvas_create.fillStyle = current.fg;
  canvas_create.font = "15px Arial";
  canvas_create.fillText(current.title, 55, 20);
  //images?
  current.draw(canvas_create);
}

function set_screens(array_of_screen_objects) {
  screens = array_of_screen_objects;
  set_current(screens[0]);
}

function onClickLeft() {
  if(current.left >= 0) set_current(screens[current.left]);
}

function onClickRight() {
  if(current.right >= 0) set_current(screens[current.right]);
}
