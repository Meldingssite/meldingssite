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
    textboxHTML = "";

    // define default colors
    if (textboxObj.color == "purple")
        var color = "#2d2d85";
    else                    //  hex code
        var color = textboxObj.color;
    mainHTML = document.getElementsByTagName("main")[0];

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


function renderTextInput(textInputObj) {
    mainHTML = document.getElementsByTagName("main")[0];
    var textInputHTML = "";
    
    textInputHTML  += "<fieldset>"
                    + "<legend>"
                    + textInputObj.text
                    + "</legend>";
    
    //section start
    textInputHTML += "<section class=input>";
    
    //Input field
    textInputHTML  += "<input type='text' name='"
                    + textInputObj.name
                    + "' placeholder='"
                    + textInputObj.inhoud
                    + "'>";
    
                    //closing tags
    textInputHTML += "</section> </fieldset>";

    mainHTML.innerHTML += textInputHTML;
}

function renderRadio(radioObj)
{
    var mainHTML = document.getElementsByTagName("main")[0];
    var options = radioObj.options;
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
    radioHTML += "</section></legend></fieldset>"

    mainHTML.innerHTML += radioHTML;
}

function renderForm(form)       // renders a form and its elements  
{
    var content = form.content;
    
    document.getElementsByTagName("main")[0].innerHTML += "<form action='"
        + form.formFunctie
        + "'>";
    for (formElement in content)    //  determine pageElement type
    {
        if (content[formElement].type === "textInput")
            renderTextInput(content[formElement]);
        else if (content[formElement].type === "radioButtons")
            renderRadio(content[formElement]);
        // type is unknown
        else console.log("Unknown type: " + content[formElement].type);
    }
    document.getElementsByTagName("main")[0].innerHTML += "</form>";
}

function renderPage(i) // Renders a page, which is an array of objects
{
    var page = getPage(i);

    clearMainHTML(); // Clear main

    for (pageElement in page)    //  determine pageElement type
    {
        if (page[pageElement].type === "textbox")
            renderTextbox(page[pageElement]);
        else if (page[pageElement].type === "button")
            renderButton(page[pageElement]);
        else if (page[pageElement].type === "form")
            renderForm(page[pageElement]);
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