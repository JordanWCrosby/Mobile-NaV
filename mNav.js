
let Burger = document.querySelector('.hamburger');
let mNav = document.querySelector('.sub-nav');
mobileNav = () => {
  Burger.addEventListener('click', () => {
    mNav.classList.toggle('expanded');
  });
}

mobileNav();
