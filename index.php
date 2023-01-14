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

?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>ProxyPDFMaker</title>
</head>
<body>
    <div class="container">
        <form>
            <div>
                <label for="search-bar">Find a card :</label>
                <input id="search-bar" type="text" name="search-bar" placeholder="Type a card name here...">
                <div id="results">
                </div>
            </div>

            <div>
                <label for="decklist">Decklist</label>
                <textarea
                        id="decklist"
                        placeholder="4 Dark Ritual
2 Teysa Karlov">

                </textarea>

            </div>


        </form>

    </div>

</body>
</html>
