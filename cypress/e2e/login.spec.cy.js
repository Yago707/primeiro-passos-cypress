describe("Orange HRM Test", () => {
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    SelectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']" // Corrigido o nome da propriedade
  };

  it("login - Success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(selectorsList.usernameField).type("Admin"); // Digita "Admin" no campo de nome de usuário
    cy.get(selectorsList.passwordField).type("admin123"); // Digita "admin123" no campo de senha
    cy.get(selectorsList.loginButton).click(); // Clica no botão de submit
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.SelectionTitleTopBar).contains("Dashboard");
  });

  it("login - fail", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get(selectorsList.usernameField).type("Test"); // verificando Admin
    cy.get(selectorsList.passwordField).type("Test"); // verificando password
    cy.get(selectorsList.loginButton).click(); // clicar botão login
    cy.get(selectorsList.wrongCredentialAlert).should('exist'); // Verifica se o alerta de credenciais incorretas aparece
  });
});