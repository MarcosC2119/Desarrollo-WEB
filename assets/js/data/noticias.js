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
    },
    {
        id: 4,
        titulo: "¿Se adelanta o se atrasa el reloj por el cambio de hora en Chile?",
        descripcion: "Este fin de semana se realiza el primer cambio de hora en Chile, momento que marca el inicio del horario de invierno y determina el nuevo escenario en gran parte del territorio nacional.",
        imagen: "https://www.latercera.com/resizer/v2/MMYPUYV3ZZHOFAFGWLWMEU3BIQ.jpg?quality=80&smart=true&auth=ebf0f9a281e1f32e946fe7ed9c6b38d37f57eac7bc09a99ce53d93407e96fca6&width=690&height=502",
        categoria: "Cultura",
        fecha: "2025-03-31",
        link: "https://www.latercera.com/servicios/noticia/se-adelanta-o-se-atrasa-el-reloj-por-el-cambio-de-hora-en-chile/",
        destacada: false
      }
];

// Exportar las noticias para que sean accesibles desde otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = noticias;
} 