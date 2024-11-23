// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // remove '#' from the href
    const targetElement = document.getElementById(targetId);

    // Scroll to the target element
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
