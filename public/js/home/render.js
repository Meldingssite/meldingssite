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


    // Opening tag for radiobutton
    if (textInputObj.name == 'toggle') {
        textInputHTML += "<fieldset id='extraInfo'><legend>"
            + textInputObj.text + "</legend>";
        names[0] = "persoon";
    }
    else {
        textInputHTML += "<fieldset id='" + textInputObj.name + "'><legend>"
            + textInputObj.text + "</legend>";
    }
    //section
    textInputHTML += "<section class=input>";
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
    textInputHTML += "</section></fieldset>";

    pageHTML.innerHTML += textInputHTML;
    console.dir(names);
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
        radioHTML += "<input type='radio' name='"
            + radioObj.name
            + "'value ='"
            + options[option].optie + "'id ='" +
            options[option].optie + radioObj.name
            + "'>"
            + "  <label for='" +
            options[option].optie
            + "'>"
            + options[option].optie
            + "</label>";
    }
    //closing tags
    radioHTML += "</section></fieldset>";
    pageHTML.innerHTML += radioHTML;
    if (radioObj.name == 'contact') {
        for (option in options) {
            var element = options[option].optie + radioObj.name;
            // console.log(element);
            document.getElementById(options[option].optie + radioObj.name).setAttribute("onClick", "extraInfo(" + element + ")");
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
    dropHTML += "<section class=input><select name='"
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
        + " placeholder='lokaal'"
        + ">";
    buttonHTML += '<button  id="lokaalButton" onclick="locatieSend('
        + "'"
        + alertType
        + "','"
        + school
        + "'"
        + ')"> Submit </button></section>';
    //closing tags
    pageHTML.innerHTML += buttonHTML;
}   //renders the buttons for places in the school

function renderSubmit(naam, school, id) {

    var submitHTML = "";
    submitHTML += "<div class='btn'"
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
        + "Submit"
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

function locatieSend(alertType, school, locatie = null,) {
    var id = "";
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
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            id = xhttp.responseText;
            renderPage(alertType, school, id);
        }
    };
    xhttp.send(Data);
} // sends locatie and renders next page

function dataSend(sendArray, school, id) {

    locatieSubmit = true;
    var Data = new FormData();
    school = toggleSpace(school);
    Data.append("School", school);
    Data.append("id", id);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Home/sendData", true);
    // console.dir(xhttp);
    console.dir(sendArray);

    for (var x = 0; x < sendArray[0].length; x++) {
        // console.log(sendArray[0][x]);
        if (sendArray[0][x] && sendArray[0][x] !== undefined && sendArray[0][x] !== null && !Array.isArray(sendArray[0][x])) {
            // console.log(sendArray[0][x]);
            if (sendArray[0][x].match("file")) {
                // xhttp.file = sendArray[1][x];
                if (xhttp.upload) {
                    xhttp.upload.onprogress = function (e) {
                        if (e.lengthComputable) {
                            var percentComplete = (e.loaded / e.total) * 100;
                            console.log(percentComplete + '% uploaded');
                        }
                    };
                }
            }
            // console.log("appending data");
            Data.append(sendArray[0][x], sendArray[1][x]);
        }
    }
    for (var pair of Data.entries()) {
        // console.log(pair[0] + ', ' + pair[1]);
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('We hebben uw melding ontvangen en wij zijn onderweg')
        }
    };
    xhttp.send(Data);
} //Sends Data To Database

