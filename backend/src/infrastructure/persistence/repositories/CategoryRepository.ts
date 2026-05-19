import { ICategoryRepository } from '@/domain/repositories/ICategoryRepository'
import { Category } from '@/domain/entities/Category'
import { v4 as uuidv4 } from 'uuid'

// Simulación de base de datos en memoria
const categoriesDB: Map<string, Category> = new Map()

export class CategoryRepository implements ICategoryRepository {
  async findAll(): Promise<Category[]> {
    return Array.from(categoriesDB.values())
  }

  async findById(id: string): Promise<Category | null> {
    return categoriesDB.get(id) || null
  }

  async create(
    category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Category> {
    const newCategory: Category = {
      id: uuidv4(),
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    categoriesDB.set(newCategory.id, newCategory)
    return newCategory
  }

  async update(id: string, category: Partial<Category>): Promise<Category | null> {
    const existing = categoriesDB.get(id)
    if (!existing) return null

    const updated: Category = {
      ...existing,
      ...category,
      id: existing.id,
      createdAt: existing.createdAt,
      updatedAt: new Date(),
    }
    categoriesDB.set(id, updated)
    return updated
  }

  async delete(id: string): Promise<boolean> {
    return categoriesDB.delete(id)
  }
}
