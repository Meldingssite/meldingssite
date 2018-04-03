<header>
    <a href="<?php echo URL ?>admin"><h1>Create Pages</h1></a>
</header>

<main>

<div class="btn" onclick="addButton()">Add Button</div>
<div class="btn" onclick="addTextbox()">Add Textbox</div>
<br>
<div class="btn" onclick="clearContent()" style="background:red;color:white;">Clear</div>
<div class="btn" onclick="finish()" style="background:green;color:white;">Finish</div>

    <form action="<?php echo URL ?>admin/savePage" method="post">
        <input type="text" name="JSON" id="JSONText" style="-display:none;">
        <input type="submit" value="Generate JSON File">
    </form>
</main>

<script src="<?php echo URL . SCRIPT_DIR?>classes.js"></script>
<script src="<?php echo URL . SCRIPT_DIR?>render.js"></script>
<script src="<?php echo URL . SCRIPT_DIR?>main.js"></script>

<script>

    var json = new JSONExport;
    
    var mainPage = new Page;
        
    
    function clearContent()
    {
        mainPage.clearContent();
    }
    
    function finish()
    {
        json.addPage(mainPage);
        document.getElementById("JSONText").value = JSON.stringify(json);
    }

    function addButton()
    {
        mainPage.addContent(new Button("button", "image_url"));        
    }

    function addTextbox()
    {
        mainPage.addContent(new Textbox("test text", "purple"));
    }
</script>