const { defineConfig } = require("cypress");

module.exports = defineConfig({
    "reporter": "junit",
    "reporterOptions": {
        "mochaFile": "cypress/results/results-[hash].xml",
        "toConsole": true
    },
    e2e: {
        "baseUrl": "https://google.com/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
            //require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});