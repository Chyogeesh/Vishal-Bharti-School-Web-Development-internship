// Validate the contact form before submission
function validateForm(event) {
  // Prevent form submission
  event.preventDefault();

  // Get the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Check if all fields are filled
  if (!name || !email || !message) {
    alert('Please fill in all fields!');
    return false;
  }

  // Simple email pattern validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address!');
    return false;
  }

  // If everything is valid
  alert('Your message has been sent!');
  return true;
}

// Attach the form validation to the form submit event
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);
