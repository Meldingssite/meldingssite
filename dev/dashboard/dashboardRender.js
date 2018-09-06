"use strict";

//  Latest timestamp pulled from DB, used to check if DB has been updated
//Testing commit
var currentID = 1;
var dataRetrieve = null;
var TextHeight = 19;
var imgHeight = 150;
var refreshRate = 250;
var imageURL = imageURL = document.location.origin + "/public/uploads/";

if (document.location.origin.indexOf('localhost')) {
    imageURL = document.location.origin + "/meldingssite/public/uploads/";
}

function startbasic() {
    /**************************
     * startbasic()
     **************************
     * DESCRIPTION HERE
     */
    if (document.getElementById('Dashboard') != null) {
        document.getElementById('Dashboard').innerHTML = "";
        document.getElementById('btnArchive').innerHTML = "<i class='fas fa-archive fa-lg'></i><p>Archief</p>";
        document.getElementById('btnArchive').onclick = archief;
    }

    var IDhttp = new XMLHttpRequest();
    IDhttp.open("POST", "Dashboard/startID", true); // adding model function
    // xDBhttp.setRequestHeader( "Content-Type", "application/json" );

    IDhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response) {
                var highestId = this.response;

                if (highestId > 10) {
                    currentID = highestId - 10;
                } else {
                    currentID = highestId - 1;
                }

                window.setInterval(function () {
                    checkDB('normal');
                }, refreshRate);
            } else {
                currentID = 1;
                window.setInterval(function () {
                    checkDB('normal');
                }, refreshRate);
            }
        }
    };

    console.log("Checking Database");
    IDhttp.send();
}

function archief() {
    /**************************
     * archief()
     **************************
     * DESCRIPTION HERE
     */
    document.getElementById('Dashboard').innerHTML = "";
    document.getElementById('btnArchive').innerHTML = "<i class='fas fa-archive fa-lg'></i><p>Actueel</p>";
    document.getElementById('btnArchive').onclick = startbasic;
    currentID = 1;
    window.setInterval(function () {
        checkDB('archief');
    }, refreshRate);
}

function addElements(dataRetrieve) {
    /**************************
     * addElements()
     **************************
     * Begin of constructing a element
     */
    // console.dir(dataRetrieve);
    if (dataRetrieve[0] !== null) {
        // console.log(dataRetrieve[1] + " " + currentID);
        if (currentID !== dataRetrieve[1] && !document.getElementById('alertItem' + dataRetrieve[0]['id']) && document.getElementById('alertItem' + dataRetrieve[0]['id']) == null) {
            currentID = dataRetrieve[1]; //delete onnodige null values

            var items = deleteNullProperties(dataRetrieve[0]); // console.log(items["type"]);
            // console.dir(items);

            var pageContent = document.getElementById('Dashboard');
            var content = constructMelding(items) + pageContent.innerHTML;
            pageContent.innerHTML = content;
            document.getElementById('view' + dataRetrieve[0]['id']).setAttribute("onClick", "extraInfo(" + dataRetrieve[0]['id'] + ")");
            document.getElementById('remove' + dataRetrieve[0]['id']).setAttribute("onClick", "remove(" + dataRetrieve[0]['id'] + ")");
            document.getElementById('finished' + dataRetrieve[0]['id']).setAttribute("onClick", "finished(" + dataRetrieve[0]['id'] + ")");
            if (dataRetrieve[0]['Completed'] === 'true') document.getElementById('finished' + dataRetrieve[0]['id']).children[0].style.color = '#59ba5d';
        } else {
            var items = deleteNullProperties(dataRetrieve[0]); // console.log(items["type"]);
            // console.dir(items);

            updateContent(items);
            currentID = dataRetrieve[1];
        }
    } else {
        currentID = dataRetrieve[1];
    }
} //Constructs a melding


