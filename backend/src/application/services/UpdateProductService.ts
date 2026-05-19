import { IProductRepository } from '@/domain/repositories/IProductRepository'
import { UpdateProductDTO, ProductDTO } from '../dtos/ProductDTO'

export class UpdateProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string, updateProductDTO: UpdateProductDTO): Promise<ProductDTO | null> {
    const product = await this.productRepository.findById(id)
    if (!product) {
      throw new Error(`Producto con id ${id} no encontrado`)
    }

    if (updateProductDTO.price !== undefined && updateProductDTO.price < 0) {
      throw new Error('El precio no puede ser negativo')
    }

    if (updateProductDTO.stock !== undefined && updateProductDTO.stock < 0) {
      throw new Error('El stock no puede ser negativo')
    }

    const updated = await this.productRepository.update(id, updateProductDTO)
    return updated
  }
}
