/*****************************************************************/
/*** All Functions used to render elements to the page go here ***/
/*****************************************************************/
var ID = 0;     //ID for remembering which question you're at
var locatieSubmit = false; //Houd bij of de locatie al is ingevoerd.
var FormList = [];         //list op Inputs rendered on page for retrieving data
var sendArray = [];        //Array send to DB

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
    var textboxHTML = "";

    // define default colors
    if (textboxObj.color == "purple")
        var color = "#850084";
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

function renderLabel(text) {
    var labelHTML = "";

    // Opening tag
    labelHTML += "<div class='label'>";

    // Content
    labelHTML += text;

    // Closing tag
    labelHTML += "</div>"

    pageHTML.innerHTML += labelHTML;
} //Renders a label for the location list

function renderButton(buttonObj) {
    var pageHTML = document.getElementById("page");
    var buttonHTML = "";
    // Opening tag for .btn
    buttonHTML += "<div class='btn'"
        + "onclick=renderPage('"
        + buttonObj.name
        + "')>";

    // img tag
    buttonHTML += "<img src='"
        + IMAGE_DIR
        + "/Categories/category-"
        + buttonObj.name
        + ".png"
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
        + buttonObj.text
        + "</legend>";
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
    formButtonHTML += "</section></fieldset>";

    pageHTML.innerHTML += formButtonHTML;
    return buttonObj.name;
}   //  Render a button in a form

function renderTextInput(textInputObj) {
    var pageHTML = document.getElementById("page");
    var options = textInputObj.options;
    var textInputHTML = "";
    var names = [];
    var height = 0;

    // Opening tag for radiobutton
    if (textInputObj.toggle === 'true') {
        textInputHTML += "<fieldset class='extraInfo' id='extraInfo" + textInputObj.name + "'><legend>"
            + textInputObj.text + "</legend>";
        height += 60;
    }
    else if (textInputObj.name) {
        textInputHTML += "<fieldset id='" + textInputObj.name + "'><legend>"
            + textInputObj.text + "</legend>";
    }
    else if (options.length = 1) {
        textInputHTML += "<fieldset id='" + options[0].name + "'><legend>"
            + textInputObj.text + "</legend>";
    }
    //section
    textInputHTML += "<section class=input>";
    //Inputs
    for (option in options) {
        if (textInputObj.toggle === 'true') {
            height += 40;
        }
        textInputHTML += "<input";
        if (options[option].required) {
            textInputHTML += "required"
        }
        textInputHTML += " type='"
            + options[option].inputType
            + "' name='"
            + options[option].name
            + "' placeholder='"
            + options[option].inhoud
            + "'>";
        names.push(options[option].name);
    }
    textInputHTML +=
        '<div hidden=true id="height' + textInputObj.name + '">' + height + "</div>" +
        "</div>";
    //closing tags
    textInputHTML += "</section></fieldset>";

    pageHTML.innerHTML += textInputHTML;
    console.dir(names);
    // if (textInputObj.name === 'toggle') {
    //     names.push("persoon");
    // }
    return names;
}   //  Render a field for inputting text

function renderRadio(radioObj) {
    var pageHTML = document.getElementById("page");
    var options = radioObj.options;
    var radioHTML = "";
    // Opening tag for radiobutton
    radioHTML += "<fieldset><legend>"
        + radioObj.text
        + "</legend>";
    //section
    radioHTML += "<section class=inputGroup>";
    //knop
    for (option in options) {
        radioHTML += "<input placeholder='" + radioObj.text + "' type='radio' name='"
            + radioObj.name
            + "'value ='"
            + options[option].optie + "'id ='" +
            options[option].optie + radioObj.name
            + "'>"
            + "  <label for='" +
            options[option].optie
            + "'>"
            + options[option].text
            + "</label>";
    }
    //closing tags
    radioHTML += "</section></fieldset>";
    pageHTML.innerHTML += radioHTML;
    if (radioObj.toggle == 'true') {
        for (option in options) {
            // console.log(element);
            document.getElementById(options[option].optie + radioObj.name).setAttribute("onClick", "extraInfo('" + radioObj.target + "','" + options[option].optie + "')");
        }
    }
    return radioObj.name;
}   // Renders radio buttons

