const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// This file contains regular Cypress tests, not BDD step definitions.
// For now, commenting out as it's not part of the feature file.
// These tests should be moved to cypress/e2e/tests/ directory instead.

/*
describe("Data from file", () => {  
it ("Upload file", () => {
    cy.visit("https://trytestingthis.netlify.app/")
    cy.get('[name="myfile"]').attachFile("Custom Fee Schedule.xlsx")
    // cy.get("#file-submit").click()
    // cy.get("#uploaded-files").should("have.text", "testfile.txt")
})

it.only("Download file", () => {
   cy.downloadFile('https://file-examples.com/storage/fe5f59c5b669ed5b99a4697/2017/10/file_example_JPG_100kB.jpg', 'cypress/downloads', 'file.jpg');
})
})
*/