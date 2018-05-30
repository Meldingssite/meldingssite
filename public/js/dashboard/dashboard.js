//  Latest timestamp pulled from DB, used to check if DB has been updated
//Testing commit
var currentID = 1;
var dataRetrieve = null;

function checkDB(school) {
    // console.log(currentID);
    var schoolNaam = toggleSpace(school);
    var Data = new FormData();
    Data.append("id", currentID);
    Data.append("school", schoolNaam);
    var xDBhttp = new XMLHttpRequest();
    xDBhttp.open("POST", "Dashboard/retrieveElements", true); // adding model function
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
            // console.log(items["type"]);
            // console.dir(items);
            var pageContent = document.getElementById('Dashboard');
            var content = constructMelding(items) + pageContent.innerHTML;
            pageContent.innerHTML = content;

        }
        else {
            var items = deleteNullProperties(dataRetrieve[0]);
            // console.log(items["type"]);
            // console.dir(items);
            updateContent(items);
        }
    }
    else {
        currentID = dataRetrieve[1];
    }
}

function updateContent(items) {
    // console.log("Updating content");
    var keys = Object.keys(items);
    for (var x = 0; keys.length > x; x++) {
        if (items[keys[x]] != null && items[keys[x]] !== undefined && items[keys[x]] !== "" && keys[x] !== 'id') {
            // console.log(items[keys[x]]);
            if (document.getElementById(keys[x] + items['id'])) {
                if (document.getElementById(keys[x] + items['id']).innerHTML !== keys[x] + ": " + items[keys[x]]
                    && document.getElementById(keys[x] + items['id']) != null) {
                    if (keys[x] !== 'type' && keys[x] !== 'locatieSpecifiek' && keys[x] !== 'locatie') {
                        document.getElementById(keys[x] + items['id']).innerHTML = keys[x] + ": " + items[keys[x]];
                    }
                    else {
                        document.getElementById(keys[x] + items['id']).innerHTML = toggleSpace(items[keys[x]], true);
                    }

                }
            }
            else if (document.getElementById(keys[x] + items['id']) == null) {
                // console.log(keys[x] + items['id']);
                var DIV = document.getElementById('extraInfo' + items['id']);
                var addItems = "";
                addItems += "<div id ='"
                    + keys[x] + "" + items['id']
                    + "'>"
                    + keys[x]
                    + ": "
                    + toggleSpace(items[keys[x]], true)
                    + "</div>";
                DIV.innerHTML += addItems;
            }
            else {
                console.log(keys[x] + items['id']);
            }
        }
    }
}

//Constructs a melding
function constructMelding(meldingData) {
    // console.dir(meldingData);
    var melding = "";
    melding += '<div class="alertItem"><div><img src = "'
        + IMAGE_DIR
        + '/Categories/category-' + meldingData['type'] + '.png" alt="alert type"><p class="type">' + meldingData['type'] + '</p><p class="time">'
        + meldingData['TimeStamp']
        + "</p></div><div style='"
        + 'background-image:url("'
        + IMAGE_DIR
        + '/DashboardBuildings/building-' + meldingData['school']
        + '.jpg")' + "'" + '><h1>'
        + meldingData['school'];
    if (meldingData['locatieSpecifiek'] && meldingData['locatieSpecifiek'] !== undefined) {
        melding += '</h1>+' + '<p>' + meldingData['locatieSpecifiek'] + '</p>';
    }
    melding += '</div><div><p><ion - icon name = "alert" > </ion-icon></p>';

    melding += '</div><div id="extraInfo'
        + meldingData['id']
        + '">';
//Adds extra information to the melding(Automatically excludes type, id, locatie en locatieSpecifiek)
    var keys = Object.keys(meldingData);
    for (var x = 0; keys.length > x; x++) {
        if (meldingData[keys[x]] != null && meldingData[keys[x]] !== "" && keys[x] !== 'type' && keys[x] !== 'school' && keys[x] !== 'locatie' && keys[x] !== 'locatieSpecifiek' && keys[x] !== 'id') {
            melding += "<div id ='" +
                keys[x] + "" + meldingData['id']
                + "'>"
                + keys[x]
                + ": "
                + meldingData[keys[x]]
                + "</div>";
        }
    }
    melding += "</div></div></div>";
    return melding
}

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
function refreshList(school) {
    document.getElementById("Dashboard").innerHTML = "";
    window.setInterval(function () {
        checkDB(school)
    }, 500);
}