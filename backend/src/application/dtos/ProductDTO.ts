export interface ProductDTO {
  id: string
  name: string
  description: string
  price: number
  stock: number
  categoryId: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateProductDTO {
  name: string
  description: string
  price: number
  stock: number
  categoryId: string
}

export interface UpdateProductDTO {
  name?: string
  description?: string
  price?: number
  stock?: number
  categoryId?: string
}
