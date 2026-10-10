import { Palette, PenLine } from 'lucide-react'

/**
 * Etiqueta que indica la estrategia de estilado de un bloque.
 * Estilada 100 % con estilos INLINE.
 *
 * @param {Object} props
 * @param {'module'|'inline'} props.type - Estrategia de estilado
 * @param {string} [props.file] - Archivo .module.css (solo para CSS Modules)
 * @param {boolean} [props.floating=true] - true: flota en la esquina del bloque; false: va en línea
 * @returns {JSX.Element}
 */
export default function StyleBadge({ type, file, floating = true }) {
  const isModule = type === 'module'
  const Icon = isModule ? Palette : PenLine

  // Inline: objeto JS, propiedades en camelCase, afecta solo a este elemento
  const badgeStyle = {
    ...(floating && { position: 'absolute', top: '-11px', right: '16px' }),
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '3px 10px',
    borderRadius: '999px',
    fontSize: '10.5px',
    fontWeight: 600,
    color: '#fff',
    background: isModule ? 'var(--module)' : 'var(--inline)',
    boxShadow: '0 2px 6px rgba(0,0,0,.15)',
    whiteSpace: 'nowrap',
    zIndex: 2,
  }

  return (
    <span style={badgeStyle}>
      <Icon size={11} strokeWidth={2.5} aria-hidden="true" />
      {isModule ? 'CSS Module' : 'Inline'}
      {isModule && file && <span style={{ fontWeight: 400, opacity: 0.85 }}>· {file}</span>}
    </span>
  )
}
