import { ArrowRight } from 'lucide-react'
import StyleBadge from './StyleBadge.jsx'
import styles from '@/styles/ArchitecturePanel.module.css'

/**
 * Nodo recursivo del árbol de componentes.
 * @param {Object} props
 * @param {{name:string, role:string, style:'module'|'inline', children:Array}} props.node
 * @returns {JSX.Element}
 */
function TreeNode({ node }) {
  const isModule = node.style === 'module'
  return (
    <li className={styles.node}>
      <div className={styles.row}>
        <code className={styles.name}>&lt;{node.name} /&gt;</code>
        <span className={styles.role}>{node.role}</span>
        <span className={`${styles.tag} ${isModule ? styles.tagModule : styles.tagInline}`}>
          {isModule ? 'module' : 'inline'}
        </span>
      </div>
      {node.children.length > 0 && (
        <ul className={styles.branch}>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

/**
 * Muestra la arquitectura de componentes y el flujo de datos.
 * @param {Object} props
 * @param {Object} props.tree - Árbol de componentes (data/metrics.js)
 * @returns {JSX.Element}
 */
export default function ArchitecturePanel({ tree }) {
  const flow = ['store.js', 'metrics.js', 'InicioPage', 'Dashboard', 'MetricCard']
  return (
    <section className={styles.panel}>
      <StyleBadge type="module" file="ArchitecturePanel.module.css" />
      <h2 className={styles.title}>Arquitectura de componentes</h2>
      <p className={styles.subtitle}>Árbol de render · los datos fluyen de padre a hijo</p>

      <ul className={styles.tree}>
        <TreeNode node={tree} />
      </ul>

      <div className={styles.flow}>
        {flow.map((step, i) => (
          <span key={step} className={styles.flowItem}>
            <span className={styles.step}>{step}</span>
            {i < flow.length - 1 && <ArrowRight size={14} className={styles.arrow} />}
          </span>
        ))}
        <span className={styles.flowLabel}>(props / children)</span>
      </div>

      <p className={styles.note}>
        JSX se compila a <code>React.createElement(type, props, ...children)</code>
      </p>
    </section>
  )
}
