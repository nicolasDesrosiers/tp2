<?php 

    // Retourner une seule citation aléatoire ( dans le format json )

    // 1 : inclure le ficher contenant la focntion qui nous interesse
    include('lib/commun.lib.php');

    // 1.5 : determiner section et langue
    $section =isset($_GET['section']) ? $_GET['section'] : "menu";
    $langue =isset($_GET['langue']) ? $_GET['langue'] : "fr";

    // 2 : obtenir une citation aleatoire
    $citation = obtenirCitationAleatoire($section,$langue);

    // 3 produire la réponse
    echo json_encode($citation);

?>