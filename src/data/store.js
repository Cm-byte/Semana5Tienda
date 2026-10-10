/**
 * Datos de ejemplo de la tienda (inmutables, sin state).
 * Las métricas del panel se CALCULAN a partir de estos datos,
 * así cada número coincide con lo que se ve en su vista.
 */

/** @typedef {'shirt'|'pants'|'dress'|'jacket'} GarmentType */

/**
 * @type {ReadonlyArray<{id:string,name:string,category:string,type:GarmentType,price:number,stock:number,sizes:string[],color:string,sold:number}>}
 */
export const products = Object.freeze([
  { id: 'p01', name: 'Polera oversize negra',   category: 'Poleras',    type: 'shirt',  price: 89.9,  stock: 24, sizes: ['S', 'M', 'L', 'XL'], color: '#292524', sold: 86 },
  { id: 'p02', name: 'Polo básico blanco',      category: 'Polos',      type: 'shirt',  price: 39.9,  stock: 52, sizes: ['XS', 'S', 'M', 'L'], color: '#fafaf9', sold: 64 },
  { id: 'p03', name: 'Jean mom fit azul',       category: 'Pantalones', type: 'pants',  price: 129.9, stock: 0,  sizes: ['26', '28', '30', '32'], color: '#3b5b8c', sold: 41 },
  { id: 'p04', name: 'Vestido midi floral',     category: 'Vestidos',   type: 'dress',  price: 149.9, stock: 7,  sizes: ['S', 'M', 'L'], color: '#c96f6f', sold: 22 },
  { id: 'p05', name: 'Casaca denim clásica',    category: 'Casacas',    type: 'jacket', price: 189.9, stock: 0,  sizes: ['S', 'M', 'L'], color: '#5a7fa8', sold: 15 },
  { id: 'p06', name: 'Blusa de lino beige',     category: 'Blusas',     type: 'shirt',  price: 79.9,  stock: 18, sizes: ['S', 'M', 'L'], color: '#d8c3a5', sold: 30 },
  { id: 'p07', name: 'Pantalón palazzo negro',  category: 'Pantalones', type: 'pants',  price: 109.9, stock: 3,  sizes: ['S', 'M', 'L'], color: '#1c1917', sold: 27 },
  { id: 'p08', name: 'Camisa oxford celeste',   category: 'Camisas',    type: 'shirt',  price: 99.9,  stock: 0,  sizes: ['S', 'M', 'L', 'XL'], color: '#a9cbe6', sold: 19 },
  { id: 'p09', name: 'Vestido de punto vino',   category: 'Vestidos',   type: 'dress',  price: 139.9, stock: 5,  sizes: ['S', 'M'], color: '#7f1d1d', sold: 12 },
  { id: 'p10', name: 'Casaca acolchada oliva',  category: 'Casacas',    type: 'jacket', price: 219.9, stock: 9,  sizes: ['M', 'L', 'XL'], color: '#5b6b45', sold: 8 },
  { id: 'p11', name: 'Polo rayas marinero',     category: 'Polos',      type: 'shirt',  price: 49.9,  stock: 31, sizes: ['S', 'M', 'L'], color: '#1e3a5f', sold: 38 },
  { id: 'p12', name: 'Jogger gris melange',     category: 'Pantalones', type: 'pants',  price: 89.9,  stock: 0,  sizes: ['S', 'M', 'L', 'XL'], color: '#a8a29e', sold: 33 },
])

/** @type {ReadonlyArray<{id:string,name:string,district:string,since:string}>} */
export const customers = Object.freeze([
  { id: 'c01', name: 'Lucía Paredes',    district: 'El Tambo, Huancayo', since: '2025-03-12' },
  { id: 'c02', name: 'Diego Quispe',     district: 'Huancayo',           since: '2025-07-02' },
  { id: 'c03', name: 'Valeria Rojas',    district: 'Chilca, Huancayo',   since: '2026-01-18' },
  { id: 'c04', name: 'Andrea Huamán',    district: 'Miraflores, Lima',   since: '2026-02-25' },
  { id: 'c05', name: 'Carlos Mendoza',   district: 'El Tambo, Huancayo', since: '2026-05-09' },
  { id: 'c06', name: 'Fiorella Castro',  district: 'San Isidro, Lima',   since: '2026-08-14' },
  { id: 'c07', name: 'Renzo Vílchez',    district: 'Pilcomayo, Huancayo', since: '2026-09-21' },
  { id: 'c08', name: 'Camila Torres',    district: 'Huancayo',           since: '2026-10-03' },
])

