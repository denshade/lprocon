
function addEmptyTaskCon(table)
{
    var tableRef = document.getElementById(table).getElementsByTagName('tbody')[0];
    // Insert a row in the table at the last row
    var newRow = tableRef.insertRow(tableRef.rows.length);
    // Insert a cell in the row at index 0
    var i = 0;
    var weights = [];
    for (var k = 0; k  < 11; k++)
    {
        var obj = {};
        obj.description = k;
        obj.id = k;
        weights[k] = obj;
    }
    addInputCell(newRow, i++, "", "", "con", addRowIfLastNotEmptyCon);
    addOptionCell(newRow, i++, "", "", "conweight", weights, addRowIfLastNotEmptyCon);
}

function addEmptyTaskPro(table)
{
    var tableRef = document.getElementById(table).getElementsByTagName('tbody')[0];
    // Insert a row in the table at the last row
    var newRow = tableRef.insertRow(tableRef.rows.length);
    // Insert a cell in the row at index 0
    var i = 0;
    var weights = [];
    for (var k = 0; k  < 11; k++)
    {
        var obj = {};
        obj.description = k;
        obj.id = k;
        weights[k] = obj;
    }
    addInputCell(newRow, i++, "", "", "pro", addRowIfLastNotEmptyPro);
    addOptionCell(newRow, i++, "", "", "proweight", weights, addRowIfLastNotEmptyPro);
}


function addRowIfLastNotEmptyCon()
{
    var table = document.getElementById("gridcon");
    var row = table.rows[table.rows.length - 1];
    var hasValue = false;
    for (var j = 0, col; col = row.cells[j]; j++) {
        if (col.childNodes.length === 1 && col.childNodes.item(0).tagName === "INPUT")
        {
            if (col.childNodes.item(0).value !== null && col.childNodes.item(0).value !== "")
            {
                hasValue= true;
                break;
            }
        }
    }

    if (hasValue) {
        addEmptyTaskCon("gridcon");
    }
}

function addRowIfLastNotEmptyPro()
{
    var table = document.getElementById("gridpro");
    var row = table.rows[table.rows.length - 1];
    var hasValue = false;
    for (var j = 0, col; col = row.cells[j]; j++) {
        if (col.childNodes.length === 1 && col.childNodes.item(0).tagName === "INPUT")
        {
            if (col.childNodes.item(0).value !== null && col.childNodes.item(0).value !== "")
            {
                hasValue= true;
                break;
            }
        }
    }

    if (hasValue) {
        addEmptyTaskCon("gridpro");
    }
}

//addRowIfLastNotEmpty
function addOptionCell(row, cellNumber, value, id, name, options, addRowFunction)
{
    var newCell = row.insertCell(cellNumber);
    newCell.className = name+"class";
    var select = document.createElement("select");
    newCell.appendChild(select);
    select.setAttribute("type", "select");
    select.setAttribute("name",name);
    select.setAttribute("id", id);
    select.setAttribute("value", value === null?"":value.description);
    select.className = "cell";
    select.addEventListener("change", addRowFunction);
    for (var i = 0; i < options.length; i++)
    {
        var opt = document.createElement('option');
        var option = options[i];
        opt.value = option.id;
        opt.innerHTML = option.description;
        if (value !== null && option.description === value.description){
            opt.setAttribute("selected", "selected");
        }
        select.appendChild(opt);
    }
    return select;
}

function add()
{
    var k = '<div class="card-body"><div class="card-text"> <h3>Pro/Con</h3>    <div class="card">Option: <input type="text"/> <br/>'+
    +'<div class="row">'
    +'<div class="col">'
    +'<script>'
    +'renderTable("gridpro",'
    +'    [{"name": "pro"}, {"name": "proweight"}], "nospantable");'
    +'</script>'
    +'</div>'
+'<div class="col">'
+'<script>'
        +'renderTable("gridcon",'
        +'[{"name": "con"}, {"name": "conweight"}'
        +'], "nospantable");</script> </div></div><br/></div></div></div>';

}