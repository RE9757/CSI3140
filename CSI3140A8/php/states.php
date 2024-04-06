<?php

$states = ["Mississippi", "Alabama", "Texas", "Massachusetts", "Kansas"];

$statesArray = array();

// a) 寻找以xas结尾的单词
foreach ($states as $state) {
    if (preg_match('/xas$/', $state)) {
        $statesArray[0] = $state;
        break;
    }
}

// b) 寻找以k开始，以s结尾的单词（不区分大小写）
foreach ($states as $state) {
    if (preg_match('/^k.*s$/i', $state)) {
        $statesArray[1] = $state;
        break;
    }
}

// c) 寻找以M开始，以s结尾的单词
foreach ($states as $state) {
    if (preg_match('/^M.*s$/', $state)) {
        $statesArray[2] = $state;
        break;
    }
}

// d) 寻找以a结尾的单词
foreach ($states as $state) {
    if (preg_match('/a$/', $state)) {
        $statesArray[3] = $state;
        break;
    }
}

// e) 在字符串开头寻找以M开始的单词
foreach ($states as $state) {
    if (preg_match('/^M/', $state)) {
        $statesArray[4] = $state;
        break;
    }
}

// f) 输出数组$statesArray到屏幕
echo "<pre>";
print_r($statesArray);
echo "</pre>";
?>
