import { Category } from '../entities/Category'

export interface ICategoryRepository {
  findAll(): Promise<Category[]>
  findById(id: string): Promise<Category | null>
  create(category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category>
  update(id: string, category: Partial<Category>): Promise<Category | null>
  delete(id: string): Promise<boolean>
}
