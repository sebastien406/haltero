/* Récupéré tous les elements h2 */
document.addEventListener('DOMContentLoaded', function() {
const headings = document.querySelectorAll('h2');
const sommaireListe = document.getElementById('sommaireListe');

headings.forEach(function(heading) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.innerText = heading.innerText;
    link.href = `#${heading.id}`;
    listItem.appendChild(link);
    sommaireListe.appendChild(listItem);
});

/* Afficher le sommaire quand on clique sur le bouton */
document.getElementById('toggleSommaire').addEventListener('click', function() {
    const sommaire = document.getElementById('sommaire');
    sommaire.style.display = (sommaire.style.display === 'none' || sommaire.style.display === '') ? 'block' : 'none';
});

});