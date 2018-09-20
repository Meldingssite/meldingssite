"use strict";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200 && document.getElementById("page") // Element with ID page exists
    ) renderPage(); // render index page
};

xmlhttp.open("GET", SCRIPT_DIR + "MeldingsApp.json", true);
xmlhttp.send();

function extraInfo(element, value) {
    /**************************
     * extraInfo()
     **************************
     * reveals extra info based on radiobutton value
     */
    var target = document.getElementById("extraInfo" + element);

    if (value == "Ja" || value == "ja") {
        //unfade(document.getElementById(target), element);
        target.classList.remove("hidden");
    } else {
        //fade(document.getElementById(target));
        target.classList.add("hidden");
    }
}

function checkDropdown(element) {
    // console.dir(element);
    var target =  document.getElementById('extraInfo' + element.className);
    if (element.value === "overig") {
        //unfade(target, element.className);
        target.classList.remove("hidden");
    } else {
        //fade(target);
        target.classList.add("hidden");

    }
}

// function unfade(element) {
//     var elementID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
//     var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'block';
//     console.log(elementID);
//     /**************************
//      * unfade
//      **************************
//      * Makes item reappear
//      */
//     var op = 0.1; // initial opacity

//     element.style.display = display; // if (elementID != null)

//     var height = document.getElementById('height' + elementID).innerHTML; // console.log(height);

//     var timer = setInterval(function () {
//         if (op >= 1) {
//             element.style.height = height + 'px';
//             clearInterval(timer);
//             element.style.opacity = 1; // element.style.padding = 0;
//         }

//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 10);
// }

// function fade(element) {
//     var elementID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

//     /**************************
//      * fade()
//      **************************
//      * Makes item dissappear
//      */
//     document.querySelector('div > input[name="test1"]');
//     var op = 1; // initial opacity

//     element.style.height = '0';
//     var timer = setInterval(function () {
//         if (op <= 0.1) {
//             clearInterval(timer); // element.style.display = 'none';
//             // element.style.padding = 0;
//         }

//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 30);
// }

function toggleSpace(item) {
    /**************************
     * toggleSpace()
     **************************
     * Switches between _ and spaces
     *
     * Todo:
     *  Duplicate code? If so DRY
     */
    var returnItem = "";

    if (item.indexOf(' ') > -1) {
        returnItem = item.replace(new RegExp(" ", "g"), '_');
    } else if (item.indexOf('_') > -1) {
        returnItem = item.replace(new RegExp("_", "g"), ' ');
    } else if (item.indexOf(' ') < 1 && item.indexOf('_') < 1) {
        return item;
    } else {
        console.log("something appears to have gone wrong with" + item + " !");
    }

    return returnItem;
}

