const menuToogle = document.querySelector('.toggle');
const navLink = document.querySelector('.nav-links');

menuToogle.addEventListener('click', () => {
  navLink.classList.toggle('mobile-nav');
})    
