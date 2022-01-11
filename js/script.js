const hamburguerBtn = document.getElementById('hamburguer-btn');
const sectionsLinksNav = document.getElementById('sections-links');

const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const typesLink = document.getElementById('types-link');
const thoughtsLink = document.getElementById('thoughts-link');
const contactLink = document.getElementById('contact-link');

hamburguerBtn.addEventListener('click', () => {
  sectionsLinksNav.classList.toggle('show');
});

homeLink.addEventListener('click', () => {
  sectionsLinksNav.classList.toggle('show');
});
aboutLink.addEventListener('click', () => {
  sectionsLinksNav.classList.toggle('show');
});
typesLink.addEventListener('click', () => {
  sectionsLinksNav.classList.toggle('show');
});
thoughtsLink.addEventListener('click', () => {
  sectionsLinksNav.classList.toggle('show');
});
contactLink.addEventListener('click', () => {
  sectionsLinksNav.classList.toggle('show');
});