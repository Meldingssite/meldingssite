"use strict";

/*****************************************************************/

/*** All Functions used to render elements to the page go here ***/

/*****************************************************************/
var legendHeight = 40;
var textHeight = 45;
var ID = 0; //ID for remembering which question you're at

var locatieSubmit = false; //Houd bij of de locatie al is ingevoerd.

var FormList = []; //list op Inputs rendered on page for retrieving data

var sendArray = []; //Array send to DB

function getPages() {
  /**************************
   * getPages()
   **************************
   * Returns every page
   */
  return JSON.parse(xmlhttp.responseText).pages;
}

function getPage(i) {
  /**************************
   * getPage()
   **************************
   * Returns a single page
   */
  return JSON.parse(xmlhttp.responseText).pages[i];
}

function clearPageHTML() {
  /**************************
   * clearPageHTML()
   **************************
   * Clears the HTML of the page
   */
  document.getElementById("page").innerHTML = "";
}

function renderTextbox(textboxObj) {
  /**************************
   * renderTextbox()
   **************************
   * Renders a textbox element
   */
  var textboxHTML = ""; // define default colors

  if (textboxObj.color == "purple") var color = "#850084";else //  hex code
    var color = textboxObj.color;
  var pageHTML = document.getElementById("page"); // Opening tag

  textboxHTML += "<div class='textbox' " + "style='background-color:" + color + ";'>"; // Content

  textboxHTML += textboxObj.text; // Closing tag

  textboxHTML += "</div>";
  pageHTML.innerHTML += textboxHTML;
}

function renderLabel(text) {
  /**************************
   * renderLabel()
   **************************
   * renders a label for the location list
   */
  var labelHTML = ""; // Opening tag

  labelHTML += "<div class='label'>"; // Content

  labelHTML += text; // Closing tag

  labelHTML += "</div>";
  pageHTML.innerHTML += labelHTML;
}

function renderButton(buttonObj) {
  /**************************
   * renderButton
   **************************
   * Render Button Element
   */
  var pageHTML = document.getElementById("page");
  var buttonHTML = ""; // Opening tag for .btn

  buttonHTML += "<div class='btn'" + "onclick=renderPage('" + buttonObj.name + "')>"; // img tag

  buttonHTML += "<img src='" + IMAGE_DIR + "/Categories/category-" + buttonObj.name + ".png" + "'>"; // button text

  buttonHTML += buttonObj.name; // Closing tag for .btn

  buttonHTML += "</div>";
  pageHTML.innerHTML += buttonHTML;
}

function renderFormButton(buttonObj) {
  /**************************
   * renderFormButton()
   **************************
   * Render a button in a form
   */
  var pageHTML = document.getElementById('FORM');
  var options = buttonObj.options;
  var formButtonHTML = ""; // Opening tag for formButton

  formButtonHTML += "<fieldset> <legend>" + buttonObj.text + "</legend>"; //section

  formButtonHTML += "<section class=input>"; //knop

  for (option in options) {
    formButtonHTML += "<button name='" + options[option].name + "' value ='" + options[option].optie + "' onclick='" + options[option].function + "'>" + options[option].text + "</button>";
  } //closing tags


  formButtonHTML += "</section></fieldset>";
  pageHTML.innerHTML += formButtonHTML;
  return buttonObj.name;
}

function renderTextInput(textInputObj) {
  /**************************
   * renderTextInput()
   **************************
   * Renders a field for inputting text
   */
  var pageHTML = document.getElementById('FORM');
  var options = textInputObj.options;
  var textInputHTML = "";
  var names = [];
  var height = 0; // Opening tag for radiobutton

  if (textInputObj.toggle === 'true') {
    textInputHTML += "<fieldset class='extraInfo' id='extraInfo" + textInputObj.name + "'><legend>" + textInputObj.text + "</legend>";
    height += legendHeight;
  } else if (textInputObj.name) {
    textInputHTML += "<fieldset id='" + textInputObj.name + "'><legend>" + textInputObj.text + "</legend>";
  } else if (options.length = 1) {
    textInputHTML += "<fieldset id='" + options[0].name + "'><legend>" + textInputObj.text + "</legend>";
  } //section


  textInputHTML += "<section class=input>"; //Inputs

  for (option in options) {
    if (textInputObj.toggle === 'true') {
      height += textHeight;
    }

    textInputHTML += "<input";

    if (options[option].required) {
      textInputHTML += " required";
    }

    textInputHTML += " type='" + options[option].inputType + "' name='" + options[option].name + "' placeholder='" + options[option].inhoud + "'>";
    names.push(options[option].name);
  }

  textInputHTML += '<div hidden=true id="height' + textInputObj.name + '">' + height + "</div>" + "</div>"; //closing tags

  textInputHTML += "</section></fieldset>";
  pageHTML.innerHTML += textInputHTML;
  console.dir(names); // if (textInputObj.name === 'toggle') {
  //     names.push("persoon");
  // }

  return names;
}

