// Function to toggle forms
function toggleForm(formType) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginToggle = document.getElementById('login-toggle');
  const signupToggle = document.getElementById('signup-toggle');
  const googleSignIn = document.getElementById('google-signin');

  if (formType === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
    googleSignIn.style.display = 'none';  // Hide Google Sign-In button for login
  } else if (formType === 'signup') {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    loginToggle.classList.remove('active');
    signupToggle.classList.add('active');
    googleSignIn.style.display = 'block';  // Show Google Sign-In button for signup
  }
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('entry-password');
  const passwordToggle = document.querySelector('.password-toggle');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    passwordToggle.textContent = 'Show';
  }
}

function copyToClipboard(inputId) {
  const inputField = document.getElementById(inputId);
  inputField.select();
  document.execCommand('copy');
  alert(`${inputId} copied to clipboard!`);
}
