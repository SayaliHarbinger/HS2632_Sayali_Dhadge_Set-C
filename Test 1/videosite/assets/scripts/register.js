function validateUsername(username) {
    if (username.length < 3 || username.length > 16) {
      return false;
    }
    var regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(username);
  }

  function validatePassword(password) {
    return password.length >= 8;
  }

  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showError(elementId, message) {
    document.querySelector(elementId).textContent = message;
  }

  function clearErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
      element.textContent = '';
    });
  }

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var isValid = true;

    if (!validateUsername(username)) {
      showError('#usernameError', 'Username should be between 3 and 16 characters and can only contain letters, numbers, and underscores.');
      isValid = false;
    }

    if (!validatePassword(password)) {
      showError('#passwordError', 'Password should be at least 8 characters long.');
      isValid = false;
    }

    if (!validateEmail(email)) {
      showError('#emailError', 'Please enter a valid email address.');
      isValid = false;
    }

    if (isValid) {
      alert('Registration successful!');
      // Additional actions after successful registration

      // Redirect to the login form
      window.location.href = 'login.html';
    }
  });