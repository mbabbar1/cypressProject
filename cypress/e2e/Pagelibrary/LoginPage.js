
class LoginPage {

    visitLoginPage() {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    }

    enterUsername(username) {
        cy.get('[name="username"]').type(username);
    }
    

    enterPassword(password) {
        cy.get('[name="password"]').type(password);
    }

    clickLoginButton() {
        cy.get('.oxd-button[type="submit"]', { timeout: 5000 }).click();
    }

    userPic() {
        return cy.get('.oxd-topbar-header-userarea img');
    }

    getErrorMessage() {
        return cy.get('.oxd-alert-content-text');
    }
}

module.exports = LoginPage;