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

const likeButton = document . getElementById ( 'likeButton' ); 
const likeCount = document . getElementById ( 'likeCount' ); 
let likes = 0 ; 
let message = "Vous aimez vraiment cet article !";
let ajoutMessage = document.createElement("p");
let messageDiv = document.querySelector(".messageAjouter");
document.body.appendChild(ajoutMessage);

likeButton. addEventListener ( 'click' , () => { 
 likes++; 
  console.log(likes);
 afficheMessage();
});
function afficheMessage(){
  if(likes === 5) {
   ajoutMessage.innerText = message;
    messageDiv.appendChild(ajoutMessage);
 }
  };
