
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('header-scrolled');
    } else if (window.scrollY <= 10) {
        header.classList.remove('header-scrolled');
    }
});

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
}));

const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterableTabs = document.querySelectorAll('.filterable-tabs .tab');
const initialLoad = document.querySelector('.piercing-tab')

window.addEventListener('load', () => {
    initialLoad.classList.add('hide');
});

const filterTabs = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
 
    filterableTabs.forEach(tab => {
         tab.classList.add('hide');
         if (tab.dataset.name === e.target.dataset.name) {
             tab.classList.remove('hide');
         }
    });
};

filterButtons.forEach(button => button.addEventListener('click', filterTabs));

