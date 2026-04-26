const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    watchForFileChanges: false,
    defaultBrowser: "chrome",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { downloadFile });
    },
  },
});