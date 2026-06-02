// TODO: Implementar CategoryDTO

export interface CategoryDTO {
  // Define los campos necesarios aquí
}

export interface CreateCategoryDTO {
  name: string
  description?: string
}

export interface UpdateCategoryDTO {
  name?: string
  description?: string
}
