function myUpdateFunction1(event) {
    console.log("Hello");
}

    var formButton1 = $('#button1');
    formButton1.on("click", myUpdateFunction1);

function myUpdateFunction(event) {
    var fieldValue1 = $('#field1').val();
    var fieldValue2 = $('#field2').val();
    var fieldValue3 = $('#field3').val();
    var fieldValue3 = parseInt(fieldValue1) + parseInt(fieldValue2);
    console.log(fieldValue3);
}

var formButton2 = $('#button2');
formButton2.on("click", myUpdateFunction);

function hideFunction(event) {
    $("#paragraphToHide").toggle(500);
}

var formButton3 = $('#button3');
formButton3.on("click", hideFunction);


function validateFunction(event) {
	var v1 = $('#phoneField').val();
	var reg = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
	if (reg.test(v1)) {
	    console.log("Ok");
	} else {
	    console.log("Bad");
	}}

var formButton4 = $('#button4');
formButton4.on("click", validateFunction);

function jsonFunction(event) {
	var formObject = {};
	formObject.firstName = $('#firstName').val();
	formObject.lastName = $('#lastName').val();
	formObject.email = $('#email').val();
	var jsonString = JSON.stringify(formObject);
	console.log(jsonString);
}

var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);


