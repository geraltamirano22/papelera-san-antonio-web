import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { ProductDTO, CreateProductDTO, UpdateProductDTO } from '../dtos/ProductDTO'

export class GetProductsService {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<ProductDTO[]> {
    const products = await this.productRepository.findAll()
    return products
  }
}
