<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    if (preg_match("/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/", $email)) {
        echo "Email is valid";
    } else {
        echo "Email is not valid";
    }
}
