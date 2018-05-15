//  Latest timestamp pulled from DB, used to check if DB has been updated
var currentID = 1;
var dataRetrieve = null;

function checkDB(school) {
    var schoolNaam = toggleSpace(school);
    var Data = new FormData();
    Data.append("id", currentID);
    Data.append("school", schoolNaam);
    var xDBhttp = new XMLHttpRequest();
    xDBhttp.open("POST", "Monitor/retrieveElements", true); // adding model function
    // xDBhttp.setRequestHeader( "Content-Type", "application/json" );
    xDBhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response) {
                dataRetrieve = JSON.parse(this.response);
                addElements(dataRetrieve);
            }
            else {
                console.log('Nog geen meldingen!');
            }
        }
    };
    xDBhttp.send(Data);
    console.log("Checking Database");
}

function addElements(dataRetrieve) {
    if (currentID !== dataRetrieve[1]) {
        currentID = dataRetrieve[1];
        //delete onnodige null values
        var items = deleteNullProperties(dataRetrieve[0]);
        var pageContent = document.getElementById('Monitor');
        pageContent += constructMelding(items);
        console.dir(items);
    }
}

function constructMelding(meldingData) {
    var melding = "";
    melding += ""
        + "";
    return melding
}

function deleteNullProperties(deleteObject) {
    var keys = Object.keys(deleteObject);
    for (var x = 0; keys.length > x; x++) {
        if (deleteObject[keys[x]] == null) {
            delete deleteObject[keys[x]];
        }
    }
    return deleteObject;
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

//  Check Database every 0.5 seconds
function refreshList(school) {
    document.getElementById("Monitor").innerHTML = "";
    window.setInterval(function () {
        checkDB(school)
    }, 500);
}