# PROMPT — Sitio web multipágina: "Residuos que Educan"

## 0. Instrucción principal

Construye un **sitio web multipágina (NO una landing page de scroll único)** para el proyecto **Residuos que Educan**, de la ONG Ecotec Perú.

**Stack obligatorio:**

- **Vite + React + TypeScript**
- **React Router (v6+, `createBrowserRouter`)** con navegación real entre 7 rutas principales + rutas legales
- **Tailwind CSS** con tokens de marca definidos en `tailwind.config`
- **React Hook Form + Zod** para validación de formularios
- **Sin backend.** Los formularios validan en cliente, muestran estados `idle / submitting / success / error` y dejan un `// TODO: conectar endpoint` en un único módulo `src/lib/submitForm.ts`. WhatsApp, `mailto:` y `tel:` sí deben funcionar de verdad.
- Sin `localStorage` ni `sessionStorage`.
- Accesible (WCAG AA), responsive mobile-first, en **español (es-PE)**.

**Idea central del proyecto (una frase):** las empresas donan residuos sólidos valorizables → se valorizan de forma trazable → lo recaudado financia Aulas de Innovación en colegios públicos del Perú.

---

## 1. Identidad de marca

### Paleta

| Token | Hex | Nombre | Uso |
|---|---|---|---|
| `cream` | `#f3e9cc` | Dog Bone Cream | Fondo principal de la mayoría de secciones |
| `lime` | `#9abe3c` | Tennis Ball Green | Acentos, hovers, viñetas, patrón decorativo, highlights |
| `grass` | `#276232` | Cool Grass Green | Color primario: logo, titulares, botones principales |
| `sea` | `#004b4a` | Evening Sea | Fondos oscuros, footer, bloques destacados, tarjeta premium |
| `ink` | `#111111` | Negro | Texto sobre fondos claros |
| `white` | `#ffffff` | Blanco | Tarjetas sobre fondo cream, texto sobre fondos oscuros |

Reglas de color:

- Alternar fondos entre `cream` y `white` para dar ritmo vertical; usar `sea` para bloques de énfasis (banners de dato, footer, CTA final).
- Botón primario: fondo `grass`, texto blanco, hover `sea`.
- Botón secundario: borde `grass`, texto `grass`, fondo transparente, hover fondo `lime/20`.
- Sobre `sea`, los acentos y números destacados van en `lime`.
- Verificar contraste AA en todas las combinaciones.

### Tipografía

- **Manrope** (Google Fonts), pesos 400 / 500 / 600 / 700 / 800.
- Titulares: Manrope 800, `tracking-tight`, generalmente en `grass`.
- Cuerpo: Manrope 400/500, `leading-relaxed`, tamaño base 16–17px.
- Kickers / etiquetas de sección: Manrope 700, `uppercase`, `tracking-[0.15em]`, tamaño pequeño, color `lime` sobre oscuro o `grass` sobre claro.

### Logo e isotipo

- El isotipo es un **símbolo lineal continuo de trazo grueso con puntas redondeadas** que funde la flecha del reciclaje con la silueta de la cabeza de un perro (hocico y oreja). Trazo uniforme, sin relleno, esquinas redondeadas, geometría angular.
- Genera el isotipo como componente SVG `<Logo />` con prop `variant: 'color' | 'blanco' | 'negro'` (`grass`, blanco, negro).
- Lockup horizontal: isotipo + texto "Residuos que **Educan**" en dos líneas, "Residuos que" en peso medio y "Educan" en 800, ambos en `grass`.
- Header claro → logo color; footer oscuro → logo blanco.

### Patrón decorativo

Patrón orgánico de **líneas onduladas y bucles continuos, gruesos, con extremos redondeados**, en `lime` sobre fondo `cream`. Genéralo como SVG repetible en un componente `<PatternBackground />` con prop de opacidad. Úsalo con moderación: hero, bloques de CTA y separadores de sección. Nunca detrás de párrafos largos de texto.

### Sistema visual

