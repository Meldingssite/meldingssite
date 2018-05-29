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