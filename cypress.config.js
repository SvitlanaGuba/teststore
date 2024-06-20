const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 150000,//увеличиваем время на загрузку сайта
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
