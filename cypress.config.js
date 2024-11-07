const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 120000, //120 segundos
  },
});


module.exports = {
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
};