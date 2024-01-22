document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleNav');
    var navMenu = document.getElementById('navMenu');
  
    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });
});

