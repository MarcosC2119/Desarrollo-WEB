import { validatePassword } from '../utils/validation.js';

export class RegistrationForm {
    constructor() {
        this.form = document.querySelector('.registration-form');
        this.initializeForm();
    }
    
    initializeForm() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = this.getFormData();
        const validationResult = this.validateForm(formData);
        
        if (!validationResult.isValid) {
            alert(validationResult.message);
            return;
        }
        
        try {
            await this.submitForm(formData);
            this.handleSuccess();
        } catch (error) {
            this.handleError(error);
        }
    }
    
    getFormData() {
        return {
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirm-password').value,
            // Otros campos...
        };
    }
    
    validateForm(data) {
        return validatePassword(data.password, data.confirmPassword);
    }
    
    handleSuccess() {
        alert(CONFIG.MESSAGES.REGISTRATION_SUCCESS);
        this.form.reset();
        window.location.href = CONFIG.HOME_URL;
    }
    
    handleError(error) {
        console.error('Error en el registro:', error);
        alert('Ocurrió un error durante el registro');
    }
} 