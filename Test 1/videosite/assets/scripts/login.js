document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
    window.location.href = 'profile.html';
  });