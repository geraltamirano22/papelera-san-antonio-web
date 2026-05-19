import apiClient from '../api/client'
import { IProductRepository } from '@/domain/interfaces'
import { Product, CreateProductInput, UpdateProductInput } from '@/domain/types'

export class ProductApiAdapter implements IProductRepository {
  async getAll(): Promise<Product[]> {
    const response = await apiClient.get<Product[]>('/products')
    return response.data
  }

  async getById(id: string): Promise<Product | null> {
    try {
      const response = await apiClient.get<Product>(`/products/${id}`)
      return response.data
    } catch (error) {
      return null
    }
  }

  async create(product: CreateProductInput): Promise<Product> {
    const response = await apiClient.post<Product>('/products', product)
    return response.data
  }

  async update(id: string, product: UpdateProductInput): Promise<Product> {
    const response = await apiClient.put<Product>(`/products/${id}`, product)
    return response.data
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/products/${id}`)
  }
}

export const productAdapter = new ProductApiAdapter()
