/**
 * Base de datos de noticias
 * Estructura de datos principal para el contenido del sitio
 * @typedef {Object} Noticia
 * @property {number} id - Identificador único de la noticia
 * @property {string} titulo - Título de la noticia
 * @property {string} descripcion - Descripción o contenido de la noticia
 * @property {string} imagen - URL de la imagen asociada
 * @property {string} link - URL de la noticia completa
 * @property {string} fecha - Fecha de publicación (YYYY-MM-DD)
 * @property {string} categoria - Categoría de la noticia
 * @property {boolean} destacada - Indica si es una noticia destacada
 */

/**
 * Array de noticias del sitio
 * @type {Noticia[]}
 */
const noticias = [
    {
        id: 1,
        titulo: "Tres Nombres Comunes podcast",
        descripcion: "Bienvenidos a \"Motores en Acción\", el podcast donde desglosamos los secretos de los motores de bases de datos. ¡Prepárate para aprender y optimizar tus proyectos!...",
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
        link: "https://www.trendtic.cl/2024/03/chileno-gana-el-titulo-de-mejor-programador-del-mundo-en-tcs-codevita-2024/",
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

/**
 * Validación de la estructura de las noticias
 * Asegura que todas las noticias cumplan con el formato requerido
 */
function validarNoticias() {
    const camposRequeridos = ['id', 'titulo', 'descripcion', 'imagen', 'link', 'fecha', 'categoria', 'destacada'];
    
    noticias.forEach(noticia => {
        camposRequeridos.forEach(campo => {
            if (!(campo in noticia)) {
                console.error(`Error: La noticia con ID ${noticia.id} no tiene el campo requerido "${campo}"`);
            }
        });

        // Validar tipos de datos
        if (typeof noticia.id !== 'number') console.error(`Error: ID debe ser número en noticia ${noticia.id}`);
        if (typeof noticia.titulo !== 'string') console.error(`Error: Título debe ser texto en noticia ${noticia.id}`);
        if (typeof noticia.descripcion !== 'string') console.error(`Error: Descripción debe ser texto en noticia ${noticia.id}`);
        if (typeof noticia.destacada !== 'boolean') console.error(`Error: Destacada debe ser booleano en noticia ${noticia.id}`);
        
        // Validar fecha
        if (!/^\d{4}-\d{2}-\d{2}$/.test(noticia.fecha)) {
            console.error(`Error: Formato de fecha inválido en noticia ${noticia.id}`);
        }
    });
}

// Ejecutar validación en desarrollo
if (process.env.NODE_ENV !== 'production') {
    validarNoticias();
}

/**
 * Exportar las noticias y tipos para uso en otros módulos
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        noticias,
        validarNoticias
    };
} 