- Tarjetas: `rounded-2xl`, borde de 1px `grass/15`, sombra sutil, padding generoso.
- Listas de beneficios: viñeta como pequeño **guion grueso** en `lime` (no bullets redondos, no emojis). En el diseño original los checks son guiones cortos horizontales.
- Bloques de sección: kicker en mayúsculas + línea divisoria fina + titular.
- Pasos numerados: número grande en `lime` (peso 800), título en `grass`, descripción en gris oscuro, con borde izquierdo de 3px en `lime`.
- Animaciones: solo `fade-in`/`slide-up` sutiles al entrar en viewport y transiciones de hover. Respetar `prefers-reduced-motion`.
- Imágenes: usar placeholders con `aspect-ratio` fijo y caption superpuesta en la esquina inferior izquierda sobre gradiente oscuro (así aparecen en el brief). Documentar en `/public/images/README.md` qué foto va en cada slot.

---

## 2. Arquitectura de rutas

```
/                        Inicio
/nosotros                Quiénes somos, misión, visión, equipo, trayectoria, impacto
/como-funciona           El modelo de economía circular en detalle
/beneficios              Beneficios para colegios, empresas y medio ambiente
/aliados                 Niveles de alianza, trazabilidad Kolekt, deducción tributaria
/recibir-donacion        Para instituciones educativas + formulario de registro
/contacto                Formulario de contacto y datos
/politica-privacidad     Legal
/terminos                Legal
*                        404 con enlaces de retorno
```

Requisitos de routing:

- Layout raíz con `<Header />`, `<Outlet />` y `<Footer />`.
- **ScrollRestoration** o componente `ScrollToTop`: cada cambio de ruta vuelve al inicio de la página.
- `NavLink` con estado activo visible (subrayado en `lime` o texto en `grass` con peso 700).
- Cada página define su `<title>` y `meta description` (usa un hook `useDocumentTitle` o `react-helmet-async`).
- `errorElement` global.

---

## 3. Header (persistente en todas las rutas)

- Barra superior fina (fondo `sea`, texto `cream`, oculta en móvil): `direccion@residuosqueeducan.org.pe` · `+51 973 243 772` · iconos de redes (X, Facebook, Instagram, YouTube, TikTok, LinkedIn) alineados a la derecha.
- Barra principal (fondo `cream`, sticky, sombra al hacer scroll):
  - Izquierda: logo lockup, enlace a `/`.
  - Centro: Inicio · Nosotros · Cómo Funciona · Beneficios · Aliados · Recibir Donación · Contacto.
  - Derecha: botón destacado **DONAR RESIDUOS** (fondo `grass`, texto blanco) que lleva a `/aliados`.
- Móvil: menú hamburguesa a pantalla completa con fondo `cream`, patrón sutil al fondo, enlaces grandes y el botón CTA al final. Cerrar con Escape y al navegar; bloquear el scroll del body cuando esté abierto.
- Botón flotante de WhatsApp (esquina inferior derecha, círculo `lime`, icono `grass`) visible en todas las rutas, enlazando a `https://wa.me/51973243772?text=Hola,%20quiero%20saber%20más%20sobre%20Residuos%20que%20Educan`.

---

## 4. Contenido por ruta

> Todo el texto siguiente es contenido real y debe usarse literalmente. No inventar cifras, aliados, testimonios ni datos que no aparezcan aquí.

---

### 4.1 `/` — INICIO

**Hero** (fondo `cream` con `<PatternBackground />` sutil; a la derecha, imagen de un aula tecnológica implementada)

- Kicker: `ECONOMÍA CIRCULAR QUE TRANSFORMA LA EDUCACIÓN PÚBLICA`
- Subkicker: `Proyecto nacional 2026–2030, en marcha desde Arequipa`
- H1: **Transformamos residuos en tecnología para la educación pública**
- Párrafo: "Convertimos los residuos sólidos que tu empresa ya genera en Aulas de Innovación para colegios públicos de todo el Perú — con trazabilidad total y resultados medibles."
- Frase de marca (destacada, itálica, en `grass`): *"Cada residuo tiene el poder de cambiar el futuro de un estudiante."*
- CTAs: **Quiero donar residuos** (primario → `/aliados`) · **Registrar institución educativa** (secundario → `/recibir-donacion`)
- Píldoras horizontales bajo los botones: `Economía Circular` · `Responsabilidad Extendida del Productor` · `Responsabilidad Social Empresarial` · `Innovación Educativa`

**Banner de dato** (fondo `sea`, número gigante `12t` en `lime` a la izquierda)

> **12 toneladas de residuos valorizados financian la implementación completa de 1 Aula de Innovación (S/ 10,000):** tecnología, capacitación docente y montaje. Con la donación agregada de varias empresas, el proyecto financia progresivamente más aulas cada año, en más regiones del país.

**El problema** (dos tarjetas lado a lado, fondo blanco sobre `cream`)

