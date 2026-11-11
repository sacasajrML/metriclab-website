# metriclab.tech

Sitio estático de MetricLab (HTML + CSS, sin build). Se publica en Cloudflare Workers (static assets) desde la rama `main`.

- `public/index.html` · Inicio
- `public/contacto/index.html` · Contacto (el formulario envía a n8n: `https://n8n.metriclab.tech/webhook/contacto-web`, workflow `COM · Contacto Web`)
- `public/assets/` · estilos, logo, imagen para redes, script del formulario
- `public/sitemap.xml`, `robots.txt`, `_headers`, `_redirects`, `404.html`
- `wrangler.jsonc` · le dice a Cloudflare que publique la carpeta `public/`

Cloudflare: build command vacío, deploy command `npx wrangler deploy`.
