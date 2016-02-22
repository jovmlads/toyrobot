// display report
var reportObj = document.getElementById("report-message");
function report(){
	reportObj.innerHTML = ''+window.x+', '+window.y+', '+window.orientation+'';
}