/**
 * Sistema de búsqueda
 * Implementa la funcionalidad de búsqueda de noticias
 */
const searchSystem = {
    init() {
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');
        this.setupListeners();
    },

    setupListeners() {
        this.searchButton.addEventListener('click', () => this.search());
        this.searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.search();
        });
    },

    search() {
        const query = this.searchInput.value.trim().toLowerCase();
        if (!query) {
            newsManager.renderNoticias(noticias);
            return;
        }

        const results = noticias.filter(noticia => 
            noticia.titulo.toLowerCase().includes(query) ||
            noticia.descripcion.toLowerCase().includes(query) ||
            noticia.categoria.toLowerCase().includes(query)
        );

        this.displayResults(results, query);
    },

    displayResults(results, query) {
        const newsGrid = document.querySelector('.news-grid');
        if (!newsGrid) return;

        if (results.length === 0) {
            newsGrid.innerHTML = `
                <div class="no-results">
                    <h3>No se encontraron resultados para: "${query}"</h3>
                    <p>Intenta con otros términos de búsqueda</p>
                </div>`;
            return;
        }

        // Limpiar filtros activos
        document.querySelectorAll('.category-filters .nav-link')
            .forEach(btn => btn.classList.remove('active'));

        newsManager.renderNoticias(results);
    }
};

// Auto-inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    searchSystem.init();
});