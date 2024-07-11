describe('Teams', () => {
    it('Copy Teams', () => {
        cy.login();
        cy.wait(1000);
        //Go to teams page
        cy.visit('/home/tournament/edit/22/teams');
        cy.wait(60000);
        //Open copy team modal
        cy.findByTestId('tournament-teams-copy-915').click();
        //Wait for manual ReCatpcha interaction
        cy.wait(90000);
        //Click ok 
        cy.findByTestId('modal-copy-team-ok').click();

        //Check if team was copy
        cy.contains('Puerto Rico - Copied');
        cy.screenshot();
    });
});
