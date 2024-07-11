describe('OpenTournaments', () => {
  it('Screen shows open tournaments', () => {
    cy.visit('/open-tournaments');
    cy.screenshot();
    cy.wait(1000);
    cy.screenshot();
    cy.scrollTo('bottom');
    cy.wait(500);
    cy.screenshot();
  });
});
