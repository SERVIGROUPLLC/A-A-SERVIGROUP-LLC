/**
 * Form Module
 * Handles contact form validation.
 */

export function initForm() {
    const form = document.querySelector('.contact__form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const phone = form.querySelector('#phone');
        let isValid = true;

        if (name.value.trim().length < 2) {
            showError(name, 'Please enter your name');
            isValid = false;
        } else {
            clearError(name);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(email);
        }

        if (!isValid) e.preventDefault();
    });

    function showError(input, message) {
        const formGroup = input.closest('.form__group');
        let errorElement = formGroup.querySelector('.form__error');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'form__error';
            errorElement.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
        input.style.borderColor = '#ef4444';
    }

    function clearError(input) {
        const formGroup = input.closest('.form__group');
        const errorElement = formGroup.querySelector('.form__error');
        if (errorElement) errorElement.remove();
        input.style.borderColor = '';
    }
}