function renderRadio(radioObj) {
  /**************************
   * renderRadio()
   **************************
   * Renders radio buttons
   */
  var pageHTML = document.getElementById('FORM');
  var options = radioObj.options;
  var radioHTML = ""; // Opening tag for radiobutton

  radioHTML += "<fieldset><legend>" + radioObj.text + "</legend>"; //section

  radioHTML += "<section class=inputGroup>"; //knop

  for (option in options) {
    radioHTML += "<input placeholder='" + radioObj.text + "' type='radio' name='" + radioObj.name + "'value ='" + options[option].optie + "'id ='" + options[option].optie + radioObj.name + "'>" + "  <label for='" + options[option].optie + "'>" + options[option].text + "</label>";
  } //closing tags


  radioHTML += "</section></fieldset>";
  pageHTML.innerHTML += radioHTML;

  if (radioObj.toggle == 'true') {
    for (option in options) {
      // console.log(element);
      document.getElementById(options[option].optie + radioObj.name).setAttribute("onClick", "extraInfo('" + radioObj.target + "','" + options[option].optie + "')");
    }
  }

  return radioObj.name;
}

function renderDropDown(dropObj) {
  /**************************
   * renderDropDown()
   **************************
   * Renders a dropdown element
   */
  var mainHTML = document.getElementById('FORM');
  var options = dropObj.options;
  var dropHTML = ""; // Opening tag for radiobutton

  dropHTML += "<fieldset><legend>" + dropObj.text + "</legend>"; //section

  dropHTML += "<section class=input title = '" + dropObj.text + "'><select name='" + dropObj.name + "'>"; //knop

  for (option in options) {
    dropHTML += "<option  name='" + options[option].name + "'value ='" + options[option].name + "'>" + options[option].text + "</option>";
  } //closing tags


  dropHTML += "</section></fieldset>";
  mainHTML.innerHTML += dropHTML;
  return dropObj.name;
}

function renderFileUpload(uploadObj) {
  /**************************
   * renderFileUpload()
   **************************
   * Renders FileUpload
   */
  var mainHTML = document.getElementById('FORM');
  var uploadHTML = ""; // Opening tag for fileupload

  uploadHTML += "<fieldset><legend>" + uploadObj.text + "</legend>"; //section

  uploadHTML += "<section class=input>" + '<input type="file" name="file ' + uploadObj.name + '" class="fileUpload">'; //knop
  //closing tags

  uploadHTML += "</section></fieldset>";
  mainHTML.innerHTML += uploadHTML;
  return "file_" + uploadObj.name;
}

function renderForm(form, school, id) {
  /**************************
   * renderForm()
   **************************
   * Renders a Form and it's elements
   */
  var content = form.content;
  document.getElementById("page").innerHTML += "<form action='" + form.formAction + "' enctype='multipart/form-data' id='FORM'>";

  for (formElement in content) //  determine pageElement type
  {
    if (content[formElement].type === "textInput") {
      var textInputList = renderTextInput(content[formElement]);

      if (textInputList.length === 1) {
        FormList.push(textInputList[0]);
      } else FormList.push(textInputList);
    } else if (content[formElement].type === "radioButtons") FormList.push(renderRadio(content[formElement])); // else if (content[formElement].type === "textMultipleInputs")
    //     FormList.push(renderMultipleTextInput(content[formElement]));
    else if (content[formElement].type === "formButton") FormList.push(renderFormButton(content[formElement]));else if (content[formElement].type === "dropDown") FormList.push(renderDropDown(content[formElement]));else if (content[formElement].type === "upload") FormList.push(renderFileUpload(content[formElement])); // type is unknown
      else console.log("Unknown type: " + content[formElement].type);
  }

  renderSubmit(FormList, school, id);
  return;
}

