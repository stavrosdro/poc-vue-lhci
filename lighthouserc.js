module.exports = {
  ci: {
    assert: {
      assertions: {
        "categories:performance": ["error", {minScore: 0.75}],
        "categories:accessibility": ["error", {minScore: 0.8}],
      }
    },
    collect: {
      /* Add configuration here */
      startServerCommand: 'npm run serve',
      url: ['http://localhost:8080'],
      numberOfRuns: 3
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage',
    },
  },
};