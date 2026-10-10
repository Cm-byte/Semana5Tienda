import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'
import styles from '@/styles/Page.module.css'

/**
 * Encabezado reutilizable de cada vista.
 * Usa children para recibir contenido extra (por ejemplo, resúmenes).
 *
 * @param {Object} props
 * @param {string} props.title - Título de la vista
 * @param {string} [props.subtitle] - Descripción
 * @param {string} [props.backTo] - Ruta para el enlace "Volver"
 * @param {string} [props.backLabel='Volver al panel'] - Texto del enlace
 * @param {import('react').ReactNode} [props.children] - Contenido adicional
 * @returns {JSX.Element}
 */
export default function PageHeader({ title, subtitle, backTo, backLabel = 'Volver al panel', children }) {
  return (
    <div className={styles.header}>
      {backTo && (
        <Link to={backTo} className={styles.back}>
          <ChevronLeft size={16} /> {backLabel}
        </Link>
      )}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {children && <div className={styles.summary}>{children}</div>}
    </div>
  )
}
