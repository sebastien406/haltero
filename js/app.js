document.addEventListener('DOMContentLoaded', function() {
    let btnCloseMainNav = document.querySelector('.closeMainNav'),
    btnOpenMainNav = document.querySelector('.openMainNav'),
    btnShare = document.querySelector('.btn-share'),
    btnShareCloseModal = document.querySelector('.btn-close');

    // Gestion du menu
    btnCloseMainNav.addEventListener('click', function() {
        document.body.classList.remove('has-menu-opened');
    });

    btnOpenMainNav.addEventListener('click', function() {
        document.body.classList.add('has-menu-opened');
    });


    // Gestion de la fenêtre de partage
    btnShare.addEventListener('click', function() {
        document.body.classList.add('has-share-open', 'has-overlay');
    });

    btnShareCloseModal.addEventListener('click', function() {
        document.body.classList.remove('has-share-open', 'has-overlay');

    });
});