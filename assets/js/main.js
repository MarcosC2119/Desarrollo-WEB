/**
 * @fileoverview Archivo principal que contiene la lógica core del sitio de noticias
 * @version 1.0.0
 * @author Tu Nombre
 * @copyright 2024
 */

/**
 * Componentes principales de la interfaz
 * @namespace
 * @property {string} header - Template del header
 * @property {string} footer - Template del footer
 */
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
                        <div class="search-container">
                            <input type="search" id="searchInput" placeholder="Buscar noticias...">
                            <button id="searchButton">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <div class="category-filters">
                            <!-- Filtros dinámicos -->
                        </div>
                    </div>
                    <div class="auth-buttons">
                        <a href="#" class="login-btn">
                            <i class="fas fa-sign-in-alt"></i>
                            Iniciar Sesión
                        </a>
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
                <p>&copy; ${new Date().getFullYear()} Diario El Digital</p>
            </div>
        </footer>
    `
};

/**
 * Gestor principal de noticias
 * @namespace
 */
const newsManager = {
    /**
     * Obtiene todas las noticias
     * @returns {Array<Object>} Array de noticias
     */
    getAllNoticias: () => noticias,

    /**
     * Obtiene las noticias destacadas
     * @returns {Array<Object>} Array de noticias destacadas
     */
    getDestacadas: () => noticias.filter(noticia => noticia.destacada),

    /**
     * Filtra noticias por categoría
     * @param {string} categoria - Categoría a filtrar
     * @returns {Array<Object>} Noticias filtradas
     */
    getByCategoria: (categoria) => noticias.filter(noticia => noticia.categoria === categoria),

    /**
     * Formatea una fecha al formato español
     * @param {Date|string} fecha - Fecha a formatear
     * @returns {string} Fecha formateada
     */
    formatearFecha: (fecha) => {
        return new Date(fecha).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    /**
     * Genera el HTML para una noticia
     * @param {Object} noticia - Objeto noticia
     * @returns {string} HTML generado
     */
    generarNoticiaHTML: (noticia) => `
        <article class="news-card">
            <img src="${noticia.imagen}" alt="${noticia.titulo}" loading="lazy">
            <div class="news-content">
                <span class="news-category">${noticia.categoria}</span>
                <h3>${noticia.titulo}</h3>
                <p>${noticia.descripcion}</p>
                <div class="news-footer">
                    <span class="news-date">${newsManager.formatearFecha(noticia.fecha)}</span>
                    <a href="${noticia.link}" class="read-more" target="_blank" rel="noopener">
                        Leer más
                    </a>
                </div>
            </div>
        </article>
    `,

    /**
     * Renderiza las noticias en el grid
     * @param {Array<Object>} [noticiasArray=noticias] - Array de noticias a renderizar
     */
    renderNoticias: (noticiasArray = noticias) => {
        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;

        newsGrid.innerHTML = noticiasArray
            .map(noticia => newsManager.generarNoticiaHTML(noticia))
            .join('');
    },

    /**
     * Inicializa los filtros de categorías
     */
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
            document.querySelectorAll('.category-filters .nav-link')
                .forEach(btn => btn.classList.remove('active'));
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
                document.querySelectorAll('.category-filters .nav-link')
                    .forEach(btn => btn.classList.remove('active'));
                link.classList.add('active');
                newsManager.renderNoticias(newsManager.getByCategoria(categoria));
            };
            filtrosContainer.appendChild(link);
        });
    }
};

/**
 * Crea e inicializa el menú móvil
 * @function
 */
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.setAttribute('aria-label', 'Menú móvil');
    
    mobileMenuBtn.addEventListener('click', () => {
        navbar.classList.toggle('mobile-active');
    });
    
    navbar.insertBefore(mobileMenuBtn, navbar.firstChild);
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar componentes
    ['header', 'footer'].forEach(id => {
        const element = document.getElementById(id);
        if (element && components[id]) {
            element.innerHTML = components[id];
        }
    });

    createMobileMenu();

    // Inicializar autenticación
    if (typeof auth !== 'undefined') {
        auth.init();
    }

    // Inicializar noticias en la página principal
    if (document.querySelector('.news-grid')) {
        newsManager.renderNoticias();
        newsManager.initFiltros();
    }
});