let isFormSubmitted = false; // Flag para controlar o estado do envio

// Validation functions
const validators = {
    name: (value) => value.trim().length >= 2,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: (value) => value.trim().length >= 10,
};

// Debounce function to limit validation frequency
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to update field status
function updateFieldStatus(field, isValid) {
    const errorElement = document.getElementById(`${field.id}Error`);
    const validationIcon = field.parentElement.querySelector('.validation-icon');

    field.classList.remove('success', 'error');
    field.classList.add(isValid ? 'success' : 'error');

    if (validationIcon) {
        validationIcon.textContent = isValid ? '✓' : '✗';
        validationIcon.classList.remove('success', 'error');
        validationIcon.classList.add(isValid ? 'success' : 'error');
    }

    if (errorElement) {
        errorElement.style.display = isValid ? 'none' : 'block';
    }
}

// Progressive validation handler
const validateField = debounce((field) => {
    if (isFormSubmitted) return; // Não valida se o formulário já foi enviado

    const validator = validators[field.id];
    if (!validator) return;

    const isValid = validator(field.value);
    updateFieldStatus(field, isValid);
}, 300);

// Add validation listeners to form fields
document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach((field) => {
    field.addEventListener('input', () => validateField(field));
    field.addEventListener('blur', () => validateField(field));
});

// Form submission handler
document.getElementById('gdprForm').addEventListener('submit', function (e) {
    e.preventDefault();

    if (isFormSubmitted) return; // Impede reenvio enquanto está no estado de sucesso

    let hasErrors = false;

    // Validate all required fields
    Object.entries(validators).forEach(([fieldName, validator]) => {
        const field = document.getElementById(fieldName);
        const isValid = validator(field.value);
        updateFieldStatus(field, isValid);
        if (!isValid) hasErrors = true;
    });

    if (!hasErrors) {
        isFormSubmitted = true; // Marca o formulário como enviado

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Aqui você enviaria os dados para o servidor
        console.log('Form data:', formData);

        // Mostra a mensagem de sucesso
        document.getElementById('successMessage').style.display = 'block';

        // Reseta o formulário e estados de validação
        this.reset();
        document.querySelectorAll('.validation-icon').forEach((icon) => {
            icon.classList.remove('success', 'error');
            icon.style.display = 'none';
        });
        document.querySelectorAll('input, textarea').forEach((field) => {
            field.classList.remove('success', 'error');
        });

        // Esconde a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
            isFormSubmitted = false; // Permite novo envio após esconder a mensagem de sucesso
        }, 5000);
    }
});
