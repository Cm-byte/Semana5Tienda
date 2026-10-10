# Moda Andina — Panel de la tienda (Práctica Semana 05)

**Asignatura:** Desarrollo de Aplicaciones Web (IS093A) · UNCP
**Autora:** Ingrid

SPA en React + Vite (Client-Side Rendering) que simula el panel de administración de una tienda
de ropa. El panel de métricas lleva a vistas reales: ventas, catálogo, detalle de prenda,
clientes e inventario. Incluye un panel de arquitectura de componentes y una leyenda que indica
qué partes usan **CSS Modules** y cuáles **estilos inline**.

## Ejecutar

```bash
npm install
npm run dev       # desarrollo con HMR → http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # sirve dist/ → http://localhost:4173
```

## Rutas

| Ruta | Vista | Se llega desde |
|---|---|---|
| `/` | Panel de métricas + arquitectura + leyenda | Menú "Inicio" |
| `/ventas` | Tabla de pedidos de octubre | Tarjeta "Ventas de octubre" |
| `/productos` | Catálogo de prendas | Tarjeta "Prendas vendidas" |
| `/productos/:id` | Detalle de una prenda | Tarjeta "Prenda más vendida" o el catálogo |
| `/clientes` | Lista de clientes | Tarjeta "Clientes" |
| `/inventario` | Prendas sin stock y con stock bajo | Tarjeta "Productos sin stock" |

Los números de las tarjetas se calculan a partir de los datos de `src/data/store.js`,
así coinciden con lo que muestra cada vista.

## Estructura

```
src/
├── main.jsx               # createRoot + BrowserRouter + CSS global
├── App.jsx                # Orquestador: solo define las rutas
├── components/            # AppLayout, Sidebar, Topbar, Dashboard, MetricCard,
│                          # ArchitecturePanel, StyleLegend, StyleBadge, PageHeader,
│                          # ProductCard, GarmentIcon, StatusPill
├── pages/                 # Inicio, Ventas, Productos, ProductoDetalle, Clientes,
│                          # Inventario, NotFound
├── data/
│   ├── store.js           # Productos, clientes, ventas y funciones de consulta
│   └── metrics.js         # Métricas calculadas, árbol de componentes, mapa de estilos
└── styles/                # global.css + *.module.css
```

## Estrategias de estilado

- **CSS Modules:** Sidebar, Dashboard, MetricCard, ArchitecturePanel, vistas (`Page.module.css`).
- **Inline (`style={{...}}`):** Topbar, StyleBadge, StyleLegend.
- **Global:** solo `global.css` (reset y variables), importado una vez en `main.jsx`.
