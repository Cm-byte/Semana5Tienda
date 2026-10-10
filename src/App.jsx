import { Routes, Route } from 'react-router'
import AppLayout from '@/components/AppLayout.jsx'
import InicioPage from '@/pages/InicioPage.jsx'
import VentasPage from '@/pages/VentasPage.jsx'
import ProductosPage from '@/pages/ProductosPage.jsx'
import ProductoDetallePage from '@/pages/ProductoDetallePage.jsx'
import ClientesPage from '@/pages/ClientesPage.jsx'
import InventarioPage from '@/pages/InventarioPage.jsx'
import NotFoundPage from '@/pages/NotFoundPage.jsx'

/**
 * Componente raíz: solo ORQUESTA. Define qué vista se muestra en cada ruta.
 * Sin lógica de negocio ni state.
 * @returns {JSX.Element}
 */
export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<InicioPage />} />
        <Route path="ventas" element={<VentasPage />} />
        <Route path="productos" element={<ProductosPage />} />
        <Route path="productos/:id" element={<ProductoDetallePage />} />
        <Route path="clientes" element={<ClientesPage />} />
        <Route path="inventario" element={<InventarioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
