describe('Recover Password', () => {
  it('Error Validation', () => {
    cy.visit('/recover-password');

    cy.screenshot();

    cy.findByTestId('recover-password-button-ok').click();

    cy.screenshot();

    cy.get('.validation-error').should('have.length', 2);

    cy.findByTestId('input-username').type('user@email.com');
    cy.get('.validation-error').should('have.length', 1);

    cy.screenshot();
  });

  // it('Recover Password', () => {
  //   cy.visit('/recover-password');

  //   cy.findByTestId('input-username').type('user@email.com');

  //   cy.findByTestId('recover-password-button-ok').click();

  //   cy.waitUntil(() => Cypress.$('.validation-error').length === 0, { timeout: 60000, interval: 2000 });

  //   cy.findByTestId('recover-password-button-ok').click();

  //   cy.findByTestId('recover-password-success', { timeout: 10000 }).should('be.visible');
  // });
});
