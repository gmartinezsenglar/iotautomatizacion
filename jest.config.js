// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Directorio raíz de tu proyecto Next.js
});

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/lib/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy', // Para archivos CSS de módulos
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Para configuraciones de pruebas
};

module.exports = createJestConfig(config);
