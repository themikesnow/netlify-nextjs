describe('Create Tournament', () => {
  it('Create', () => {
    cy.login();
    cy.wait(1000);

    cy.visit('/home');
    cy.wait(1000);
    for (let i = 0; i < 1; i++) {
      cy.findByTestId('add-tournament').click();
      cy.location('pathname', { timeout: 10000 }).should('include', '/home/tournament/create');
      cy.findByTestId('wizard-next').click();
      // Details
      cy.findByTestId('input-name').type(`Cypress NBA Import Team`);
      cy.findByTestId('input-description').type(`Cypress Description Import Team`);
      cy.findByTestId('input-startDate').type(new Date('01/01/2030').toJSON().slice(0, 10));
      cy.findByTestId('input-endDate').type(new Date('01/01/2030').toJSON().slice(0, 10));
      cy.findByTestId('input-registrationDeadline').type(new Date('01/01/2030').toJSON().slice(0, 10));
      cy.findByTestId('add-category').click();
      cy.findByTestId('label-category-21').click();
      cy.findByTestId('modal-category-selection-ok').click();
      cy.findByTestId('input-registrationFee').type('999.99');
      // TODO: Single click not working... categories validation fails but a category
      // has already been selected. Will use this hack for now.
      cy.wait(5000);
      cy.findByTestId('wizard-next').click();

      // Venues
      cy.wait(1000);
      cy.findByTestId('label-venues-29').click();
      cy.findByTestId('wizard-next').click();
      // Divisions
      cy.wait(1500);
      cy.findByTestId('divisions-table-add').click();
      cy.findByTestId('input-name').type('West');
      cy.findByTestId('modal-divisions-ok').click();
      cy.findByTestId('divisions-table-add').click();
      cy.findByTestId('input-name').type('East');
      cy.findByTestId('modal-divisions-ok').click();
      cy.findByTestId('wizard-next').click();

      cy.findByTestId('import-teams').click();
      cy.get('*[data-testid^="tournament-summary-"]').eq(0).click();
      cy.get('*[data-testid^="team-"]').eq(0).click();
      cy.findByTestId('modal-import-teams-ok').click();

      cy.get('*[data-testid^="tournament-teams-0"]').should('have.length', 1);

      cy.findByTestId('wizard-next').click();
      // Playoffs
      cy.findByTestId('playoffs-edit-0').click();
      cy.wait(500);
      cy.get('#select-totalTeams').click();
      cy.get(`#react-select-select-id-totalTeams-option-2`).click();
      cy.findByTestId('modal-edit-playoffs-ok').click();
      cy.findByTestId('wizard-next').click();
      cy.wait(500);
      cy.findByTestId('label-twoPointAttemptRecorded').click();
      cy.findByTestId('label-threePointAttemptRecorded').click();
      cy.findByTestId('label-freeThrowAttemptRecorded').click();
      cy.findByTestId('label-minuteRecorded').click();
      cy.findByTestId('label-blockedShotRecorded').click();
      cy.findByTestId('label-stealRecorded').click();
      cy.findByTestId('label-assistRecorded').click();
      cy.findByTestId('label-turnoverRecorded').click();
      cy.findByTestId('label-personalFoulRecorded').click();
      cy.findByTestId('label-technicalFoulRecorded').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
    }
  });
});
