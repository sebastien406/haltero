document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll('.age-article');
    const publicationYears = [2022, 2021, 2020, 2023, 2023, 2012, 2009, 2013, 2019, 2014, 2025, 2024];
  
    for (let i = 0; i < articles.length; i++) {
      const currentYear = new Date().getFullYear();
      const age = currentYear - publicationYears[i];
  
      if (!isNaN(age)) {
        articles[i].textContent = `Publié il y a ${age} ans`;
      } else {
        articles[i].textContent = "Année de publication inconnue";
      }
    }
  });
  