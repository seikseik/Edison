<?php

    $pageUrl = strtok( (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) || isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", "?");
    $pageTitle = "Il parco va in città";
    $pageDescription = "Un parco nel cuore della città con fioriere e orti urbani, dove fare sport con attrezzature e app intelligenti, riposare su panchine di design e ammirare qualche opera d’arte urbana.";

    $twitterString = " " . $pageUrl;
    $whatsappString = $pageTitle. " " . $pageUrl;
?>