*Tarjeta 1 — La brecha digital educativa*

- La brecha digital ya amenaza a más de **50,000 escuelas** y a **6 de cada 10 familias** peruanas. *(CADE Educación 2025)*
- En primaria pública hay solo **1 computadora por cada 12 estudiantes** — y en zonas rurales la relación empeora hasta 1 por cada 94. *(Censo Educativo 2023, MINEDU)*
- Sin acceso a tecnología, los estudiantes llegan a la educación superior y al mercado laboral con menos herramientas que sus pares — la desigualdad se hereda.

*Tarjeta 2 — La gestión de residuos en las empresas*

- Perú genera más de **7 millones de toneladas** de residuos sólidos al año (~20,000 t diarias) — y solo se **recicla o valoriza el 1.9%** de lo que sí es reaprovechable. *(Defensoría del Pueblo; MINAM)*
- En 2024 se valorizaron **249,407 t** a nivel nacional, un avance real (+35% vs. 2023) — pero aún una fracción mínima de lo que las empresas y ciudades generan. *(MINAM, 2024)*
- La mayoría de acciones de RSE no generan impacto visible ni medible en el tiempo — falta un puente formal entre "gestionar residuos" y "generar desarrollo real" para el país.

> Las citas de fuente van en tamaño pequeño y color gris/verde apagado, entre paréntesis, al final de cada línea.

**Así funciona el modelo** (resumen de 5 pasos en fila horizontal; en móvil, carrusel o columna)

1. **Tu empresa dona residuos valorizables** — Papel, cartón, plásticos, metales y más.
2. **Se valorizan, formal y trazable** — Registro completo con Kolekt.
3. **Financian un Aula de Innovación** — En un colegio público aliado.
4. **Estudiantes acceden a tecnología** — Con acompañamiento pedagógico continuo.
5. **El colegio cierra el ciclo** — Recolecta sus propios residuos y sostiene el modelo en el tiempo.

CTA: **Ver el modelo en detalle** → `/como-funciona`

**Doble pista** (dos tarjetas grandes; la de empresas con mayor peso visual, fondo `sea`; la de colegios en blanco con borde `grass`)

- *Para empresas* — "Cumple la Ley REP, fortalece tu RSE y genera impacto medible con trazabilidad certificada." → **Ver niveles de alianza** (`/aliados`)
- *Para instituciones educativas* — "Registra tu colegio público y accede a un Aula de Innovación sin costo alguno." → **Registrar mi institución** (`/recibir-donacion`)

**Meta a 5 años** (fondo `sea`, 4 números en `lime`, gran tamaño, con contador animado)

| 880 | 260 | 10,560t | 308,000 |
|---|---|---|---|
| Colegios beneficiados | Empresas aliadas | Residuos valorizados | Estudiantes beneficiados |

Encabezado del bloque: `META A 5 AÑOS — DE AREQUIPA AL PERÚ (2026–2030)`

**Aliados** — banda con espacio para logotipos de empresas, municipalidades, ministerios, UGEL, recicladores formalizados y organizaciones cooperantes. Usar placeholders en escala de grises con hover a color. Nota: solo mostrar como referencias de trayectoria previa del equipo las que se listan en `/nosotros`.

**CTA final** (fondo `sea`, patrón `lime` de fondo con baja opacidad)

- H2: **No es solo cumplir. Es liderar.**
- Texto: "Escríbenos para agendar una reunión y ver cómo tu empresa se convierte en aliada."
- Botones: **Agendar una reunión** (`/contacto`) · **Escribir por WhatsApp**

---

### 4.2 `/nosotros` — NOSOTROS

**Encabezado de página:** kicker `NOSOTROS` + H1 **¿Quiénes somos?**

**Texto institucional:**

> Residuos que Educan es un proyecto ejecutado por la **ONG Ecotec Perú – Patronato de Educación, Ecología, Economía Social y Tecnología**, organización sin fines de lucro comprometida con la innovación educativa, la economía circular y el desarrollo sostenible.
>
> La organización cuenta con **RUC N.º 20498319352** y está autorizada por la SUNAT como **Entidad Perceptora de Donaciones**, mediante la Resolución de Intendencia N.º 0590050005705-SUNAT.
>
> Nuestro propósito es cerrar la brecha tecnológica de la educación pública mediante la valorización de residuos sólidos donados por empresas comprometidas con el desarrollo sostenible.

