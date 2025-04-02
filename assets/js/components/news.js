export class NewsManager {
    constructor() {
        this.newsContainer = document.querySelector('.news-grid');
    }
    
    async loadNews() {
        try {
            // Aquí podrías cargar noticias desde una API
            const news = await this.fetchNews();
            this.renderNews(news);
        } catch (error) {
            console.error('Error al cargar noticias:', error);
        }
    }
    
    renderNews(newsItems) {
        this.newsContainer.innerHTML = newsItems
            .map(item => this.createNewsCard(item))
            .join('');
    }
    
    createNewsCard(news) {
        return `
            <article class="news-card">
                <img src="${news.image}" alt="${news.title}">
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                    <a href="${news.url}" class="read-more">Leer más</a>
                </div>
            </article>
        `;
    }
} 