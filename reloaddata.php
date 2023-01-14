<?php

/*
 * Code pour récupérer tous les noms des cartes du jeu et les mettre dans un txt
 *
ini_set('memory_limit', '-1');

$json = file_get_contents('data/AtomicCards.json');
$data = json_decode($json, true);



function printJson($data) {
    foreach ($data['data'] as $key => $value) {
        $handle = fopen('data/AllCardNames.txt', 'a');
        fwrite($handle,"$key\n");
        fclose($handle);
    }

}

printJson($data);
*/
