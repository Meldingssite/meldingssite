/*****************************************************************/
/*** All Functions used to render elements to the page go here ***/

/*****************************************************************/
var ID = 0;

function getPages()     // returns all pages
{
    return JSON.parse(xmlhttp.responseText).pages
}

function getPage(i = "Home")      // returns single page
{
    return JSON.parse(xmlhttp.responseText).pages[i];

}

function clearPageHTML() {
    document.getElementById("page").innerHTML = "";
}


function renderTextbox(textboxObj) {
    textboxHTML = "";

    // define default colors
    if (textboxObj.color == "purple")
        var color = "#2d2d85";
    else                    //  hex code
        var color = textboxObj.color;
    pageHTML = document.getElementById("page");

    // Opening tag
    textboxHTML += "<div class='textbox' "
        + "style='background-color:"
        + color
        + ";'>";

    // Content
    textboxHTML += textboxObj.text;

    // Closing tag
    textboxHTML += "</div>";

    pageHTML.innerHTML += textboxHTML;
}

function renderButton(buttonObj) {
    pageHTML = document.getElementById("page");
    var buttonHTML = "";
    // Opening tag for .btn
    buttonHTML += "<div class='btn'"
        + "onclick=renderPage('"
        + buttonObj.name
        + "')>";

    // img tag
    buttonHTML += "<img src='"
        + IMAGE_DIR
        + buttonObj.image_url
        + "'>";

    // button text
    buttonHTML += buttonObj.name;

    // Closing tag for .btn
    buttonHTML += "</div>";

    pageHTML.innerHTML += buttonHTML;
}

function renderFormButton(buttonObj) {
    var pageHTML = document.getElementById("page");
    var options = buttonObj.options;
    var formButtonHTML = "";

    // Opening tag for formButton
    formButtonHTML += "<fieldset> <legend>"
        + buttonObj.text;
    //section
    formButtonHTML += "<section class=input>"
    //knop
    for (option in options) {
        formButtonHTML += "<button name='"
            + options[option].name
            + "' value ='"
            + options[option].optie
            + "' onclick='"
            + options[option].function
            + "'>"
            + options[option].text
            + "</button>";
    }
    //closing tags
    formButtonHTML += "</section></legend></fieldset>"

    pageHTML.innerHTML += formButtonHTML;
}

function renderTextInput(textInputObj) {
    var pageHTML = document.getElementById("page");
    var options = textInputObj.options;
    var textInputHTML = "";

    // Opening tag for radiobutton
    textInputHTML += "<fieldset> <legend>"
        + textInputObj.text;
    //section
    textInputHTML += "<section class=input>"
    //Inputs
    for (option in options) {
        textInputHTML += "<input type='"
            + options[option].inputType
            + "' name='"
            + options[option].name
            + "' placeholder='"
            + options[option].inhoud
            + "'>";
    }
    //closing tags
    textInputHTML += "</section></legend></fieldset>"

    pageHTML.innerHTML += textInputHTML;
}


function renderRadio(radioObj) {
    var pageHTML = document.getElementById("page");
    var options = radioObj.options;
    var radioHTML = "";

    // Opening tag for radiobutton
    radioHTML += "<fieldset> <legend>"
        + radioObj.text;
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

    pageHTML.innerHTML += radioHTML;
}

function renderDropDown(dropObj) {
    var mainHTML = document.getElementsByTagName("main")[0];
    var options = dropObj.options;
    var dropHTML = "";

    // Opening tag for radiobutton
    dropHTML += "<fieldset><legend>"
        + dropObj.text;
    //section
    dropHTML += "<section class=input><select name='"
        + dropObj.name
        + "'>";
    //knop
    for (option in options) {
        dropHTML += "<option  name='"
            + options[option].name
            + "'value ='"
            + options[option].optie
            + "'>"
            + options[option].text
            + "</option>";
    }
    //closing tags
    dropHTML += "</section></legend></fieldset>"
    mainHTML.innerHTML += dropHTML;
}

function renderForm(form, page)       // renders a form and its elements
{
    var content = form.content;
    document.getElementById("page").innerHTML += "<form action='"
        + form.formFunctie
        + "'>";
    for (formElement in content)    //  determine pageElement type
    {
        if (content[formElement].type === "textInput")
            renderTextInput(content[formElement]);
        else if (content[formElement].type === "radioButtons")
            renderRadio(content[formElement]);
        else if (content[formElement].type === "textMultipleInputs")
            renderMultipleTextInput(content[formElement]);
        else if (content[formElement].type === "formButton")
            renderFormButton(content[formElement]);
        else if (content[formElement].type === "dropDown")
            renderDropDown(content[formElement]);
        // type is unknown
        else console.log("Unknown type: " + content[formElement].type);
    }
    document.getElementById("page").innerHTML += "</form>";
    renderSubmit(page);

}

function renderSubmit(naam) {
    document.getElementById("page").innerHTML += "<div class='btn'"
        + "onclick=nextPage('"
        + naam
        + "')>"
        + "Volgende pagina"
        + "</div>";
}


function nextPage(i) {
    ID++;
    renderPage(i);
}

function renderPage(i) // Renders a page, which is an array of objects
{
    var page = getPage(i);
    var content = page[ID].content;

    clearPageHTML(); // Clear main

    for (pageElement in content)    //  determine pageElement type
    {
        if (content[pageElement].type === "textbox")
            renderTextbox(content[pageElement]);
        else if (content[pageElement].type === "button")
            renderButton(content[pageElement]);
        else if (content[pageElement].type === "form")
            renderForm(content[pageElement], i);
        // type is unknown
        else console.log("Unknown type: " + page[pageElement].type);
    }
}