// Configuración de constantes
const DOM_ELEMENTS = {
    modal: document.getElementById('loginModal'),
    loginBtn: document.querySelector('.login-btn'),
    closeBtn: document.querySelector('.close'),
    loginForm: document.getElementById('loginForm'),
    recoverBtn: document.querySelector('.recover-btn'),
    registrationForm: document.querySelector('.registration-form'),
    navbar: document.querySelector('.navbar'),
    navLinks: document.querySelector('.nav-links')
};

// Módulo de autenticación
const AuthModule = {
    init() {
        this.setupLoginModal();
        this.setupRegistrationForm();
    },

    setupLoginModal() {
        // Abrir modal
        DOM_ELEMENTS.loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleModal(true);
        });

        // Cerrar modal con botón X
        DOM_ELEMENTS.closeBtn.addEventListener('click', () => {
            this.toggleModal(false);
        });

        // Cerrar modal al hacer clic fuera
        window.addEventListener('click', (e) => {
            if (e.target === DOM_ELEMENTS.modal) {
                this.toggleModal(false);
            }
        });

        // Manejar envío del formulario
        DOM_ELEMENTS.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Recuperar contraseña
        DOM_ELEMENTS.recoverBtn.addEventListener('click', this.handlePasswordRecovery);
    },

    toggleModal(show) {
        DOM_ELEMENTS.modal.style.display = show ? 'block' : 'none';
        document.body.style.overflow = show ? 'hidden' : 'auto';
    },

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Aquí iría la lógica de autenticación
        alert('Inicio de sesión exitoso');
        DOM_ELEMENTS.loginForm.reset();
        this.toggleModal(false);
    },

    handlePasswordRecovery() {
        const email = document.getElementById('loginEmail').value;
        if (!email) {
            alert('Por favor, ingrese su correo electrónico para recuperar la contraseña');
            return;
        }
        alert('Se ha enviado un enlace de recuperación a su correo electrónico');
    },

    setupRegistrationForm() {
        if (DOM_ELEMENTS.registrationForm) {
            DOM_ELEMENTS.registrationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this.validateRegistration()) {
                    alert('¡Registro exitoso!');
                    DOM_ELEMENTS.registrationForm.reset();
                    window.location.href = 'index.html';
                }
            });
        }
    },

    validateRegistration() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return false;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return false;
        }

        return true;
    }
};

// Módulo de navegación
const NavigationModule = {
    init() {
        this.setupSmoothScrolling();
        this.setupMobileMenu();
    },

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },

    setupMobileMenu() {
        const createMobileMenu = () => {
            if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
                const menuButton = document.createElement('button');
                menuButton.classList.add('mobile-menu-btn');
                menuButton.innerHTML = '<i class="fas fa-bars"></i>';
                
                DOM_ELEMENTS.navbar.insertBefore(menuButton, DOM_ELEMENTS.navLinks);
                
                menuButton.addEventListener('click', () => {
                    DOM_ELEMENTS.navLinks.classList.toggle('show');
                });
            }
        };

        window.addEventListener('load', createMobileMenu);
        window.addEventListener('resize', createMobileMenu);
    }
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    AuthModule.init();
    NavigationModule.init();
}); 