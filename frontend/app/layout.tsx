import type { Metadata } from 'next'
import './globals.css'
import { MainLayout } from '@/presentation/layouts/MainLayout'

export const metadata: Metadata = {
  title: 'Papelera San Antonio',
  description: 'Sistema de gestión para Papelera San Antonio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
