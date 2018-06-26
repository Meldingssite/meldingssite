//  Latest timestamp pulled from DB, used to check if DB has been updated
//Testing commit
var currentID = 1;
var dataRetrieve = null;
var TextHeight = 19;
var imgHeight = 150;
var refreshRate = 500;


function startbasic() {
    if (document.getElementById('Dashboard') != null) {
        document.getElementById('Dashboard').innerHTML = "";
        document.getElementById('btnArchive').innerHTML = "<p>Archief</p>";
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
                }
                else {
                    currentID = highestId - 1;
                }

                window.setInterval(function () {
                    checkDB()
                }, refreshRate);

            }
            else {
                currentID = 1;
                window.setInterval(function () {
                    checkDB()
                }, refreshRate);

            }
        }
    };
    console.log("Checking Database");
    IDhttp.send();

}

function archief() {
    document.getElementById('Dashboard').innerHTML = "";
    document.getElementById('btnArchive').innerHTML = "<p>Terug naar meldingssite</p>";
    document.getElementById('btnArchive').onclick = startbasic;
    currentID = 1;
    window.setInterval(function () {
        checkDB()
    }, refreshRate);
}

//test
function checkDB() {
    // console.log(currentID);
    // var schoolNaam = toggleSpace(school);
    var Data = new FormData();
    Data.append("id", currentID);
    // Data.append("school", schoolNaam);
    var xDBhttp = new XMLHttpRequest();
    xDBhttp.open("POST", "Dashboard/retrieveElements", true); // adding model function
    // xDBhttp.setRequestHeader( "Content-Type", "application/json" );
    xDBhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response) {
                dataRetrieve = JSON.parse(this.response);
                // console.log('adding Elements');
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

//Begin of constructing a element
function addElements(dataRetrieve) {
    if (dataRetrieve[0] !== null) {
        console.log(dataRetrieve[1] + " " + currentID);
        if (currentID !== dataRetrieve[1] && !document.getElementById('alertItem' + dataRetrieve[0]['id']) && document.getElementById('alertItem' + dataRetrieve[0]['id']) == null) {
            currentID = dataRetrieve[1];
            //delete onnodige null values
            var items = deleteNullProperties(dataRetrieve[0]);
            // console.log(items["type"]);
            // console.dir(items);
            var pageContent = document.getElementById('Dashboard');
            var content = constructMelding(items) + pageContent.innerHTML;
            pageContent.innerHTML = content;
            document.getElementById('view' + dataRetrieve[0]['id']).setAttribute("onClick", "extraInfo(" + dataRetrieve[0]['id'] + ")");
            document.getElementById('remove' + dataRetrieve[0]['id']).setAttribute("onClick", "remove(" + dataRetrieve[0]['id'] + ")");
            document.getElementById('finished' + dataRetrieve[0]['id']).setAttribute("onClick", "finished(" + dataRetrieve[0]['id'] + ")");
            if (dataRetrieve[0]['Completed'] === 'true') document.getElementById('finished' + dataRetrieve[0]['id']).children[0].style.color = '#59ba5d';
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

//Constructs a melding
function constructMelding(meldingData) {
    var melding = "";
    var elementName = 'view' + meldingData['id'];
    melding +=
        '<div class="alertItem" id=alertItem' + meldingData['id'] + '>' +
        '<div>' +
        '<img src = "' + IMAGE_DIR + '/Categories/category-' + meldingData['type'] + '.png" alt="alert type">' +
        '<p class="type">' + meldingData['type'] + '</p>' +
        '<p class="time">' + meldingData['TimeStamp'] + "</p>" +
        "</div>" +
        "<div style='" + 'background-image:url("' + IMAGE_DIR + '/DashboardBuildings/building-' + meldingData['school'] + '.jpg")' + "'>" +
        '<h1>' + meldingData['school'];
    if (meldingData['locatieSpecifiek'] && meldingData['locatieSpecifiek'] !== undefined) {
        melding += '</h1>+' + '<p>' + meldingData['locatieSpecifiek'] + '</p>';
    }
    melding +=
        '</div>' +

        '<div>' +
        '<p><i class="fas fa-exclamation-circle"></i>er is iets gebeurt</p>' +

        '<div class="icon-list">' +
        '<button id="remove' + meldingData['id'] + '"><i class="fas fa-times"></i></button>' +
        '<button id="' + elementName + '"><i class="far fa-eye"></i></button>' +  //TODO add fadein and FadeOut onclick
        '<button id="finished' + meldingData['id'] + '"><i class="fas fa-check"></i></button>' +
        '</div>' +
        '</div>' +
        '</div>' +

        //  Extra Info    
        '<div class = "extraInfo" id="extraInfo' + meldingData['id'] + '">';

    //Adds extra information to the melding(Automatically excludes type, id, locatie en locatieSpecifiek)
    var keys = Object.keys(meldingData);
    var height = 30;
    for (var x = 0; keys.length > x; x++) {
        if (
            keys[x] !== "Completed" &&
            meldingData[keys[x]] != null &&
            meldingData[keys[x]] !== "" &&
            keys[x] !== 'locatieSpecifiek' &&
            keys[x] !== 'locatie' &&
            keys[x] !== 'school' &&
            keys[x] !== 'type' &&
            keys[x] !== 'FILE' &&
            keys[x] !== 'id' &&
            keys[x] !== 'TimeStamp'
        ) {
            melding +=
                "<p id ='" + keys[x] + "" + meldingData['id'] + "'>" +
                keys[x] + ": " + meldingData[keys[x]] +
                "</p>";
            height += TextHeight;
        }

        else if (keys[x] === 'FILE') {
            melding += "<p>Foto:</p><img height='" + imgHeight + "px' src='" + IMAGE_DIR + '../uploads/' +
                +meldingData['id'] + '/' + meldingData[keys[x]]
                + "' id='" + keys[x] + meldingData['id'] + "'>";
            height += imgHeight + TextHeight;
        }
    }
    melding +=
        '<div hidden=true id="height' + meldingData['id'] + '">' + height + "</div>" +
        "</div>";

    return melding;
}

//Updates Content of latest Melding
function updateContent(items) {
    // console.log("Updating content");
    var keys = Object.keys(items);
    var height = Number(document.getElementById('height' + items['id']).innerHTML);

    for (var x = 0; keys.length > x; x++) {

        if (items[keys[x]] != null && items[keys[x]] !== "" && keys[x] !== 'TimeStamp' && keys[x] !== "Completed" && keys[x] !== 'type' && keys[x] !== 'school' && keys[x] !== 'locatie' && keys[x] !== 'locatieSpecifiek' && keys[x] !== 'id' && keys[x] !== 'FILE') {

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
                addItems += "<p id ='"
                    + keys[x] + "" + items['id']
                    + "'>"
                    + keys[x]
                    + ": "
                    + toggleSpace(items[keys[x]], true)
                    + "</p>";
                DIV.innerHTML += addItems;
                height += imgHeight + TextHeight;
            }
            else {
                console.log(keys[x] + items['id']);
            }
        }

        if (items[keys[x]] != null && items[keys[x]] !== "" && keys[x] === 'FILE') {
            if (document.getElementById(keys[x] + items['id'])) {
                if (document.getElementById(keys[x] + items['id']).src !== "http://localhost/meldingssite/public/uploads/" + items['id'] + "/" + items[keys[x]]
                    && document.getElementById(keys[x] + items['id']) != null) {
                    document.getElementById(keys[x] + items['id']).src = "http://localhost/meldingssite/public/uploads/" + items['id'] + "/" + items[keys[x]];
                }
            }
            else if (document.getElementById(keys[x] + items['id']) == null) {
                // console.log(keys[x] + items['id']);
                var DIV = document.getElementById('extraInfo' + items['id']);
                var addItems = "";
                addItems += "<p>Foto:</p><img height='" + imgHeight + "px' src='" + IMAGE_DIR + '../uploads/' +
                    +items['id'] + '/' + items[keys[x]]
                    + "' id='" + keys[x] + items['id'] + "'>";
                height += imgHeight;
                DIV.innerHTML += addItems;
            }
            else {
                console.log(keys[x] + items['id']);
            }
        }

    }
    document.getElementById('height' + items['id']).innerHTML = height.toString();
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

// document.getElementById("Dashboard").innerHTML = "";


function extraInfo(elementID) {
    var target = document.getElementById('extraInfo' + elementID);
    if (target.style.display !== 'block') {
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
            element.style.display = 'none';
            // element.style.padding = 0;

        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);

}

function remove(item) {
    var Data = new FormData();
    Data.append("id", item);
    // Data.append("school", schoolNaam);
    var Removehttp = new XMLHttpRequest();
    Removehttp.open("POST", "Dashboard/deleteEntry", true); // adding model function
    // xDBhttp.setRequestHeader( "Content-Type", "application/json" );
    Removehttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response) {
                console.log("Item removed!")
            }
            else {
                console.log('There has been an unknown error!');
            }
        }
    };
    Removehttp.send(Data);
    console.log("removing Item");
    fade(document.getElementById('extraInfo' + item));
    fade(document.getElementById('alertItem' + item));
}

function finished(item) {

    var Data = new FormData();
    // console.log(currentID);
    Data.append("id", item);
    // Data.append("school", schoolNaam);
    var xFinhttp = new XMLHttpRequest();
    xFinhttp.open("POST", "Dashboard/setCompleted", true); // adding model function
    // xDBhttp.setRequestHeader( "Content-Type", "application/json" );
    xFinhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response) {
                if (this.response.includes('true')) {

                    document.getElementById('finished' + item).children[0].style.color = '#59ba5d';
                }
                else {
                    document.getElementById('finished' + item).children[0].style.color = 'white';
                }
            }
            else {
                console.log('Nog geen meldingen!');
            }
        }
    };
    xFinhttp.send(Data);
}
