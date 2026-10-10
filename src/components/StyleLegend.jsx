import { Palette, PenLine } from 'lucide-react'
import StyleBadge from './StyleBadge.jsx'

/**
 * Panel lateral que indica qué estrategia de estilado usa cada parte.
 * Estilado con estilos INLINE.
 *
 * @param {Object} props
 * @param {ReadonlyArray<{part:string, type:'module'|'inline', file:string}>} props.items
 * @returns {JSX.Element}
 */
export default function StyleLegend({ items }) {
  const s = {
    aside: {
      position: 'relative',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '24px 18px 18px',
      boxShadow: '0 1px 3px rgba(0,0,0,.06)',
    },
    title: { fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 },
    hint: { fontSize: '0.78rem', color: 'var(--muted)', margin: '2px 0 14px' },
    list: { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '8px' },
    item: (type) => ({
      display: 'grid',
      gap: '2px',
      padding: '8px 10px',
      borderRadius: '10px',
      borderLeft: `4px solid ${type === 'module' ? 'var(--module)' : 'var(--inline)'}`,
      background: type === 'module' ? '#f5f3ff' : '#fff7ed',
    }),
    part: { display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.85rem' },
    file: { fontSize: '0.72rem', color: 'var(--muted)' },
    box: {
      marginTop: '16px',
      paddingTop: '12px',
      borderTop: '1px dashed var(--border)',
      fontSize: '0.75rem',
      lineHeight: 1.55,
      color: 'var(--muted)',
    },
  }

  return (
    <aside style={s.aside}>
      <StyleBadge type="inline" />
      <h2 style={s.title}>¿Dónde se usa cada estilo?</h2>
      <p style={s.hint}>Leyenda de estrategias de estilado</p>
      <ul style={s.list}>
        {items.map((it) => {
          const Icon = it.type === 'module' ? Palette : PenLine
          return (
            <li key={it.part} style={s.item(it.type)}>
              <span style={s.part}>
                <Icon size={14} color={it.type === 'module' ? 'var(--module)' : 'var(--inline)'} /> {it.part}
              </span>
              <span style={s.file}>{it.file}</span>
            </li>
          )
        })}
      </ul>
      <div style={s.box}>
        <strong>CSS Modules:</strong> cada clase recibe un hash único (ej. <code>MetricCard_card__a1B2c</code>), así no hay colisiones.<br />
        <strong>Inline:</strong> objeto JS en <code>style</code>; tiene la mayor prioridad en la cascada, pero no admite <code>:hover</code> ni media queries.<br />
        En JSX se usa <code>className</code>, no <code>class</code>.
      </div>
    </aside>
  )
}