function constructMelding(meldingData) {
    /**************************
     * constructMelding()
     **************************
     * Constructs a melding
     */
    alertSound("Alert");
    var melding = "";
    var elementName = 'view' + meldingData['id'];
    melding += '<div class="alertItem" id=alertItem' + meldingData['id'] + '>' + '<div>' + '<img src = "' + IMAGE_DIR + '/Categories/category-' + meldingData['type'] + '.png" alt="alert type">' + '<p class="type">' + meldingData['type'] + '</p>' + '<p class="time">' + meldingData['TimeStamp'] + "</p>" + "</div>" + "<div style='" + 'background-image:url("' + IMAGE_DIR + '/DashboardBuildings/building-' + meldingData['school'] + '.jpg")' + "'>" + '<h1>' + meldingData['school'];

    if (meldingData['locatie'] && meldingData['locatie'] !== undefined) {
        melding += '</h1>+' + '<p>' + meldingData['locatie'] + '</p>';
    }

    melding += '</div>' + '<div>' + '<p><i class="fas fa-exclamation-circle"></i>er is iets gebeurt</p>' + '<div class="icon-list">' + '<button id="remove' + meldingData['id'] + '"><i class="fas fa-times"></i></button>' + '<button id="' + elementName + '"><i class="far fa-eye"></i></button>' + //TODO add fadein and FadeOut onclick
        '<button id="finished' + meldingData['id'] + '"><i class="fas fa-check"></i></button>' + '</div>' + '</div>' + '</div>' + //  Extra Info
        '<div class = "extraInfo" id="extraInfo' + meldingData['id'] + '">'; //Adds extra information to the melding(Automatically excludes type, id, locatie en locatieSpecifiek)

    var keys = Object.keys(meldingData);
    var height = 30;

    for (var x = 0; keys.length > x; x++) {
        var Inhoud = meldingData[keys[x]];
        var comma = Inhoud.match(/,/g || []);
        var content = meldingData[keys[x]];

        if (comma != null) {
            var calculation = TextHeight * comma.length - 1;
            height += calculation;
            content = meldingData[keys[x]].replace(new RegExp(",", "g"), '<br>');
        }

        if (keys[x] !== "Completed" && meldingData[keys[x]] != null && meldingData[keys[x]] !== "" && keys[x] !== 'locatie' && keys[x] !== 'school' && keys[x] !== 'type' && keys[x] !== 'FILE' && keys[x] !== 'id' && keys[x] !== 'TimeStamp') {
            melding += "<p id ='" + keys[x] + "" + meldingData['id'] + "'>" + content + "</p>";
            height += TextHeight;
        } else if (keys[x] === 'FILE') {
            melding += "<p>Foto:</p><img height='" + imgHeight + "px' src='" + imageURL + '/' + meldingData['id'] + '/' + meldingData[keys[x]] + "' id='" + keys[x] + meldingData['id'] + "'>";
            height += imgHeight + TextHeight;
        }
    }

    melding += '<div hidden=true id="height' + meldingData['id'] + '">' + height + "</div>" + "</div>";
    return melding;
}

function updateContent(items) {
    /**************************
     * updateContent()
     **************************
     * Updates content of latest melding
     */
        // console.log("Updating content");
    var updated = false;
    var keys = Object.keys(items);
    var height = Number(document.getElementById('height' + items['id']).innerHTML);

    for (var x = 0; keys.length > x; x++) {
        var Inhoud = items[keys[x]];
        var comma = Inhoud.match(/,/g || []);
        var content = '';
        content = items[keys[x]];

        if (comma != null && keys[x] !== 'FILE') {
            console.log(comma.length);
            var calculation = TextHeight * comma.length - 1;
            height += calculation;
            content = items[keys[x]].replace(new RegExp(",", "g"), '<br>');
        }

        if (items[keys[x]] != null && items[keys[x]] !== "" && keys[x] !== 'TimeStamp' && keys[x] !== "Completed" && keys[x] !== 'type' && keys[x] !== 'school' && keys[x] !== 'locatie' && keys[x] !== 'locatieSpecifiek' && keys[x] !== 'id' && keys[x] !== 'FILE') {
            // console.log(items[keys[x]]);
            if (document.getElementById(keys[x] + items['id'])) {
                if (document.getElementById(keys[x] + items['id']).innerHTML !== content && document.getElementById(keys[x] + items['id']) != null) {
                    if (keys[x] !== 'type' && keys[x] !== 'locatieSpecifiek' && keys[x] !== 'locatie') {
                        document.getElementById(keys[x] + items['id']).innerHTML = content;
                        console.log(content);
                        updated = true;
                    } else {
                        document.getElementById(keys[x] + items['id']).innerHTML = toggleSpace(items[keys[x]], true);
                        updated = true;
                    }
                }
            } else if (document.getElementById(keys[x] + items['id']) == null) {
                // console.log(keys[x] + items['id']);
                var DIV = document.getElementById('extraInfo' + items['id']);
                var addItems = "";
                addItems += "<p id ='" + keys[x] + "" + items['id'] + "'>" + content + "</p>";
                DIV.innerHTML += addItems;
                height += TextHeight;
                updated = true;
            } else {
                // console.log(keys[x] + items['id']);
                updated = true;
            }
        }

        if (items[keys[x]] != null && items[keys[x]] !== "" && keys[x] === 'FILE') {
            if (document.getElementById(keys[x] + items['id'])) {
                if (document.getElementById(keys[x] + items['id']).src !== imageURL + "/" + items['id'] + "/" + items[keys[x]] && document.getElementById(keys[x] + items['id']) != null) {
                    document.getElementById(keys[x] + items['id']).src = imageURL + "/" + items['id'] + "/" + items[keys[x]];
                    updated = true;
                }
            } else if (document.getElementById(keys[x] + items['id']) == null) {
                updated = true; // console.log(keys[x] + items['id']);

                var DIV = document.getElementById('extraInfo' + items['id']);
                var addItems = "";
                addItems += "<p>Foto:</p><img height='" + imgHeight + "px' src='" + IMAGE_DIR + '../uploads/' + +items['id'] + '/' + content + "' id='" + keys[x] + items['id'] + "'>";
                height += imgHeight;
                DIV.innerHTML += addItems;
            } else {// console.log(keys[x] + items['id']);
            }
        }
    } // updated = true;


    if (updated === true) {
        updateNotify(items);
        document.getElementById('height' + items['id']).innerHTML = height.toString();
    }
}