import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { Product } from '@/domain/entities/Product'
import { v4 as uuidv4 } from 'uuid'

// Simulación de base de datos en memoria
const productsDB: Map<string, Product> = new Map()

export class ProductRepository implements IProductRepository {
  async findAll(): Promise<Product[]> {
    return Array.from(productsDB.values())
  }

  async findById(id: string): Promise<Product | null> {
    return productsDB.get(id) || null
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    return Array.from(productsDB.values()).filter(
      (product) => product.categoryId === categoryId
    )
  }

  async create(
    product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Product> {
    const newProduct: Product = {
      id: uuidv4(),
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    productsDB.set(newProduct.id, newProduct)
    return newProduct
  }

  async update(id: string, product: Partial<Product>): Promise<Product | null> {
    const existing = productsDB.get(id)
    if (!existing) return null

    const updated: Product = {
      ...existing,
      ...product,
      id: existing.id,
      createdAt: existing.createdAt,
      updatedAt: new Date(),
    }
    productsDB.set(id, updated)
    return updated
  }

  async delete(id: string): Promise<boolean> {
    return productsDB.delete(id)
  }
}
