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





//Handles navigation to the left
 function onClickleft() {
     clicks -= 1;
     if(clicks === -1){
       clicks += 1;
     }
     document.getElementById("clicks").innerHTML = clicks;
     click_tracker()

 };

//Handles navigation to the right
  function onClickright() {
      clicks += 1;
      if(clicks === 4){
        clicks -= 1;
      }
      document.getElementById("clicks").innerHTML = clicks;
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




