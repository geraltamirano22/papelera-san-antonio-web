// TODO: Implementar CreateProductService

import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { CreateProductDTO } from '../dtos/ProductDTO'

export class CreateProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(createProductDTO: CreateProductDTO) {
    // Implementar lógica de creación de producto
    throw new Error('No implementado')
  }
}
