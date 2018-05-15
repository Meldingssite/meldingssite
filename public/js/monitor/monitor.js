//  Latest timestamp pulled from DB, used to check if DB has been updated
var currentID = 1;
var dataRetrieve = null;

function checkDB(school) {
    console.log(currentID);
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
                console.dir(dataRetrieve);
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
    if (dataRetrieve[0] !== null) {
        if (currentID !== dataRetrieve[1] && !document.getElementById(dataRetrieve[0]['id'])) {
            currentID = dataRetrieve[1];
            //delete onnodige null values
            var items = deleteNullProperties(dataRetrieve[0]);
            console.log(items["type"]);
            console.dir(items);
            var pageContent = document.getElementById('Monitor');
            pageContent.innerHTML += constructMelding(items);

        }
        else {
            var items = deleteNullProperties(dataRetrieve[0]);
            console.log(items["type"]);
            console.dir(items);
            updateContent(items);
        }
    }
    else{
        currentID = dataRetrieve[1];
    }
}

function updateContent(items) {
    console.log("Updating content");
    var keys = Object.keys(items);
    for (var x = 0; keys.length > x; x++) {
        if (items[keys[x]] != null) {
            if (document.getElementById(keys[x] + items['id'])) {
                if (document.getElementById(keys[x] + items['id']).innerHTML !== items[keys[x]] && document.getElementById(keys[x] + items['id']) != null) {
                    document.getElementById(keys[x] + items['id']).innerHTML = items[keys[x]];
                }
            }
            else if (document.getElementById(keys[x] + items['id']) == null) {
                console.log(keys[x] + items['id']);
                var DIV = document.getElementById('extraInfo');
                var addItems = "";
                addItems += "<div id ='" +
                    keys[x] + "" + items['id'] +
                    "'>"
                    + keys[x]
                    + ": "
                    + items[keys[x]]
                    + "</div>";
                DIV.innerHTML += addItems;
            }
            else {
                console.log(keys[x] + items['id']);
            }
        }
    }
}

function constructMelding(meldingData) {
    var melding = "";
    melding += "<div class='alertItem' id=" +
        meldingData['id'] +
        ">"
        + "<div class='alertType' id='type" +
        meldingData['id'] +
        "'>"
        + meldingData['type']
        + "</div>"
        + "<div class='content'>"
        + "<div>"
        + "<div id='locatie" +
        meldingData['id'] +
        "'>"
        + toggleSpace(meldingData['locatie'])
        + "</div>"
        + "<div id='locatieSpecifiek"
        + meldingData['id']
        + "'>" +
        meldingData['locatieSpecifiek'] +
        "</div>"
        + '</div><div id="extraInfo">';
    var keys = Object.keys(meldingData);
    for (var x = 0; keys.length > x; x++) {
        if (meldingData[keys[x]] != null && keys[x] !== 'type' && keys[x] !== 'locatie' && keys[x] !== 'locatieSpecifiek' && keys[x] !== 'id') {
            melding += "<div id ='" +
                keys[x] + "" + meldingData['id'] +
                "'>"
                + keys[x]
                + ": "
                + meldingData[keys[x]]
                + "</div>";
        }
    }
    melding += "</div></div>";
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