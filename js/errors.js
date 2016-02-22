var errorObj = document.getElementById("error-message");

function errorCommandInvalid() {
	errorObj.innerHTML = 'Invalid command.';
}

function errorPlaceOutOfBounds(){
	errorObj.innerHTML = 'Cannot place the robot out of bounds.';
}

function errorPlaceCommandFirst(){
	errorObj.innerHTML = 'Valid PLACE command needs to be entered first.';
}
