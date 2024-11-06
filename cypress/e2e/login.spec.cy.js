describe("Orange HRM Test", () => {
 
 const selectorsList = {
  usernameFilde: "[name='username']",
  passwordFilde: "[name='password']",
  loginButton: "[type='submit']",
  SelectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
 wrongCredencialAlert: "[role='alert']"
 }
 
  it("login - Success", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("[name='username']").type("Admin"); // Digita "Admin" no campo de nome de usuário
    cy.get("[name='password']").type("admin123"); // Digita "admin123" no campo de senha
    cy.get("[type='submit']").click(); // Clica no botão de submit
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb-module").contains("Dashboard");
  });
  it("login - fail", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("[name='username']").type("Test"); // verificando Admin
    cy.get("[name='password']").type("Test"); // verificando password
    cy.get("[type='submit']").click(); // clicar botão login
    cy.get("[role='alert']"); // Seleciona o elemento com o atributo role='alert'
  });
});

