function getPages()     // returns all pages
{
    return JSON.parse(xmlhttp.responseText).pages
}

function getPage(i)      // returns single page
{
    return JSON.parse(xmlhttp.responseText).pages[i]
}

function clearMainHTML() {
    document.getElementsByTagName("main")[0].innerHTML = "";
}

function renderTextbox(textboxObj) {
    // define default colors
    if (textboxObj.color == "purple")
        var color = "#2d2d85";
    else                    //  hex code
        var color = textboxObj.color;
    mainHTML = document.getElementsByTagName("main")[0];

    textboxHTML = "";
    // Opening tag
    textboxHTML += "<div class='textbox' "
        + "style='background-color:"
        + color
        + ";'>";

    // Content
    textboxHTML += textboxObj.text;

    // Closing tag
    textboxHTML += "</div>";

    mainHTML.innerHTML += textboxHTML;
}

function renderButton(buttonObj) {
    mainHTML = document.getElementsByTagName("main")[0];
    //buttonObj = {name: "test", image_url: "test"};
    var buttonHTML = "";
    // Opening tag for .btn
    buttonHTML += "<div class='btn'"
        + "onclick='renderPage(1)'>";

    // img tag
    buttonHTML += "<img src='"
        + IMAGE_DIR
        + buttonObj.image_url
        + "'>";

    // button text
    buttonHTML += buttonObj.name;

    // Closing tag for .btn
    buttonHTML += "</div>";

    mainHTML.innerHTML += buttonHTML;
}

function renderRadio(radioObj) {
    mainHTML = document.getElementsByTagName("main")[0];
    var radioHTML = "";
    // Opening tag for radiobutton
    radioHTML += "<fieldset> <legend>"
        + radioObj.Text;
    //section
    radioHTML += "<section class=input>"
    //knop
    for (option in options) {
        radioHTML += "<input type='radio' name='"
            + options[option].name
            + "'value ='"
            + options[option].optie
            + "'>"
            + options[option].text;
    }
    //closing tags
    radioHTML += "</section></fieldset> </legend>"
    mainHTML.innerHTML += radioHTML;
    console.log("rendering radiobutton?");
}

function renderTextInput(textInputObj) {
    mainHTML = document.getElementsByTagName("main")[0];
    var textInputHTML = "";
    textInputHTML += "<fieldset>"
        + "<legend>"
        + textInputObj.text
        + "</legend>";
    //section start
    textInputHTML += "<section class=input>";
    //Input field
    textInputHTML += "<input type='text' name='"
        + textInputObj.name
        + "' placeholder='"
        + textInputObj.inhoud
        + "'>";
    //closing tags

    textInputHTML += "</section> </fieldset>";
    mainHTML.innerHTML += radioHTML;
    console.log("rendering textinput?");
}


function renderPage(i) // Renders a page, which is an array of objects
{
    clearMainHTML(); // Clear main
    var page = getPage(i);
    //console.dir(page);

    for (pageElement in page)    //  determine pageElement type
    {
        if (page[pageElement].type === "textbox")
            renderTextbox(page[pageElement]);
        else if (page[pageElement].type === "button")
            renderButton(page[pageElement]);
        // type is unknown
        else console.log("Unknown type: " + page[pageElement].type);
    }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        renderPage(0);   // render index page
    }
}
xmlhttp.open("GET", SCRIPT_DIR + "pagesExample.json", true);
xmlhttp.send();