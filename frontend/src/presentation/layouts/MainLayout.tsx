'use client'

import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <header className="header">
        <nav>
          <a href="/">Inicio</a>
          <a href="/products">Productos</a>
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>&copy; 2026 Papelera San Antonio. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
