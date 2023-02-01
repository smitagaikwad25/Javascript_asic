import { OfficeMockObject,Office } from "office-addin-mock";


function writeHtmlData() {
    console.log('writeHtmlData');
    var headers = [["Cities"]];
    var rows = [['<b>Hello there</b>'], ['Roma'], ['Tokyo'], ['Seattle']];
    var html = '<table>';
    html += '<thead>';
    for (var i = 0; i < headers.length; i++) {
        html += '<tr>';
        var cells = headers[i];
        for (var j = 0; j < cells.length; j++) {
            html += '<th>' + cells[j] + '</th>';
        }
        html += '</tr>';
    }
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    for (var i = 0; i < rows.length; i++) {
        html += '<tr>';
        var cells = rows[i];
        for (var j = 0; j < cells.length; j++) {
            html += '<td>' + cells[j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';

    Office.context.document.setSelectedDataAsync(html, { coercionType: Office.CoercionType.Html }, function (asyncResult) {
        if (asyncResult.status == "failed") {
            console.debug("Action failed with error: " + asyncResult.error.message);
        }
    });
}


writeHtmlData()