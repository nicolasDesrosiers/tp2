//capturer le block HTML contenant la citaion
let elmCitation = document.querySelector(".citation > blockquote");

//associer un ecouteur d'evenement 'click'
if(elmCitation !== null){

    elmCitation.addEventListener('click', changerCitation);

}
async function changerCitation() {

    console.log("Recherche d'une nouvelle citation")
   
    // Étape 1 : chercher une citation aléatoire au serveur ( script PHP)
    let reponse = await fetch('_ajax_citation.php');


    // Étapre 2 : Injecter le texte et l'auteur de la citation obtenu à l'étapre 1 dans la page (DOM)
}