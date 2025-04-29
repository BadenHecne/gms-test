const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'http://127.0.0.1:8081',
    baseUrl: 'https://golden-movie-studio.vercel.app/',
    reporter: 'mochawesome', // Define o Mochawesome como reporter
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true, 
    },
     video: true,
    //browser: 'edge', // Define o navegador padrão como Microsoft Edge
  },
});



