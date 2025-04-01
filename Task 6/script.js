const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;


    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    // Username validation
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset(); // Reset the form
    }
});
