const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

async function setupPlugins(on, config) {
  // Initialize the cucumber preprocessor
  const bundlerOptions = {
    plugins: [await createEsbuildPlugin(config)],
  };

  on("file:preprocessor", createBundler(bundlerOptions));
  await addCucumberPreprocessorPlugin(on, config);

  // Add downloadFile task
  on("task", { downloadFile });

  return config;
}

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    watchForFileChanges: false,
    // defaultBrowser: "chrome",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents: setupPlugins,
  },
});