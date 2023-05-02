module.exports = {
    ci: {
      assert: {
        assertions: {
            "categories:accessibility": ["error", {"minScore": 0.8}]
        }
      },
      collect: {
        /* Add configuration here */
        startServerCommand: 'npm run serve',
        url: ['http://localhost:8080'],
        numberOfRuns: 5
      },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage',
      },
    },
  };