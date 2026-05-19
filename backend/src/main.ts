import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { errorHandler } from '@/infrastructure/middlewares/errorHandler'
import productRoutes from '@/ports/inbound/ProductRoutes'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend funcionando correctamente',
    timestamp: new Date().toISOString(),
  })
})

// API Routes
app.use('/api/products', productRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' })
})

// Error handler
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`)
  console.log(`📝 Ambiente: ${process.env.NODE_ENV || 'development'}`)
  console.log(`🏗️  Arquitectura: Clean Architecture + Hexagonal`)
})

export default app
