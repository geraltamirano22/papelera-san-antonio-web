// TODO: Implementar GetProductsService

import { IProductRepository } from '@/domain/repositories/IProductRepository'

export class GetProductsService {
  constructor(private productRepository: IProductRepository) {}

  async execute() {
    // Implementar lógica para obtener todos los productos
    throw new Error('No implementado')
  }
}
