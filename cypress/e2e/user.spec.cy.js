import userData from '../fixtures/user-Data.json' 

describe("Orange HRM Test", () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    SelectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]', // Adicionada a vírgula aqui no exemplo anterior
    firstNameField: ".orangehrm-firstname", 
    lastName: '[name="lastName"]',
    gerericField: ".oxd-input--active",
    dateFilde:"[placeholder='yyyy-dd-mm']",
    dateCloseButton:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon',
    submitButton:"[type='submit']",
   
}
  
  it.only("User info Update - Success", () => {

    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.dashboardGrid).should('be.visible');
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type('NickNameTest');
    cy.get(selectorsList.lastName).clear().type('lastNameTest');
    cy.get(selectorsList.gerericField).eq(3).clear().type('NickName');
    cy.get(selectorsList.gerericField).eq(4).clear().type('Employee');
    cy.get(selectorsList.gerericField).eq(5).clear().type('OtherIdTest');
    cy.get(selectorsList.gerericField).eq(6).clear().type('DriversLicenseTest');
    cy.get(selectorsList.gerericField).eq(2).clear().type('2025-03-10');
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.gerericField).eq(8).clear().type('ssnNumberTest');
    cy.get(selectorsList.gerericField).eq(7).clear().type('2025-03-10');
    cy.get(selectorsList.submitButton).eq(0).click();  
    });

it("login - fail", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert)
  });
});