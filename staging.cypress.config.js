const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //"baseUrl":"https://opensource-demo.orangehrmlive.com",
    "pageLoadTimeout":120000,
    "defaultCommandTimeout":20000,
    "viewportWidth":1920,
    "viewportHeight":1080,
    "retries":{openMode:1,runMode:1},
    "video":true,
    env:{
      //"username":"Admin",
      //"password":"admin123",
      "endpoint":"https://www.flipkart.com/"
      
    },
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
