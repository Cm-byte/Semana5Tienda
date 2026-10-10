import { Link } from 'react-router'
import GarmentIcon from './GarmentIcon.jsx'
import StatusPill from './StatusPill.jsx'
import { formatPEN, LOW_STOCK } from '@/data/store.js'
import styles from '@/styles/Page.module.css'

/** Texto de estado según el stock */
export const stockStatus = (stock) =>
  stock === 0 ? 'Sin stock' : stock <= LOW_STOCK ? 'Stock bajo' : 'Disponible'

/**
 * Tarjeta de producto del catálogo. Lleva a la vista de detalle.
 * @param {Object} props
 * @param {{id:string,name:string,category:string,type:string,price:number,stock:number,color:string}} props.product
 * @returns {JSX.Element}
 */
export default function ProductCard({ product }) {
  return (
    <Link to={`/productos/${product.id}`} className={styles.product}>
      <div className={styles.swatch}>
        <GarmentIcon type={product.type} color={product.color} size={72} />
        <span className={styles.swatchPill}>
          <StatusPill>{stockStatus(product.stock)}</StatusPill>
        </span>
      </div>
      <div className={styles.productBody}>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.productName}>{product.name}</p>
        <div className={styles.productFoot}>
          <span className={styles.price}>{formatPEN(product.price)}</span>
          <span className={styles.stock}>{product.stock} und.</span>
        </div>
      </div>
    </Link>
  )
}
