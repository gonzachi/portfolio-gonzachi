# 📊 KPIs y OKRs — Plataforma de Generación de Imágenes con IA

Guía práctica para medir el impacto de la plataforma en Mango.

---

## 1. KPIs de Adopción

### MAU — Monthly Active Users (Usuarios Activos Mensuales)
Cantidad de personas **únicas** que usaron la plataforma al menos 1 vez en los últimos 30 días. Si una persona entra 20 veces, cuenta como 1.

**Cómo medirlo:** Pedir al equipo de data/backend una query de usuarios únicos con login en los últimos 30 días. Si usan PostHog, Mixpanel o Google Analytics, ya lo tienen.

### WAU — Weekly Active Users
Igual que MAU pero en los últimos 7 días. Sirve para ver tendencias más rápido.

### Equipos onboardeados
Cantidad de equipos/áreas que usan la plataforma.

**Cómo medirlo:** Llevar un registro manual (Excel/Notion) cada vez que se hace una formación con un equipo nuevo: nombre del equipo, fecha, nº de personas.

### Tasa de activación
% de usuarios registrados que completaron su primera generación de imagen.

**Fórmula:** `(usuarios que generaron ≥1 imagen ÷ usuarios registrados) × 100`

---

## 2. KPIs de Eficiencia ⭐ (los más potentes)

### Tiempo ahorrado por tarea
Cuánto tiempo se reduce el proceso creativo gracias a la plataforma.

**Cómo medirlo:** Encuesta directa a 10-15 usuarios:
- *"¿Cuánto tardabas en crear una imagen de producto antes?"*
- *"¿Cuánto tardás ahora con la plataforma?"*

**Ejemplo:** Si antes tardaban 2h y ahora 15min → ahorro de ~1h45min por imagen.

### Imágenes generadas / mes
Volumen total de uso productivo.

**Cómo medirlo:** Query a la base de datos: `COUNT imágenes creadas, GROUP BY mes`

### Ahorro estimado en € / mes
Impacto traducido a dinero.

**Fórmula opción A:** `horas ahorradas al mes × nº usuarios × coste/hora del empleado`
- Ej: 50 usuarios × 5h/mes ahorradas × 30€/h = **7.500€/mes**

**Fórmula opción B:** Comparar con costes que reemplaza:
- *"Una sesión fotográfica cuesta X€, la plataforma reemplazó Y sesiones al mes"*

---

## 3. KPIs de Calidad y Satisfacción

### CSAT — Customer Satisfaction Score
Satisfacción general del usuario con la plataforma.

**Cómo medirlo:** Encuesta de 1 pregunta: *"Del 1 al 5, ¿qué tan satisfecho estás con la plataforma?"*. El promedio de respuestas es el CSAT.

### Tasa de éxito de generación
% de imágenes que el usuario acepta y usa (descarga/guarda).

**Fórmula:** `(imágenes descargadas ÷ imágenes generadas) × 100`

### Tasa de regeneración
Promedio de veces que un usuario le da a "generar de nuevo" antes de quedarse con una imagen. Más baja = mejor calidad del modelo.

**Cómo medirlo:** Trackear el evento "regenerar" en analytics y calcular el promedio por imagen final.

---

## 4. KPIs de Producto

| KPI | Cómo medirlo |
|-----|-------------|
| Features entregados / trimestre | Backlog completado en el sprint/quarter |
| Uso por feature | Eventos por funcionalidad en analytics |
| Feedback recibido | Nº de requests/sugerencias por canal |

---

## OKRs propuestos (Q2 2026)

### O1: Aumentar la adopción
| Key Result | Meta | Cómo medir |
|------------|------|------------|
| Crecer MAU un 30% vs Q1 | De [actual] a [+30%] | Analytics mensual |
| Onboardear 2-3 equipos nuevos | Registro de formaciones | Manual |
| Tasa de activación ≥ 70% | Funnel primer uso | Analytics |

### O2: Demostrar impacto en eficiencia
| Key Result | Meta | Cómo medir |
|------------|------|------------|
| Medir tiempo ahorrado con ≥10 usuarios | Encuesta completada | Google Forms |
| Documentar ahorro estimado en €/mes | Cálculo con fórmula | Report |
| Alcanzar [X] imágenes generadas / mes | Tracking en plataforma | Query DB |

### O3: Mejorar la experiencia
| Key Result | Meta | Cómo medir |
|------------|------|------------|
| CSAT ≥ 4 de 5 | Encuesta trimestral | Google Forms |
| Reducir tasa de regeneración un 20% | Analytics de eventos | PostHog/similar |
| Resolver 100% del feedback crítico | Backlog grooming | Jira/Linear |

---

## 📋 Preguntas para la encuesta a usuarios

Enviar por Google Forms a 10-15 usuarios activos:

1. ¿Con qué frecuencia usás la plataforma? *(diario / semanal / mensual / casi nunca)*
2. ¿Cuánto tardabas en crear una imagen de producto **antes** de la plataforma? *(respuesta libre)*
3. ¿Cuánto tardás **ahora** con la plataforma? *(respuesta libre)*
4. Del 1 al 5, ¿qué tan útil te resulta la plataforma? *(escala)*
5. ¿Qué funcionalidad te gustaría que mejore o que se agregue? *(respuesta libre)*

---

## 🚀 Plan de acción semanal

### Semana 1 (arranque)
- [ ] Pedir MAU y WAU al equipo de data
- [ ] Contar cuántos equipos usan la plataforma hoy
- [ ] Verificar si hay contador de imágenes generadas

### Semana 2
- [ ] Crear y enviar la encuesta (Google Forms, 5 preguntas)
- [ ] Enviar a 10-15 usuarios activos
- [ ] Pedir query de imágenes generadas por mes

### Semana 3
- [ ] Recopilar resultados de la encuesta
- [ ] Calcular ahorro de tiempo promedio
- [ ] Calcular ahorro estimado en €

### Semana 4
- [ ] Armar mini report con los datos
- [ ] Compartir con tu manager en la 1:1
- [ ] Usar los datos para actualizar el portfolio 💪
