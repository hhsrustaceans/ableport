function closeWelcomeModal(): void {
  cy.get("button")
    .contains("Start")
    .should("not.be.disabled")
    .click()
}

const panel: string = "en/panel/";
const panelItem: string = "view/test";

describe("Panels", function fn(): void {
  beforeEach((): void => {
    cy.visit(panel);
  });

  it.only("Should close the Welcome Modal.", (): void => {
    closeWelcomeModal();
  })

  it.only("Should display information about one specific panel.", (): void => {
    cy.get("h1")
      .next()
      .find("ul")
      .first()
      .click();

    cy.url().should("include", panelItem);
  })

  it.only("Should return to signed up panels only.", (): void => {
    cy.visit(panel.concat(panelItem));
    
    cy.get("a")
      .contains("Return to panels")
      .should("not.be.disabled")
      .click();

    cy.url().should("include", panel);
    closeWelcomeModal();
  })

  it.only("Should sign out for the signed up panel.", (): void => {
    cy.visit(panel.concat(panelItem));
    
    cy.get("button")
      .contains("Sign out")
      .should("not.be.disabled")
      .click();

    cy.url().should("include", panel.concat("discover"));
  })
});
