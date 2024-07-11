import AppUtils from '../../../../src/testing/utils/App';
import Teams from '../../../data/Teams';



describe('Create More Teams', () => {
  it('Create', () => {
    cy.viewport('macbook-16');
    cy.login();

    // cy.wrap(null).then(() => {
    //   cy.get('*[data-testid^="edit-tournament-details-"]')
    //     .eq(0)
    //     .invoke('attr', 'data-testId')
    //     .then(($testId) => {
    //       const testId = $testId;
    //       tournamentId = testId.substring(testId.lastIndexOf('-') + 1, testId.length);

    cy.get('*[data-testid^="edit-tournament-details"]').eq(0).click();
    cy.findByTestId('tab-teams').click();

    // tournament-teams-1247
    cy.wait(3000);
    cy.get('tr[data-testid^="tournament-teams-"]').then((items) => {
      const count = Cypress.$(items).length;
      console.log('count here:', count);

      for (let i = count + 1; i < count + 10; i++) {

        cy.createTeam({
          name: `Whatever ${i}`,
          color: '#000000',
          conference: null,
          logo: null,
          players: [{ firstName: `Joe ${i}`, lastName: 'Doe', jersey: '0', position: 1 }],
        })
        cy.wait(2000)
      }
    })
    
      

        //   cy.get('*[data-testid^="tournament-teams-edit-stats"]').then((items) => {
        //     const count = Cypress.$(items).length;
        //     for (let i = 0; i < count; i++) {
        //       cy.get('*[data-testid^="tournament-teams-edit-stats"]').eq(i).click();
        //       generateGameStats();
        //       cy.wait(3000);
        //     }
        //   });
    // 
  // });
    // });
  });

 
});
