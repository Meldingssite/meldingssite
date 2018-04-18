/*****************************************************************/
/*** All Functions used to render elements to the page go here ***/

/*****************************************************************/
var ID = 0;     //ID for remembering which question you're at
var locatieSubmit = false; //Houd bij of de locatie al is ingevoerd.

function getPages() {
    return JSON.parse(xmlhttp.responseText).pages
}     // returns all pages

function getPage(i) {
    return JSON.parse(xmlhttp.responseText).pages[i];

}     // returns single page

function clearPageHTML() {
    document.getElementById("page").innerHTML = "";
} // clears HTML

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
} // renders TextBox element

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
}   // Render Button Element

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
}   //  Render a button in a form

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
}   //  Render a field for inputting text

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
}   // Renders radio buttons

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
}   // Renders dropdown buttons

function renderForm(form) {
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
}      // renders a form and its elements

function renderLocatieForm(alertType, school = null) {
    clearPageHTML(); // Clear main
    var page = getPage("Locaties");
    var content = page[ID].content;
    if (school === null) {
        renderLocatieScholen(alertType, content);

    }
    else {
        renderLocatieList(alertType, content, school);
    }
} //renders form for locaties

function renderLocatieScholen(alertType, content) {
    var buttonHTML = "";
    var pageHTML = document.getElementById("page");
    var schoolNaam = "";
    for (var i = 0; i < Object.keys(content).length; i++) {
        // Opening tag for .btn
        var schoolNaam = Object.keys(content)[i];
        var schoolSplit = toggleSpace(schoolNaam);
        buttonHTML += "<div class='btn'"
            + "onclick=renderLocatieForm('"
            + alertType
            + "','"
            + schoolSplit
            + "')"
            + '>';
        // button text
        buttonHTML += Object.keys(content)[i];

        // Closing tag for .btn
        buttonHTML += "</div>";
    }
    pageHTML.innerHTML += buttonHTML;

} //renders first list with schools

function renderLocatieList(alertType, content, school) {

    var Items = content[toggleSpace(school)];
    var buttonHTML = "";
    var pageHTML = document.getElementById("page");
    buttonHTML += "<section class=input>";
    for (var i = 0; i < Items.length; i++) {
        // Opening tag for .btn
        var Naam = Items[i];
        var Split = toggleSpace(Naam);
        buttonHTML += "<div class='btn'"
            + "onclick=locatieSend('"
            + alertType
            + "','"
            + school
            + "','"
            + Split
            + "')"
            + '>';
        // button text
        buttonHTML += Items[i];

        // Closing tag for .btn
        buttonHTML += "</div>";
    }
    buttonHTML += "<input class='btn'"
        + " id='locatieName'"
        + " placeholder='lokaal'"
        + ">";
    buttonHTML += '<button  id="lokaalButton" onclick="getLocatiecontent('
        + "'"
        + alertType
        + "','"
        + school
        + "'"
        + ')"> Submit </button></section>';
    //closing tags
    pageHTML.innerHTML += buttonHTML;
}   //renders the buttons for places in the school

function renderSubmit(naam) {
    document.getElementById("page").innerHTML += "<div class='btn'"
        + "onclick=nextPage('"
        + naam
        + "')>"
        + "Volgende pagina"
        + "</div>";
}   //Renders submit button for going to next page

function nextPage(i) {
    ID++;
    renderPage(i);
}   //Goes to next page

function renderPage(i = "Home") {
    clearPageHTML(); // Clear main
    var page = getPage(i);
    if (page) {
        if (locatieSubmit == true || i == "Home") {
            var content = page[ID].content;
            for (pageElement in content) {
                if (content[pageElement].type === "textbox")
                    renderTextbox(content[pageElement]);
                else if (content[pageElement].type === "button")
                    renderButton(content[pageElement]);
                else if (content[pageElement].type === "form")
                    renderForm(content[pageElement]);
                // type is unknown
                else console.log("Unknown type: " + page[pageElement].type);
            }   //  determine pageElement type
            if (i !== "Home") {
                renderSubmit(i);
            }
        }
        else {
            renderLocatieForm(i);
        }

    }
    else {
        console.log('page does not exist yet!');
    }

} // Renders a page, which is an array of objects

function locatieSend(alertType, school, locatie = null,) {
    locatieSubmit = true;
    if (locatie == null) {
        locatie = document.getElementById('locatieName').value
    }

    school = toggleSpace(school);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Home/sendData", true);
    var Data = new FormData();
    Data.append("School", school);
    Data.append("type", alertType);
    Data.append("locatie", locatie);
    xhttp.send(Data);
    renderPage(alertType);
} // sends locatie and renders next page

function toggleSpace(item) {
    var returnItem = "";
    if (item.indexOf(' ') > -1) {
        returnItem = item.replace(new RegExp(" ", "g"), '_');
    }
    else if (item.indexOf('_') > -1) {
        returnItem = item.replace(new RegExp("_", "g"), ' ');
    }
    else {
        console.log("something appears to have gone wrong with" + item + " !");
    }
    return returnItem;
}   // Switches between _ and spaces
