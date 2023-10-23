document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameField = contactForm.querySelector('#name');
    var emailField = contactForm.querySelector('#email');
    var phoneField = contactForm.querySelector('#phone');
    var messageField = contactForm.querySelector('#message');

    if (nameField.value === '') {
      Toastify({
        text: 'Error: Prázdne Meno!',
        duration: 1500,
        closeButton: false,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#ca051c',
        stopOnFocus: true,
      }).showToast();
      return;
    }

    if (emailField.value === '') {
      Toastify({
        text: 'Error: Prázdny Email!',
        duration: 1500,
        closeButton: false,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#ca051c',
        stopOnFocus: true,
      }).showToast();
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      Toastify({
        text: 'Error: Zlý Email!',
        duration: 1500,
        closeButton: false,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#ca051c',
        stopOnFocus: true,
      }).showToast();
      return;
    }

    if (phoneField.value === '') {
      Toastify({
        text: 'Error: Prázdne Telefónné Číslo!',
        duration: 1500,
        closeButton: false,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#ca051c',
        stopOnFocus: true,
      }).showToast();
      return;
    }

    if (messageField.value === '') {
      Toastify({
        text: 'Error: Prázdna Správa!',
        duration: 1500,
        gravity: 'top',
        position: 'center',
        backgroundColor: '#ca051c',
        stopOnFocus: true,
      }).showToast();
      return;
    }

    contactForm.reset();

    Toastify({
      text: 'Správa Úspešne Odoslaná!',
      duration: 1500,
      closeButton: false,
      gravity: 'top',
      position: 'center',
      backgroundColor: '#56ac28',
      stopOnFocus: true,
    }).showToast();
  });
});