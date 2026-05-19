// Tipos base de la aplicación

export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  categoryId: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  description?: string
  createdAt: string
  updatedAt: string
}

export type ApiResponse<T> = {
  data?: T
  error?: string
  status: number
}
