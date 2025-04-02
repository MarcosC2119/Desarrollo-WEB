const noticias = [
    {
        id: 1,
        titulo: "Tres Nombres Comunes podcast",
        descripcion: "Bienvenidos a \"Tres Nombres Comunes\", el podcast donde desglosamos los secretos de los motores de bases de datos. ¡Prepárate para aprender y optimizar tus proyectos!...",
        imagen: "assets/images/noticia1.jpg",
        link: "https://www.youtube.com/watch?v=zdRo7oSyA00&list=LL",
        fecha: "2024-04-02",
        categoria: "Tecnología",
        destacada: true
    },
    {
        id: 2,
        titulo: "Tesla presenta a Optimus",
        descripcion: "El robot humanoide de Tesla, se convirtió en el protagonista del evento de presentación del Cybercab y promete revolucionar los servicios de asistencia empresarial y doméstica en todo el mundo....",
        imagen: "assets/images/imagen1.jpg",
        link: "https://es.wired.com/articulos/tesla-presenta-a-optimus-su-robot-humanoide-que-puede-hacer-cuanto-costara-y-que-tan-autonomo-es",
        fecha: "2024-04-01",
        categoria: "Tecnología",
        destacada: true
    },
    {
        id: 3,
        titulo: "Campeón chileno TCS CodeVita",
        descripcion: "El estudiante chileno Martín Andrighetti fue el ganador de la versión 2024 de TCS CodeVita, el mayor concurso de programación del mundo...",
        imagen: "assets/images/imagen3.jpg",
        link: "#",
        fecha: "2024-03-30",
        categoria: "Educación",
        destacada: true
    }
];

// Exportar las noticias para que sean accesibles desde otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = noticias;
} 