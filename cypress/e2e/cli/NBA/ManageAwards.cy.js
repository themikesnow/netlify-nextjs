const awards = [
  { award: 'Most Valuable Player' },
  { award: 'Finals Most Valuable Player' },
  { award: 'Best Defensive Player' },
  { award: 'Best Sixth Man' },
  { award: 'Most Improved Player' },
  { award: 'Best Rookie' },
  { award: 'Scoring Champ' },
  { award: 'Three Points Champ' },
  { award: 'Rebounds Champ' },
  { award: 'Assists Champ' },
  { award: 'Best Sportsmanlike' },
];
describe('Manage Awards', () => {
  it('Update Awards', () => {
    let tournamentId = 0;

    cy.viewport('macbook-16');
    cy.login();
    cy.wait(1000);

    cy.wrap(null).then(() => {
      cy.get('*[data-testid^="edit-tournament-awards"]')
        .eq(0)
        .invoke('attr', 'data-testId')
        .then(($testId) => {
          const testId = $testId;
          tournamentId = testId.substring(testId.lastIndexOf('-') + 1, testId.length);
        });
    });

    cy.wrap(null).then(() => {
      cy.get('*[data-testid^="edit-tournament-awards"]').eq(0).click();

      awards.forEach((a, index) => {
        cy.findByTestId(a.award).find('*[data-testid^="manage-awards-edit"]').eq(0).click();

        cy.get('*[data-testid^="award-player-selection"]')
          .eq(index)
          .invoke('attr', 'data-testId')
          .then(($testId) => {
            const testId = $testId;
            const playerID = testId.substring(testId.lastIndexOf('-') + 1, testId.length);
            console.log('PLAYER', playerID);
            a.playerId = playerID;
            cy.findByTestId($testId).click();
          });
      });
    });

    cy.wrap(null).then(() => {
      cy.wait(2000);
      cy.visit(`/tournament/${tournamentId}/awards`);
      cy.wait(1000);

      awards.forEach((a) => {
        cy.findByTestId(`award-${a.award}-player-${a.playerId}`);
      });
    });
  });
});
