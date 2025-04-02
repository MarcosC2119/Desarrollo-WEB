// Funciones de validación
export const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        return { 
            isValid: false, 
            message: CONFIG.MESSAGES.PASSWORD_MISMATCH 
        };
    }
    
    if (password.length < CONFIG.PASSWORD_MIN_LENGTH) {
        return { 
            isValid: false, 
            message: CONFIG.MESSAGES.PASSWORD_TOO_SHORT 
        };
    }
    
    return { isValid: true };
}; 