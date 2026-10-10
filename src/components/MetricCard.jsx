import { Link } from 'react-router'
import { TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react'
import styles from '@/styles/MetricCard.module.css'

/**
 * Tarjeta de una métrica de la tienda. Es un enlace a la vista de detalle.
 * Las props son de SOLO LECTURA: se usan, nunca se modifican.
 *
 * @param {Object} props
 * @param {string} props.title - Nombre de la métrica
 * @param {string} props.value - Valor ya formateado
 * @param {number} props.change - Variación % (positivo sube, negativo baja)
 * @param {import('react').ElementType} props.icon - Componente de ícono (lucide-react)
 * @param {string} props.to - Ruta de la vista a la que lleva la tarjeta
 * @param {string} [props.description] - Texto de contexto
 * @param {boolean} [props.invertTrend=false] - true si bajar es bueno (ej. productos sin stock)
 * @param {import('react').ReactNode} [props.children] - Contenido extra anidado
 * @returns {JSX.Element}
 */
export default function MetricCard({ title, value, change, icon: Icon, to, description, invertTrend = false, children }) {
  const goesUp = change >= 0
  const isGood = invertTrend ? !goesUp : goesUp
  const TrendIcon = goesUp ? TrendingUp : TrendingDown

  return (
    <Link to={to} className={styles.card}>
      <div className={styles.top}>
        <span className={styles.iconBox}>
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className={`${styles.trend} ${isGood ? styles.good : styles.bad}`}>
          <TrendIcon size={13} strokeWidth={2.5} /> {Math.abs(change)} %
        </span>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
      {description && <p className={styles.description}>{description}</p>}
      {children && <div className={styles.extra}>{children}</div>}
      <span className={styles.cta}>
        Ver detalle <ArrowUpRight size={14} />
      </span>
    </Link>
  )
}
