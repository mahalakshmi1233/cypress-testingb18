const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "specPattern":"**/*.feature",
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
   // "pageLoadTimeout":120000,
    //"defaultCommandTimeout":20000,
    "viewportWidth":1920,
    "viewportHeight":1080,
   // "retries":{openMode:0,runMode:1},
    "video":true,
    env:{
      "cookivalue": "orangehrm=3e979ee06a8c37b62fa0722b2b7c90c4",
      "allureResultsPath": "allure-results",
      //"username":"Admin",
      //"password":"admin123",
      "endpoint":"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    },
    
    setupNodeEvents(on, config) {

      return require('./cypress/pluggins/index.js')(on,config)
      allureWriter(on, config);
      return config;
     
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      // implement node event listeners here
    },
  },
});



