# Landing Page - Dr. David Checa Neurocirujano

Sitio web profesional para el Dr. David Checa, neurocirujano especializado en microneurocirugía y neuroendoscopia, con sede en Oruro, Bolivia.

## Características

- Diseño profesional con paleta oscura y acentos azules/celeste
- Completamente responsivo (móvil, tablet, escritorio)
- Sin backend - 100% estático
- Optimizado para GitHub Pages
- Integración con servicios externos (Calendly, Formspree, WhatsApp)

## Estructura del Proyecto

```
/
├── index.html              # Página principal
├── sobre-mi.html          # Biografía y formación
├── servicios.html         # Servicios neuroquirúrgicos
├── blog.html              # Listado de artículos
├── contacto.html          # Formulario y agendamiento
├── aviso-legal.html       # Términos legales
├── /blog/
│   ├── articulo1.html     # Artículo: Microneurocirugía
│   ├── articulo2.html     # Artículo: Hernia discal
│   └── articulo3.html     # Artículo: Tumores cerebrales
├── /css/
│   └── styles.css         # Estilos principales
├── /js/
│   └── main.js            # JavaScript vanilla
├── /images/               # Imágenes del sitio
├── /docs/                 # Documentos descargables
└── README.md
```

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 (Flexbox, Grid, Variables CSS)
- JavaScript Vanilla (sin frameworks)
- Google Fonts (Montserrat, Lato)
- Font Awesome 6 (iconos)
- Formspree (formulario de contacto)
- Calendly (agendamiento de citas)

## Configuración Inicial

### 1. Contenido Pendiente

Antes de publicar, debe proporcionar:

- [ ] Fotografía profesional del Dr. Checa (`images/dr-checa.jpg`)
- [ ] URL del video de YouTube (reemplazar en `index.html`)
- [ ] CV o brochure en PDF (`docs/cv-dr-checa.pdf`)
- [ ] Enlace de Calendly (reemplazar en `contacto.html`)
- [ ] ID de Formspree (reemplazar en `contacto.html`)
- [ ] Coordenadas para Google Maps (opcional)
- [ ] Logos de certificaciones (opcional)

### 2. Configurar Formspree

1. Crear cuenta en [Formspree.io](https://formspree.io)
2. Crear un nuevo formulario
3. Copiar el ID del formulario
4. En `contacto.html`, reemplazar:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 3. Configurar Calendly

1. Crear cuenta en [Calendly.com](https://calendly.com)
2. Configurar disponibilidad y tipos de citas
3. Copiar el enlace de agendamiento
4. En `contacto.html`, reemplazar:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_CALENDLY_LINK">
   ```

### 4. Video de YouTube

En `index.html`, reemplazar `VIDEO_ID` con el ID real del video:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID">
```

## Despliegue en GitHub Pages

### Paso 1: Crear Repositorio

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

### Paso 2: Activar GitHub Pages

1. Ir a Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / (root)
4. Guardar

### Paso 3: Configurar Dominio Personalizado

1. En Settings > Pages > Custom domain
2. Ingresar: `www.davidcheca-neurocirujano.lat`
3. Guardar

4. En el proveedor de dominio, configurar DNS:
   ```
   Tipo: CNAME
   Nombre: www
   Valor: USUARIO.github.io
   ```

## Cómo Agregar Nuevos Artículos al Blog

### 1. Crear el archivo HTML

Crear un nuevo archivo en `/blog/` (ej: `articulo4.html`) usando esta plantilla:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título del Artículo - Dr. David Checa</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <!-- Copiar header de otro artículo -->
    
    <article class="content-section">
        <div class="container" style="max-width: 800px;">
            <a href="../blog.html" class="btn btn-secondary" style="margin-bottom: 2rem; display: inline-block;">
                <i class="fas fa-arrow-left"></i> Volver al blog
            </a>
            
            <div class="blog-date">Fecha</div>
            <h1>Título del Artículo</h1>
            
            <!-- Contenido del artículo -->
            
        </div>
    </article>
    
    <!-- Copiar footer de otro artículo -->
    
    <script src="../js/main.js"></script>
</body>
</html>
```

### 2. Agregar al listado

En `blog.html`, agregar una nueva tarjeta:

```html
<div class="blog-card">
    <div class="blog-card-content">
        <div class="blog-date">Fecha</div>
        <h3>Título del Artículo</h3>
        <p>Extracto breve del artículo...</p>
        <a href="blog/articulo4.html" class="btn btn-secondary">Leer más <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

## Personalización de Colores

Para cambiar la paleta de colores, editar en `css/styles.css`:

```css
:root {
    --bg-primary: #0A0F1E;        /* Fondo principal */
    --bg-secondary: #141B2D;      /* Fondo secundario */
    --text-primary: #FFFFFF;      /* Texto principal */
    --text-secondary: #B8C1D9;    /* Texto secundario */
    --accent-blue: #00A8E8;       /* Acento azul */
    --accent-blue-dark: #0077BE;  /* Acento azul oscuro */
}
```

## Optimización de Imágenes

Antes de subir imágenes:

1. Redimensionar a tamaños apropiados:
   - Hero/Banner: 1920x1080px
   - Retrato: 800x800px
   - Thumbnails: 400x300px

2. Comprimir usando herramientas como:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)

3. Preferir formato WebP cuando sea posible

## SEO Básico

Cada página incluye meta tags. Para optimizar:

1. Personalizar meta description en cada página
2. Usar títulos descriptivos y únicos
3. Incluir palabras clave relevantes
4. Agregar texto alt a todas las imágenes

## Soporte de Navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Mantenimiento

### Actualizar contenido

1. Editar archivos HTML directamente
2. Commit y push a GitHub
3. Los cambios se reflejan automáticamente

### Backup

Realizar backups regulares del repositorio:
```bash
git clone https://github.com/USUARIO/REPOSITORIO.git backup-fecha
```

## Contacto

Para soporte técnico o consultas sobre el sitio web, contactar al desarrollador.

## Licencia

© 2025 Dr. David Checa. Todos los derechos reservados.
