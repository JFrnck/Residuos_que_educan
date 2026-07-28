# Imágenes — Residuos que Educan

Mapa de qué foto va en cada slot del sitio. Todas las fotos vienen de
`resources/code_demo/src/img/` (ya curadas y renombradas por el cliente) y
fueron redimensionadas a un máximo de 1600px en el lado más largo para web.

| Archivo | Usado en | Caption / alt |
|---|---|---|
| `logo.png` | Header, menú móvil (`Logo` variant `color`) | Residuos que Educan |
| `foto-b.jpg` | `/nosotros` — "Quién lo lidera" | Presentación del modelo Residuos que Educan |
| `utp.jpg` | `/nosotros` — Trayectoria del equipo | Donación de residuos — Universidad UTP |
| `camara-comercio.jpg` | `/nosotros` — Trayectoria del equipo | Presentación del modelo en la Cámara de Comercio de Arequipa |
| `capacitacion.jpg` | `/como-funciona` — El Aula de Innovación completa | Capacitación a docentes |
| `kolekt.jpg` | `/aliados` — Trazabilidad total con Kolekt | App de Kolekt — trazabilidad |
| `foto-a.jpg` | `/recibir-donacion` — Formulario de registro | Campaña de acopio en colegio aliado |

## Pendiente

- **Hero de `/` (Inicio):** el brief original pide una foto de "un aula
  tecnológica implementada", pero ese material aún no existe entre los
  recursos entregados. Mientras tanto, el hero usa la ilustración animada
  `src/assets/illustrations/student.svg` como placeholder.
  // TODO: reemplazar por una foto real de un Aula de Innovación en uso.
- El isotipo de marca ya se usa como PNG transparente (`logo.png`). Sobre
  fondos oscuros (footer, bloques `sea`) se sigue usando el wordmark en
  texto en vez de la imagen, porque el trazo del isotipo es verde fijo y
  perdería contraste ahí.
- `src/assets/illustrations/student.svg` y `study-discussion.svg` pesan
  ~400 KB y ~240 KB respectivamente (ilustraciones animadas por SMIL). Ya
  están en un chunk separado por code-splitting de rutas, pero si se busca
  reducir aún más el peso, se pueden optimizar con SVGO usando una
  configuración conservadora que no toque los `id` referenciados por las
  animaciones (el preset por defecto de SVGO elimina animaciones).
