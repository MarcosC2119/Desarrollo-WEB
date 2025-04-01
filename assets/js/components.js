// Componentes reutilizables
const components = {
    header: `
        <header>
            <nav class="navbar">
                <div class="container">
                    <div class="logo">
                        <h1>Diario El Digital</h1>
                    </div>
                    <div class="nav-links">
                        <a href="index.html" class="nav-link">Inicio</a>
                        <a href="#" class="nav-link">Noticias</a>
                        <a href="#" class="nav-link">Deportes</a>
                        <a href="#" class="nav-link">Cultura</a>
                        <a href="#" class="nav-link">Tecnología</a>
                    </div>
                    <div class="auth-buttons">
                        <a href="#" class="login-btn">Iniciar Sesión</a>
                        <a href="registro.html" class="register-btn">Crear Cuenta</a>
                    </div>
                </div>
            </nav>
        </header>
    `,
    
    footer: `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Sobre Nosotros</h3>
                    <p>El Diario Digital - Tu fuente confiable de noticias</p>
                </div>
                <div class="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="#">Noticias</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Síguenos</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Diario El Digital. Todos los derechos reservados.</p>
            </div>
        </footer>
    `
};

// Función para cargar componentes
function loadComponent(componentName) {
    const element = document.getElementById(componentName);
    if (element && components[componentName]) {
        element.innerHTML = components[componentName];
    }
}

// Función para inicializar la navegación activa
function initNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
}

// Cargar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header');
    loadComponent('footer');
    initNavigation();
}); 