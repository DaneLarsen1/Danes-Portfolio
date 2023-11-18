document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust the offset as needed
            behavior: 'smooth'
          });
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and navigation menu
    var toggleButton = document.getElementById('toggleNav');
    var navMenu = document.getElementById('navMenu');
  
    // Add a click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the 'is-active' class on the button
        toggleButton.classList.toggle('is-active');
       // Toggle the display of the navigation menu
        // navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
        navMenu.classList.toggle('active');
    });
});

