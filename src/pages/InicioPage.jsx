import { Star } from 'lucide-react'
import Dashboard from '@/components/Dashboard.jsx'
import MetricCard from '@/components/MetricCard.jsx'
import ArchitecturePanel from '@/components/ArchitecturePanel.jsx'
import StyleLegend from '@/components/StyleLegend.jsx'
import PageHeader from '@/components/PageHeader.jsx'
import { metrics, bestSeller, componentTree, styleMap } from '@/data/metrics.js'
import styles from '@/styles/InicioPage.module.css'

/**
 * Vista de inicio (ruta "/"): panel de métricas + arquitectura + leyenda.
 * @returns {JSX.Element}
 */
export default function InicioPage() {
  return (
    <>
      <PageHeader title="Hola, Administradora" subtitle="Así va Moda Andina este mes. Haz clic en una tarjeta para ver el detalle." />

      <div className={styles.layout}>
        <div className={styles.main}>
          <Dashboard title="Panel de métricas" subtitle="Indicadores clave · octubre 2026">
            {/* PROPS: datos estructurados del arreglo */}
            {metrics.map((m) => (
              <MetricCard
                key={m.id}
                title={m.title}
                value={m.value}
                change={m.change}
                icon={m.icon}
                description={m.description}
                to={m.to}
                invertTrend={m.id === 'stock'}
              />
            ))}

            {/* CHILDREN: contenido anidado dentro de la tarjeta */}
            <MetricCard
              title="Prenda más vendida"
              value={`${bestSeller.sold} und.`}
              change={11.4}
              icon={Star}
              to={`/productos/${bestSeller.id}`}
            >
              {bestSeller.name}
            </MetricCard>
          </Dashboard>

          <ArchitecturePanel tree={componentTree} />
        </div>

        <StyleLegend items={styleMap} />
      </div>
    </>
  )
}
