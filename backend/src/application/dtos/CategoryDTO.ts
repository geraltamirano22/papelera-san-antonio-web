export interface CategoryDTO {
  id: string
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateCategoryDTO {
  name: string
  description?: string
}

export interface UpdateCategoryDTO {
  name?: string
  description?: string
}
