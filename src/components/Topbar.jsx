import { Search, Bell } from 'lucide-react'
import StyleBadge from './StyleBadge.jsx'

/**
 * Barra superior con buscador y usuario. Estilada con estilos INLINE.
 * @param {Object} props
 * @param {string} props.userName - Nombre del usuario
 * @param {string} props.role - Rol del usuario
 * @returns {JSX.Element}
 */
export default function Topbar({ userName, role }) {
  const s = {
    bar: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px 16px',
      padding: '14px clamp(16px, 3vw, 28px)',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
    },
    search: {
      flex: '1 1 220px',
      minWidth: 0,
      maxWidth: '420px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '9px 14px',
      borderRadius: '999px',
      background: 'var(--bg)',
      color: 'var(--muted)',
      fontSize: '0.85rem',
    },
    input: { minWidth: 0, border: 0, outline: 0, background: 'transparent', flex: 1, font: 'inherit', color: 'var(--ink)' },
    right: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '18px' },
    bell: { position: 'relative', color: 'var(--muted)', display: 'grid' },
    dot: { position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' },
    user: { display: 'flex', alignItems: 'center', gap: '10px' },
    avatar: {
      display: 'grid', placeItems: 'center', width: '36px', height: '36px', borderRadius: '50%',
      background: 'var(--accent-soft)', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem',
    },
    name: { fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 },
    role: { fontSize: '0.72rem', color: 'var(--muted)' },
  }

  return (
    <header style={s.bar}>
      <label style={s.search}>
        <Search size={16} aria-hidden="true" />
        <input style={s.input} type="search" placeholder="Buscar prendas, pedidos o clientes…" aria-label="Buscar" />
      </label>
      <div style={s.right}>
        <StyleBadge type="inline" floating={false} />
        <span style={s.bell} aria-label="Notificaciones">
          <Bell size={19} />
          <span style={s.dot} />
        </span>
        <div style={s.user}>
          <span style={s.avatar}>{userName[0]}</span>
          <div>
            <p style={s.name}>{userName}</p>
            <p style={s.role}>{role}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
