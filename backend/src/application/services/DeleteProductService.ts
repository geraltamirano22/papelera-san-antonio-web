import { IProductRepository } from '@/domain/repositories/IProductRepository'

export class DeleteProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string): Promise<boolean> {
    const product = await this.productRepository.findById(id)
    if (!product) {
      throw new Error(`Producto con id ${id} no encontrado`)
    }

    return await this.productRepository.delete(id)
  }
}
