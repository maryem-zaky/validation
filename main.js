function validateForm() {
    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('ageError').textContent = '';

    // Get form values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();

    let isValid = true;

    // Validate name
    if (name.length === 0) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else if (name.length > 3 || /\d/.test(name)) {
        document.getElementById('nameError').textContent = 'Name should not exceed 3 characters and should not contain numbers';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate age
    if (age === '') {
        document.getElementById('ageError').textContent = 'Age is required';
        isValid = false;
    } else if (age < 16 || age > 60) {
        document.getElementById('ageError').textContent = 'Age must be between 16 and 60';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email validation using regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function resetForm() {
    document.getElementById('myForm').reset();
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('ageError').textContent = '';
}