**Misión y Visión** (dos tarjetas)

- **Nuestra Misión** — Transformar residuos sólidos en oportunidades educativas mediante un modelo de economía circular que fortalezca la innovación tecnológica en las instituciones educativas públicas.
- **Nuestra Visión** — Ser el programa líder del Perú que convierta la gestión responsable de residuos en una herramienta permanente para mejorar la calidad de la educación pública.

**Quién lo lidera** (tarjeta con foto placeholder + biografía + píldoras de reconocimientos)

> **José Adolfo Quisocala**, emprendedor social arequipeño con más de 14 años de trayectoria en educación financiera, ciudadanía ambiental y economía circular. Fundador del proyecto.

Píldoras: `Premio Enrique García 2025 · CAF` · `Top 20 Most Innovator Bankers · Fintech Americas 2025` · `Children's Climate Prize 2018` · `Young Activist Summit · ONU 2020`

**Trayectoria del equipo fundador**

> Antes de Residuos que Educan, nuestro equipo ya gestionó campañas y alianzas de recolección de residuos con empresas e instituciones como:

Píldoras: `Hoteles Sonesta` · `Universidad UTP` · `Hotel Libertador` · `Grupo Roberts` · `UGEL Arequipa Norte` · `UGEL Arequipa Sur`

Cierre: "Esa experiencia es la base sobre la que construimos Residuos que Educan."

Dos imágenes con caption: *"Donación de residuos — Universidad UTP"* y *"Presentación del modelo en la Cámara de Comercio de Arequipa"*.

**Nuestro impacto — acciones desarrolladas**

> Durante nuestra trayectoria hemos impulsado iniciativas que demuestran el impacto positivo de la tecnología, la sostenibilidad y la articulación entre organizaciones públicas y privadas.

- **Implementación tecnológica** — Sistema de videovigilancia para la I.E. Manuel Muñoz Najar. Sistema digital de control de asistencia para las I.E. Nicanor Rivera Cáceres e Independencia Americana.
- **Campaña "Ojo con el Planeta"** — En alianza con la empresa social DOT Glasses (República Checa) y la Comisaría de la Policía Nacional del Perú de Ciudad Municipal (Arequipa), realizamos mediciones visuales y entregamos lentes personalizados a personas adultas mayores.
- **Articulación institucional** — El proyecto ha sido presentado ante especialistas de la Gerencia Regional de Educación de Arequipa, la UGEL Arequipa Norte y la UGEL Arequipa Sur.

**El modelo ya está en marcha** (timeline horizontal de 4 fases; las dos primeras con badge verde `✓ Completada`)

1. **Fase 1 — Articulación institucional** — Coordinación con UGEL Arequipa Norte y Sur y la Gerencia Regional de Educación. `✓ Completada`
2. **Fase 2 — Activación del ecosistema** — Presentación oficial a directores y docentes, con demostración técnica. `✓ Completada`
3. **Fase 3 — Implementación escolar** — Campañas de recolección, instalación del aula y capacitación docente. `En curso`
4. **Fase 4 — Evaluación y expansión** — Monitoreo por indicadores y expansión progresiva a nuevas regiones del país. `Próxima`

**Evento anual Residuos que Educan** (tarjeta destacada, fondo `sea`)

> Cada fin de año reconocemos públicamente, con video resumen y premio, a las empresas que generaron mayor impacto reciclando.

**Meta a 5 años** — repetir el bloque de 4 números (880 / 260 / 10,560t / 308,000).

---

### 4.3 `/como-funciona` — CÓMO FUNCIONA

**Encabezado:** kicker `CÓMO FUNCIONA` + H1 **Un modelo de economía circular que beneficia a todos**

**El ciclo en 5 etapas** (diagrama vertical en móvil / circular o de flujo horizontal en desktop, con conectores en `lime`)

1. **Las empresas donan sus residuos** — Papel, cartón, plástico, metales, residuos electrónicos (RAEE) y otros materiales valorizables.
2. **Los residuos son valorizados** — Ingresan a un proceso técnico de clasificación, comercialización y transformación mediante gestores autorizados.
3. **Se generan recursos** — Los ingresos obtenidos permiten adquirir tecnología e implementar instituciones educativas.
4. **Implementamos colegios** — Entregamos: pizarras digitales inteligentes, aulas de innovación, equipamiento tecnológico, laboratorios, equipos para talleres productivos, sistemas digitales y equipamiento educativo.
5. **Miles de estudiantes son beneficiados** — Más tecnología. Más innovación. Más oportunidades.

