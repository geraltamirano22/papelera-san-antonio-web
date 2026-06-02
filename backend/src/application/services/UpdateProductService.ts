// TODO: Implementar UpdateProductService

import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { UpdateProductDTO } from '../dtos/ProductDTO'

export class UpdateProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string, updateProductDTO: UpdateProductDTO) {
    // Implementar lógica de actualización de producto
    throw new Error('No implementado')
  }
}
