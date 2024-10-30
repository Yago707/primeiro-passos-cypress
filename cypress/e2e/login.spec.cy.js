describe("Orange HRM Test", () => {
  it("login - Success", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin"); // verificando Admin
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123"); // verificando password
    cy.get(".oxd-button").click(); // clicar botão login
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").contains("Dashboard");
  });
  it("login - fail", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Test"); // verificando Admin
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Test"); // verificando password
    cy.get(".oxd-button").click(); // clicar botão login
    cy.get(".oxd-alert-content");
  });
});
