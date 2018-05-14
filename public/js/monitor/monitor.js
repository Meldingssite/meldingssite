//  Latest timestamp pulled from DB, used to check if DB has been updated
var currentID = 1;
var dataRetrieve = null;

function checkDB() {
    var Data = new FormData();
    Data.append("id", currentID);
    Data.append("school", 'AZZURRO');
    var xDBhttp = new XMLHttpRequest();
    xDBhttp.open("POST", "Monitor/retrieveElements", true); // adding model function
    // xDBhttp.setRequestHeader( "Content-Type", "application/json" );
    xDBhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dataRetrieve = JSON.parse(this.response);
            addElements(dataRetrieve);
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
        // hier renderen, alles is properties in items
        console.dir(items);
    }
}

function deleteNullProperties(deleteObject){
    var keys = Object.keys(deleteObject);
    for (var x = 0; keys.length > x; x++) {
        if (deleteObject[keys[x]] == null) {
            delete deleteObject[keys[x]];
        }
    }
    return deleteObject;
}


//  Check Database every 0.5 seconds
window.setInterval(checkDB, 500);

