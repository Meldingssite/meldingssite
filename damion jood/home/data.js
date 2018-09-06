function locatieSend(alertType, school, locatie = null,) {
    /**************************
     * locatieSend()
     **************************
     * Sends location and renders next page
     */

    var id = "";
    locatieSubmit = true;
    if (locatie == null) {
        locatie = document.getElementById('locatieName').value
    }

    school = toggleSpace(school);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Home/sendData", true);
    var Data = new FormData();
    Data.append("School", school);
    Data.append("type", alertType);
    Data.append("locatie", locatie);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            id = xhttp.responseText;
            renderPage(alertType, school, id);
        }
    };
    xhttp.send(Data);
}

function dataSend(sendArray, school, id) {
    /**************************
     * dataSend()
     **************************
     * Sends data to database
     */

    locatieSubmit = true;
    var Data = new FormData();
    school = toggleSpace(school);
    Data.append("School", school);
    Data.append("id", id);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Home/sendData", true);

    for (var x = 0; x < sendArray[0].length; x++) {

        if (sendArray[0][x] && sendArray[0][x] !== undefined && sendArray[0][x] !== null && !Array.isArray(sendArray[0][x])) {

            if (sendArray[0][x].match("file")) {

                if (xhttp.upload) {
                    xhttp.upload.onprogress = function (e) {
                        if (e.lengthComputable) {
                            var percentComplete = (e.loaded / e.total) * 100;
                            console.log(percentComplete + '% uploaded');
                        }
                    };
                }
            }
            Data.append(sendArray[0][x], sendArray[1][x]);
        }
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('We hebben uw melding ontvangen en wij zijn onderweg')
        }
    };
    xhttp.send(Data);
}

function submitContents(NaamString, school, id) {
    /**************************
     * submitContents()
     **************************
     * Prepares data to be send to database
     */

    document.getElementById('submit').innerHTML = 'Aanpassing verzenden';
    var naam = NaamString.split("|");
    console.log(naam);
    var finalArray;
    finalArray = naam[0].split(',');
    console.log(finalArray);
    for (x = 1; naam.length > x; x++) {
        naam[x] = naam[x].split(',');
        if (naam[x] != "" && naam[x] !== undefined && naam[x] != null)
            if (naam[x][0] == "") naam[x].splice(0, 1);
        finalArray[finalArray.length] = naam[x];
        // }
    }
    sendArray = [];
    var dataArray = [];
    var nameArray = [];
    naam = finalArray;
    console.dir(finalArray);

    for (var x = 0; x < naam.length; x++) {
        var check = false;
        // console.dir(naam);
        //Case Multiple Items in array
        if (Array.isArray(naam[x]) === true) {
            var dataElementsArray = [];
            var nameElementsArray = [];
            for (var y = 0; naam[x].length > y; y++) {

                var name = naam[x][y];
                if (name) {
                    // console.log(name);
                    if (document.getElementsByName(name)[0].parentElement.parentElement.id.includes("extraInfo")) {
                        if (document.getElementsByName(name)[0].value) {
                            dataElementsArray[y] = document.getElementsByName(name)[0].placeholder + ": " + document.getElementsByName(name)[0].value;
                            nameElementsArray[y] = name;
                            check = true;
                        }
                    }

                    else if (document.getElementsByName(name)[0].value) {
                        // console.log("Hij doet hier:" + name);
                        dataElementsArray[y] = document.getElementsByName(name)[0].placeholder + ": " + document.getElementsByName(name)[0].value;
                        nameElementsArray[y] = name;
                        // console.log(name);
                        // console.log(document.getElementsByName(name)[0].placeholder + ": " + document.getElementsByName(name)[0].value);
                        check = true;
                    }
                }
            }
            if (check === true) {
                var naamTemp;
                if (document.getElementsByName(naam[x][0])[0].parentElement.parentElement.id.includes("extraInfo")) {
                    naamTemp = document.getElementsByName(naam[x][0])[0].parentElement.parentElement.id.replace("extraInfo", "");
                }
                else {
                    // console.log(naam[x][0]);
                    naamTemp = document.getElementsByName(naam[x][0])[0].parentElement.parentElement.id;
                }
                dataArray.push(dataElementsArray);
                nameArray.push(naamTemp);
                // console.log(naamTemp);
            }
        }
        //Case Multiple Items
        else if (document.getElementsByName(naam[x]).length > 1) {
            // console.log(naam[x]);

            for (var y = 0; document.getElementsByName(naam[x]).length > y; y++) {
                if (document.getElementsByName(naam[x])[y].checked) {
                    // if (document.getElementsByName(naam[x])[y].value) {
                    // console.log(naam[x]);
                    dataArray[x] = document.getElementsByName(naam[x])[y].placeholder + ": " + document.getElementsByName(naam[x])[y].value;
                    nameArray[x] = naam[x];
                    // }
                }
            }
        }
        //Case file or single item
        else {

            if (naam[x].match("file") && document.getElementsByName(toggleSpace(naam[x]))[0].files.length !== 0) {
                dataArray[x] = document.getElementsByName(toggleSpace(naam[x]))[0].files[0];
                dataArray.push(dataArray[x]['name']);
                nameArray.push(naam[x]);
                nameArray.push('FILE')
            }

            //Case normal item(default)
            else if (!naam[x].match("file")) {

                if (document.getElementsByName(naam[x])[0].tagName === "SELECT") {
                    dataArray[x] = document.getElementsByName(naam[x])[0].parentElement.title +
                        ": " + document.getElementsByName(naam[x])[0].value;
                    nameArray[x] = naam[x];
                }

                else if (document.getElementsByName(naam[x])[0].value) {
                    dataArray[x] = document.getElementsByName(naam[x])[0].placeholder +
                        ": " + document.getElementsByName(naam[x])[0].value;
                    nameArray[x] = naam[x];
                }

            }
        }
    }


    var sendArray = [nameArray, dataArray];
    // console.dir(sendArray);
    dataSend(sendArray, school, id);
}

