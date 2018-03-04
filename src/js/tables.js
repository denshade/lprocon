
function addEmptyCell(row, cellNumber)
{
    var newCell = row.insertCell(cellNumber);
    var node = document.createTextNode("");
    newCell.className = "hidden";
    newCell.appendChild(node);
    return node;
}

function addRowToTable(tableId)
{
    var tableRef = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    return tableRef.insertRow(tableRef.rows.length);
}



function addInputReadonlyCell(newRow, number, taskid, taskid2, s, changeListener) {
    var input = addInputCell(newRow, number, taskid, taskid2, s, changeListener);
    input.setAttribute("readonly", "readonly");
}

function addInputCell(row, cellNumber, value, id, name, changeListener)
{
    var newCell = row.insertCell(cellNumber);
    newCell.className = name + "class";
    var input = document.createElement("input");
    newCell.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute("name",name);
    input.setAttribute("id", id);
    input.className = "cell";
    input.setAttribute("value", value);
    input.addEventListener("change", changeListener);//addRowIfLastNotEmpty
    return input;
}

/**
 *
 * @param tableId
 * @param array rowInfo of {type:"checkbox/text/", restname:"", value: "", id:""}
 */
function addRowToTableWithDetails(tableId, rowInfo, onClickFunction)
{
    var tableRef = document.getElementById(tableId).getElementsByTagName('tbody')[0];
    // Insert a row in the table at the last row
    var newRow = tableRef.insertRow(tableRef.rows.length);

    for (var rowCounter = 0; rowCounter < rowInfo.length; rowCounter++)
    {
        var currentRowInfo = rowInfo[rowCounter];
        var newCell = newRow.insertCell(rowCounter);
        switch (currentRowInfo.type)
        {
            case "checkbox" :
                var cellElement = document.createElement("input");
                cellElement.setAttribute("type", currentRowInfo.type);
                cellElement.setAttribute("name", currentRowInfo.restname);
                cellElement.setAttribute("id",  currentRowInfo.id);
                break;
            case "text" :  var cellElement = document.createTextNode(currentRowInfo.value); break;
            default: throw "Unknown element " + currentRowInfo.type;
        }
        newCell.appendChild(cellElement);
    }
    newRow.onclick = onClickFunction;
    return newRow;
}

function clearTable(table)
{
    $('#'+table+' tbody > tr').remove();
}

function renderTable(tableId, tableAttributes, classname)
{
    var tableHeaders = "";
    for (var k = 0; k < tableAttributes.length; k++)
    {
        var tableName = tableAttributes[k].name;
        if (tableAttributes[k].class !== undefined) {
            tableHeaders += "<th class='"+tableAttributes[k].class+"'>" + tableName + "</th>";
        } else {
            tableHeaders += "<th>" + tableName + "</th>";
        }
    }
    var table = "<table class=\""+classname+"\" id=\""+tableId+"\">\n" +
        "                    <thead>\n" +
        "                    <tr>\n" +
        tableHeaders +
        "                    </tr>\n" +
        "                    </thead>\n" +
        "                    <tbody></tbody>\n" +
        "                </table>\n";
    document.write(table);
}