/**
 * @type {ReadonlyArray<{id:string,date:string,customerId:string,items:{productId:string,qty:number}[],method:string,status:'Pagado'|'Enviado'|'Pendiente'}>}
 */
export const sales = Object.freeze([
  { id: 'V-1061', date: '2026-10-09', customerId: 'c08', items: [{ productId: 'p01', qty: 2 }, { productId: 'p11', qty: 1 }], method: 'Yape',     status: 'Pendiente' },
  { id: 'V-1060', date: '2026-10-08', customerId: 'c03', items: [{ productId: 'p04', qty: 1 }],                              method: 'Tarjeta',  status: 'Pagado' },
  { id: 'V-1059', date: '2026-10-08', customerId: 'c01', items: [{ productId: 'p06', qty: 2 }, { productId: 'p07', qty: 1 }], method: 'Plin',     status: 'Enviado' },
  { id: 'V-1058', date: '2026-10-07', customerId: 'c06', items: [{ productId: 'p10', qty: 1 }, { productId: 'p02', qty: 3 }], method: 'Tarjeta',  status: 'Enviado' },
  { id: 'V-1057', date: '2026-10-06', customerId: 'c02', items: [{ productId: 'p12', qty: 2 }],                              method: 'Efectivo', status: 'Pagado' },
  { id: 'V-1056', date: '2026-10-05', customerId: 'c04', items: [{ productId: 'p09', qty: 1 }, { productId: 'p01', qty: 1 }], method: 'Tarjeta',  status: 'Enviado' },
  { id: 'V-1055', date: '2026-10-04', customerId: 'c05', items: [{ productId: 'p03', qty: 1 }, { productId: 'p02', qty: 2 }], method: 'Yape',     status: 'Pagado' },
  { id: 'V-1054', date: '2026-10-03', customerId: 'c07', items: [{ productId: 'p05', qty: 1 }],                              method: 'Plin',     status: 'Pagado' },
  { id: 'V-1053', date: '2026-10-02', customerId: 'c01', items: [{ productId: 'p08', qty: 1 }, { productId: 'p11', qty: 2 }], method: 'Tarjeta',  status: 'Pagado' },
  { id: 'V-1052', date: '2026-10-01', customerId: 'c03', items: [{ productId: 'p01', qty: 1 }, { productId: 'p06', qty: 1 }], method: 'Efectivo', status: 'Pagado' },
])

/* ---------- Funciones puras de consulta (no modifican los datos) ---------- */

/** @param {string} id */
export const getProduct = (id) => products.find((p) => p.id === id)

/** @param {string} id */
export const getCustomer = (id) => customers.find((c) => c.id === id)

/** Total en soles de una venta */
export const saleTotal = (sale) =>
  sale.items.reduce((sum, it) => sum + getProduct(it.productId).price * it.qty, 0)

/** Cantidad de prendas en una venta */
export const saleUnits = (sale) => sale.items.reduce((sum, it) => sum + it.qty, 0)

/** Formatea un número como soles peruanos: S/ 1 234.50 */
export const formatPEN = (n) =>
  'S/ ' + n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

/** Formatea una fecha ISO como "9 oct 2026" */
export const formatDate = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('es-PE', { day: 'numeric', month: 'short', year: 'numeric' })

/** Ventas de un cliente */
export const salesByCustomer = (customerId) => sales.filter((s) => s.customerId === customerId)

/** Ventas que incluyen un producto */
export const salesByProduct = (productId) =>
  sales.filter((s) => s.items.some((it) => it.productId === productId))

/** Umbral de stock bajo */
export const LOW_STOCK = 5
