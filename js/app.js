document.addEventListener('DOMContentLoaded', function() {
    let btnCloseMainNav = document.querySelector('.closeMainNav');
    let btnOpenMainNav = document.querySelector('.openMainNav');

    btnCloseMainNav.addEventListener('click', function() {
        document.body.classList.remove('has-menu-opened');
    });

    btnOpenMainNav.addEventListener('click', function() {
        document.body.classList.add('has-menu-opened');
    });
});