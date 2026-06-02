// TODO: Implementar GetProductByIdService

import { IProductRepository } from '@/domain/repositories/IProductRepository'

export class GetProductByIdService {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string) {
    // Implementar lógica para obtener producto por ID
    throw new Error('No implementado')
  }
}
