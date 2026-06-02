// TODO: Implementar ProductController

import { Request, Response } from 'express'

export class ProductController {
  // TODO: Inyectar servicios necesarios
  constructor() {}

  // TODO: Implementar métodos del controlador
  async getAll(req: Request, res: Response): Promise<void> {
    res.status(501).json({ error: 'No implementado' })
  }

  async getById(req: Request, res: Response): Promise<void> {
    res.status(501).json({ error: 'No implementado' })
  }

  async create(req: Request, res: Response): Promise<void> {
    res.status(501).json({ error: 'No implementado' })
  }

  async update(req: Request, res: Response): Promise<void> {
    res.status(501).json({ error: 'No implementado' })
  }

  async delete(req: Request, res: Response): Promise<void> {
    res.status(501).json({ error: 'No implementado' })
  }
}
