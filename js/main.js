(function() {
   window.x; //x position, global dynamic var
   window.y; //y position, global dynamic var
   window.orientation; //facing side of the world, global dynamic var
   window.canStart = false; //has valid PLACE X,Y,F command been entered first, global dynamic var
   window.colNum = 5; //number of columns, global dynamic var
   window.rowNum = 5; //number of rows, global dynamic var
   
   //bind click event to submit button
   var inputSubmitButton = document.getElementById('buttonSubmit');
   inputSubmitButton.addEventListener("click", inputCommand);

   //received input function
   function inputCommand() {
      //clear messages
      var errorObj = document.getElementById("error-message");
      var reportObj = document.getElementById("report-message");
      errorObj.innerHTML = '';
      reportObj.innerHTML = '';
      
   	var command = document.getElementById('commandInput').value;
   	//check if command is valid
   	validateCommand(command);
   }

})();

