describe('Update Playoffs', () => {
  it('Update', () => {
    cy.login();
    cy.wait(1000);

    cy.visit('/home/tournament/games/135');

    cy.get('#select-seasonType').click();
    cy.get('#react-select-select-id-seasonType-option-2').click();

    cy.findByTestId('round-0-matchup-1-edit-team1').click();
    cy.findByTestId('round-0-matchup-1-edit-team-team1').click();
    cy.contains('Boston Celtics').click();
    cy.findByTestId('modal-edit-matchup-ok').click();

    cy.findByTestId('round-0-matchup-1-edit-team2').click();
    cy.findByTestId('round-0-matchup-1-edit-team-team2').click();
    cy.contains('Brooklyn Nets').click();

    cy.findByTestId('modal-edit-matchup-ok').click();

    cy.findByTestId('round-0-matchup-2-edit-team1').click();
    cy.findByTestId('round-0-matchup-2-edit-team-team1').click();
    cy.contains('Golden State Warriors').click();

    cy.findByTestId('modal-edit-matchup-ok').click();

    cy.findByTestId('round-0-matchup-2-edit-team2').click();
    cy.findByTestId('round-0-matchup-2-edit-team-team2').click();
    cy.contains('Dallas Mavericks').click();

    cy.findByTestId('modal-edit-matchup-ok').click();
  });
});
