import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from './page'

describe('Home Page', () => {
  it('doit afficher le composant Hero avec le nom Matthieu', () => {
    render(<Home />)
    expect(screen.getByText(/Matthieu/i)).toBeInTheDocument()
  })

  it('doit afficher les différentes sections du portfolio', () => {
    render(<Home />)
    
    // Vérification de la présence des sections par leurs titres ou contenus textuels
    expect(screen.getByText(/Je construis des architectures web robustes/i)).toBeInTheDocument() // Hero
    expect(screen.getByText(/Stack Technique/i)).toBeInTheDocument() // TechStack
    expect(screen.getByText(/Philosophie/i)).toBeInTheDocument() // Philosophy
    expect(screen.getByText(/Services/i)).toBeInTheDocument() // Services
    expect(screen.getByText(/Me Contacter/i)).toBeInTheDocument() // Contact
  })

  it('doit afficher le footer avec le nom Marius', () => {
    render(<Home />)
    expect(screen.getByText(/Conçu & Développé par Marius/i)).toBeInTheDocument()
  })
})
