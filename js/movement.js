//PLACE function check
function placeFunction(x, y, side) {
	//if positions are within the range (0,xMax/yMax)
	console.log(x,y);
	if(checkBounds(x, y)){
		//update global params
		window.x = Number(x);
		window.y = Number(y);
		window.orientation = side;
		//has PLACE command been entered before
		if(!window.canStart) window.canStart = true;
	} else {
		errorPlaceOutOfBounds();
	}
}

function checkBounds(x, y) {
	if(window.colNum-1 >= Number(x) && Number(x) >= 0 && window.rowNum-1 >= Number(y) && Number(y) >= 0) return true;
}