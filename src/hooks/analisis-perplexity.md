# 📋 Backlog — Portfolio gonzachi.com
> Última actualización: 19 marzo 2026
> Stack: Next.js · Tailwind · next-intl
> Modelo recomendado por tarea indicado en cada ítem

---

## Leyenda

| Símbolo | Significado |
|---|---|
| ⬜ | Pendiente |
| 🔄 | En progreso |
| ✅ | Completado |
| 🔴 | Prioridad Alta — bloquea otras tareas |
| 🟡 | Prioridad Media |
| 🟢 | Prioridad Baja / Nice to have |

---

## 🟣 ÉPICA 1 — Fundaciones Técnicas
> Sin esto nada escala bien. Va primero. Sin dependencias externas.

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 1.1 | Configurar breakpoints responsive: xs(375) sm(640) md(768) lg(1024) xl(1280) 2xl(1536) 3xl(1920) 4xl(2560) 5xl(3840) | 🔴 Alta | Claude Sonnet | ⬜ |
| 1.2 | Definir `max-width` contenedor para pantallas 4K+ (máx. 1600px centrado) | 🔴 Alta | Claude Sonnet | ⬜ |
| 1.3 | Tipografía fluida con `clamp()` entre breakpoints sin saltos bruscos | 🟡 Media | Claude Sonnet | ⬜ |
| 1.4 | Instalar y configurar `next-intl` para i18n (ES/EN) | 🔴 Alta | Claude Sonnet | ⬜ |
| 1.5 | Crear estructura de rutas `/es` y `/en` | 🔴 Alta | Claude Sonnet | ⬜ |
| 1.6 | Crear archivos `es.json` y `en.json` con todos los textos del sitio | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 1.7 | Definir sistema de tokens de color (base para dark/light mode futuro) | 🟡 Media | Claude Sonnet | ⬜ |
| 1.8 | Crear navbar con links de navegación + selector de idioma ES/EN | 🔴 Alta | Claude Sonnet | ⬜ |
| 1.9 | Persistir preferencia de idioma en `localStorage` + detección automática por browser | 🟡 Media | Claude Sonnet | ⬜ |

---

## 🔵 ÉPICA 2 — Contenido & Copy
> Textos, bio, propuesta de valor, traducciones.
> **Depende de:** Épica 1 (i18n configurado)

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 2.1 | Reescribir bio del hero: más corta, con propuesta de valor clara (máx. 3 líneas) | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 2.2 | Definir propuesta de valor diferencial (PD con ownership + visión de PM + IA + moda) | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 2.3 | Reescribir CTA de contacto: de pasivo a activo ("Trabajemos juntos →") | 🟡 Media | Claude Sonnet | ⬜ |
| 2.4 | Traducir todo el sitio al inglés (desde `es.json` → `en.json`) | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 2.5 | Completar años de inicio y fin en todos los estudios existentes | 🟡 Media | Claude Sonnet | ⬜ |
| 2.6 | Unificar idioma en badges del hero (Product Designer, UX Designer, etc.) | 🟡 Media | Claude Sonnet | ⬜ |
| 2.7 | Añadir nuevo estudio: Master en Digital Product Management · Nuclio Digital School · 2025–2026 · Presencial Barcelona · En curso | 🔴 Alta | Claude Sonnet | ⬜ |

---

## 🟢 ÉPICA 3 — Proyectos
> El corazón del portfolio.
> **Depende de:** Épicas 1 y 2

### 3A — Estructura y orden

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 3.1 | Reordenar proyectos: #5 primero → #2 → #4 → #1 → #3 último | 🔴 Alta | Claude Sonnet | ⬜ |
| 3.2 | Corregir etiqueta duplicada "UX/UI Designer" en proyecto #2 | 🔴 Alta | Claude Sonnet | ⬜ |
| 3.3 | Grid responsive: 1 col (mobile) → 2 (tablet) → 3 (desktop) → 4 (4K) | 🟡 Media | Claude Sonnet | ⬜ |
| 3.4 | Evaluar desactivar proyecto #3 (website Holdo) con feature flag según audiencia | 🟡 Media | Claude Sonnet | ⬜ |

### 3B — Contenido por proyecto

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 3.5 | **#5 Mango · Agilidad IA:** Añadir mockups abstractos o visuales que no expongan el producto real | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 3.6 | **#5 Mango · Agilidad IA:** Añadir métrica real de adopción (nº equipos, % reducción de tiempo) | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 3.7 | **#2 Holdo · Onboarding:** Añadir % real de mejora de conversión o reducción de abandono | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 3.8 | **#1 Holdo · App Mobile:** Añadir sección "Decisiones clave" (¿por qué app nativa y no PWA?) | 🟡 Media | Gemini 1.5 Pro | ⬜ |
| 3.9 | **#1 Holdo · App Mobile:** Añadir resultado post-lanzamiento aunque sea cualitativo | 🟡 Media | Gemini 1.5 Pro | ⬜ |
| 3.10 | **#4 Reservadísimo:** Reescribir cierre — reemplazar "no prosperó" por learnings estratégicos | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 3.11 | **#4 Reservadísimo:** Añadir dato concreto de validación (nº bares contactados, % intención positiva) | 🔴 Alta | Gemini 1.5 Pro | ⬜ |
| 3.12 | **#3 Holdo · Website:** Añadir métricas post-lanzamiento (tráfico, bounce rate, registros) si disponibles | 🟡 Media | Gemini 1.5 Pro | ⬜ |
| 3.13 | Añadir sección "Decisiones clave" como bloque estándar en todos los proyectos | 🔴 Alta | Claude Sonnet | ⬜ |

