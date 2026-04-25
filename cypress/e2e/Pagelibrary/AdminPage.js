export class AdminPage {

    AdminPageLink() {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(2000)
        
    }
    // ScrollDown() {
    //     cy.scrollTo('bottom')
    // }
    EnterUsername(username) {
        cy.get(':nth-child(2) > .oxd-input').type(username)
    }
    Status(status) {
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        if (status === 'Enabled') {
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        } else if (status === 'Disabled') {
            cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        }
    }

    UserRole(userrole) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        if (userrole === 'Admin') {
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        } else if (userrole === 'ESS') {
            cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        }
    }
    ClickSearch() {
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    }
    SearchResult() {
        return cy.get('.orangehrm-horizontal-padding')
    }
    ResetSearch() {
        cy.get('.oxd-button--ghost').click()
    }
    UserRoleField() {
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')

    }
}   