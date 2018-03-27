var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        renderPage(0);   // render index page
    }
}
xmlhttp.open("GET", SCRIPT_DIR + "pagesExample.json", true);
xmlhttp.send();

// testing shit

var json = new JSONExport;

var mainPage = new Page;
var snelleJellePage = new Page;

var welcomeTextbox = new Textbox("Welcome", "purple");

mainPage.content.push(welcomeTextbox);

json.pages.push(mainPage);
json.pages.push(snelleJellePage);

