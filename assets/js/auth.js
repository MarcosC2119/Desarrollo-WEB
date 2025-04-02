/**
 * Sistema de Autenticación
 * Implementa un patrón Module para manejar la autenticación de usuarios
 * y la gestión del estado de la sesión
 */
const auth = {
    // Credenciales de administrador (en un caso real, esto estaría en el backend)
    credentials: {
        username: 'Admin',
        password: 'Admin123'
    },

    isLoggedIn: false,

    /**
     * Inicializa el sistema de autenticación
     * Configura los event listeners y verifica el estado de la sesión
     */
    init() {
        this.setupModalListeners();
        this.setupFormListeners();
        this.checkAuth();
    },

    /**
     * Configura los listeners del modal de login
     */
    setupModalListeners() {
        const loginBtn = document.querySelector('.login-btn');
        const modal = document.getElementById('loginModal');
        if (!modal) return;

        const closeBtn = modal.querySelector('.close-modal');

        // Abrir modal
        loginBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('show');
        });

        // Cerrar modal
        closeBtn?.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Cerrar modal al hacer clic fuera
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    },

    /**
     * Configura los listeners del formulario de login
     */
    setupFormListeners() {
        const loginForm = document.getElementById('loginForm');
        const togglePassword = document.querySelector('.toggle-password');

        loginForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(e);
        });

        togglePassword?.addEventListener('click', this.togglePasswordVisibility);
    },

    /**
     * Maneja el proceso de login
     * @param {Event} e - Evento del formulario
     */
    handleLogin(e) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (this.validateCredentials(username, password)) {
            this.loginSuccess();
        } else {
            this.loginError();
        }
    },

    /**
     * Valida las credenciales del usuario
     * @param {string} username - Nombre de usuario
     * @param {string} password - Contraseña
     * @returns {boolean} - Resultado de la validación
     */
    validateCredentials(username, password) {
        return username === this.credentials.username && 
               password === this.credentials.password;
    },

    /**
     * Maneja el proceso de login exitoso
     */
    loginSuccess() {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        
        const modal = document.getElementById('loginModal');
        modal?.classList.remove('show');
        
        this.updateUI();
        
        // Redirigir a la página de noticias
        window.location.href = 'registro.html';
    },

    /**
     * Maneja el error de login
     */
    loginError() {
        alert('Usuario o contraseña incorrectos');
    },

    /**
     * Verifica el estado de autenticación
     */
    checkAuth() {
        if (localStorage.getItem('isLoggedIn')) {
            this.isLoggedIn = true;
            this.updateUI();
        }

        // Proteger la página de registro
        if (window.location.pathname.includes('registro.html') && !this.isLoggedIn) {
            window.location.href = 'index.html';
        }
    },

    /**
     * Cierra la sesión del usuario
     */
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    },

    /**
     * Actualiza la interfaz según el estado de autenticación
     */
    updateUI() {
        const authButtons = document.querySelector('.auth-buttons');
        if (!authButtons) return;

        if (this.isLoggedIn) {
            // Si estamos en registro.html, solo mostrar el botón de cerrar sesión
            if (window.location.pathname.includes('registro.html')) {
                authButtons.innerHTML = `
                    <a href="#" class="login-btn" onclick="auth.logout()" style="margin: 0 auto;">
                        <i class="fas fa-sign-out-alt"></i>
                        Cerrar Sesión
                    </a>
                `;
            } else {
                // En index.html mostrar ambos botones
                authButtons.innerHTML = `
                    <a href="registro.html" class="register-btn">
                        <i class="fas fa-plus-circle"></i>
                        Nueva Noticia
                    </a>
                    <a href="#" class="login-btn" onclick="auth.logout()">
                        <i class="fas fa-sign-out-alt"></i>
                        Cerrar Sesión
                    </a>
                `;
            }
        } else {
            authButtons.innerHTML = `
                <a href="#" class="login-btn">
                    <i class="fas fa-sign-in-alt"></i>
                    Iniciar Sesión
                </a>
            `;
        }
    },

    /**
     * Alterna la visibilidad de la contraseña
     * @param {Event} e - Evento del botón
     */
    togglePasswordVisibility(e) {
        const input = e.target.closest('.password-input').querySelector('input');
        const icon = e.target.closest('.toggle-password').querySelector('i');
        
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    }
};

// Exportar el módulo de autenticación
if (typeof module !== 'undefined' && module.exports) {
    module.exports = auth;
} 