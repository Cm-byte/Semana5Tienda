import { MapPin } from 'lucide-react'
import PageHeader from '@/components/PageHeader.jsx'
import StyleBadge from '@/components/StyleBadge.jsx'
import { customers, salesByCustomer, saleTotal, formatPEN, formatDate } from '@/data/store.js'
import styles from '@/styles/Page.module.css'

/** Iniciales para el avatar: "Lucía Paredes" → "LP" */
const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('')

/**
 * Vista de clientes (ruta "/clientes").
 * @returns {JSX.Element}
 */
export default function ClientesPage() {
  const rows = customers.map((c) => {
    const orders = salesByCustomer(c.id)
    return { ...c, orders: orders.length, spent: orders.reduce((sum, s) => sum + saleTotal(s), 0) }
  })
  const buyers = rows.filter((r) => r.orders > 0).length

  return (
    <>
      <PageHeader title="Clientes" subtitle="Personas registradas en la tienda" backTo="/">
        <div className={styles.stat}>
          <p className={styles.statLabel}>Clientes registrados</p>
          <p className={styles.statValue}>{customers.length}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Compraron en octubre</p>
          <p className={styles.statValue}>{buyers}</p>
        </div>
      </PageHeader>

      <section className={styles.block}>
        <StyleBadge type="module" file="Page.module.css" />
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Ubicación</th>
                <th>Cliente desde</th>
                <th className={styles.num}>Pedidos (oct.)</th>
                <th className={styles.num}>Total gastado</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => (
                <tr key={c.id}>
                  <td>
                    <span className={styles.person}>
                      <span className={styles.avatar}>{initials(c.name)}</span>
                      <span className={styles.strong}>{c.name}</span>
                    </span>
                  </td>
                  <td className={styles.mutedText}>
                    <MapPin size={13} style={{ verticalAlign: '-2px' }} /> {c.district}
                  </td>
                  <td className={styles.mutedText}>{formatDate(c.since)}</td>
                  <td className={styles.num}>{c.orders}</td>
                  <td className={`${styles.num} ${styles.strong}`}>{formatPEN(c.spent)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
