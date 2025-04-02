// Sistema de autenticación con modal
const auth = {
    credentials: {
        username: 'Admin',
        password: 'Admin123'
    },

    isLoggedIn: false,

    init() {
        // Inicializar eventos del modal
        const loginBtn = document.querySelector('.login-btn');
        const modal = document.getElementById('loginModal');
        if (!modal) return; // Si no existe el modal, no continuar

        const closeBtn = modal.querySelector('.close-modal');
        const loginForm = document.getElementById('loginForm');

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

        // Manejar envío del formulario
        loginForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(e);
        });

        // Manejar toggle de contraseña
        const togglePassword = document.querySelector('.toggle-password');
        togglePassword?.addEventListener('click', this.togglePasswordVisibility);

        // Verificar si ya está autenticado
        this.checkAuth();
    },

    handleLogin(e) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === this.credentials.username && 
            password === this.credentials.password) {
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
            
            // Cerrar modal
            const modal = document.getElementById('loginModal');
            modal?.classList.remove('show');
            
            // Actualizar UI
            this.updateUI();
            
            // Redirigir a la página de noticias
            window.location.href = 'registro.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    },

    checkAuth() {
        if (localStorage.getItem('isLoggedIn')) {
            this.isLoggedIn = true;
            this.updateUI();
        }

        // Si estamos en la página de registro y no está autenticado, redirigir
        if (window.location.pathname.includes('registro.html') && !this.isLoggedIn) {
            window.location.href = 'index.html';
        }
    },

    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    },

    updateUI() {
        const authButtons = document.querySelector('.auth-buttons');
        if (!authButtons) return;

        if (this.isLoggedIn) {
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
        } else {
            authButtons.innerHTML = `
                <a href="#" class="login-btn">
                    <i class="fas fa-sign-in-alt"></i>
                    Iniciar Sesión
                </a>
            `;
        }
    },

    togglePasswordVisibility(e) {
        const input = e.target.closest('.password-input').querySelector('input');
        const icon = e.target.closest('.toggle-password').querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    }
};

// Exportar el módulo de autenticación
if (typeof module !== 'undefined' && module.exports) {
    module.exports = auth;
} 