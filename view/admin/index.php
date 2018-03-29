<header>
    <h1>Admin Panel</h1>
</header>

<main>
    <form action="<?php echo URL ?>admin/savePage" method="post">
        <input type="text" name="JSON" id="JSONText">
        <input type="submit" value="Generate JSON File">
    </form>
</main>

<script src="<?php echo URL . SCRIPT_DIR?>classes.js"></script>
<script src="<?php echo URL . SCRIPT_DIR?>render.js"></script>
<script src="<?php echo URL . SCRIPT_DIR?>main.js"></script>

<script>
    document.getElementById("JSONText").value = JSON.stringify(json);
</script>