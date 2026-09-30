  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });