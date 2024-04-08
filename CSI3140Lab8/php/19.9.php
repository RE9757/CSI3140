<?php
$server = "localhost";
$user = "root";
$pass = "yvonne";
$dbname = "urls";

// Create connection
$connection = new mysqli($server, $user, $pass, $dbname);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$jsonData = json_decode(file_get_contents('php://input'), true);

$url = $jsonData['url'];
$description = $jsonData['description'];

$statement = $connection->prepare("INSERT INTO urltable (url, description) VALUES (?, ?)");

$statement->bind_param("ss", $url, $description);

if ($statement->execute()) {
    $sendBack = query($connection, "SELECT * FROM urltable");
    if (count($sendBack) > 0) {
        echo json_encode($sendBack);
    } else {
        echo "No data found";
    }
} else {
    echo "Error: " . $statement->error;
}


function query($connection, $sql): array
{
    $result = $connection->query($sql);
    $tableData = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $tableData[] = $row;
        }
    }
    return $tableData;
}

$connection->close();