**El Aula de Innovación completa**

Kicker: `Bajo el modelo STEAM (Ciencia, Tecnología, Ingeniería, Arte y Matemáticas)`

Lista de equipamiento (con iconos):

- Pizarra digital interactiva de 86" como punto de partida
- Robótica educativa y laboratorio maker
- Impresora 3D y conectividad
- Biblioteca digital y recursos pedagógicos
- Capacitación a docentes

Bloque destacado (fondo `cream`, borde izquierdo `lime`):

> **No entregamos equipos y desaparecemos.** Capacitamos a cada docente en el uso pedagógico de la tecnología, con acompañamiento y seguimiento de resultados continuo — para prevenir el tecnoestrés y asegurar que el aula se use de verdad, no que quede guardada.

Imagen con caption: *"Capacitación a docentes"*.

**Residuos que recibimos** (tres tarjetas)

- **Papel y cartón** — papel blanco y de color, revistas, periódico, cartón, cartoncillo, libros y textos escolares
- **Plásticos y caucho** — PET, plástico transparente y de color, caucho
- **Metales** — latas, aluminio

Nota adicional: también se reciben vidrio, RAEE y otros residuos valorizables.

**Así trabajamos con tu empresa — de residuo a impacto en 5 pasos**

1. **Diagnóstico** — Analizamos el volumen y tipo de residuos de tu empresa y las necesidades del colegio en tu área de influencia.
2. **Diseño** — Diseñamos contigo un plan de donación y un Aula de Innovación a la medida de tu empresa.
3. **Implementación** — Instalamos la tecnología, capacitamos docentes y a tu propio equipo en gestión ambiental.
4. **Impacto** — El Aula entra en uso: estudiantes y docentes se benefician en el día a día.
5. **Medición** — Reportamos residuos valorizados, uso real de la tecnología y avance educativo.

**La evidencia internacional respalda el modelo** (tres tarjetas)

- **Corea del Sur** — la implementación de aulas digitales incrementó la participación estudiantil en más del 30%.
- **Finlandia** — el uso de tecnologías interactivas mejoró el aprendizaje en matemáticas y ciencias.
- **Singapur y Estonia** — modelos similares fortalecen el aprendizaje colaborativo y las competencias digitales.

Cierre: "La misma lógica aplica en Perú — por eso diseñamos tres niveles de alianza, para que cada empresa participe según su capacidad de inversión." → CTA **Ver niveles de alianza** (`/aliados`)

**Cómo puede ser parte un colegio** (bloque secundario, 5 pasos compactos)

1. Registrar la institución educativa.
2. Nuestro equipo evalúa las necesidades tecnológicas.
3. La institución ingresa al programa.
4. Las empresas patrocinadoras financian la implementación mediante la valorización de residuos.
5. El colegio recibe tecnología y equipamiento.

CTA: **Registrar mi institución** → `/recibir-donacion`

---

### 4.4 `/beneficios` — BENEFICIOS

**Encabezado:** kicker `BENEFICIOS` + H1 **Un modelo donde todos ganan**

Tres columnas iguales (en móvil, apiladas). Cada una con icono, título y lista con viñeta de guion en `lime`.

**Para las Instituciones Educativas**

- Implementación tecnológica
- Pizarras digitales inteligentes
- Laboratorios modernos
- Equipamiento para talleres
- Fortalecimiento de competencias digitales
- Mejora del aprendizaje

**Para las Empresas**

- Cumplimiento de la Responsabilidad Extendida del Productor (REP)
- Fortalecimiento de la Responsabilidad Social Empresarial
- Gestión sostenible de residuos
- Evidencia del impacto social generado
- Contribución a los Objetivos de Desarrollo Sostenible
- Mejora de la reputación corporativa

**Para el Medio Ambiente**

- Menor disposición de residuos en rellenos sanitarios
- Mayor reciclaje
- Economía Circular
- Reducción de emisiones
- Cultura ambiental

**Bloque de deducción tributaria** (fondo `sea`, etiqueta lateral `DEDUCCIÓN TRIBUTARIA` en `lime`)

> Aplica sobre donaciones en **efectivo, residuos sólidos y otros aportes**. Residuos que Educan ya cuenta con **Resolución SUNAT** que lo califica como entidad perceptora de donaciones — el beneficio tributario para tu empresa está habilitado desde hoy.

