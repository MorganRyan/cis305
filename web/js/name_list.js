/**
 * Created by Morgan on 1/31/2017.
 */
function updateTable() {
    var url = "api/name_list_get";

    while($("#datatable")[0].rows[0] != null) {
        ($("#datatable")[0].rows[0].remove());
    }

    $.getJSON(url, null, function(json_result) {
            for (var i = 0; i < json_result.length; i++)
            {
                json_result[i].phone = json_result[i].phone.substring(0,3) + "-" + json_result[i].phone.substring(3,6) + "-" + json_result[i].phone.substring(6,10);
                $("#datatable tbody").append("<tr><td>" + json_result[i].id + "</td><td>" + json_result[i].first + "</td><td>" + json_result[i].last + "</td><td>" + json_result[i].email + "</td><td>" + json_result[i].phone + "</td><td>" + json_result[i].birthday
                    + "</td>" + "<td><button type='button' name='delete' class='deleteButton btn' value='" + json_result[i].id + "'>Delete</button></td>" + "<td><button type='button' name='edit' class='editButton btn' value='" + json_result[i].id + "'>Edit</button></td></tr>");
            }
            console.log("Update Table Done");

            var buttons = $(".deleteButton");
            buttons.on("click", deleteItem);
            $(".deleteButton").on("click", deleteItem);

            var buttons = $(".editButton");
            buttons.on("click", editItem);
            $(".editButton").on("click", editItem);
        }
    );
}

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
    $('#emailDiv').removeClass("has-error");
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
    var firstname = $('#firstName').val();
    var v1 = $('#validateMe').val();
    var reg = /^[A-Za-z]{1,30}$/;
    var valid_form = true;

    if (reg.test(firstname)) {
        $('#result').text("Ok");
        $('#firstNameDiv').addClass("has-success");
        $('#firstNameGlyph').addClass("glyphicon-ok");
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('firstNameStatus').val("(success)");
        console.log(valid_form);
    } else {
        $('#result').text("Bad");
        $('#firstNameDiv').addClass("has-error");
        $('#firstNameGlyph').addClass("glyphicon-remove");
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('firstNameStatus').val("(error)");
        console.log(valid_form);
        valid_form = false;
    }
    var lastname = $('#lastName').val();
    var v1 = $('#validateMe').val();
    var reg = /^[A-Za-z]{1,30}$/;

    if (reg.test(lastname)) {
        $('#result').text("Ok");
        $('#lastNameDiv').addClass("has-success");
        $('#lastNameGlyph').addClass("glyphicon-ok");
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('lastNameStatus').val("(success)");
        console.log(valid_form);
    } else {
        $('#result').text("Bad");
        $('#lastNameDiv').addClass("has-error");
        $('#lastNameGlyph').addClass("glyphicon-remove");
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('lastNameStatus').val("(error)");
        console.log(valid_form);
        valid_form = false;
    }

    var email = $('#email').val();
    var v1 = $('#validateMe').val();
    var reg = /^\S+@\S+\.\S+$/;

    if (reg.test(email)) {
        $('#result').text("Ok");
        $('#emailDiv').addClass("has-success");
        $('#emailGlyph').addClass("glyphicon-ok");
        $('#emailDiv').removeClass("has-error");
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('emailStatus').val("(success)");
        console.log(valid_form);
    } else {
        $('#result').text("Bad");
        $('#emailDiv').addClass("has-error");
        $('#emailGlyph').addClass("glyphicon-remove");
        $('#emailDiv').removeClass("has-success");
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('emailStatus').val("(error)");
        console.log(valid_form);
        valid_form = false;
    }

    var phone = $('#phone').val();
    var v1 = $('#validateMe').val();
    var reg = /^[0-9]{10}$/;

    if (reg.test(phone)) {
        $('#result').text("Ok");
        $('#phoneDiv').addClass("has-success");
        $('#phoneGlyph').addClass("glyphicon-ok");
        $('#phoneDiv').removeClass("has-error");
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('phoneStatus').val("(success)");
        console.log(valid_form);
    } else {
        $('#result').text("Bad");
        $('#phoneDiv').addClass("has-error");
        $('#phoneGlyph').addClass("glyphicon-remove");
        $('#phoneDiv').removeClass("has-success");
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('phoneStatus').val("(error)");
        console.log(valid_form);
        valid_form = false;
    }

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
        console.log(valid_form);
    } else {
        $('#result').text("Bad");
        $('#birthdayDiv').addClass("has-error");
        $('#birthdayGlyph').addClass("glyphicon-remove");
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('birthdayStatus').val("(error)");
        console.log(valid_form);
        valid_form = false;
    }

    if (valid_form) {
        var url = "api/name_list_edit";
        var id = $("#id").val();
        var firstname = $("#firstName").val();
        var lastname = $("#lastName").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var birthday = $("#birthday").val();
        console.log("Error");
        var dataToServer = {id: id, firstName: firstname, lastName: lastname, email: email, phone: phone, birthday: birthday};
        console.log(dataToServer);
        // // var idValue = e.target.value;
        // // //var dataToServer = {id: idValue};
        //
        $.post(url, dataToServer, function (dataFromServer) {
             console.log("Finished calling servlet.");
             console.log(dataToServer);
             updateTable();
        });
    }
}

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", validateFunction);

function deleteItem(e) {
    console.log("Delete Table Called")
    var url = "api/name_list_delete";
    console.log("Problem")
    // console.log(dataToServer);
    var idValue = e.target.value;
    var dataToServer = {id: idValue};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataToServer);
        updateTable();
    });
    console.log("Delete");
    console.debug(e.target.value);
}

function editItem(e) {
    console.log("Edit");
    console.log("Error");
    console.debug(e.target.value);
    var idValue = e.target.value;
    var dataToServer = {id: idValue};
    var url = "api/name_list_edit";

    var firstName = e.target.parentNode.parentNode.querySelectorAll("td")[1].innerHTML;
    var lastName = e.target.parentNode.parentNode.querySelectorAll("td")[2].innerHTML;
    var email = e.target.parentNode.parentNode.querySelectorAll("td")[3].innerHTML;
    var phone = e.target.parentNode.parentNode.querySelectorAll("td")[4].innerHTML;
    var birthday = e.target.parentNode.parentNode.querySelectorAll("td")[5].innerHTML;

    $('#id').val(idValue);
    $('#firstName').val(firstName);
    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");
    $('#lastName').val(lastName);
    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");
    $('#email').val(email);
    $('#emailDiv').removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");
    $('#phone').val(phone);
    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");
    $('#birthday').val(birthday);
    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");

    $('#myModal').modal('show');

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataToServer);
        updateTable();
        $("close").click();
    });

    //updateTable();
}


updateTable();



