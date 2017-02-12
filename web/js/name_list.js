/**
 * Created by Morgan on 1/31/2017.
 */
function updateTable() {
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            for (var i = 0; i < json_result.length; i++)
            {
                json_result[i].phone = json_result[i].phone.substring(0,3) + "-" + json_result[i].phone.substring(3,6) + "-" + json_result[i].phone.substring(6,10)
                $("#datatable tbody").append("<tr><td>" + json_result[i].id + "</td><td>" + json_result[i].first + "</td><td>" + json_result[i].last + "</td><td>" + json_result[i].email + "</td><td>" + json_result[i].phone + "</td><td>" + json_result[i].birthday + "</td></tr>");
            }
            console.log("Done");
        }
    );
}

updateTable();

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function showDialogAdd() {

    console.log("Opening add item dialog");

    $('#id').val("");
    $('#firstName').val("");
    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");
    $('#lastName').val("");
    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");
    $('#email').val("");
    $('#emaildiv').removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");
    $('#phone').val("");
    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");
    $('#birthday').val("");
    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    $('#myModal').modal('show');

}

function validateFunction() {
    console.log("Submitted");
    var firstname = $('#firstName').val();
    var v1 = $('#validateMe').val();
    var reg = /^[A-Za-z]{1,30}$/;

    if (reg.test(firstname)) {
        $('#result').text("Ok");
        $('#firstNameDiv').addClass("has-success");
        $('#firstNameGlyph').addClass("glyphicon-ok");
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('firstNameStatus').val("(success)");
    } else {
        $('#result').text("Bad");
        $('#firstNameDiv').addClass("has-error");
        $('#firstNameGlyph').addClass("glyphicon-remove");
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('firstNameStatus').val("(error)");
    }}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", validateFunction);

function validateFunction1() {
    console.log("Submitted");
    var lastname = $('#lastname').val();
    var v1 = $('#validateMe').val();
    var reg = /^[A-Za-z]{1,30}$/;

    if (reg.test(lastname)) {
        $('#result').text("Ok");
        $('#lastNameDiv').addClass("has-success");
        $('#lastNameGlyph').addClass("glyphicon-ok");
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('lastNameStatus').val("(success)");
    } else {
        $('#result').text("Bad");
        $('#lastNameDiv').addClass("has-error");
        $('#lastNameGlyph').addClass("glyphicon-remove");
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('lastNameStatus').val("(error)");
    }}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", validateFunction1);

function validateFunction2() {
    console.log("Submitted");
    var email = $('#email').val();
    var v1 = $('#validateMe').val();
    var reg = /\S+@\S+\.\S+/;

    if (reg.test(email)) {
        $('#result').text("Ok");
        $('#emailDiv').addClass("has-success");
        $('#emailGlyph').addClass("glyphicon-ok");
        $('#emailDiv').removeClass("has-error");
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('emailStatus').val("(success)");
    } else {
        $('#result').text("Bad");
        $('#emailDiv').addClass("has-error");
        $('#emailGlyph').addClass("glyphicon-remove");
        $('#emailDiv').removeClass("has-success");
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('emailStatus').val("(error)");
    }}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", validateFunction2);

function validateFunction3() {
    console.log("Submitted");
    var phone = $('#phone').val();
    var v1 = $('#validateMe').val();
    var reg = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;

    if (reg.test(phone)) {
        $('#result').text("Ok");
        $('#phoneDiv').addClass("has-success");
        $('#phoneGlyph').addClass("glyphicon-ok");
        $('#phoneDiv').removeClass("has-error");
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('phoneStatus').val("(success)");
    } else {
        $('#result').text("Bad");
        $('#phoneDiv').addClass("has-error");
        $('#phoneGlyph').addClass("glyphicon-remove");
        $('#phoneDiv').removeClass("has-success");
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('phoneStatus').val("(error)");
    }}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", validateFunction3);

function validateFunction4() {
    console.log("Submitted");
    var birthday = $('#birthday').val();
    var v1 = $('#validateMe').val();
    var reg = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/;

    if (reg.test(birthday)) {
        $('#result').text("Ok");
        $('#birthdayDiv').addClass("has-success");
        $('#birthdayGlyph').addClass("glyphicon-ok");
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('birthdayStatus').val("(success)");
    } else {
        $('#result').text("Bad");
        $('#birthdayDiv').addClass("has-error");
        $('#birthdayGlyph').addClass("glyphicon-remove");
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('birthdayStatus').val("(error)");
    }}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", validateFunction4);

function close(id) {
    $('#'+id).each(function(){
        this.reset();
    });
}
