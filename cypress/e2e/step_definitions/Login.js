const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../Pagelibrary/loginPage");

const loginPage = new LoginPage();

Given("I am on the login page", () => {
    loginPage.visitLoginPage();
});

When("I enter valid username and password", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
});

When("I click on the login button", () => {
    loginPage.clickLoginButton();
});

Then("I should be logged in successfully", () => {
    loginPage.userPic().should("be.visible");
});


When("I enter invalid username and valid password", () => {
    loginPage.enterUsername("Admin1");
    loginPage.enterPassword("admin123");
});

When("I enter valid username and invalid password", () => {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin1234");
});

When("I enter invalid username and invalid password", () => {
    loginPage.enterUsername("Admin123");
    loginPage.enterPassword("admin1234");
});

Then("I should see an error message indicating invalid credentials", () => {
    loginPage.getErrorMessage().should("contain", "Invalid credentials");
});