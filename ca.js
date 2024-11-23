// Initialize the image gallery carousel
let currentImageIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll('#gallery .gallery-grid img');
  const totalImages = images.length;

  // Hide all images
  images.forEach(img => img.style.display = 'none');

  // Show the image at the current index
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

// Initialize carousel by showing the first image
document.addEventListener('DOMContentLoaded', () => {
  showImage(currentImageIndex);

  // Add event listeners for next/previous buttons (if you have them)
  const nextButton = document.querySelector('#next-button');
  const prevButton = document.querySelector('#prev-button');

  nextButton.addEventListener('click', nextImage);
  prevButton.addEventListener('click', previousImage);
});
