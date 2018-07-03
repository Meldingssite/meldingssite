var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (
        this.readyState == 4 &&
        this.status == 200 &&
        document.getElementById("page")     // Element with ID page exists
    )
        renderPage();   // render index page

}
xmlhttp.open("GET", SCRIPT_DIR + "MeldingsApp.json", true);
xmlhttp.send();

function extraInfo(element, value) {
    var target = "extraInfo" + element;
    if (value == "Ja" || value == "ja") {
        console.log("unfading element");
        unfade(document.getElementById(target), element);
    }
    else {
        fade(document.getElementById(target));
    }
}   //Executed for radiobuttons used for revealing extra information

function unfade(element, elementID = null, display = 'block') {
    var op = 0.1;  // initial opacity
    element.style.display = display;
    // if (elementID != null)
    var height = document.getElementById('height' + elementID).innerHTML;
    // console.log(height);

    var timer = setInterval(function () {
        if (op >= 1) {
            element.style.height = height + 'px';
            clearInterval(timer);
            element.style.opacity = 1;
            // element.style.padding = 0;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);

}   //Makes item reappear

function fade(element, elementID = null) {
    document.querySelector('div > input[name="test1"]')
    var op = 1;  // initial opacity
    element.style.height = '0';
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            // element.style.display = 'none';
            // element.style.padding = 0;

        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);

}

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
