describe('Tournament', () => {
  it('Renders Tournament Details', () => {
    cy.visit('/open-tournaments');

    cy.wait(1000);

    cy.get('*[data-testid^="tournament-summary-"]')
      .eq(0)
      .invoke('attr', 'data-testId')
      .then(($testId) => {
        const testId = $testId;
        const tournamentId = testId.substring(testId.lastIndexOf('-') + 1, testId.length);
        cy.visit(`/tournament/${tournamentId}`);
        cy.screenshot();

        cy.findByTestId('tab-teams', { timeout: 10000 }).should('be.visible');
        cy.findByTestId('tab-teams').click();

        cy.findByTestId('tab-playoffs', { timeout: 10000 }).should('be.visible');
        cy.findByTestId('tab-playoffs').click();

        cy.wait(1000);
        cy.screenshot();
      });

    // cy.get('*[data-testid^="tournament-summary-"]').eq(0).click();
    // cy.wait(2000);
  });
});
