import PageHeader from '@/components/PageHeader.jsx'

/**
 * Vista para rutas que no existen.
 * @returns {JSX.Element}
 */
export default function NotFoundPage() {
  return (
    <PageHeader
      title="Página no encontrada"
      subtitle="La ruta que buscas no existe en el panel de Moda Andina."
      backTo="/"
    />
  )
}
