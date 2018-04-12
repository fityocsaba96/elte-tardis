<?php

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
echo $response;

?>
