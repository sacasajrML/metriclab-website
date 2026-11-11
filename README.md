# metriclab.tech

Sitio estático de MetricLab (HTML + CSS, sin build). Se publica en Cloudflare Pages desde la rama `main`.

- `index.html` · Inicio
- `contacto/index.html` · Contacto (el formulario envía a n8n: `https://n8n.metriclab.tech/webhook/contacto-web`, workflow `COM · Contacto Web`)
- `assets/` · estilos, logo, imagen para redes, script del formulario
- `sitemap.xml`, `robots.txt`, `_headers`, `_redirects`, `404.html`

Cloudflare Pages: framework preset "None", build command vacío, output directory `/`.
