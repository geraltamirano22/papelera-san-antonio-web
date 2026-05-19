import { Router } from 'express'
import { ProductController } from '@/infrastructure/controllers/ProductController'
import { GetProductsService } from '@/application/services/GetProductsService'
import { GetProductByIdService } from '@/application/services/GetProductByIdService'
import { CreateProductService } from '@/application/services/CreateProductService'
import { UpdateProductService } from '@/application/services/UpdateProductService'
import { DeleteProductService } from '@/application/services/DeleteProductService'
import { ProductRepository } from '@/infrastructure/persistence/repositories/ProductRepository'

const router = Router()

// Instanciación de dependencias (inversión de control)
const productRepository = new ProductRepository()
const getProductsService = new GetProductsService(productRepository)
const getProductByIdService = new GetProductByIdService(productRepository)
const createProductService = new CreateProductService(productRepository)
const updateProductService = new UpdateProductService(productRepository)
const deleteProductService = new DeleteProductService(productRepository)

const productController = new ProductController(
  getProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService
)

// Rutas
router.get('/', (req, res) => productController.getAll(req, res))
router.get('/:id', (req, res) => productController.getById(req, res))
router.post('/', (req, res) => productController.create(req, res))
router.put('/:id', (req, res) => productController.update(req, res))
router.delete('/:id', (req, res) => productController.delete(req, res))

export default router