function renderDropDown(dropObj) {
    var mainHTML = document.getElementsByTagName("main")[0];
    var options = dropObj.options;
    var dropHTML = "";

    // Opening tag for radiobutton
    dropHTML += "<fieldset><legend>"
        + dropObj.text
        + "</legend>";
    //section
    dropHTML += "<section class=input title = '" + dropObj.text + "'><select name='"
        + dropObj.name
        + "'>";
    //knop
    for (option in options) {
        dropHTML += "<option  name='"
            + options[option].name
            + "'value ='"
            + options[option].name
            + "'>"
            + options[option].text
            + "</option>";
    }
    //closing tags
    dropHTML += "</section></fieldset>";
    mainHTML.innerHTML += dropHTML;
    return dropObj.name;
}   // Renders dropdown buttons

function renderFileUpload(uploadObj) {
    var mainHTML = document.getElementsByTagName("main")[0];
    var uploadHTML = "";

    // Opening tag for fileupload
    uploadHTML += "<fieldset><legend>"
        + uploadObj.text + "</legend>";
    //section
    uploadHTML += "<section class=input>"
        + '<input type="file" name="file '
        + uploadObj.name
        + '" class="fileUpload">';
    //knop
    //closing tags
    uploadHTML += "</section></fieldset>";
    mainHTML.innerHTML += uploadHTML;
    return "file_" + uploadObj.name;
}   // Renders FileUpload

function renderForm(form) {
    var content = form.content;
    document.getElementById("page").innerHTML += "<form action='"
        + form.formAction
        + "' enctype='multipart/form-data'>";
    for (formElement in content)    //  determine pageElement type
    {
        if (content[formElement].type === "textInput") {
            var textInputList = renderTextInput(content[formElement]);
            if (textInputList.length === 1) {
                FormList.push(textInputList[0]);
            }
            else FormList.push(textInputList);
        }
        else if (content[formElement].type === "radioButtons")
            FormList.push(renderRadio(content[formElement]));
        // else if (content[formElement].type === "textMultipleInputs")
        //     FormList.push(renderMultipleTextInput(content[formElement]));
        else if (content[formElement].type === "formButton")
            FormList.push(renderFormButton(content[formElement]));
        else if (content[formElement].type === "dropDown")
            FormList.push(renderDropDown(content[formElement]));
        else if (content[formElement].type === "upload")
            FormList.push(renderFileUpload(content[formElement]));
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
    var pageHTML = document.getElementById("page");

    renderTextbox(
        new Textbox("Waar vindt plaats?",
            "purple"));

    for (var i = 0; i < Object.keys(content).length; i++) {
        //  Check if it is a label
        if (content[Object.keys(content)[i]] == "label") {
            renderLabel(Object.keys(content)[i]);
            continue;
        }

        var buttonHTML = "";
        var schoolNaam = Object.keys(content)[i];
        var schoolSplit = toggleSpace(schoolNaam);

        // Opening tag for .btn
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
        pageHTML.innerHTML += buttonHTML;
    }

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
        + " placeholder='Waar is het precies gebeurt?'"
        + ">";
    buttonHTML += '<button  id="lokaalButton" onclick="locatieSend('
        + "'"
        + alertType
        + "','"
        + school
        + "'"
        + ')"> Verzenden </button></section>';
    //closing tags
    pageHTML.innerHTML += buttonHTML;
}   //renders the buttons for places in the school

function renderSubmit(naam, school, id) {

    var submitHTML = "";
    submitHTML += "<div id = 'submit' class='btn'"
        + "onclick=submitContents('";
    for (var x = 0; naam.length > x; x++) {
        if (Array.isArray(naam[x])) {
            submitHTML = submitHTML.slice(0, -1);
            submitHTML += "|";
            submitHTML += naam[x];

            if (x !== naam.length - 1) {
                submitHTML += "|";
                submitHTML += ','
            }
        }
        else {
            submitHTML += naam[x];
            if (x !== naam.length - 1) {
                submitHTML += ','
            }

        }
    }
    submitHTML += "'"
        + ',"'
        + toggleSpace(school)
        + '","'
        + id
        + '")>'
        + "Verzenden"
        + "</div>";

    document.getElementById("page").innerHTML += submitHTML;

}   //Renders submit button for going to next page

function nextPage(i) {
    ID++;
    renderPage(i);
}   //Goes to next page

function renderPage(i = "Home", school = null, id = null) {
    // console.log(id);
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
                    renderSubmit(renderForm(content[pageElement]), school, id);
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

