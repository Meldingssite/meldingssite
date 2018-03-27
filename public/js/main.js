

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (
        this.readyState == 4        && 
        this.status == 200          &&
        document.getElementById("page")     // Element with ID page exists
    )
        renderPage(0);   // render index page
    
}
xmlhttp.open("GET", SCRIPT_DIR + "pagesExample.json", true);
xmlhttp.send();

// testing shit

function getJSONUrl(json)
{
    targetHTML = document.getElementById("saveJSON");
    targetHTML.href = URL + "admin/savePage/" + json;
}

var json = new JSONExport;

var mainPage = new Page;
var snelleJellePage = new Page;

var welcomeTextbox = new Textbox("Welcome", "purple");

mainPage.content.push(welcomeTextbox);

json.pages.push(mainPage);
json.pages.push(snelleJellePage);

getJSONUrl(JSON.stringify(json));