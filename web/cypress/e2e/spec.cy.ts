// cypress/integration/register.spec.js
/// <reference types="cypress" />

context('Registration Flow', () => {
  it('should successfully complete the registration flow', () => {
    cy.visit('http://localhost:3000/en/account/register/'); // Update with your actual local development URL

    // Fill in the name form
    cy.get('#first_name').type('John');
    cy.get('#last_name').type('Doe');
    cy.get('button').contains('common.form.next').click();

    // Fill in the login form
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('button').contains('common.form.next').click();

    // Fill in the personal form
    cy.get('#age').type('25');
    cy.get('button').contains('common.form.submit').click();

    // Cypress will wait for the redirect to the login page
    cy.url().should('include', '/login');

    // You can add additional assertions based on your actual implementation
  });
});
