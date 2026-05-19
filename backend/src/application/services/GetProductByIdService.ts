import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { ProductDTO } from '../dtos/ProductDTO'

export class GetProductByIdService {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string): Promise<ProductDTO | null> {
    const product = await this.productRepository.findById(id)
    return product || null
  }
}
