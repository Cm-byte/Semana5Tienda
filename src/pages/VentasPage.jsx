import { Link } from 'react-router'
import PageHeader from '@/components/PageHeader.jsx'
import StatusPill from '@/components/StatusPill.jsx'
import StyleBadge from '@/components/StyleBadge.jsx'
import { sales, getCustomer, getProduct, saleTotal, saleUnits, formatPEN, formatDate } from '@/data/store.js'
import styles from '@/styles/Page.module.css'

/**
 * Vista de ventas (ruta "/ventas"): tabla de pedidos del mes.
 * @returns {JSX.Element}
 */
export default function VentasPage() {
  const total = sales.reduce((sum, s) => sum + saleTotal(s), 0)
  const units = sales.reduce((sum, s) => sum + saleUnits(s), 0)

  return (
    <>
      <PageHeader title="Ventas" subtitle="Pedidos registrados en octubre 2026" backTo="/">
        <div className={styles.stat}>
          <p className={styles.statLabel}>Total vendido</p>
          <p className={styles.statValue}>{formatPEN(total)}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Pedidos</p>
          <p className={styles.statValue}>{sales.length}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Ticket promedio</p>
          <p className={styles.statValue}>{formatPEN(total / sales.length)}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Prendas</p>
          <p className={styles.statValue}>{units}</p>
        </div>
      </PageHeader>

      <section className={styles.block}>
        <StyleBadge type="module" file="Page.module.css" />
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Prendas</th>
                <th>Pago</th>
                <th>Estado</th>
                <th className={styles.num}>Total</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => {
                const customer = getCustomer(sale.customerId)
                return (
                  <tr key={sale.id}>
                    <td className={styles.strong}>{sale.id}</td>
                    <td className={styles.mutedText}>{formatDate(sale.date)}</td>
                    <td>{customer.name}</td>
                    <td>
                      {sale.items.map((it, i) => {
                        const p = getProduct(it.productId)
                        return (
                          <span key={it.productId}>
                            {i > 0 && ', '}
                            <Link to={`/productos/${p.id}`} className={styles.link}>{p.name}</Link> ×{it.qty}
                          </span>
                        )
                      })}
                    </td>
                    <td className={styles.mutedText}>{sale.method}</td>
                    <td><StatusPill>{sale.status}</StatusPill></td>
                    <td className={`${styles.num} ${styles.strong}`}>{formatPEN(saleTotal(sale))}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
