var facingArray = ['NORTH','EAST','SOUTH','WEST'];

//side to degrees convert
function sideToDegrees(side) {
	switch(side){
		case 'NORTH':
			return 90;
			break;
		case 'EAST':
			return 0;
			break;
		case 'SOUTH':
			return 270;
			break;
		case 'WEST':
			return 180;
			break;
	}
}
//degrees to side convert
function degreesToSide(degrees) {
	switch(degrees){
		case 90:
			return 'NORTH';
			break;
		case 0:
			return 'EAST';
			break;
		case 270:
			return 'SOUTH';
			break;
		case 180:
			return 'WEST';
			break;
	}
}
//fix degrees to be in the range (0,360)
function fixDegrees(deg){
	if(deg < 0) deg += 360;
	if(deg >= 360) deg -= 360; 
	return deg;
}
//LEFT function
function left() {
	var deg = fixDegrees(sideToDegrees(window.orientation) + 90);
	window.orientation = degreesToSide(deg);
}
//RIGHT function
function right() {
	var deg = fixDegrees(sideToDegrees(window.orientation) - 90);
	window.orientation = degreesToSide(deg);
}
//MOVE function
function move(){
	var x = window.x;
	var y = window.y;
	//depending on  orientation, determine movement axis
	if(window.orientation == 'NORTH') {
		y++;
	}
	if(window.orientation == 'SOUTH') {
		y--;
	}
	if(window.orientation == 'WEST') {
		x--;
	}
	if(window.orientation == 'EAST') {
		x++;
	}
	//check for bounds
	placeFunction(x, y, window.orientation);
}


