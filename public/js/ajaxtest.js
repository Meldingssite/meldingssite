
console.log(SCRIPT_DIR);

function createButtonHTML() // Generate HTML for a button and returns HTML
{
var buttonHTML = "";

return buttonHTML;
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        // Make object based on the json file opened with .open()
        var myObj = JSON.parse(this.responseText);
        //console.dir(myObj);

        document.getElementsByTagName("main")[0].innerHTML = "";
        
        for (const button in myObj.buttons)
        {
            console.dir(myObj.buttons[button]);
        }
    }
}
xmlhttp.open("GET", SCRIPT_DIR + "test.json", true);
xmlhttp.send();