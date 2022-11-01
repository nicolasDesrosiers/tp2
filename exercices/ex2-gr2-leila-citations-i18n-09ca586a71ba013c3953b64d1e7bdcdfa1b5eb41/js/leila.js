//capturer le block HTML contenant la citaion
let elmCitation = document.querySelector(".citation > blockquote");

//associer un ecouteur d'evenement 'click'
if(elmCitation !== null){

    elmCitation.addEventListener('click', changerCitation);

}
async function changerCitation() {

    console.log("Recherche d'une nouvelle citation")

    // Étape 0 : récuperer la section de la langue
    let section = elmCitation.getAttribute('page');
    let langue = elmCitation.getAttribute('langue');
   
    // Étape 1 : chercher une citation aléatoire au serveur ( script PHP)
    // 1a : faire une requête HTTP et capturer la réponse
    let reponse = await fetch(`_ajax_citation.php?section=${section}&langue=${langue}`);

    // 1b : sortir le contenu de la réponse 
    let citationJson =  await reponse.json();
    console.log("reponse du serveur : ", citationJson);

    // Étapre 2 : Injecter le texte et l'auteur de la citation obtenu à l'étapre 1 dans la page (DOM)
    elmCitation.querySelector('.citation-texte').innerHTML = citationJson.texte;
    elmCitation.querySelector('.citation-auteur').innerHTML = citationJson.auteur;
   
}
