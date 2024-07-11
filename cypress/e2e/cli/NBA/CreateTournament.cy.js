import { faker } from '@faker-js/faker';

import Teams from '../../../data/Teams';

// import { AppUtils } from '@app-utils';

// const COLORS = {
//   Yellow: ':nth-child(4) > span > div',
//   Other: ':nth-child(3) > span > div',
// };

const COLORS = [
  ':nth-child(5) > span > div', // Yellow
  ':nth-child(3) > span > div', // Darker Yellow
  ':nth-child(6) > span > div', // Yellow
  ':nth-child(7) > span > div', // Yellow
];

describe('Create Tournament', () => {
  it('Create', () => {
    cy.login();
    cy.wait(1000);

    cy.visit('/home');
    cy.wait(1000);
    for (let i = 0; i < 1; i++) {
      // cy.wait(5000);
      cy.findByTestId('add-tournament').click();
      cy.location('pathname', { timeout: 10000 }).should('include', '/home/tournament/create');
      cy.findByTestId('wizard-next').click();
      // Details
      cy.findByTestId('input-name').type(`Cypress NBA Netlify ${i}`);
      cy.findByTestId('input-description').type(`Cypress Description Netlify ${i}`);
      // cy.findByTestId('input-startDate').type(new Date().toJSON().slice(0, 10));
      // cy.findByTestId('input-endDate').type(new Date().toJSON().slice(0, 10));
      // cy.findByTestId('input-registrationDeadline').type(new Date().toJSON().slice(0, 10));
      cy.findByTestId('input-startDate').type(new Date('01/01/2030').toJSON().slice(0, 10));
      cy.findByTestId('input-endDate').type(new Date('01/01/2030').toJSON().slice(0, 10));
      cy.findByTestId('input-registrationDeadline').type(new Date('01/01/2030').toJSON().slice(0, 10));
      cy.findByTestId('add-category').click();
      cy.findByTestId('label-category-21').click();
      cy.findByTestId('modal-category-selection-ok').click();
      cy.findByTestId('input-registrationFee').type('999.99');
      // cy.findByTestId('input-prize').type('24.99');
      // TODO: Single click not working... categories validation fails but a category
      // has already been selected. Will use this hack for now.
      cy.wait(5000);
      cy.findByTestId('wizard-next').click();
      // cy.findByTestId('wizard-next').click();
      // cy.wait(1000);
      // cy.findByTestId('wizard-next').click();
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
      // Teams
      // for (let t = 0; t < 4; t++) {
      Teams.forEach((team) => {
        cy.wait(1000);
        cy.findByTestId('tournament-teams-table-add').click();
        // cy.findByTestId('input-name').type(faker.company.animal.dog()); //'Lakers');
        cy.findByTestId('input-name').type(team.name);
        //HERE
        if (team.logo) {
          cy.findByTestId('image-uploader-logoFileName').selectFile(team.logo, {
            force: true,
          });
        }

        cy.findByTestId('team-color').click();
        // cy.get(COLORS.Yellow).click();
        // cy.get(COLORS[t]).click();
        cy.get(`div[title="${team.color}"]`).click();
        cy.get('#select-accepted').click();
        cy.get('#react-select-select-id-accepted-option-1').click();

        if (team.conference > 0) {
          cy.get('#select-division').click();
          cy.get(`#react-select-select-id-division-option-${team.conference}`).click();
        }

        // cy.get(`#react-select-select-id-awayTeam-option-${team1}`).click();
        // react-select-select-id-division-live-region
        // for (let p = 1; p <= 5; p++) {
        team.players.forEach((player) => {
          cy.wait(500);
          cy.findByTestId('team-players-table-add').click();
          cy.findByTestId('input-jerseyNumber').type(player.jersey);
          cy.findByTestId('input-firstName').type(player.firstName);
          cy.findByTestId('input-lastName').type(player.lastName);
          // cy.findByTestId('input-dateOfBirth').type(`${index < 10 ? `0${index}` : index + 1}/01/2020`);
          cy.findByTestId('input-dateOfBirth').type(`01/01/2020`);
          cy.get('#select-primaryPosition').click();
          // cy.get(`#react-select-select-id-primaryPosition-option-${p % 5 || 5}`).click();
          cy.get(`#react-select-select-id-primaryPosition-option-${player.position}`).click();
          cy.get('#select-secondaryPosition').click();
          // cy.get(`#react-select-select-id-secondaryPosition-option-${p % 5 || 5}`).click();
          cy.get(`#react-select-select-id-secondaryPosition-option-${player.position}`).click();
          cy.findByTestId('modal-edit-team-player-ok').click();
        });
        // }
        cy.findByTestId('modal-edit-team-ok').click();
      });
      // }
      cy.findByTestId('wizard-next').click();
      // Playoffs
      cy.findByTestId('playoffs-edit-0').click();
      cy.wait(500);
      cy.get('#select-totalTeams').click();
      cy.get(`#react-select-select-id-totalTeams-option-2`).click();
      cy.findByTestId('modal-edit-playoffs-ok').click();
      cy.findByTestId('wizard-next').click();
      cy.wait(500);
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();
      cy.findByTestId('wizard-previous').click();

      // cy.wait(4000);

      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();
      cy.findByTestId('wizard-next').click();

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
      cy.findByTestId('wizard-next').click();
    }
  });
});
