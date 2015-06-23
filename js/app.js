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