### 3C — Plantilla y cards

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 3.14 | Crear plantilla base de proyecto con sección "Decisiones clave" incluida | 🔴 Alta | Claude Sonnet | ⬜ |
| 3.15 | Añadir descripción de contexto y resultado en cada card de la grid del home | 🟡 Media | Claude Sonnet | ⬜ |

---

## 🟡 ÉPICA 4 — Correcciones & Limpieza
> Quick wins independientes. Se pueden hacer en cualquier momento, sin dependencias.

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 4.1 | Quitar "Open Next.js Dev Tools" del footer | 🔴 Alta | Claude Sonnet | ⬜ |
| 4.2 | Reemplazar placeholder del video hero por el archivo real `hero-gonzachi_1.mp4` | 🔴 Alta | Claude Sonnet | ⬜ |
| 4.3 | Añadir autoplay, muted y fallback a imagen estática en el video hero para mobile | 🟡 Media | Claude Sonnet | ⬜ |
| 4.4 | Mejorar footer: añadir link a LinkedIn, email y navegación rápida | 🟡 Media | Claude Sonnet | ⬜ |

---

## 🟠 ÉPICA 5 — SEO & Performance
> Visibilidad y velocidad.
> **Depende de:** Épicas 1, 2 y 3

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 5.1 | Meta tags por página: `title` y `description` en ES y EN | 🔴 Alta | Claude Sonnet | ⬜ |
| 5.2 | `og:image` para previsualización en LinkedIn y redes sociales | 🟡 Media | Claude Sonnet | ⬜ |
| 5.3 | Añadir sección de Skills / Herramientas (Figma, IA, Webflow, Next.js, etc.) | 🟡 Media | Claude Sonnet | ⬜ |
| 5.4 | Auditoría de Performance y Core Web Vitals | 🟢 Baja | Gemini 1.5 Pro | ⬜ |

---

## 📊 ÉPICA 7 — Analytics, Tracking & Feature Flags
> Observabilidad del portfolio y control de contenido.
> **Depende de:** Épica 1

### 7A — Google Analytics 4

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 7.1 | Instalar `@next/third-parties` y configurar GA4 con componente `GoogleAnalytics` | 🔴 Alta | Claude Sonnet | ⬜ |
| 7.2 | Configurar tracking de eventos clave: click en proyectos, cambio de idioma, CTA contacto | 🟡 Media | Claude Sonnet | ⬜ |
| 7.3 | Respetar consentimiento de cookies (no disparar GA hasta aceptación) | 🟡 Media | Claude Sonnet | ⬜ |

### 7B — Hotjar

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 7.4 | Instalar script Hotjar en `layout.tsx` con carga diferida (`strategy="lazyOnload"`) | 🔴 Alta | Claude Sonnet | ⬜ |
| 7.5 | Configurar Heatmaps en páginas clave: home y proyectos | 🟡 Media | — config en Hotjar dashboard | ⬜ |
| 7.6 | Configurar Session Recordings | 🟡 Media | — config en Hotjar dashboard | ⬜ |

### 7C — Product Fruits

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 7.7 | Instalar SDK de Product Fruits y configurar workspace | 🟡 Media | Claude Sonnet | ⬜ |
| 7.8 | Crear tour interactivo de proyectos para guiar a recruiters/clientes | 🟡 Media | — config en Product Fruits dashboard | ⬜ |
| 7.9 | Definir trigger del tour: automático al primer acceso o botón manual "Tour del portfolio" | 🟢 Baja | Claude Sonnet | ⬜ |

### 7D — Feature Flags (proyectos ON/OFF)

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 7.10 | Crear `projects.config.ts` con flag `enabled: true/false` por proyecto | 🔴 Alta | Claude Sonnet | ⬜ |
| 7.11 | Filtrar proyectos desactivados en la grid (no renderizar si `enabled: false`) | 🔴 Alta | Claude Sonnet | ⬜ |
| 7.12 | Ocultar rutas de proyectos desactivados (redirigir a 404 o home si acceso directo) | 🟡 Media | Claude Sonnet | ⬜ |
| 7.13 | Evaluar integrar flags en `.env` para activar/desactivar sin tocar código | 🟡 Media | Claude Sonnet | ⬜ |

---

## ⚫ ÉPICA 6 — Nice to Have
> Solo cuando todo lo anterior esté estable.

| # | Tarea | Prioridad | Modelo | Estado |
|---|---|---|---|---|
| 6.1 | Dark Mode / Light Mode con toggle (sol/luna) en navbar | 🟢 Baja | Claude Opus | ⬜ |
| 6.2 | Persistir preferencia dark/light en `localStorage` + respetar `prefers-color-scheme` | 🟢 Baja | Claude Sonnet | ⬜ |
| 6.3 | Animaciones y micro-interacciones | 🟢 Baja | Claude Sonnet | ⬜ |

---

## 📊 Resumen General

| Épica | Nombre | Nº Tareas | Dependencias |
|---|---|---|---|
| 🟣 Épica 1 | Fundaciones Técnicas | 9 | — |
| 🔵 Épica 2 | Contenido & Copy | 7 | Épica 1 |
| 🟢 Épica 3 | Proyectos | 15 | Épicas 1 + 2 |
| 🟡 Épica 4 | Correcciones & Limpieza | 4 | Ninguna (paralela) |
| 🟠 Épica 5 | SEO & Performance | 4 | Épicas 1 + 2 + 3 |
| 📊 Épica 7 | Analytics,
