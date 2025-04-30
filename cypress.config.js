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
      reportDir: 'cypress/reports', // Diretório onde os relatórios serão salvos
      overwrite: true,
      html: true, // Gera relatórios HTML
      json: true, // Gera relatórios JSO

    //reporter: 'junit', // Define o JUnit como reporter
    //reporterOptions: {
    //  mochaFile: 'cypress/reports/junit-[hash].xml', // Diretório para salvar os relatórios XML
    //  toConsole: true,
    },
     video: true,
    //browser: 'edge', // Define o navegador padrão como Microsoft Edge
  },
});



