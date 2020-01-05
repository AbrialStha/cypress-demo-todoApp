/// <reference types="cypress" />

/**
 *  Test Regarding the Todo
 */

describe("Todo User Stories all in single spec file", () => {
  it("User can see an input field where he can type in a to-do item", () => {
    cy.visit("/");
    cy.get(".input-group-text")
      .should("exist")
      .type("Is Typeable");
  });

  it("By pressing a button, the User can submit the to-do item and can see that being added to a list of to-do’s", () => {
    cy.get(".input-group-text")
      .clear()
      .type("New Todo");
    cy.get(".input-group-append > .btn")
      .should("exist")
      .click();
    cy.get(".table")
      .contains("New Todo")
      .should("exist");
  });

  it("User can mark a to-do as completed", () => {
    cy.get(".table")
      .contains("New Todo")
      .parent()
      .within(() => {
        cy.get("[style='width: 50px;'] > input")
          .should("exist")
          .click();
      });
    //verify if the text is strike or not
    cy.get(".table")
      .contains("New Todo")
      .then($el => {
        expect($el).to.contain.css(
          "text-decoration",
          "line-through solid rgb(238, 238, 238)"
        );
      });
  });

  it("User can mark a completed to-do as incomplete", () => {
    cy.get(".table")
      .contains("New Todo")
      .parent()
      .within(() => {
        cy.get("[style='width: 50px;'] > input")
          .should("exist")
          .click();
      });
    //verify if the text is strike or not
    cy.get(".table")
      .contains("New Todo")
      .then($el => {
        expect($el).to.not.contain.css(
          "text-decoration",
          "line-through solid rgb(238, 238, 238)"
        );
      });
  });

  it("User can remove a to-do item by pressing on a button", () => {
    cy.get(".table")
      .contains("New Todo")
      .parent()
      .contains("Delete")
      .should("exist")
      .click();
    //the todo should not exist
    cy.get(".table")
      .contains("New Todo")
      .should("not.exist");
  });
});
