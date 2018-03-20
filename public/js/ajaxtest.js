

function clearMainHTML()
{
    document.getElementsByTagName("main")[0].innerHTML = "";
}


function renderTextbox(textboxObj)
{
    // define default colors
    if(textboxObj.color == "purple")
        var color = "#2d2d85";
    else                    //  hex code
        var color = textboxObj.color;
    mainHTML = document.getElementsByTagName("main")[0];

    textboxHTML = "";
    // Opening tag
    textboxHTML +=  "<div class='textbox' "
                +   "style='background-color:" 
                +   color
                +   ";'>";

    // Content
    textboxHTML += textboxObj.text;
    
    // Closing tag
    textboxHTML += "</div>";

    mainHTML.innerHTML += textboxHTML;
}

function renderButton(buttonObj)
{
    mainHTML = document.getElementsByTagName("main")[0];
    //buttonObj = {name: "test", image_url: "test"};
    var buttonHTML = "";
    // Opening tag for .btn
    buttonHTML += "<div class='btn'>";
    
    // img tag
    buttonHTML  += "<img src='"
                + IMAGE_DIR
                + buttonObj.image_url
                + "'>";

    // button text
    buttonHTML += buttonObj.name;

    // Closing tag for .btn
    buttonHTML += "</div>";

    mainHTML.innerHTML += buttonHTML;
    console.log("rendering button?");
}

function renderPage(page) // Renders a page, which is an array of objects
{
    clearMainHTML(); // Clear main
    console.dir(page);

    for(pageElement in page)    //  determine pageElement type
    {
        if(page[pageElement].type === "textbox")
            renderTextbox(page[pageElement]);
        else if(page[pageElement].type === "button")
            renderButton(page[pageElement]);
        // type is unknown
        else console.log("Unknown type: " + page[pageElement].type);
    }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        var mainHTML = document.getElementsByTagName("main")[0];
        var pageIndex = 0;
        // Make object based on the json file opened with .open()
        var pages = JSON.parse(this.responseText).pages;
        //console.dir(pages);
        
        renderPage(pages[pageIndex]);   // render current page
    }
}
xmlhttp.open("GET", SCRIPT_DIR + "pagesExample.json", true);
xmlhttp.send();