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
                        <div class="category-filters">
                            <!-- Los filtros se generarán dinámicamente -->
                        </div>
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

// Cargar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar header y footer
    ['header', 'footer'].forEach(id => {
        const element = document.getElementById(id);
        if (element && components[id]) {
            element.innerHTML = components[id];
        }
    });

    // Formulario de registro
    const registrationForm = document.querySelector('.registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            alert('¡Registro exitoso!');
            registrationForm.reset();
            window.location.href = 'index.html';
        });
    }

    // Desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Inicializar menú móvil
    createMobileMenu();

    // Funcionalidad de noticias
    const newsManager = {
        // Obtener todas las noticias
        getAllNoticias: () => noticias,

        // Obtener noticias destacadas
        getDestacadas: () => noticias.filter(noticia => noticia.destacada),

        // Obtener noticias por categoría
        getByCategoria: (categoria) => noticias.filter(noticia => noticia.categoria === categoria),

        // Formatear fecha
        formatearFecha: (fecha) => {
            return new Date(fecha).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },

        // Generar HTML de una noticia
        generarNoticiaHTML: (noticia) => `
            <article class="news-card">
                <img src="${noticia.imagen}" alt="${noticia.titulo}">
                <div class="news-content">
                    <span class="news-category">${noticia.categoria}</span>
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descripcion}</p>
                    <div class="news-footer">
                        <span class="news-date">${newsManager.formatearFecha(noticia.fecha)}</span>
                        <a href="${noticia.link}" class="read-more" target="_blank">Leer más</a>
                    </div>
                </div>
            </article>
        `,

        // Renderizar noticias en el grid
        renderNoticias: (noticiasArray = noticias) => {
            const newsGrid = document.querySelector('.news-grid');
            if (!newsGrid) return;

            newsGrid.innerHTML = noticiasArray
                .map(noticia => newsManager.generarNoticiaHTML(noticia))
                .join('');
        },

        // Inicializar filtros de categorías
        initFiltros: () => {
            const categorias = [...new Set(noticias.map(noticia => noticia.categoria))];
            const filtrosContainer = document.querySelector('.category-filters');
            if (!filtrosContainer) return;

            const todosBtn = document.createElement('a');
            todosBtn.textContent = 'Todas';
            todosBtn.className = 'nav-link active';
            todosBtn.href = '#';
            todosBtn.onclick = (e) => {
                e.preventDefault();
                document.querySelectorAll('.category-filters .nav-link').forEach(btn => btn.classList.remove('active'));
                todosBtn.classList.add('active');
                newsManager.renderNoticias();
            };
            filtrosContainer.appendChild(todosBtn);

            categorias.forEach(categoria => {
                const link = document.createElement('a');
                link.textContent = categoria;
                link.className = 'nav-link';
                link.href = '#';
                link.onclick = (e) => {
                    e.preventDefault();
                    document.querySelectorAll('.category-filters .nav-link').forEach(btn => btn.classList.remove('active'));
                    link.classList.add('active');
                    const noticiasFiltradas = newsManager.getByCategoria(categoria);
                    newsManager.renderNoticias(noticiasFiltradas);
                };
                filtrosContainer.appendChild(link);
            });
        }
    };

    newsManager.renderNoticias();
    newsManager.initFiltros();
});

// Menú móvil
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            const menuButton = document.createElement('button');
            menuButton.classList.add('mobile-menu-btn');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
            navbar.insertBefore(menuButton, navLinks);
            
            menuButton.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });
        }
    } else {
        const existingButton = document.querySelector('.mobile-menu-btn');
        if (existingButton) {
            existingButton.remove();
        }
        if (navLinks) {
            navLinks.classList.remove('show');
        }
    }
};

// Escuchar cambios de tamaño de ventana
window.addEventListener('resize', createMobileMenu); 