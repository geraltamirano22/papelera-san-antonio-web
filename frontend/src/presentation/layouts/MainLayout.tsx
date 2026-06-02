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
          {/* Define aquí la navegación de tu aplicación */}
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>&copy; 2026 Papelera San Antonio. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
