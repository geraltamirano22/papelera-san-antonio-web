import { Product } from '../entities/Product'

export interface IProductRepository {
  findAll(): Promise<Product[]>
  findById(id: string): Promise<Product | null>
  findByCategory(categoryId: string): Promise<Product[]>
  create(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>
  update(id: string, product: Partial<Product>): Promise<Product | null>
  delete(id: string): Promise<boolean>
}
