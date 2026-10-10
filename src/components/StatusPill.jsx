import styles from '@/styles/Page.module.css'

const tone = {
  Pagado: 'success',
  Enviado: 'info',
  Pendiente: 'warning',
  'Sin stock': 'danger',
  'Stock bajo': 'warning',
  Disponible: 'success',
}

/**
 * Píldora de estado con color según el texto.
 * @param {Object} props
 * @param {string} props.children - Texto del estado
 * @returns {JSX.Element}
 */
export default function StatusPill({ children }) {
  return <span className={`${styles.pill} ${styles[tone[children] ?? 'info']}`}>{children}</span>
}