**Preguntas frecuentes** (acordeón accesible: `<button aria-expanded>`, navegable por teclado)

- **¿Qué tipo de colegios pueden participar?** — Instituciones educativas públicas de todo el Perú.
- **¿Tiene algún costo?** — No. La inscripción al programa es gratuita.
- **¿Qué residuos pueden donar las empresas?** — Papel, cartón, plásticos, metales, RAEE, vidrio y otros residuos valorizables.
- **¿Quién administra las donaciones?** — La ONG Ecotec Perú administra el proyecto y articula el proceso de valorización con empresas y gestores autorizados.
- **¿Cómo sé que mis residuos realmente llegaron a un colegio?** — Cada kilo donado queda registrado y es 100% trazable con Kolekt, y recibes un certificado de recuperación y un sello con código QR verificable.
- **¿Cuántos residuos se necesitan para financiar un aula?** — 12 toneladas de residuos valorizados financian la implementación completa de un Aula de Innovación (S/ 10,000).

---

### 4.5 `/aliados` — NIVELES DE ALIANZA (página clave para empresas)

**Encabezado:** kicker `NIVELES DE ALIANZA` + H1 **Tres niveles para ser Aliado de Residuos que Educan**

Subtítulo: "No tiene que ser todo o nada. Empieza donde tenga sentido para tu empresa hoy — y avanza de nivel cuando quieras generar más impacto."

**Tres tarjetas de nivel** (grid de 3; la tercera destacada con fondo `sea`, texto claro y acentos `lime`)

**01 · NIVEL 1 — ENTRADA / VOLUMEN — Aliado Recicla**
*Quién es: empresa que dona residuos sólidos valorizables.*

- Trazabilidad total de cada kilo donado (con Kolekt)
- Certificado de recuperación — válido como crédito ambiental
- Sello con código QR, para usar en oficina y comunicación
- Reporte básico de impacto (kg valorizados)
- Presencia en la web y redes de Residuos que Educan
- Aporte base al cumplimiento de la Ley REP

**02 · NIVEL 2 — ESTRATÉGICO — Aliado Impacta**
*Quién es: empresa que dona residuos + un aporte económico.*
**Todo lo anterior, más:**

- Indicadores ESG listos para tus reportes internos
- Reporte de impacto ampliado — ambiental y educativo
- Visibilidad destacada, no solo en el listado colectivo
- Participación en contenido — historias y casos reales
- Invitación a eventos y activaciones del proyecto
- Voluntariado corporativo: mentorías y talleres

**03 · NIVEL 3 — PREMIUM — Aliado Transforma**
*Quién es: empresa que financia o apadrina un Aula de Innovación completa.*
**Todo lo anterior, más:**

- Naming del aula — branding exclusivo con el nombre de tu empresa
- Exclusividad visual: solo tu logo en ese espacio
- Implementación completa en un colegio de tu zona de influencia
- Evento de inauguración con prensa
- Caso de éxito completo: video, nota de prensa y storytelling
- Relación directa con la comunidad y prioridad de renovación anual
- Ranking anual y reconocimiento "Empresa que Transforma la Educación en Perú"

Cada tarjeta con su propio CTA: **Quiero este nivel** → `/contacto?nivel=recicla|impacta|transforma` (prellena el campo "Nivel de interés" del formulario leyendo el search param).

**Trazabilidad total con Kolekt** (dos columnas: mockup de app a la izquierda con caption *"App de Kolekt — trazabilidad"*, texto a la derecha)

Kicker: `Kolekt es una empresa certificadora internacional de origen holandés (Países Bajos)`

- Cada kilo donado queda registrado y es 100% trazable, de principio a fin.
- Certificado de recuperación de residuos por empresa, tipo crédito ambiental — bajo estándares internacionales de gestión de residuos y REP.
- **Sello físico y virtual con código QR:** cualquier persona que lo escanee accede a fotos, testimonios y datos reales de cómo los residuos de tu empresa se convirtieron en educación — visible para tus clientes donde tú decidas mostrarlo.

**Bloque de deducción tributaria** (mismo componente reutilizado de `/beneficios`).

**Cómo empezamos** (tres pasos)

1. **Reunión de 15–20 min** — Te presentamos el modelo a detalle y resolvemos tus preguntas.
2. **Propuesta a tu medida** — Según tu rubro, volumen de residuos y área de influencia.
3. **Primera Aula en marcha** — Implementación, capacitación docente y primer reporte de impacto.

