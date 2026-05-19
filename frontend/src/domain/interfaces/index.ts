// Interfaces de la aplicación

export interface IProductRepository {
  getAll(): Promise<Product[]>
  getById(id: string): Promise<Product | null>
  create(product: CreateProductInput): Promise<Product>
  update(id: string, product: UpdateProductInput): Promise<Product>
  delete(id: string): Promise<void>
}

export interface ICategoryRepository {
  getAll(): Promise<Category[]>
  getById(id: string): Promise<Category | null>
  create(category: CreateCategoryInput): Promise<Category>
  update(id: string, category: UpdateCategoryInput): Promise<Category>
  delete(id: string): Promise<void>
}

export interface CreateProductInput {
  name: string
  description: string
  price: number
  stock: number
  categoryId: string
}

export interface UpdateProductInput {
  name?: string
  description?: string
  price?: number
  stock?: number
  categoryId?: string
}

export interface CreateCategoryInput {
  name: string
  description?: string
}

export interface UpdateCategoryInput {
  name?: string
  description?: string
}

// Importar tipos
import { Product, Category } from './index'
