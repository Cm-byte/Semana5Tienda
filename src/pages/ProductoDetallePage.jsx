import { useParams } from 'react-router'
import PageHeader from '@/components/PageHeader.jsx'
import GarmentIcon from '@/components/GarmentIcon.jsx'
import StatusPill from '@/components/StatusPill.jsx'
import StyleBadge from '@/components/StyleBadge.jsx'
import { stockStatus } from '@/components/ProductCard.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { getProduct, getCustomer, salesByProduct, formatPEN, formatDate } from '@/data/store.js'
import styles from '@/styles/Page.module.css'

/**
 * Vista de detalle de una prenda (ruta "/productos/:id").
 * useParams lee el :id de la URL.
 * @returns {JSX.Element}
 */
export default function ProductoDetallePage() {
  const { id } = useParams()
  const product = getProduct(id)

  if (!product) return <NotFoundPage />

  const orders = salesByProduct(product.id)

  return (
    <>
      <PageHeader title={product.name} subtitle={product.category} backTo="/productos" backLabel="Volver al catálogo" />

      <div className={styles.stack}>
        <section className={`${styles.block} ${styles.detail}`}>
          <StyleBadge type="module" file="Page.module.css" />
          <div className={styles.detailImage}>
            <GarmentIcon type={product.type} color={product.color} size={180} />
          </div>

          <div className={styles.detailInfo}>
            <div>
              <StatusPill>{stockStatus(product.stock)}</StatusPill>
              <p className={styles.detailPrice}>{formatPEN(product.price)}</p>
            </div>

            <div>
              <p className={styles.label}>Tallas disponibles</p>
              <div className={styles.sizes}>
                {product.sizes.map((s) => (
                  <span key={s} className={styles.size}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.facts}>
              <div className={styles.stat}>
                <p className={styles.statLabel}>En stock</p>
                <p className={styles.statValue}>{product.stock} und.</p>
              </div>
              <div className={styles.stat}>
                <p className={styles.statLabel}>Vendidas (histórico)</p>
                <p className={styles.statValue}>{product.sold} und.</p>
              </div>
              <div className={styles.stat}>
                <p className={styles.statLabel}>Código</p>
                <p className={styles.statValue}>{product.id.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.block}>
          <StyleBadge type="module" file="Page.module.css" />
          <h2 className={styles.blockTitle}>Pedidos de octubre con esta prenda</h2>
          {orders.length === 0 ? (
            <p className={styles.empty}>Esta prenda aún no tiene pedidos este mes.</p>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Pedido</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th className={styles.num}>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td className={styles.strong}>{o.id}</td>
                      <td className={styles.mutedText}>{formatDate(o.date)}</td>
                      <td>{getCustomer(o.customerId).name}</td>
                      <td className={styles.num}>
                        {o.items.find((it) => it.productId === product.id).qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
