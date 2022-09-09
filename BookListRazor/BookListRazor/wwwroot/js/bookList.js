var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $("#DT_load").DataTable({ //.DataTable will populate a DataTable in #DT_load
        "ajax": {
            "url": "/api/book",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            {
                "data": "name", //name of the column
                "width": "20%" //what width it should occupy in %
            },
            {
                "data": "author",
                "width": "20%"
            },
            {
                "data": "isbn", //Make sure to use Cammel case
                "width": "20%" 
            },
            {
                "data": "id",
                "render": function (data) { //data has the id
                    return `
                            <div class="text-center">
                                <a href="/BookList/Edit?id=$({data})" class='btn btn-success text-white' style='cursor:pointer: width:70px;'>
                                    Edit
                                </a>
                                &nbsp;
                                <a class='btn btn-danger text-white' style='cursor:pointer: width:100px;'>
                                    Delete
                                </a>
                            </div>
                            `;//use tild sign to create multi line statements. Tild sign is next to number 1 in the english keyboard
                             //&nbsp is for add an space between the buttons
                },
                "width":"40%"
            }
        ],
        "language": {
            "empyTable": "No data found."//if empty table display
        },
        "width":"70%"
    });
}