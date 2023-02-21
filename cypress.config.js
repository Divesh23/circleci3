const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'divesh',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    e2e: {
        "baseUrl": "https://google.com/",
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});