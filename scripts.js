const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  navItems.classList.toggle('active'); // สลับคลาส active เมื่อคลิก Hamburger
});
