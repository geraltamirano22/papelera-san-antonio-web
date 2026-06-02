// TODO: Implementar CategoryRepository

import { ICategoryRepository } from '@/domain/repositories/ICategoryRepository'
import { Category } from '@/domain/entities/Category'

export class CategoryRepository implements ICategoryRepository {
  // TODO: Implementar métodos del repositorio
  async findAll(): Promise<Category[]> {
    throw new Error('No implementado')
  }

  async findById(id: string): Promise<Category | null> {
    throw new Error('No implementado')
  }

  async create(category: any): Promise<Category> {
    throw new Error('No implementado')
  }

  async update(id: string, category: Partial<Category>): Promise<Category | null> {
    throw new Error('No implementado')
  }

  async delete(id: string): Promise<boolean> {
    throw new Error('No implementado')
  }
}
