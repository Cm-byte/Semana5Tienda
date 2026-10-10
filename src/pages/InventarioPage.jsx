import PageHeader from '@/components/PageHeader.jsx'
import ProductCard from '@/components/ProductCard.jsx'
import StyleBadge from '@/components/StyleBadge.jsx'
import { products, LOW_STOCK } from '@/data/store.js'
import styles from '@/styles/Page.module.css'

/**
 * Vista de inventario (ruta "/inventario"): prendas sin stock y con stock bajo.
 * @returns {JSX.Element}
 */
export default function InventarioPage() {
  const outOfStock = products.filter((p) => p.stock === 0)
  const lowStock = products.filter((p) => p.stock > 0 && p.stock <= LOW_STOCK)
  const totalUnits = products.reduce((sum, p) => sum + p.stock, 0)

  return (
    <>
      <PageHeader title="Inventario" subtitle="Prendas que necesitan reposición" backTo="/">
        <div className={styles.stat}>
          <p className={styles.statLabel}>Sin stock</p>
          <p className={styles.statValue}>{outOfStock.length}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Stock bajo (≤ {LOW_STOCK})</p>
          <p className={styles.statValue}>{lowStock.length}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Unidades en almacén</p>
          <p className={styles.statValue}>{totalUnits}</p>
        </div>
      </PageHeader>

      <div className={styles.stack}>
        <section className={styles.block}>
          <StyleBadge type="module" file="Page.module.css" />
          <h2 className={styles.blockTitle}>Sin stock · reponer con urgencia</h2>
          <div className={styles.catalog}>
            {outOfStock.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        <section className={styles.block}>
          <StyleBadge type="module" file="Page.module.css" />
          <h2 className={styles.blockTitle}>Stock bajo</h2>
          <div className={styles.catalog}>
            {lowStock.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </>
  )
}
