export class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    username_textbox = '[name="username"]'
    password_textbox = '[name="password"]'
    login_button = '.oxd-button'
    enterUsername(username) {
        cy.get(this.username_textbox).type(username)
    }
    enterpassword(password) {
        cy.get(this.password_textbox).type(password)
    }
    clickLogin() {
        cy.get(this.login_button).click()
    }
    loginToApplication(username, password) {
        this.visit()
        this.enterUsername(username)
        this.enterpassword(password)
        this.clickLogin()
        cy.wait(2000)
    }
}
