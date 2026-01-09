import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.tsx'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/test/**/*', '**/*.d.ts', '**/*.test.{ts,tsx}', '**/layout.tsx', '**/page.tsx'], // Exclusion temporaire de page.tsx si nécessaire ou ajustement
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
