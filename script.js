// Form Validation
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields!');
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address!');
    return false;
  }

  alert('Your message has been sent!');
  return true;
}

const form = document.querySelector('form');
form.addEventListener('submit', validateForm);

// Image Gallery Carousel
let currentImageIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll('#gallery .gallery-grid img');
  const totalImages = images.length;

  images.forEach(img => img.style.display = 'none');
  images[index].style.display = 'block';
}

function nextImage() {
  const images = document.querySelectorAll('#gallery .gallery-grid img');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function previousImage() {
  const images = document.querySelectorAll('#gallery .gallery-grid img');
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showImage(currentImageIndex);

  const nextButton = document.querySelector('#next-button');
  const prevButton = document.querySelector('#prev-button');

  nextButton.addEventListener('click', nextImage);
  prevButton.addEventListener('click', previousImage);
});

// Smooth Scrolling for Navigation
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
