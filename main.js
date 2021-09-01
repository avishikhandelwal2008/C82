canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_X , last_position_of_Y;
var color= "black";
var width_of_line=2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of X and Y co-ordinates = " );
        console.log("X = " + last_position_of_X + "Y = " + last_position_of_Y);
        ctx.moveTo(last_position_of_X , last_position_of_Y);

        console.log("Current position of X and Y co-ordinates = " );
        console.log("X = " + current_position_of_mouse_X + "Y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X , current_position_of_mouse_Y);
        ctx.stroke();
    }

    last_position_of_X = current_position_of_mouse_X;
    last_position_of_Y = current_position_of_mouse_Y;
}