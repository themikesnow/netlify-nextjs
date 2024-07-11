import { faker } from '@faker-js/faker';

describe('Update Playoffs', () => {
  it('Update', () => {
    cy.loginOther();
    cy.wait(1000);

    cy.visit('/home/franchise');

    cy.findByTestId('add-franchise').click();
    cy.findByTestId('image-uploader-logoFileName').selectFile('cypress/e2e/cli/NBA/Images/Celtics.png', {
      force: true,
    });
    cy.findByTestId('input-name').type(`Tiburones`);

    cy.findByTestId('franchise-color').click();
    cy.get(`div[title="#4A90E2"]`).click();
    cy.findByTestId('input-city').type(`Aguadilla`);
    cy.findByTestId('input-state').type(`Puerto Rico`);
    cy.findByTestId('input-phoneNumber').type(`787-123-4567`);

    cy.wait(5000);

    cy.findByTestId('tournament-teams-table-add').click();

    cy.addTeamPlayer({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      jersey: faker.number.int({ min: 0, max: 100 }),
      position: 1,
    });

    cy.findByTestId('modal-edit-team-ok').click();

    cy.findByTestId('find-tournament').click();
    cy.get('*[data-testid^="tournament-summary"]').eq(0).click();
  });
});
