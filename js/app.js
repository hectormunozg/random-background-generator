// create an array of colors used and the current color
var colors = [];
var color = 0;

// generate color function
var generateColor = function() {
	color = "#" + (Math.floor(Math.random() * 1000000));
}

// check if current color is in array
var checkColor = function() {
	while(colors.indexOf(color) !== -1){
		generateColor();
	}
}

//click event
$('#colorGenerator').click(function() {	
	// generate random color
	generateColor();
	checkColor();
	// add style to body background
	$('body').css('background-color', color); 
	// add value to input
	$('#colorValue').attr('value', color);
	// store color value in array colors
	colors.push(color);

});