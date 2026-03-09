# Guía de Configuración - Landing Page Dr. David Checa

## Checklist de Configuración

### 1. Contenido Multimedia

- [ ] **Fotografía del Dr. Checa**
  - Ubicación: `images/dr-checa.jpg`
  - Tamaño recomendado: 800x800px
  - Formato: JPG

- [ ] **Video de YouTube**
  - Archivo: `index.html` (línea ~50)
  - Buscar: `VIDEO_ID`
  - Reemplazar con el ID real del video de YouTube
  - Ejemplo: Si la URL es `https://www.youtube.com/watch?v=ABC123`, el ID es `ABC123`

- [ ] **CV o Brochure**
  - Ubicación: `docs/cv-dr-checa.pdf`
  - Formato: PDF
  - Tamaño máximo: 5MB

### 2. Formulario de Contacto (Formspree)

**Pasos:**

1. Ir a https://formspree.io
2. Crear cuenta gratuita
3. Crear un nuevo formulario
4. Copiar el ID del formulario (formato: `xyzabc123`)
5. Abrir `contacto.html`
6. Buscar: `YOUR_FORM_ID`
7. Reemplazar con el ID real
8. Ejemplo: `https://formspree.io/f/xyzabc123`

**Configuración recomendada en Formspree:**
- Activar notificaciones por email
- Configurar mensaje de confirmación
- Opcional: Activar protección anti-spam

### 3. Agendamiento de Citas (Calendly)

**Pasos:**

1. Ir a https://calendly.com
2. Crear cuenta (plan gratuito disponible)
3. Configurar disponibilidad horaria
4. Crear tipo de evento: "Consulta Neurocirugía" (30-60 min)
5. Copiar el enlace de agendamiento
6. Abrir `contacto.html`
7. Buscar: `YOUR_CALENDLY_LINK`
8. Reemplazar con el enlace completo
9. Ejemplo: `https://calendly.com/dr-checa/consulta`

**Configuración recomendada en Calendly:**
- Horario: Lunes a Viernes, 9:00-18:00
- Buffer time: 15 minutos entre citas
- Preguntas personalizadas: Motivo de consulta, síntomas
- Recordatorios automáticos por email

### 4. Google Maps (Opcional)

Si desea mostrar la ubicación exacta:

1. Ir a https://www.google.com/maps
2. Buscar la dirección del consultorio
3. Clic en "Compartir" > "Insertar un mapa"
4. Copiar el código iframe
5. Abrir `contacto.html`
6. Reemplazar el iframe existente con el nuevo código

### 5. Información de Contacto

Verificar que los siguientes datos sean correctos en TODAS las páginas:

- [ ] Teléfono: +591 67204989
- [ ] WhatsApp: 59167204989
- [ ] Ubicación: Oruro, Bolivia
- [ ] Horario de atención

**Archivos a revisar:**
- `index.html`
- `sobre-mi.html`
- `servicios.html`
- `blog.html`
- `contacto.html`
- `aviso-legal.html`
- `404.html`

### 6. Contenido Textual

Actualizar con información real del Dr. Checa:

- [ ] **Biografía** (`sobre-mi.html`)
  - Trayectoria profesional
  - Formación académica
  - Certificaciones
  - Experiencia

- [ ] **Testimonios** (`index.html`)
  - Reemplazar testimonios de ejemplo
  - Obtener consentimiento de pacientes
  - Usar iniciales o "Paciente Anónimo"

- [ ] **Servicios** (`servicios.html`)
  - Verificar descripción de procedimientos
  - Agregar detalles específicos si es necesario

### 7. Logos y Certificaciones (Opcional)

Si tiene logos de instituciones:

1. Guardar imágenes en `images/`
2. Formato: PNG con fondo transparente
3. Tamaño: 200x200px aproximadamente
4. Actualizar `sobre-mi.html` en la sección de certificaciones

### 8. Despliegue en GitHub

**Crear repositorio:**

```bash
cd C:\Users\CAMACHO\Desktop\2026\DAVID_CHECA
git init
git add .
git commit -m "Initial commit: Landing page Dr. David Checa"
git branch -M main
```

**Conectar con GitHub:**

1. Crear repositorio en GitHub (ej: `dr-checa-website`)
2. Ejecutar:

```bash
git remote add origin https://github.com/USUARIO/dr-checa-website.git
git push -u origin main
```

**Activar GitHub Pages:**

1. Ir a Settings > Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Save

El sitio estará disponible en: `https://USUARIO.github.io/dr-checa-website/`

### 9. Dominio Personalizado

**Configurar dominio: www.davidcheca-neurocirujano.lat**

**En GitHub:**
1. Settings > Pages > Custom domain
2. Ingresar: `www.davidcheca-neurocirujano.lat`
3. Save
4. Esperar verificación DNS

**En el proveedor de dominio:**

Agregar registro CNAME:
```
Tipo: CNAME
Nombre: www
Valor: USUARIO.github.io
TTL: 3600
```

**Nota:** La propagación DNS puede tardar 24-48 horas.

### 10. Verificación Final

Antes de publicar, verificar:

- [ ] Todas las páginas cargan correctamente
- [ ] Menú de navegación funciona en móvil
- [ ] Formulario de contacto envía mensajes
- [ ] Calendly permite agendar citas
- [ ] Botón de WhatsApp abre conversación
- [ ] Video de YouTube se reproduce
- [ ] PDF se descarga correctamente
- [ ] No hay enlaces rotos
- [ ] Responsive en móvil, tablet y escritorio
- [ ] No hay errores en la consola del navegador

### 11. SEO y Metadatos

Personalizar en cada página:

- [ ] Meta title (único para cada página)
- [ ] Meta description (descripción atractiva)
- [ ] Open Graph tags (para redes sociales)
- [ ] Texto alt en todas las imágenes

### 12. Pruebas de Rendimiento

Usar herramientas:

1. **Google Lighthouse** (en Chrome DevTools)
   - Performance: >90
   - Accessibility: >90
   - Best Practices: >90
   - SEO: >90

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/

3. **Prueba en dispositivos reales**
   - iPhone/Android
   - Tablet
   - Desktop

## Mantenimiento Continuo

### Agregar nuevos artículos al blog:

1. Crear archivo en `/blog/articulo-nuevo.html`
2. Usar plantilla de artículos existentes
3. Agregar tarjeta en `blog.html`
4. Commit y push a GitHub

### Actualizar información:

1. Editar archivos HTML directamente
2. Commit y push
3. Cambios se reflejan automáticamente en 1-2 minutos

## Soporte

Para problemas técnicos o dudas sobre configuración, consultar:
- README.md (documentación general)
- Comentarios en el código fuente
- GitHub Issues (si aplica)

---

**Última actualización:** Enero 2025
