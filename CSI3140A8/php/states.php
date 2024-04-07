<?php

// Group of 36
// Zhong Tao 300222579
// Fengshou Xu 300036335

$states = "Mississippi Alabama Texas Massachusetts Kansas";

$statesArray = array();

// a) find the states that ends with xas
$states1 = explode(' ', $states);
foreach ($states1 as $state) {
    if (str_ends_with($state, 'xas')) {
        $statesArray[0] = ($state);
        break;
    }
}

// b) find the states that starts with M and ends with s
foreach ($states1 as $state) {
    if (str_starts_with($state, 'K') && str_ends_with($state, 's')) {
        $statesArray[1] = ($state);
        break;
    }
}

// c) find the states that starts with M and ends with s
foreach ($states1 as $state) {
    if (str_starts_with($state, 'M') && str_ends_with($state, 's')) {
        $statesArray[2] = ($state);
        break;
    }
}

// d) find the states that ends with a
foreach ($states1 as $state) {
    if (str_ends_with($state, 'a')) {
        $statesArray[3] = ($state);
        break;
    }
}

// e) find the states that starts with M
foreach ($states1 as $state) {
    if (str_starts_with($state, 'M')) {
        $statesArray[4] = ($state);
        break;
    }
}


// f) output the result
echo "<pre>";
print_r($statesArray);
echo "</pre>";
?>
