<?php

ob_start();

$url = 'http://to.ttk.elte.hu/test.php';
$data = array(
    'melyik'   => 'nevalapjan',
    'limit'    => '-1',
    'felev'    => $_GET['semester'],
    'targynev' => $_GET['subject']
);
$options = array(
    'http' => array(
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if (strpos($http_response_header[0], '200') !== false) {
    echo $response;
} else {
    header($http_response_header[0]);
}

?>
