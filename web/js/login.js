function invalidateSessionButton() {

    var url = "api/invalidate_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        console.log("logged out");
        $('#invalidate').hide();
        getSessionJava();
    });
}

function getSessionJava() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $('#getSessionResult').html(dataFromServer);
        if (dataFromServer === null) {
            out.print("You are not logged in");
            $('#invalidate').show();
        }
        else {
            out.print(loginId);
            $('#invalidate').hide();
        }
    });
}

function setSessionJava() {

    var url = "api/login_servlet";

    var loginId = $("#loginId").val();

    var dataToServer =  {loginId: loginId};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $("#loginId").val("");
        $("#invalidate").show();
        getSessionJava();
    });
}
button = $("#getSessionJava");
button.on("click", getSessionJava);

button = $("#setSessionJava");
button.on("click", setSessionJava);

button = $("#invalidateSession");
button.on("click", invalidateSessionButton);

$('#invalidate').hide();
getSessionJava();