$(document).ready(function() {
}); 

var total = 0;

//Do this for a10, a20, a30, n10, n20, n30
$("#a10").click(function(){
//add 10 to the total
total = total + 10;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#a20").click(function(){
//add 20 to the total
total = total + 20;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#a30").click(function(){
//add 30 to the total
total = total + 30;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#a40").click(function(){
//add 40 to the total
total = total + 40;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#a50").click(function(){
//add 50 to the total
total = total + 50;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#n10").click(function(){
//subtract 10 to the total
total = total - 10;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#n20").click(function(){
//subtract 20 to the total
total = total - 20;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#n30").click(function(){
//subtract 30 to the total
total = total - 30;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#n40").click(function(){
//subtract 40 to the total
total = total - 40;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#x5").click(function(){
//multiply 5 to the total
total = total * 5;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#x10").click(function(){
//multiply 10 to the total
total = total * 10;
$("#out").html(total);
//update $("#out") with the new total using the .html() function
});

$("#red").click(function(){
//updating the background color
$("#out").css("background-color", "red");
});

$("#blue").click(function(){
//updating the background color
$("#out").css("background-color", "blue");
});

$("#green").click(function(){
//updating the background color
$("#out").css("background-color", "green");
});

$("#out").click(function(){
//updating the background color
$("#out").css("background-color", "white");
total=0;
$("#out").html(total);//reset's total
});

//Do this for red, out, blue
//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with the .css("background-color", "whatever color") function