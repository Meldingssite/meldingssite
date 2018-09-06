function checkDB(mode) {
    /**************************
     * checkDB()
     **************************
     * DESCRIPTION HERE
     */

    // console.log(currentID);
    // var schoolNaam = toggleSpace(school);
    var Data = new FormData();
    Data.append("id", currentID);
    // console.log(currentID);
    // Data.append("school", schoolNaam);
    var xDBhttp = new XMLHttpRequest();
    if (mode === 'archief') {
        xDBhttp.open("POST", "Dashboard/retrieveElements", true);
    }// adding model function
    else {
        xDBhttp.open("POST", "Dashboard/retrieveElements", true);
    }
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

function remove(item) {
    /**************************
     * remove()
     **************************
     * DESCRIPTION HERE
     */

    if (confirm("weet u zeker dat u deze melding wilt verwijderen?") === true) {
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
        if(fade(document.getElementById('extraInfo' + item)))
        if(fade(document.getElementById('alertItem' + item)))
        document.getElementById('extraInfo' + item).removeItem();
        document.getElementById('alertItem' + item).removeItem();


    }
}

function finished(item) {
    /**************************
     * finished()
     **************************
     * DESCRIPTION HERE
     */
    
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

Element.prototype.removeItem = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.removeItem = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}