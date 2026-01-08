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
    const form = document.querySelector('form');
    if (form) {
        form.reset();
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('form-success')) {
        const successMessage = document.getElementById('form-success');
        if (form && successMessage) {
            form.style.display = 'none';
            successMessage.style.display = 'block';
        }
    }
});
