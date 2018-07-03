//Deletes empty properties in the object
function deleteNullProperties(deleteObject) {
    var keys = Object.keys(deleteObject);
    for (var x = 0; keys.length > x; x++) {
        if (deleteObject[keys[x]] == null) {
            delete deleteObject[keys[x]];
        }
    }
    return deleteObject;
}

//Switches between _ and spaces for onclick arguments
function toggleSpace(item, ForceSpace = false) {
    var returnItem = "";
    if (item.indexOf('_') > -1 || ForceSpace === true) {
        returnItem = item.replace(new RegExp("_", "g"), ' ');
    }
    else if (item.indexOf(' ') > -1) {
        returnItem = item.replace(new RegExp(" ", "g"), '_');
    }
    else if (item.indexOf(' ') < 1 && item.indexOf('_') < 1) {
        return item;
    }
    else {
        console.log("something appears to have gone wrong with" + item + " !");
    }
    return returnItem;
}   // Switches between _ and spaces

// Active check for Database every 0.5 seconds

// document.getElementById("Dashboard").innerHTML = "";


function extraInfo(elementID) {
    document.getElementById('view' + elementID).style.color = "white";
    var target = document.getElementById('extraInfo' + elementID);
    if (target.style.height == 0 || target.style.height < "10px") {
        unfade(target, elementID, 'block');
    }
    else {
        fade(target, elementID);
    }
}

function unfade(element, elementID = null, display = 'block') {
    var op = 0.1;  // initial opacity
    element.style.display = display;
    if (elementID != null)
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

function updateNotify(element){
    document.getElementById('view' + element['id']).style.color = "yellow";
    alertSound("Alert");
}
function alertSound(audioName){
    var audio = new Audio(IMAGE_DIR + '../audio/' + audioName);
    audio.play();
}