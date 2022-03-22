<?php

    foreach ($_POST as $key => $value) {
        $array[$key] = $value;
    }
    $message = "Данные отправлены";
    $array['message'] =  $message;

    echo json_encode($array)
?>