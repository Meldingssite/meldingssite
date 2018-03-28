

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (
        this.readyState == 4        && 
        this.status == 200          &&
        document.getElementById("page")     // Element with ID page exists
    )
        renderPage(0);   // render index page
    
}
xmlhttp.open("GET", SCRIPT_DIR + "pages.json", true);
xmlhttp.send();

// testing shit

function getJSONUrl(json)
{
    targetHTML = document.getElementById("saveJSON");
    targetHTML.href = URL + "admin/savePage/" + json;
}

function sendJSON(str_json)
{
    request = new XMLHttpRequest();
    request.open("POST", URL + "model/AdminModel.php", true)
    request.setRequestHeader("Content-type", "application/json");
    request.send(str_json);
    console.dir(request);
    
    window.location.replace(window.location.href + "/savePage");
}

var json = new JSONExport;

var mainPage = new Page;
var snelleJellePage = new Page;


mainPage.content.push(new Textbox("Wat wilt u melden?", "purple"));
mainPage.content.push(new Button("Ongeval"      ,"category-FirstAid.png" ));
mainPage.content.push(new Button("Vechtpartij"  ,"category-fight.png" ));
mainPage.content.push(new Button("Wapens"       ,"category-weapons.png" ));
mainPage.content.push(new Button("Drugs"        ,"category-drugs.png" ));
mainPage.content.push(new Button("Diefstal"     ,"category-theft.png" ));
mainPage.content.push(new Button("Pesten"       ,"category-bullying.png" ));
mainPage.content.push(new Button("Overlast"     ,"category-nuisance.png" ));
mainPage.content.push(new Button("Overige"      ,"category-other.png" ));




json.pages.push(mainPage);
json.pages.push(snelleJellePage);
