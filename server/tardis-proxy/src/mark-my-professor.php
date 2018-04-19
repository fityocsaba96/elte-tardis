<?php

ob_start();

$url = 'http://www.markmyprofessor.com/kereses.html?';
$data = array(
    'ajax'  => '',
    'type'  => 'professors',
    'order' => 'school',
    'word'  => $_GET['name'],
    'p'     => $_GET['page']
);
$url .= http_build_query($data);
$response = file_get_contents($url);

if (strpos($http_response_header[0], '200') !== false) {
    echo $response;
} else {
    header($http_response_header[0]);
}

?>
