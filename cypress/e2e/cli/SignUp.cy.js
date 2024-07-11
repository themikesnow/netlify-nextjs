const fillForm = (theCy) => {
  theCy.findByTestId('input-firstName').type('Michael');
  theCy.findByTestId('input-middleName').type('Jefrey');
  theCy.findByTestId('input-lastName').type('Jordan');
  theCy.findByTestId('input-dateOfBirth').type('01/01/2000');
  theCy.get('#select-gender').type('Male{enter}');
  theCy.findByTestId('input-postalCode').type('00000');
  theCy.findByTestId('input-username').type('user@email.com');
  theCy.findByTestId('input-password').type('12345');
  theCy.findByTestId('input-confirmPassword').type('12345');
};
describe('SignUp', () => {
  it('Error Validation', () => {
    cy.visit('/sign-up');

    cy.screenshot();

    cy.findByTestId('sign-up-button-ok').click();

    cy.screenshot();

    cy.get('.validation-error').should('have.length', 9);

    cy.findByTestId('input-firstName').type('Michael');
    cy.get('.validation-error').should('have.length', 8);

    cy.findByTestId('input-middleName').type('Jefrey');

    cy.findByTestId('input-lastName').type('Jordan');
    cy.get('.validation-error').should('have.length', 7);

    cy.findByTestId('input-dateOfBirth').type('01/01/2000');
    cy.get('.validation-error').should('have.length', 6);

    cy.get('#select-gender').type('Male{enter}');
    cy.get('.validation-error').should('have.length', 5);

    cy.findByTestId('input-postalCode').type('00000');
    cy.get('.validation-error').should('have.length', 4);

    cy.findByTestId('input-username').type('user@email.com');
    cy.get('.validation-error').should('have.length', 3);

    cy.findByTestId('input-password').type('12345');
    cy.get('.validation-error').should('have.length', 2);

    cy.findByTestId('input-confirmPassword').type('12345');
    cy.get('.validation-error').should('have.length', 1);

    cy.screenshot();
  });
});
