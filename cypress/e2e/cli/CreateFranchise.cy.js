import { faker } from '@faker-js/faker';

describe('Update Playoffs', () => {
  it('Update', () => {
    cy.login();
    cy.wait(1000);

    cy.visit('/home/franchise');

    cy.findByTestId('add-franchise').click();
    cy.findByTestId('input-name').type(`Tiburones`);

    cy.findByTestId('franchise-color').click();
    cy.get(`div[title="#4A90E2"]`).click();
    cy.findByTestId('input-city').type(`Aguadilla`);
    cy.findByTestId('input-state').type(`Puerto Rico`);
    cy.findByTestId('input-phoneNumber').type(`787-123-4567`);

    cy.wait(4000);

    cy.findByTestId('tournament-teams-table-add').click();
    cy.addTeamPlayer({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      jersey: faker.number.int({ min: 0, max: 100 }),
      position: 0,
    });

    cy.findByTestId('modal-edit-team-ok').click();

    // cy.get(COLORS.Yellow).click();
    // cy.get(COLORS[t]).click();
    // cy.get(`div[title="color: '#4A90E2',"]`).click();

    // cy.findByTestId('round-0-matchup-1-edit-team-team1').click();
    // cy.contains('Boston Celtics').click();
    // cy.findByTestId('modal-edit-matchup-ok').click();

    // cy.findByTestId('round-0-matchup-1-edit-team2').click();
    // cy.findByTestId('round-0-matchup-1-edit-team-team2').click();
    // cy.contains('Brooklyn Nets').click();

    // cy.findByTestId('modal-edit-matchup-ok').click();

    // cy.findByTestId('round-0-matchup-2-edit-team1').click();
    // cy.findByTestId('round-0-matchup-2-edit-team-team1').click();
    // cy.contains('Golden State Warriors').click();

    // cy.findByTestId('modal-edit-matchup-ok').click();

    // cy.findByTestId('round-0-matchup-2-edit-team2').click();
    // cy.findByTestId('round-0-matchup-2-edit-team-team2').click();
    // cy.contains('Dallas Mavericks').click();

    // cy.findByTestId('modal-edit-matchup-ok').click();
  });
});
