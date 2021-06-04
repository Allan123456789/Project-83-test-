
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;

    new_width = screen.width-70;
    new_height = screen.height-300;

    if(width<992){
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_height;
   document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touch_start);

function my_touch_start(e){
    console.log("my_touch_start");
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;

  last_position_of_x= e.touch[0].clientX-canvas.offsetLeft;
  last_position_of_y= e,touch[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove",my_touch_move);

function my_touch_move(e){
 console.log("my_touch_move");

 current_position_of_x= e.touch[0].clientX-canvas.offsetLeft;
  current_position_of_y= e,touch[0].clientY-canvas.offsetTop;

  ctx.beginPath();
    ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;

console.log("last_postition_of_x_and_y= ");
console.log("x= " + last_position_of_x + "y=" + last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("current_position_of_x_and_y= ")
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);

ctx.lineTo(current_position_of_x,current_position_of_y);
  ctx.stroke()

  last_position_of_x = current_position_of_x;
  last_position_of_y = current_position_of_y;
}

var width = screen.width;

    new_width = screen.width-70;
    new_height = screen.height-300;

    if(width<992){
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_height;
   document.body.style.overflow="hidden";
}

var width = screen.width;

    new_width = screen.width-70;
    new_height = screen.height-300;

    if(width<992){
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_height;
   document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touch_start);

function my_touch_start(e){
    console.log("my_touch_start");
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;

  last_position_of_x= e.touch[0].clientX-canvas.offsetLeft;
  last_position_of_y= e,touch[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove",my_touch_move);

function my_touch_move(e){
 console.log("my_touch_move");

 current_position_of_x= e.touch[0].clientX-canvas.offsetLeft;
  current_position_of_y= e,touch[0].clientY-canvas.offsetTop;

  ctx.beginPath();
    ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;

console.log("last_postition_of_x_and_y= ");
console.log("x= " + last_position_of_x + "y=" + last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("current_position_of_x_and_y= ")
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);

ctx.lineTo(current_position_of_x,current_position_of_y);
  ctx.stroke()

  last_position_of_x = current_position_of_x;
  last_position_of_y = current_position_of_y;
}
canvas.addEventListener("touchmove",my_mouse_move);

function my_mouse_move(e){
 console.log("my_touch_move");

 current_position_of_x= e.clientX-canvas.offsetLeft;
  current_position_of_y= e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

console.log("last_postition_of_x_and_y= ");
console.log("x= " + last_position_of_x + "y=" + last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);

console.log("current_position_of_x_and_y= ")
console.log("x = " + current_position_of_x + "y = " + current_position_of_y);

ctx.lineTo(current_position_of_x,current_position_of_y);
  ctx.stroke()}

  last_position_of_x = current_position_of_x;
  last_position_of_y = current_position_of_y;
}