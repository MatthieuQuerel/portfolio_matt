import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TechStack from '../TechStack'

describe('TechStack Component', () => {
  it('doit afficher le titre de la section', () => {
    render(<TechStack />)
    expect(screen.getByText(/Stack Technique/i)).toBeInTheDocument()
  })

  it('doit lister les technologies principales', () => {
    render(<TechStack />)
    const techs = [
      "React / Next.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "AWS / DevOps"
    ]
    
    techs.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })
})
