// Puerto de salida (Outbound): interfaz para servicios externos
// Ejemplo: APIs externas, bases de datos, proveedores de servicios

export interface IDatabasePort {
  connect(): Promise<void>
  disconnect(): Promise<void>
}

export interface IEmailServicePort {
  send(email: string, subject: string, body: string): Promise<void>
}

export interface IStoragePort {
  upload(file: Buffer, filename: string): Promise<string>
  delete(filename: string): Promise<void>
}
