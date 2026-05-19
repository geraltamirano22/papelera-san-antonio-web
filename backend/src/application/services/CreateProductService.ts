import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { CreateProductDTO, ProductDTO } from '../dtos/ProductDTO'

export class CreateProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(createProductDTO: CreateProductDTO): Promise<ProductDTO> {
    if (!createProductDTO.name || createProductDTO.name.trim() === '') {
      throw new Error('El nombre del producto es requerido')
    }

    if (createProductDTO.price < 0) {
      throw new Error('El precio no puede ser negativo')
    }

    if (createProductDTO.stock < 0) {
      throw new Error('El stock no puede ser negativo')
    }

    const product = await this.productRepository.create(createProductDTO)
    return product
  }
}
