/*****************************************************************/
/*** All Functions used to render elements to the page go here ***/

/*****************************************************************/
var ID = 0;     //ID for remembering which question you're at
var locatieSubmit = false; //Houd bij of de locatie al is ingevoerd.
var FormList = [];
var sendArray = [];

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
    return buttonObj.name;
}   //  Render a button in a form

function renderTextInput(textInputObj) {
    var pageHTML = document.getElementById("page");
    var options = textInputObj.options;
    var textInputHTML = "";
    var names = [];

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
        names.push(options[option].name);
    }
    //closing tags
    textInputHTML += "</section></legend></fieldset>";

    pageHTML.innerHTML += textInputHTML;
    return names;
}   //  Render a field for inputting text

function renderRadio(radioObj) {
    var pageHTML = document.getElementById("page");
    var options = radioObj.options;
    var radioHTML = "";

    // Opening tag for radiobutton
    radioHTML += "<fieldset> <legend>"
        + radioObj.text;
    //section
    radioHTML += "<section class=input>";
    //knop
    for (option in options) {
        radioHTML += "<input type='radio' name='"
            + radioObj.name
            + "'value ='"
            + options[option].optie
            + "'>"
            + options[option].text;
    }
    //closing tags
    radioHTML += "</section></legend></fieldset>";

    pageHTML.innerHTML += radioHTML;
    return radioObj.name;
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
    dropHTML += "</section></legend></fieldset>";
    mainHTML.innerHTML += dropHTML;
    return dropObj.name;
}   // Renders dropdown buttons


function renderForm(form) {
    var content = form.content;
    document.getElementById("page").innerHTML += "<form action='"
        + form.formAction
        + "'>";
    for (formElement in content)    //  determine pageElement type
    {
        if (content[formElement].type === "textInput") {
            var textInputList = renderTextInput(content[formElement]);
            for (var x = 0; x < textInputList.length; x++) {
                FormList.push(textInputList[x]);
            }
        }
        else if (content[formElement].type === "radioButtons")
            FormList.push(renderRadio(content[formElement]));
        else if (content[formElement].type === "textMultipleInputs")
            FormList.push(renderMultipleTextInput(content[formElement]));
        else if (content[formElement].type === "formButton")
            FormList.push(renderFormButton(content[formElement]));
        else if (content[formElement].type === "dropDown")
            FormList.push(renderDropDown(content[formElement]));
        // type is unknown
        else console.log("Unknown type: " + content[formElement].type);
    }
    document.getElementById("page").innerHTML += "</form>";
    return FormList;
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

function renderSubmit(naam, school) {
    console.dir(naam);

    document.getElementById("page").innerHTML += "<div class='btn'"
        + "onclick=submitContents('"
        + naam
        + "'"
        + ',"'
        + toggleSpace(school)
        + '")>'
        + "Submit"
        + "</div>";
}   //Renders submit button for going to next page

function nextPage(i) {
    ID++;
    renderPage(i);
}   //Goes to next page

function renderPage(i = "Home", school = null) {
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
                    renderSubmit(renderForm(content[pageElement]), school);
                // type is unknown
                else console.log("Unknown type: " + page[pageElement].type);
            }   //  determine pageElement type
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
    renderPage(alertType, school);
} // sends locatie and renders next page

function dataSend(sendArray, school) {
    locatieSubmit = true;
    var Data = new FormData();
    Data.append("School", school);


    school = toggleSpace(school);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Home/sendData", true);




    for (var x = 0; x < sendArray[0].length; x++) {
        Data.append(sendArray[0][x], sendArray[1][x]);
    }
    console.dir(Data);
    // xhttp.send(Data);

}

function submitContents(naam, school) {
    naam = naam.split(",");
    sendArray = [];
    var dataArray = [];
    var nameArray = [];
    for (var x = 0; x < naam.length; x++) {
        console.log(naam[x] + " " + document.getElementsByName(naam[x]).length);
        if (document.getElementsByName(naam[x]).length > 1) {
            for (var y = 1; document.getElementsByName(naam[x]).length > y; y++) {
                if (document.getElementsByName(naam[x])[y].checked) {
                    dataArray[x] = document.getElementsByName(naam[x])[y].value;
                    nameArray[x] = naam[x];
                }
            }
        }
        else {
            dataArray[x] = document.getElementsByName(naam[x])[0].value;
            nameArray[x] = naam[x];
        }

    }
    sendArray = [nameArray, dataArray];
    console.dir(sendArray);
    dataSend(sendArray, school);
}

function toggleSpace(item) {
    var returnItem = "";
    if (item.indexOf(' ') > -1) {
        returnItem = item.replace(new RegExp(" ", "g"), '_');
    }
    else if (item.indexOf('_') > -1) {
        returnItem = item.replace(new RegExp("_", "g"), ' ');
    }
    else if(item.indexOf(' ') < 1 && item.indexOf('_') < 1){

    }
    else {
        console.log("something appears to have gone wrong with" + item + " !");
    }
    return returnItem;
}   // Switches between _ and spaces
