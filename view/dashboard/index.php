<link rel="stylesheet" href="<?php echo URL ?>public/css/dashboard.css">
<script src="<?php echo URL . SCRIPT_DIR ?>dashboard/dashboard.js"></script>
<header>
    <img src="<?php echo IMAGE_DIR ?>banner.jpg" alt="">
</header>
<main id="Dashboard">
    <!--    --><?php
    //    $conn = OpenDatabaseConnection();
    //    $sql = "SHOW TABLES";
    //    $result = mysqli_query($conn, $sql);
    //    $scholen = mysqli_fetch_all($result);
    //    $conn->close();
    //
    //    for ($x = 0; $x < count($scholen); $x++) {
    //        $button = '<div class = "btn" onclick=refreshList("'
    //            . toggleSpace($scholen[$x][0])
    //            . '")>'
    //            . toggleSpace($scholen[$x][0])
    //            . "</div>";
    //        echo $button;
    //    }

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
    <script src="https://unpkg.com/ionicons@4.1.2/dist/ionicons.js"></script>
</main>

