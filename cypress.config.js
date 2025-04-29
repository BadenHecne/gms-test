const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'http://127.0.0.1:8081',
    baseUrl: 'https://golden-movie-studio.vercel.app/',
    video: true // Ativa a gravação de vídeo
    //browser: 'edge', // Define o navegador padrão como Microsoft Edge
  },
});
