'use client'

import { useProducts } from '@/application/hooks'
import { formatCurrency } from '@/application/utils'

export default function Home() {
  const { products, loading, error } = useProducts()

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bienvenido a Papelera San Antonio</h1>

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {products.length > 0 && (
        <div>
          <h2>Productos disponibles</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - {formatCurrency(product.price)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {products.length === 0 && !loading && !error && (
        <p>No hay productos disponibles</p>
      )}
    </main>
  )
}
