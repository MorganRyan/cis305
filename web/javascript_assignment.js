function myUpdateFunction(event) {
    console.log("Hello");
}

var formButton1 = $('#button1');
formButton1.on("click", myUpdateFunction);


function hideFunction(event) {
    $("#paragraphToHide").hide(500);
}

var formButton3 = $('#button3');
formButton3.on("click", hideFunction);

function validateFunction(event) {
	var v1 = $('#phoneField').val();
	var reg = /^(\[0-9]{3}-[0-9]{3}-[0-9]{4})/;
	if (reg.test(v1)) {
	    $('#result').text("Ok");
	} else {
	    $('#result').text("Bad");
	}}

var formButton4 = $('#button4');
formButton4.on("click", validateFunction);

// function jsonFunction(event) {
// 	var formObject = {};
// 	formObject.firstName = $('#firstName').val();
// 	formObject.lastName = $('#lastName').val();
// 	formObject.email = $('#email').val();
// 	var jsonString = JSON.stringify(formObject);
// 	$('jsonResult').text(jsonString);
// }
//
// var formButton5 = $('#button5');
// formButton5.on("click", jsonFunction);


