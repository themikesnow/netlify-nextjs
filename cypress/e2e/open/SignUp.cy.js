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
  it('Registration', () => {
    cy.visit('/sign-up');

    fillForm(cy);

    cy.findByTestId('sign-up-button-ok').click();

    cy.waitUntil(() => Cypress.$('.validation-error').length === 0, { timeout: 60000, interval: 2000 });

    cy.findByTestId('sign-up-button-ok').click();
  });

  it('Registration Username Taken validation', () => {
    cy.visit('/sign-up');

    fillForm(cy);

    cy.findByTestId('sign-up-button-ok').click();

    cy.waitUntil(() => Cypress.$('.validation-error').length === 0, { timeout: 60000, interval: 2000 });

    cy.findByTestId('sign-up-button-ok').click();

    cy.findByText('Username/email already registered.').should('not.exist');
    cy.findByText('Username/email already registered.').should('not.exist');
    cy.findByText('Username/email already registered.').should('not.exist');
    cy.findByText('Username/email already registered.').should('exist');
  });
});
