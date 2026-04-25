import { LoginPage } from './Pagelibrary/LoginPage'
import { AdminPage } from './Pagelibrary/AdminPage'



const loginPage = new LoginPage()
const adminpage = new AdminPage()

describe('Admin Search Test Suite', () => {
  beforeEach(() => {
    loginPage.loginToApplication('Admin', 'admin123')
  })
  it('Search for Admin UserName', () => {
    adminpage.AdminPageLink()
    adminpage.EnterUsername('Admin')
    adminpage.Status('Enabled')
    adminpage.ClickSearch()
    adminpage.SearchResult().should('contain', '(1) Record Found')


  })
  it('Search for Disabled User', () => {
    adminpage.AdminPageLink()
    adminpage.Status('Disabled')
    adminpage.ClickSearch()
    adminpage.SearchResult().should('contain', 'No Records Found')


  })
  it('Search for User role', () => {
    adminpage.AdminPageLink()
    adminpage.UserRole('ESS')
    adminpage.ClickSearch()
    adminpage.SearchResult().should('contain', '(8) Records Found')
  })
  it.only('Reset Search', () => {
    adminpage.AdminPageLink()
    adminpage.ResetSearch()
    adminpage.UserRoleField().should('contain', '-- Select --')
  })
})