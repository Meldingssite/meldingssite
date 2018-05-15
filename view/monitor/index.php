<script src="<?php echo URL . SCRIPT_DIR ?>monitor/monitor.js">
</script>
<main id="Monitor">
    <?php
    $conn = OpenDatabaseConnection();
    $sql = "SHOW TABLES";
    $result = mysqli_query($conn, $sql);
    $scholen = mysqli_fetch_all($result);
    $conn->close();
    //echo $result;
    for ($x = 0; $x < count($scholen); $x++) {
        $button = '<div class = "btn" onclick=refreshList("'
            . toggleSpace($scholen[$x][0])
            . '")>'
            . toggleSpace($scholen[$x][0])
            . "</div>  ";
        echo $button;
    }
    function toggleSpace($item)
    {
        $returnItem = "";
        if (count(explode(' ', $item)) > 0) {
            $returnItem = str_replace(' ', '_', $item);
        } else if (count(explode('_', $item)) > 0) {
            $returnItem = str_replace('_', ' ', $item);
        } else if (
            count(explode('_', $item)) < 1 && count(explode('_', $item)) < 1) {
            return $item;
        }
        return $returnItem;
    }

    ?>

<!--    <div class="alertItem">-->
<!--        <div class="alertType">Je moeder is dik</div>-->
<!---->
<!--        <div class="content">-->
<!--            <div>-->
<!--                <div>Azzurrooooooo</div>-->
<!--                <div>Lokaal 0.12</div>-->
<!--            </div>-->
<!--    -->
<!--            <div>-->
<!--                <div>Azzurro</div>-->
<!--                <div>Lokaal 0.12</div>-->
<!--            </div>-->
<!---->
<!--            <div>-->
<!--                <div>Azzurro</div>-->
<!--                <div>Lokaal 0.12</div>-->
<!--            </div>-->
<!---->
<!--            <div>-->
<!--                <div>Azzurro</div>-->
<!--                <div>Lokaal 0.12</div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</main>

