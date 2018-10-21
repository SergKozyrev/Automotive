var btnForm = document.querySelector('.open-form'); // Кнопка появляется на месте формы
var menu = document.querySelector('.header-menu-list'); // Меню
var burgerMenu = document.querySelector('.burger-menu'); // Кнопка мобильного меню
var modalWrapeer = document.querySelector('.modal-form-wrap'); // Враппер модальной формы
var btnClose = document.querySelector('.modal-form-close'); // Кнопка(крестик) для закрытия формы

window.addEventListener("DOMContentLoaded", function () {
    burgerMenu.addEventListener("click", function () { // Клик на кнопку мобильного меню
        menu.classList.toggle("active");
    });

    btnForm.addEventListener("click", function () { // Открыть форму
        modalWrapeer.classList.add("active");
    });

    btnClose.addEventListener("click", function () { // Закрыть форму
        modalWrapeer.classList.remove("active");
    });

    modalWrapeer.addEventListener("click", function (event) { // Клик в любом месте что-бы закрыть форму
        if (event.target === this) {
            modalWrapeer.classList.remove("active");
        }
    });
});