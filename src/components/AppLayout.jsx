import { Outlet } from 'react-router'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'
import styles from '@/styles/AppLayout.module.css'

/**
 * Marco común a todas las vistas: menú lateral + barra superior.
 * <Outlet /> es el "hueco" donde React Router pinta la vista activa.
 * @returns {JSX.Element}
 */
export default function AppLayout() {
  return (
    <div className={styles.shell}>
      <Sidebar storeName="Moda Andina" />
      <div className={styles.content}>
        <Topbar userName="Camilda" role="Administradora" />
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          Camilda · Desarrollo de Aplicaciones Web (IS093A) · UNCP · Semana 05
        </footer>
      </div>
    </div>
  )
}
