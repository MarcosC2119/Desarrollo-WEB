# El Diario Digital

Un sitio web de noticias moderno y responsivo construido con HTML, CSS y JavaScript vanilla.

DEMO: https://teclab.uct.cl/~marcos.castro/proyectos/Desarrollo-WEB/index.html

## 🚀 Características

- Sistema de búsqueda en tiempo real
- Filtrado por categorías
- Diseño responsivo
- Carga lazy de imágenes
- Sistema de autenticación
- Menú móvil adaptativo
- Sistema CRUD para noticias digitales
- Validación de datos
- Tiempo de carga inicial < 2 segundos
- Soporte para navegadores modernos

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome para iconos
- LocalStorage para persistencia
- Sistema de Variables CSS
- Metodología BEM
- Patrones de Diseño: Module, Observer
- ARIA para accesibilidad

## 📊 Especificaciones Técnicas

### Requerimientos del Sistema

#### Funcionales
- **RF-01: Gestión de Noticias**
  - CRUD completo para noticias
  - Visualización en grid responsive
  - Filtrado por categorías
  - Generación de JSON estructurado

- **RF-02: Sistema de Autenticación**
  - Login mediante modal
  - Validación de credenciales
  - Gestión de sesión
  - Protección de rutas

#### No Funcionales
- Tiempo de carga inicial < 2 segundos
- First Contentful Paint < 1.5 segundos
- Time to Interactive < 3 segundos
- Diseño responsive (320px - 1920px)

### Estructura de Datos

```javascript
interface NoticiaDTO {
    id: number;          // Identificador único
    titulo: string;      // Longitud máx: 100
    descripcion: string; // Longitud máx: 500
    imagen: string;      // URL validada
    categoria: string;   // Enum predefinido
    fecha: string;       // ISO 8601
    link: string;        // URL validada
    destacada: boolean;  // Flag booleano
}
```

## 📈 Métricas de Rendimiento

| Métrica                | Objetivo | Actual |
|------------------------|----------|---------|
| First Contentful Paint | 1.5s     | 1.2s    |
| Time to Interactive    | 3.0s     | 2.8s    |
| Layout Shift          | < 0.1    | 0.08    |

## 📁 Estructura del Proyecto

```
Desarrollo-WEB/
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── news.css
│   │   └── search.css
│   ├── js/
│   │   ├── main.js
│   │   ├── search.js
│   │   └── auth.js
│   └── images/
├── index.html
└── README.md
```

## 🚦 Componentes Principales

### 1. Sistema de Noticias (`newsManager`)
- Gestión de noticias y categorías
- Renderizado dinámico de contenido
- Filtrado por categorías

### 2. Sistema de Búsqueda (`searchSystem`)
- Búsqueda en tiempo real
- Resaltado de términos
- Interfaz intuitiva

### 3. Autenticación (`auth`)
- Sistema de inicio de sesión
- Gestión de sesiones

## 🔧 Instalación y Configuración

1. Asegúrate de tener instalado:
   - Un navegador web moderno
   - Un editor de código (recomendado: VS Code)
   - Live Server (extensión de VS Code)

2. Sigue estos pasos:
   ```bash
   # Clonar el repositorio
   git clone https://github.com/tu-usuario/Desarrollo-WEB.git
   
   # Navegar al directorio
   cd Desarrollo-WEB
   
   # Abrir con VS Code
   code .
   ```

3. Inicia Live Server desde VS Code

## 💻 Uso

1. Clona el repositorio
```bash
git clone https://github.com/tu-usuario/Desarrollo-WEB.git
```

2. Abre `index.html` en tu navegador

3. Para desarrollo, se recomienda usar Live Server en VS Code

## 🧪 Pruebas

- Abre las DevTools del navegador (F12)
- Verifica la consola para posibles errores
- Prueba la responsividad en diferentes dispositivos
- Comprueba el funcionamiento del sistema de búsqueda

## 🔐 Seguridad

- Validación de inputs
- Sanitización de datos
- Protección XSS
- Gestión segura de sesiones

## 🔄 Mantenimiento

- Semantic Versioning 2.0.0
- Conventional Commits
- Changelog automatizado
- Procedimientos de backup y rollback

## 📝 Pendientes

- [ ] Implementar sistema de comentarios
- [ ] Añadir dark mode
- [ ] Mejorar SEO
- [ ] Implementar PWA

## 👥 Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT License
