/**
 * Created by Morgan on 1/31/2017.
 */
function updateTable() {
    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            for (var i = 0; i < json_result.length; i++) {
                $("#datatable tbody").append("<tr><td>" + json_result[i].id + "</td><td>" + json_result[i].first + "</td><td>" + json_result[i].last + "</td><td>" + json_result[i].email + "</td><td>" + json_result[i].phone + "</td><td>" + json_result[i].birthday + "</td></tr>");
            }
            console.log("Done");
        }
    );
}

updateTable();
