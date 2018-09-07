<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$url = 'https://'.$_GET['jiraUrl'].'/rest/api/2/'.urldecode($_GET['endpoint']);
$postdata = array();
foreach ($_GET as $key => $value) {
    if ($key != 'endpoint' && $key != 'requestMethod' && $key != 'basicToken' && $key != 'jiraUrl') {
        array_push($postdata, $key.'='.urlencode($value)); 
    }
}

$opts = array('http' =>
    array(
        'method'  => $_GET['requestMethod'],
        'header'  => 'Authorization: Basic '.$_GET['basicToken'],
        'content' => http_build_query(
           $postdata 
       )
    )
);

$context  = stream_context_create($opts);

$result = file_get_contents($url, false, $context);

echo $result;

?>