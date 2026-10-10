import { NavLink } from 'react-router'
import { LayoutDashboard, Receipt, Shirt, Users, Boxes } from 'lucide-react'
import styles from '@/styles/Sidebar.module.css'

const links = [
  { to: '/', label: 'Inicio', icon: LayoutDashboard, end: true },
  { to: '/ventas', label: 'Ventas', icon: Receipt },
  { to: '/productos', label: 'Productos', icon: Shirt },
  { to: '/clientes', label: 'Clientes', icon: Users },
  { to: '/inventario', label: 'Inventario', icon: Boxes },
]

/**
 * Menú lateral de navegación. Estilado con CSS Modules.
 * NavLink marca automáticamente el enlace de la ruta activa.
 * @param {Object} props
 * @param {string} props.storeName - Nombre de la tienda
 * @returns {JSX.Element}
 */
export default function Sidebar({ storeName }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.logo}>MA</span>
        <div>
          <p className={styles.name}>{storeName}</p>
          <p className={styles.tagline}>Boutique · Huancayo</p>
        </div>
      </div>

      <nav className={styles.nav}>
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
            {label}
          </NavLink>
        ))}
      </nav>

      <p className={styles.badge}>CSS Module · Sidebar.module.css</p>
    </aside>
  )
}
