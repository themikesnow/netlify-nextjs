describe('Index', () => {
  it('theme changes', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.screenshot();
    cy.findByTestId('theme-toggle').click();
    cy.screenshot();
  });
});