function renderLocatieForm(alertType) {
  var school = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  /**************************
   * renderLocatieForm()
   **************************
   * renders form for locaties
   */
  clearPageHTML(); // Clear main

  var page = getPage("Locaties");
  var content = page[ID].content;

  if (school === null) {
    renderLocatieScholen(alertType, content);
  } else {
    renderLocatieList(alertType, content, school);
  }
}

function renderLocatieScholen(alertType, content) {
  /**************************
   * renderLocatieScholen()
   **************************
   * Renders a list with locations 
   */
  var pageHTML = document.getElementById("page");
  renderTextbox(new Textbox("Waar vindt plaats?", "purple"));

  for (var i = 0; i < Object.keys(content).length; i++) {
    //  Check if it is a label
    if (content[Object.keys(content)[i]] == "label") {
      renderLabel(Object.keys(content)[i]);
      continue;
    }

    var buttonHTML = "";
    var schoolNaam = Object.keys(content)[i];
    var schoolSplit = toggleSpace(schoolNaam); // Opening tag for .btn

    buttonHTML += "<div class='btn'" + "onclick=renderLocatieForm('" + alertType + "','" + schoolSplit + "')" + '>'; // button text

    buttonHTML += Object.keys(content)[i]; // Closing tag for .btn

    buttonHTML += "</div>";
    pageHTML.innerHTML += buttonHTML;
  }
}

function renderLocatieList(alertType, content, school) {
  /**************************
   * renderLocatieList()
   **************************
   * renders the buttons for locations
   */
  var Items = content[toggleSpace(school)];
  var buttonHTML = "";
  var pageHTML = document.getElementById("page");
  buttonHTML += "<section class=input>";

  for (var i = 0; i < Items.length; i++) {
    // Opening tag for .btn
    var Naam = Items[i];
    var Split = toggleSpace(Naam);
    buttonHTML += "<div class='btn'" + "onclick=locatieSend('" + alertType + "','" + school + "','" + Split + "')" + '>'; // button text

    buttonHTML += Items[i]; // Closing tag for .btn

    buttonHTML += "</div>";
  }

  buttonHTML += "<input class='btn'" + " id='locatieName'" + " placeholder='Waar is het precies gebeurt?'" + ">";
  buttonHTML += '<button  id="lokaalButton" class="btn" onclick="locatieSend(' + "'" + alertType + "','" + school + "'" + ')"> Verzenden </button></section>'; //closing tags

  pageHTML.innerHTML += buttonHTML;
}

function renderSubmit(naam, school, id) {
  /**************************
   * renderSubmit()
   **************************
   * Renders a submit button which advances to the next page
   */
  var submitHTML = "";
  submitHTML += "<div id = 'submit' class='btn'" + "onclick=submitContents('";

  for (var x = 0; naam.length > x; x++) {
    if (Array.isArray(naam[x])) {
      submitHTML = submitHTML.slice(0, -1);
      submitHTML += "|";
      submitHTML += naam[x];

      if (x !== naam.length - 1) {
        submitHTML += "|";
        submitHTML += ',';
      }
    } else {
      submitHTML += naam[x];

      if (x !== naam.length - 1) {
        submitHTML += ',';
      }
    }
  }

  submitHTML += "'" + ',"' + toggleSpace(school) + '","' + id + '")>' + "Verzenden" + "</div>";
  document.getElementById("FORM").innerHTML += submitHTML;
}

function nextPage(i) {
  /**************************
   * nextPage()
   **************************
   * Renders next page
   */
  ID++;
  renderPage(i);
}

function renderPage() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Home";
  var school = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  /**************************
   * renderPage()
   **************************
   * Renders a page
   */
  clearPageHTML(); // Clear main

  var page = getPage(i);

  if (page) {
    if (locatieSubmit == true || i == "Home") {
      var content = page[ID].content;

      for (var pageElement in content) {
        if (content[pageElement].type === "textbox") renderTextbox(content[pageElement]);else if (content[pageElement].type === "button") renderButton(content[pageElement]);else if (content[pageElement].type === "form") renderForm(content[pageElement], school, id); // type is unknown
        else console.log("Unknown type: " + page[pageElement].type);
      } //  determine pageElement type

    } else {
      renderLocatieForm(i);
    }
  } else {
    console.log('page does not exist yet!');
  }
}