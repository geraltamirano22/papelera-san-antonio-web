import { useCallback, useState } from 'react'
import { Product } from '@/domain/types'
import { productAdapter } from '@/infrastructure/adapters/ProductApiAdapter'

interface UseProductReturn {
  product: Product | null
  loading: boolean
  error: string | null
  fetchProduct: (id: string) => Promise<void>
}

export const useProduct = (): UseProductReturn => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProduct = useCallback(async (id: string) => {
    try {
      setLoading(true)
      setError(null)
      const data = await productAdapter.getById(id)
      setProduct(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching product')
      setProduct(null)
    } finally {
      setLoading(false)
    }
  }, [])

  return { product, loading, error, fetchProduct }
}
