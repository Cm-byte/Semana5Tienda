import StyleBadge from './StyleBadge.jsx'
import styles from '@/styles/Dashboard.module.css'

/**
 * Contenedor del panel de métricas (patrón composición).
 *
 * @param {Object} props
 * @param {string} props.title - Título del panel
 * @param {string} [props.subtitle] - Texto secundario
 * @param {import('react').ReactNode} props.children - Tarjetas u otro contenido anidado
 * @returns {JSX.Element}
 */
export default function Dashboard({ title, subtitle, children }) {
  return (
    <section className={styles.dashboard}>
      <StyleBadge type="module" file="Dashboard.module.css" />
      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.grid}>{children}</div>
    </section>
  )
}
