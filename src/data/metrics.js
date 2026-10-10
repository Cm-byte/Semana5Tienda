import { Banknote, Shirt, Users, PackageX } from 'lucide-react'
import { products, customers, sales, saleTotal, saleUnits, formatPEN } from './store.js'

const totalSales = sales.reduce((sum, s) => sum + saleTotal(s), 0)
const totalUnits = sales.reduce((sum, s) => sum + saleUnits(s), 0)
const outOfStock = products.filter((p) => p.stock === 0).length

/** Prenda con más unidades vendidas en la historia de la tienda */
export const bestSeller = [...products].sort((a, b) => b.sold - a.sold)[0]

/**
 * Métricas del panel. Cada una tiene `to`: la ruta de la vista a la que lleva.
 * @type {ReadonlyArray<{id:string,title:string,value:string,change:number,icon:import('react').ElementType,description:string,to:string}>}
 */
export const metrics = Object.freeze([
  { id: 'ventas',   title: 'Ventas de octubre',   value: formatPEN(totalSales), change: 14.2, icon: Banknote, description: `${sales.length} pedidos`,       to: '/ventas' },
  { id: 'prendas',  title: 'Prendas vendidas',    value: String(totalUnits),    change: 9.6,  icon: Shirt,    description: 'En pedidos de octubre',          to: '/productos' },
  { id: 'clientes', title: 'Clientes',            value: String(customers.length), change: 5.3, icon: Users,  description: 'Registrados en la tienda',       to: '/clientes' },
  { id: 'stock',    title: 'Productos sin stock', value: String(outOfStock),    change: -2.1, icon: PackageX, description: 'Requieren reposición',           to: '/inventario' },
])

/** Árbol de componentes de la app (para <ArchitecturePanel>). */
export const componentTree = Object.freeze({
  name: 'App', role: 'Orquestador · define las rutas', style: 'module',
  children: [
    {
      name: 'AppLayout', role: 'Marco común · <Outlet />', style: 'module',
      children: [
        { name: 'Sidebar', role: 'Navegación (NavLink)', style: 'module', children: [] },
        { name: 'Topbar', role: 'Barra superior', style: 'inline', children: [] },
        {
          name: 'InicioPage', role: 'Ruta /', style: 'module',
          children: [
            { name: 'Dashboard', role: 'Recibe children', style: 'module', children: [
              { name: 'MetricCard ×5', role: 'props: title, value, to…', style: 'module', children: [] },
            ] },
            { name: 'ArchitecturePanel', role: 'Este árbol', style: 'module', children: [] },
            { name: 'StyleLegend', role: 'Leyenda lateral', style: 'inline', children: [] },
          ],
        },
        { name: 'VentasPage, ProductosPage…', role: 'Otras rutas', style: 'module', children: [] },
      ],
    },
  ],
})

/** Partes de la página y su estrategia de estilado (para <StyleLegend>) */
export const styleMap = Object.freeze([
  { part: 'Barra superior', type: 'inline', file: 'style={{...}} en Topbar.jsx' },
  { part: 'Menú lateral', type: 'module', file: 'Sidebar.module.css' },
  { part: 'Panel de métricas', type: 'module', file: 'Dashboard.module.css' },
  { part: 'Tarjetas de métricas', type: 'module', file: 'MetricCard.module.css' },
  { part: 'Arquitectura', type: 'module', file: 'ArchitecturePanel.module.css' },
  { part: 'Etiquetas de estilo', type: 'inline', file: 'style={{...}} en StyleBadge.jsx' },
  { part: 'Esta leyenda', type: 'inline', file: 'style={{...}} en StyleLegend.jsx' },
  { part: 'Vistas (tablas, catálogo)', type: 'module', file: 'Page.module.css' },
])
