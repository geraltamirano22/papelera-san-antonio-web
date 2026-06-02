// TODO: Implementar ProductRepository

import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { Product } from '@/domain/entities/Product'

export class ProductRepository implements IProductRepository {
  // TODO: Implementar métodos del repositorio
  async findAll(): Promise<Product[]> {
    throw new Error('No implementado')
  }

  async findById(id: string): Promise<Product | null> {
    throw new Error('No implementado')
  }

  async create(product: any): Promise<Product> {
    throw new Error('No implementado')
  }

  async update(id: string, product: Partial<Product>): Promise<Product | null> {
    throw new Error('No implementado')
  }

  async delete(id: string): Promise<boolean> {
    throw new Error('No implementado')
  }
}
