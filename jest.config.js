module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'public'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testPathIgnorePatterns: ['node_modules', 'public'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest']
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.js'
  },
  testEnvironment: 'jsdom'
}
