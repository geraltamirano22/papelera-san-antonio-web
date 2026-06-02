// TODO: Implementar DeleteProductService

import { IProductRepository } from '@/domain/repositories/IProductRepository'

export class DeleteProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string) {
    // Implementar lógica de eliminación de producto
    throw new Error('No implementado')
  }
}
