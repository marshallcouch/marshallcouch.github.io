document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// To use this, in your Formspree form settings, set the redirect URL to
// [your-website-url]/?form-success=true
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('form-success')) {
        const form = document.querySelector('form');
        const successMessage = document.getElementById('form-success');
        if (form && successMessage) {
            form.reset(); // This will clear the form fields
            form.style.display = 'none';
            successMessage.style.display = 'block';

            // Explicitly clear the fields to be sure
            const nameInput = form.querySelector('#name');
            const emailInput = form.querySelector('#email');
            const messageInput = form.querySelector('#message');
            if (nameInput) nameInput.value = '';
            if (emailInput) emailInput.value = '';
            if (messageInput) messageInput.value = '';
        }
    }
});
