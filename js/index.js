document.addEventListener('DOMContentLoaded',function(){
    const article = document.getElementById('article');

    const texteArticle = article.textContent;
    
    const mots = texteArticle.trim().split(/\s+/);

    const nombreDeMots = mots.filter(mot => mot !== '').length;

    const compteurDiv = document.getElementById ('compteurMots');
    
    compteurDiv.textContent = `Cet article contient ${nombreDeMots} mots, à plus ou moins 40 mots près.`;
});


function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
