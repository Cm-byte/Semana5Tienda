import PageHeader from '@/components/PageHeader.jsx'
import ProductCard from '@/components/ProductCard.jsx'
import StyleBadge from '@/components/StyleBadge.jsx'
import { products } from '@/data/store.js'
import styles from '@/styles/Page.module.css'

/**
 * Vista de catálogo (ruta "/productos").
 * @returns {JSX.Element}
 */
export default function ProductosPage() {
  const categories = new Set(products.map((p) => p.category)).size
  const totalSold = products.reduce((sum, p) => sum + p.sold, 0)

  return (
    <>
      <PageHeader title="Productos" subtitle="Catálogo de la temporada primavera 2026" backTo="/">
        <div className={styles.stat}>
          <p className={styles.statLabel}>Prendas en catálogo</p>
          <p className={styles.statValue}>{products.length}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Categorías</p>
          <p className={styles.statValue}>{categories}</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Unidades vendidas (histórico)</p>
          <p className={styles.statValue}>{totalSold}</p>
        </div>
      </PageHeader>

      <section className={styles.block}>
        <StyleBadge type="module" file="Page.module.css" />
        <div className={styles.catalog}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  )
}
