// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
})

// Форма поиска
document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search-form').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.add('search-form-show')
    })

    document.getElementById('search-form-close').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.remove('search-form-show')
    })

    document.getElementById('search-form').addEventListener('submit', (e) => {
        e.preventDefault()
    })
})

// Карусель
const swiper = new Swiper('.swiper-container', {
    // Цикличность
    loop: true,
  
    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    a11y: {
      paginationBulletMessage: 'Слайдер{{index}}',
    }
  });

  //tab
document.querySelectorAll('.tabs').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;
  
      document.querySelectorAll('.tabs').forEach(function(btn) {
  btn.classList.remove('tabs--active')});
      e.currentTarget.classList.add('tabs--active');
  
      document.querySelectorAll('.slider').forEach(function(tabsBtn) {
  tabsBtn.classList.remove('slider--active')});
  
  document.querySelector(`[data-target="${path}"]`).classList.add('slider--active');
    });
  });

//   аккардион
new Accordion('.accordion-container');
