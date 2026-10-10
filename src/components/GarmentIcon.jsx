import { Shirt } from 'lucide-react'

/** Trazos SVG de prendas que lucide no incluye */
const paths = {
  pants: 'M7 2h10l1.2 20h-4.7L12 10l-1.5 12H5.8z',
  dress: 'M9.5 2h5l-.8 4.5L19 22H5l5.3-15.5z',
  jacket: 'M8 3l4 2 4-2 5 3-2 5-2-1v12H7V10l-2 1-2-5z M12 5v17',
}

/**
 * Ilustración de una prenda según su tipo, rellena con el color del producto.
 * @param {Object} props
 * @param {'shirt'|'pants'|'dress'|'jacket'} props.type - Tipo de prenda
 * @param {string} props.color - Color de relleno (hex)
 * @param {number} [props.size=48] - Tamaño en px
 * @returns {JSX.Element}
 */
export default function GarmentIcon({ type, color, size = 48 }) {
  if (type === 'shirt') {
    return <Shirt size={size} fill={color} color="#44403c" strokeWidth={1.2} aria-hidden="true" />
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="#44403c"
      strokeWidth={1.2} strokeLinejoin="round" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  )
}
