/// <reference types="cypress" />

describe("admin login feature", () => {
  beforeEach(() => {});
  it("login", () => {
    cy.viewport(700, 700);
    cy.visit("https://fuse-bulletin-dev.fusemachines.com/");
    cy.url().should("match", /login/);
    //check username label
    cy.contains("Username").should("exist");
    cy.contains("Simarn").should("not.exist");
    cy.fixture("credit").then(admin => {
      cy.get(":nth-child(1) > .form-control")
        .should("exist")
        .type(admin.username);
      cy.get(".input-group > .form-control").type(admin.password);
    });
    cy.get(".btn")
      .then(el => {
        expect(el).text("Log In");
      })
      .click();

    cy.url().should("eq", "https://fuse-bulletin-dev.fusemachines.com/");
  });
});
