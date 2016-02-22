var firstComma, secondComma;
//validate command
function validateCommand(comm) {	
	//remove all blank spaces, allowing less strict input
	var command = comm.replace(/ /g,'');
	//check if whether it is valid PLACE command
	if(validatePlaceCommand(command)){
		//call PLACE function
		placeFunction(extractPlaceX(command, firstComma, secondComma), extractPlaceY(command, firstComma, secondComma), extractPlaceSide(command, firstComma, secondComma));
	} else {
		//check if PLACE command was entered before
		if(window.canStart){
			switch(comm) {
			    case 'MOVE':
			        move();
			        break;
			    case 'LEFT':
			        left();
			        break;
			    case 'RIGHT':
			        right();
			        break;
			    case 'REPORT':
			        report();
			        break;
			    default:
			        errorCommandInvalid();
			}
		} else {
			errorPlaceCommandFirst();
		}
		
	}
	
}
// validating PLACE command
function validatePlaceCommand(comm) {	
	//check if first word is PLACE
	var isPlaceFirst = (comm.substring(0, 5) == 'PLACE')? true:false;
	//commas positions
	firstComma  = comm.indexOf(",");	
	secondComma = comm.indexOf(",", firstComma+1);	
	//check if first two are numbers
	var isXNumber = (!isNaN(extractPlaceX(comm, firstComma, secondComma)))? true:false;
	var isYNumber = (!isNaN(extractPlaceY(comm, firstComma, secondComma)))? true:false;
	//check if last word is side of the world
	var isFacing = false;
	var len = facingArray.length;
	for (var i = 0; i < len; i++) {
		if(facingArray[i] == extractPlaceSide(comm, firstComma, secondComma)) isFacing = true;
	}
	if(isPlaceFirst && isXNumber && isYNumber && isFacing) {		
		return true;
	}
} 
//extract parameters from PLACE function
function extractPlaceX(comm, firstComma, secondComma){
	var x = comm.substring(5, firstComma);
	return x;
}

function extractPlaceY(comm, firstComma, secondComma){
	var y = comm.substring(firstComma+1, secondComma);
	return y;
}

function extractPlaceSide(comm, firstComma, secondComma){
	var side = comm.substring(secondComma+1, comm.length);
	return side;
}