**CTA final:** "No es solo cumplir. Es liderar." con botones a `/contacto` y WhatsApp, y la firma:

> José Adolfo Quisocala — Fundador, Residuos que Educan
> +51 973 243 772 · direccion@residuosqueeducan.org.pe

---

### 4.6 `/recibir-donacion` — PARA INSTITUCIONES EDUCATIVAS

**Hero de sección** (fondo `cream` con patrón)

- Kicker: `RECIBIR DONACIÓN`
- H1: **¿Tu institución educativa necesita tecnología?**
- Texto: "Forma parte de la red de colegios que transforman residuos en oportunidades para miles de estudiantes."
- Botón primario grande: **REGÍSTRATE AHORA** (ancla al formulario de la misma página)
- Botón secundario grande: **ENVIAR MENSAJE POR WHATSAPP**
- Ambos botones deben ser grandes, de alto contraste y muy visibles.

**Qué recibe tu institución** — reutilizar la lista del Aula de Innovación completa (pizarra 86", robótica y laboratorio maker, impresora 3D y conectividad, biblioteca digital, capacitación docente) + la nota de acompañamiento pedagógico continuo.

**Participar es muy sencillo** (5 pasos)

1. Registrar la institución educativa.
2. Nuestro equipo evalúa las necesidades tecnológicas.
3. La institución ingresa al programa.
4. Las empresas patrocinadoras financian la implementación mediante la valorización de residuos.
5. El colegio recibe tecnología y equipamiento.

Nota destacada: **La inscripción al programa es completamente gratuita.**

**Formulario de registro de institución educativa** (`React Hook Form` + `Zod`)

Campos:

- Nombre de la institución educativa *(requerido)*
- Código modular *(opcional)*
- Nivel: Inicial / Primaria / Secundaria / Varios *(select, requerido)*
- Región *(select con las 25 regiones del Perú, requerido)*
- Provincia y distrito *(texto, requerido)*
- Nombre del director o responsable *(requerido)*
- Cargo *(requerido)*
- Correo electrónico *(requerido, formato email)*
- Teléfono / WhatsApp *(requerido, 9 dígitos)*
- Número aproximado de estudiantes *(número, requerido)*
- Necesidad tecnológica principal *(textarea, requerido, mín. 20 caracteres)*
- Checkbox de aceptación de la Política de Privacidad *(requerido, con enlace a `/politica-privacidad`)*

Comportamiento: validación en `onBlur`, mensajes de error en español bajo cada campo con `aria-describedby`, botón deshabilitado durante el envío con spinner, y pantalla de éxito que reemplaza el formulario ("Recibimos el registro de tu institución. Te contactaremos en un plazo máximo de 5 días hábiles.") con opción de escribir por WhatsApp. Manejo de error con opción de reintentar.

**Imagen con caption:** *"Campaña de acopio en colegio aliado"*.

---

### 4.7 `/contacto` — CONTACTO

**Encabezado:** kicker `CONTACTO` + H1 **¿Deseas ser parte del cambio?** + subtítulo "Estamos listos para ayudarte."

Diseño en dos columnas: formulario a la izquierda (60%), datos de contacto a la derecha (40%).

**Formulario:**

- Nombre *(requerido)*
- Institución o Empresa *(requerido)*
- Correo *(requerido, email)*
- Teléfono *(requerido)*
- Soy: Empresa / Institución educativa / Otro *(radio, requerido)*
- Nivel de interés: Aliado Recicla / Aliado Impacta / Aliado Transforma / Aún no lo sé *(select; se prellena desde el search param `?nivel=`; se muestra solo si "Soy = Empresa")*
- Mensaje *(textarea, requerido)*
- Checkbox de política de privacidad
- Botón: **Enviar**

**Panel de datos** (fondo `sea`, texto claro):

- **WhatsApp:** +51 973 243 772 *(enlace `wa.me`)*
- **Correo:** direccion@residuosqueeducan.org.pe *(enlace `mailto:`)*
- **Teléfono:** +51 973 243 772 *(enlace `tel:`)*
- **Dirección:** Arequipa, Perú *(placeholder — dejar comentario `// TODO: dirección exacta`)*
- **Redes sociales:** X, Facebook, Instagram, YouTube, TikTok, LinkedIn *(iconos, `href="#"` con `// TODO: URLs reales`)*
- Bloque de identidad legal: ONG Ecotec Perú · RUC N.º 20498319352 · Entidad Perceptora de Donaciones autorizada por SUNAT.

Bloque final: **Reunión de 15–20 minutos** — "Te presentamos el modelo a detalle y resolvemos tus preguntas." con botón de WhatsApp.

---

### 4.8 `/politica-privacidad` y `/terminos`

Páginas legales con tipografía de lectura (`max-w-3xl`), encabezados jerarquizados y fecha de última actualización. Redacta un texto base razonable para una ONG peruana que recolecta datos de contacto mediante formularios web, alineado con la Ley N.º 29733 de Protección de Datos Personales del Perú, e incluye un comentario `// TODO: revisión legal` al inicio del archivo.

---

## 5. Footer (todas las rutas)

Fondo `sea`, texto `cream`, patrón `lime` con muy baja opacidad al fondo. Cuatro columnas:

1. **Logo blanco + identidad legal**
   - RESIDUOS QUE EDUCAN
   - Proyecto ejecutado por: ONG Ecotec Perú – Patronato de Educación, Ecología, Economía Social y Tecnología
   - Organización sin fines de lucro
   - RUC N.º 20498319352
   - Entidad Perceptora de Donaciones autorizada por la SUNAT
   - Resolución de Intendencia N.º 0590050005705-SUNAT
2. **Enlaces rápidos:** Inicio · Nosotros · Cómo funciona · Beneficios · Aliados · Recibir Donación · Contacto
3. **Contacto:** WhatsApp, correo, teléfono, Arequipa – Perú, iconos de redes sociales
4. **Frase de cierre:** *"Porque invertir en educación es también invertir en el futuro del país."*

Barra inferior: `© 2026 Residuos que Educan — ONG Ecotec Perú. Todos los derechos reservados.` + enlaces a Política de Privacidad y Términos y Condiciones.

---

## 6. Estructura de archivos esperada

```
src/
  main.tsx
  router.tsx
  App.tsx
  layouts/RootLayout.tsx
  components/
    brand/Logo.tsx
    brand/PatternBackground.tsx
    layout/Header.tsx
    layout/Footer.tsx
    layout/MobileMenu.tsx
    layout/WhatsAppFab.tsx
    ui/Button.tsx
    ui/Card.tsx
    ui/SectionHeader.tsx
    ui/StepList.tsx
    ui/StatCounter.tsx
    ui/Accordion.tsx
    ui/ImageWithCaption.tsx
    ui/FormField.tsx
    sections/StatBanner.tsx
    sections/TaxDeductionBlock.tsx
    sections/GoalStats.tsx
    sections/FinalCTA.tsx
  pages/
    Home.tsx
    Nosotros.tsx
    ComoFunciona.tsx
    Beneficios.tsx
    Aliados.tsx
    RecibirDonacion.tsx
    Contacto.tsx
    PoliticaPrivacidad.tsx
    Terminos.tsx
    NotFound.tsx
  data/
    site.ts          // contacto, redes, rutas de navegación
    steps.ts         // pasos del modelo y del proceso empresarial
    benefits.ts      // tres bloques de beneficios
    tiers.ts         // niveles de alianza
    faq.ts
    stats.ts
    regiones.ts      // 25 regiones del Perú
  lib/
    submitForm.ts    // stub con TODO de endpoint
    schemas.ts       // esquemas Zod
    useDocumentTitle.ts
public/
  images/README.md   // qué foto va en cada slot
```

**Todo el contenido textual debe vivir en `src/data/`, no hardcodeado dentro del JSX**, de modo que el cliente pueda editarlo sin tocar componentes.

---

## 7. Criterios de aceptación

- Navegación real entre 7 rutas + 2 legales + 404; recargar cualquier URL directa funciona.
- El scroll vuelve al inicio en cada cambio de ruta.
- Los tres CTAs de niveles en `/aliados` prellenan el select de `/contacto` vía search param.
- Los dos formularios validan correctamente, muestran errores en español y llegan a un estado de éxito visible.
- WhatsApp, `mailto:` y `tel:` funcionan.
- Responsive verificado en 375px, 768px, 1024px y 1440px.
- Navegable por teclado; menú móvil y acordeón con ARIA correcto; contraste AA en toda la paleta.
- Sin datos inventados: cada cifra, aliado o afirmación proviene de este documento.
- Sin `localStorage` ni `sessionStorage`.
- `npm run build` sin errores de TypeScript.
