<header>
    <a href="<?php echo URL ?>admin"><h1>Create Pages</h1></a>
</header>

<main>

<div class="btn" onclick="addButton()">Add Button</div>
<div class="btn" onclick="addTextbox()">Add Textbox</div>
<br>
<div class="btn" onclick="clearPageContent()" style="background:red;color:white;">Clear Page Content</div>
<div class="btn" onclick="clearPages()" style="background:red;color:white;">Clear All Pages</div>
<div class="btn" onclick="addPage()" style="background:green;color:white;">Save Page</div>
<div class="btn" onclick="generateJSON()" style="background:green;color:white;">Generate JSON</div>

    <form action="<?php echo URL ?>admin/savePage" method="post">
        <input type="text" name="JSON" id="JSONText" style="-display:none;">
        <input type="submit" value="Save JSON File">
    </form>
</main>

<div id="createWindow" hidden>
    <header id="createWindowHeader">Header</header>
    <main id="createWindowMain">
        <input type="text" name="buttonText" placeholder="Text">
        <div id="createWindowSubmit" class="btn">Add Button</div>
    </main>
</div>

<script src="<?php echo URL . SCRIPT_DIR?>classes.js"></script>
<script src="<?php echo URL . SCRIPT_DIR?>render.js"></script>
<script src="<?php echo URL . SCRIPT_DIR?>main.js"></script>

<script>
    var HTMLcreateWindow = document.getElementById("createWindow");
    var HTMLcreateWindowHeader = document.getElementById("createWindowMain");
    var HTMLcreateWindowMain = document.getElementById("createWindowMain");

    var json = new JSONExport;
    
    var mainPage = new Page;

        
    function clearPages()
    {
        json.clear();
    }

    function clearPageContent()
    {
        mainPage.clearContent();
    }
    
    function addPage()
    {
        json.addPage(mainPage);
    }
    
    function generateJSON()
    {
        document.getElementById("JSONText").value = JSON.stringify(json);
    }

    function addButton()
    {
        //  Show Create Window
        HTMLcreateWindow.hidden = false;

        // mainPage.addContent(new Button("button", "image_url"));        
    }

    function addTextbox()
    {
        mainPage.addContent(new Textbox("test text", "purple"));
    }
</script>