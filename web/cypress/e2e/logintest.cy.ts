// cypress/integration/register.spec.js
/// <reference types="cypress" />

context('Registration Flow', () => {
  it('should successfully complete the registration flow', () => {
    cy.visit('/en/account/register/'); // Update with your actual local development URL

    // Fill in the name form
    cy.get('#first_name').type('John');
    cy.get('#last_name').type('Doe');
    cy.get('button').contains('Next').click();

    // Fill in the login form
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('button').contains('Next').click();

    // Fill in the personal form
    cy.get('#age').type('25');
    cy.get('button').contains('Submit').click();

    // Cypress will wait for the redirect to the login page
    cy.url().should('include', '/en/account/login/');
    cy.get('button').contains('Log in').should('be.visible').click();
    cy.url().should('include', '/en/panel/');
  });
});
