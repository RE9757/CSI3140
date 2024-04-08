<?php
$server = "localhost";
$user = "root";
$pass = "yvonne";

// Create connection
$connection = new mysqli($server, $user, $pass);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$sqlContent = file_get_contents('../sql/URLs.sql');

$initSuccess = true;

if (!$connection->multi_query($sqlContent)) {
    die("Connection failed: " . $connection->connect_error);
} else {
    // loop through all the results
    do {
        // check if there is a result
        if ($result = $connection->store_result()) {
            $result->free(); // release the result
        }
        // try to go to the next result, if there is one
    } while ($connection->next_result());
}

$url = ['www.deitel.com', 'www.php.net'];
$description = ['Cool site!', 'The official PHP'];

$statement = $connection->prepare("INSERT INTO urltable (url, description) VALUES (?, ?)");

$allInsertsSuccessful = true;

for ($i = 0; $i < count($url); $i++) {
    $statement->bind_param("ss", $url[$i], $description[$i]);
    if (!$statement->execute()) {
        $allInsertsSuccessful = false;
        break;
    }
}

if ($allInsertsSuccessful) {
    echo "OK";
} else {
    echo "at least one insert operations failed.";
}



$connection->close();