import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock de framer-motion pour éviter les erreurs d'animation dans jsdom
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock de lucide-react
vi.mock('lucide-react', () => ({
  ArrowRight: () => <div data-testid="arrow-right" />,
  ExternalLink: () => <div data-testid="external-link" />,
  Github: () => <div data-testid="github" />,
  Linkedin: () => <div data-testid="linkedin" />,
  Mail: () => <div data-testid="mail" />,
  Code2: () => <div data-testid="code2" />,
  Server: () => <div data-testid="server" />,
  Cpu: () => <div data-testid="cpu" />,
  Cloud: () => <div data-testid="cloud" />,
  Layers: () => <div data-testid="layers" />,
  Zap: () => <div data-testid="zap" />,
}))
