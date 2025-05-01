const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     baseUrl: 'http://127.0.0.1:8081',
    //baseUrl: 'https://golden-movie-studio.vercel.app/',
    reporter: 'junit', 
    reporterOptions: {
      mochaFile: 'cypress/reports/junit-[hash].xml', // Diretório para salvar os relatórios XML
      toConsole: true,
    },
     video: true,
     chromeWebSecurity: false, // Desabilita algumas restrições de segurança do Chrome
     //experimentalSessionAndOrigin: true, // Habilita sessões experimentais
     modifyObstructiveCode: false, // Evita modificações em código obstrutivo
  },
});



