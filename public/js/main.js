var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (
        this.readyState == 4 &&
        this.status == 200 &&
        document.getElementById("page")     // Element with ID page exists
    )
        renderPage(0);   // render index page

}
xmlhttp.open("GET", SCRIPT_DIR + "pages.json", true);
xmlhttp.send();

// testing shit

function sendJSON(str_json) {
    request = new XMLHttpRequest();
    request.open("POST", "admin/savePage", true)
    request.setRequestHeader("Content-type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            console.log("Data transferred.");

            window.location.replace(window.location.href + "/savePage");
        }
    }
    console.dir(request.send(str_json));
    console.dir(request);
}
