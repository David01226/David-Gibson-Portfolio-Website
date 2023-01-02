<?php

// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
// error_reporting(E_ALL);

// if (isset($_POST['submit'])) {
//     $name = $_POST['name'];
//     $mailFrom = $_POST['mail'];
//     $message = $_POST['message'];

//     $mailTo = "davidjohngibson97@gmail.com";
//     $headers = "From: davidjohngibson97@gmail.com";
//     $txt = "You have recieved an email from ".$name. ". Email: " .$mailFrom. "\n\n".$message;

//     $sent = mail($mailTo, "Portfolio-Form", $txt, $headers);
//         if ($sent) {
//             header("Location: submitted.html");
//         }
//         else {
//             print_r(error_get_last());
//         }

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = strval($_POST['mail']);  // trying to print full email after the @ symbol ??
    $message = $_POST['message'];

    $mailTo = "davidjohngibson97@gmail.com";
    $subject = "Message from " . $name . " via David Gibson Projects";
    $headers = "From: ".$mailFrom;
    $txt = $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: submitted.html?mailsend");


}