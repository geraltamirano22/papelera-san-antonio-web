/**
 * Utilidades de validación
 */

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPrice = (price: number): boolean => {
  return price >= 0 && !isNaN(price)
}

export const isValidStock = (stock: number): boolean => {
  return stock >= 0 && Number.isInteger(stock)
}

export const validateProductInput = (data: any): string[] => {
  const errors: string[] = []

  if (!data.name || data.name.trim() === '') {
    errors.push('El nombre es requerido')
  }

  if (!data.price || !isValidPrice(data.price)) {
    errors.push('El precio debe ser un número válido')
  }

  if (data.stock === undefined || !isValidStock(data.stock)) {
    errors.push('El stock debe ser un número entero válido')
  }

  return errors
}
