document.addEventListener('DOMContentLoaded',function(){
    const article = document.getElementById('article');

    const texteArticle = article.textContent;
    
    const mots = texteArticle.trim().split(/\s+/);

    const nombreDeMots = mots.filter(mot => mot !== '').length;

    const compteurDiv = document.getElementById ('compteurMots');
    
    compteurDiv.textContent = `Cet article contient ${nombreDeMots} mots, à plus ou moins 40 mots près.`;
});

let toggle_btn = document.getElementById('theme-btn');
let body = document.getElementsByTagName('body')[0];

let dark_theme_class = 'dark';

toggle_btn.addEventListener('click', function() {
    if (body.classList.contains(dark_theme_class)) {
    
        body.classList.remove(dark_theme_class);
    }
    else {
        body.classList.add(dark_theme_class);
    }
});

