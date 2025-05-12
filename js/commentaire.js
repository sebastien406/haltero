document.addEventListener('DOMContentLoaded', function() {
/* Ajout d'un commentaire */
const boutonCommentaire = document.querySelector('.btn-commentaire');
const formulaire = document.querySelector('.formulaire');

if (!boutonCommentaire || !formulaire) {
    console.warn("Le bouton ou le formulaire n'a pas été trouvé !");
}

boutonCommentaire.addEventListener('click', function (event){
event.preventDefault(); /* Empeche l'envoi du formulaire */

if (document.getElementById('alert-commentaire')) return;

const alerte = document.createElement('div');
alerte.id = 'alert-commentaire';
alerte.textContent = 'Ton commentaire a bien été envoyé !';
alerte.style.backgroundColor = '#d4edda';
alerte.style.color = '#155724';
alerte.style.padding = '10px';
alerte.style.marginBottom = '15px';
alerte.style.border = '1px solid #c3e6cb';
alerte.style.borderRadius = '4px';

formulaire.parentNode.insertBefore(alerte, formulaire);
});
});