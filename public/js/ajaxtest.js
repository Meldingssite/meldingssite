
console.log(SCRIPT_DIR);

function createButtonHTML(buttonObj) // Generate HTML for a button and returns HTML
{

    
    var buttonHTML = "";
    // Opening tag for .btn
    buttonHTML += "<div class='btn'>";
    
    // img tag
    buttonHTML  += "<img src='"
                + IMAGE_DIR
                + buttonObj.image_url
                + "'>";

    // button text
    buttonHTML += buttonObj.name;

    // Closing tag for .btn
    buttonHTML += "</div>";

    return buttonHTML;
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        var mainHTML = document.getElementsByTagName("main")[0];

        // Make object based on the json file opened with .open()
        var myObj = JSON.parse(this.responseText);
        //console.dir(myObj);

        mainHTML.innerHTML = ""; // Clear main
        
        for (const button in myObj.buttons)
        {
            mainHTML.innerHTML += createButtonHTML(myObj.buttons[button]);
        }
    }
}
xmlhttp.open("GET", SCRIPT_DIR + "test.json", true);
xmlhttp.send();