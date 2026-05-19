import { Request, Response } from 'express'
import { GetProductsService } from '@/application/services/GetProductsService'
import { GetProductByIdService } from '@/application/services/GetProductByIdService'
import { CreateProductService } from '@/application/services/CreateProductService'
import { UpdateProductService } from '@/application/services/UpdateProductService'
import { DeleteProductService } from '@/application/services/DeleteProductService'

export class ProductController {
  constructor(
    private getProductsService: GetProductsService,
    private getProductByIdService: GetProductByIdService,
    private createProductService: CreateProductService,
    private updateProductService: UpdateProductService,
    private deleteProductService: DeleteProductService
  ) {}

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.getProductsService.execute()
      res.json(products)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos' })
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const product = await this.getProductByIdService.execute(id)

      if (!product) {
        res.status(404).json({ error: 'Producto no encontrado' })
        return
      }

      res.json(product)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el producto' })
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.createProductService.execute(req.body)
      res.status(201).json(product)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const product = await this.updateProductService.execute(id, req.body)

      if (!product) {
        res.status(404).json({ error: 'Producto no encontrado' })
        return
      }

      res.json(product)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      await this.deleteProductService.execute(id)
      res.status(204).send()
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}
