'use client'

interface ProductListProps {
  title?: string
}

export const ProductList = ({ title = 'Productos' }: ProductListProps) => {
  return (
    <div className="product-list">
      <h2>{title}</h2>
      <p>Componente lista de productos</p>
    </div>
  )
}