function submitContents(NaamString, school, id) {
    var naam = NaamString.split("|");
    // console.dir(NaamString);
    var finalArray;
    finalArray = naam[0].split(',');
    for (x = 1; naam.length > x; x++) {
        // console.dir(finalArray);
        naam[x] = naam[x].split(',');
        // for (y = 0; naam[x].length > y; y++) {
        // console.dir(naam[x]);
        if (naam[x] != "" && naam[x] !== undefined && naam[x] != null)
            if(naam[x][0] == "") naam[x].splice(0, 1);
        finalArray[finalArray.length] = naam[x];
        // }
    }
    sendArray = [];
    var dataArray = [];
    var nameArray = [];
    naam = finalArray;

    for (var x = 0; x < naam.length; x++) {
        // console.log(naam[x]);
        var check = false;
        //Case Multiple Items in array
        if (Array.isArray(naam[x]) === true) {
            var dataElementsArray = [];
            var nameElementsArray = [];
            for (var y = 0; naam[x].length > y; y++) {
                var name = naam[x][y];
                // console.log("|" + name + "|");
                console.log(document.getElementsByName(name)[0]);
                console.log(name);
                if (name) {
                    if (document.getElementsByName(name)[0].value) {
                        dataElementsArray[y] = document.getElementsByName(name)[0].value;
                        nameElementsArray[y] = name;
                        check = true;

                        // console.log("_______" + naam);
                    }
                }
            }
            if (check === true) {
                var naamTemp = document.getElementsByName(naam[x][0])[0].parentElement.parentElement.id;
                dataArray.push(dataElementsArray);
                nameArray.push(naamTemp);
            }
        }
        //Case Multiple Items
        else if (document.getElementsByName(naam[x]).length > 1) {
            for (var y = 0; document.getElementsByName(naam[x]).length > y; y++) {
                if (document.getElementsByName(naam[x])[y].checked) {
                    dataArray[x] = document.getElementsByName(naam[x])[y].value;
                    nameArray[x] = naam[x];
                }
            }
        }
        //Case single item

        else {
            //Case file
            // console.dir(naam);
            // console.log(x);
            // console.log(naam[x]);

            if (naam[x].match("file") && document.getElementsByName(toggleSpace(naam[x]))[0].files.length !== 0) {
                // console.log("files");
                dataArray[x] = document.getElementsByName(toggleSpace(naam[x]))[0].files[0];
                dataArray.push(dataArray[x]['name']);
                nameArray.push(naam[x]);
                nameArray.push('FILE')
                // console.log(document.getElementsByName(toggleSpace(naam[x]))[0].files);
            }
            //Case normal item(default)
            else if (!naam[x].match("file")) {
                nameArray[x] = naam[x];
                dataArray[x] = document.getElementsByName(naam[x])[0].value;
            }
        }


    }

    ;
    sendArray = [nameArray, dataArray];

    dataSend(sendArray, school, id);
} //Executed on pressing submit and prepares data for being send to Database

function extraInfo(element) {
    if (element.value == "Ja" || element.value == "ja") {
        console.log("unfading element");
        unfade(document.getElementById('extraInfo'));
    }
    else if (element.value == "Nee" || element.value == "nee") {
        fade(document.getElementById('extraInfo'));
    }
}   //Executed for radiobuttons used for revealing extra information

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';

    var timer = setInterval(function () {
        if (op >= 1) {
            element.style.height = '100px';
            clearInterval(timer);
            element.style.opacity = 1;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);

}   //Makes item reappear

function fade(element) {
    var op = 1;  // initial opacity
    element.style.height = '0';
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';

        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 50);

}   //Makes item disappear

function toggleSpace(item) {
    var returnItem = "";
    if (item.indexOf(' ') > -1) {
        returnItem = item.replace(new RegExp(" ", "g"), '_');
    }
    else if (item.indexOf('_') > -1) {
        returnItem = item.replace(new RegExp("_", "g"), ' ');
    }
    else if (item.indexOf(' ') < 1 && item.indexOf('_') < 1) {
        return item;
    }
    else {
        console.log("something appears to have gone wrong with" + item + " !");
    }
    return returnItem;
}   // Switches between _ and spaces


//
// Array.prototype.clean = function (deleteValue) {
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] == deleteValue) {
//             this.splice(i, 1);
//             i--;
//         }
//     }
//     return this;
// };

