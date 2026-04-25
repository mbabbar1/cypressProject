import { LoginPage } from "./Pagelibrary/LoginPage"

const loginPage = new LoginPage()

describe('Login Test Suite', () => {
  beforeEach(() => {
    loginPage.visit()
  })
  it('login with correct credentials', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterpassword('admin123')
    loginPage.clickLogin()
    cy.get(':nth-child(8) > .oxd-main-menu-item').should('be.visible')
  })
  it('login with invalid username', () => {
    loginPage.enterUsername('Admin123')
    loginPage.enterpassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
  })

  it('login with invalid password', () => {
    loginPage.enterUsername('Admin123')
    loginPage.enterpassword('admin')
    loginPage.clickLogin()
    cy.get('.oxd-alert-content > .oxd-text').should('contain', 'Invalid credentials')
  })
  it.only ('login with default credentials', () => {
    loginPage.loginToApplication('Admin', 'admin123')
    cy.get(':nth-child(8) > .oxd-main-menu-item').should('be.visible')
  })
})