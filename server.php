<?php

    foreach ($_POST as $key => $value) {
        $array[$key] = $value;
    }

    $message = "Данные отправлены";

    echo json_encode($message)
?>