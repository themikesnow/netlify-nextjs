// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';

const doLogin = (username, password) => {
  cy.visit('/login');
  cy.findByTestId('input-username').clear().type(username);
  cy.findByTestId('input-password').clear().type(password);
  cy.findByTestId('input-rememberMe').click({ force: true });
  cy.findByTestId('login-button-login').click();
};
Cypress.Commands.add('login', (username, password) => {
  doLogin('miguelnievesacevedo@hotmail.com', 'nononono');
});

Cypress.Commands.add('loginOther', (username, password) => {
  doLogin('miguelnievesacevedo@gmail.com', 'nononono');
});

Cypress.Commands.add('logout', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.logout').length) {
    } else {
      cy.findByTestId('usermenu').click();
      if ($body.find('.logout').length === 0) {
        cy.findByTestId('usermenu').click();
      }
    }

    cy.findByTestId('usermenu-logout').click();
  });
});

Cypress.Commands.add('addTeamPlayer', (player) => {
  cy.wait(500);
  cy.findByTestId('team-players-table-add').click();
  cy.findByTestId('input-jerseyNumber').type(player.jersey);
  cy.findByTestId('input-firstName').type(player.firstName);
  cy.findByTestId('input-lastName').type(player.lastName);
  cy.findByTestId('input-dateOfBirth').type(`01/01/2020`);
  cy.get('#select-primaryPosition').click();
  cy.get(`#react-select-select-id-primaryPosition-option-${player.position}`).click();
  // cy.get('#select-secondaryPosition').click();
  // cy.get(`#react-select-select-id-secondaryPosition-option-${player.position}`).click();
  cy.findByTestId('modal-edit-team-player-ok').click();
});


Cypress.Commands.add('createTeam', (team) => {
    cy.findByTestId('tournament-teams-table-add').click();
    cy.findByTestId('input-name').type(team.name);
    if (team.logo) {
      cy.findByTestId('image-uploader-logoFileName').selectFile(team.logo, {
        force: true,
      });
    }

    cy.findByTestId('team-color').click();
    cy.get(`div[title="${team.color}"]`).click();
    cy.get('#select-accepted').click();
    cy.get('#react-select-select-id-accepted-option-1').click();

    if (team.conference > 0) {
      cy.get('#select-division').click();
      cy.get(`#react-select-select-id-division-option-${team.conference}`).click();
    }

    team.players.forEach((player) => {
      cy.wait(500);

      cy.addTeamPlayer(player);
      // cy.findByTestId('team-players-table-add').click();
      // cy.findByTestId('input-jerseyNumber').type(player.jersey);
      // cy.findByTestId('input-firstName').type(player.firstName);
      // cy.findByTestId('input-lastName').type(player.lastName);
      // // cy.findByTestId('input-dateOfBirth').type(`${index < 10 ? `0${index}` : index + 1}/01/2020`);
      // cy.findByTestId('input-dateOfBirth').type(`01/01/2020`);
      // cy.get('#select-primaryPosition').click();
      // // cy.get(`#react-select-select-id-primaryPosition-option-${p % 5 || 5}`).click();
      // cy.get(`#react-select-select-id-primaryPosition-option-${player.position}`).click();
      // cy.get('#select-secondaryPosition').click();
      // // cy.get(`#react-select-select-id-secondaryPosition-option-${p % 5 || 5}`).click();
      // cy.get(`#react-select-select-id-secondaryPosition-option-${player.position}`).click();
      // cy.findByTestId('modal-edit-team-player-ok').click();
    });
    
    cy.findByTestId('modal-edit-team-ok').click();
});

// Cypress.Commands.add(
//   'editBasketballBoxscore',
//   (
//     row,
//     minutes,
//     twoPointMade,
//     twoPointAttempts,
//     threePointMade,
//     threePointAttempts,
//     freeThrowMade,
//     freeThrowAttempts,
//     assits,
//     steals,
//     blockedShots,
//     turnovers,
//     personalFouls,
//     technicalFouls
//   ) => {
//     cy.get('*[data-testid^="boxscore-edit-"]').eq(row).click();
//     // cy.editBasketballBoxscore(10, 0, 1, 0, 5, 0, 0, 1, 0, 0, 5, 2, 1);

//     cy.findByTestId('input-minutes').type(`{selectAll}{del}${minutes}`);
//     cy.findByTestId('input-twoPointMade').type(`{selectAll}{del}${twoPointMade}`);
//     cy.findByTestId('input-twoPointAttempts').type(`{selectAll}{del}${twoPointAttempts}`);

//     // cy.findByTestId('input-twoPointMade').clear();
//     // cy.findByTestId('input-twoPointMade').type(twoPointMade);

//     // cy.findByTestId('input-twoPointAttempts').clear();
//     // cy.findByTestId('input-twoPointAttempts').type(twoPointAttempts);

//     cy.findByTestId('input-threePointMade').type(`{selectAll}{del}${threePointMade}`);
//     cy.findByTestId('input-threePointAttempts').type(`{selectAll}{del}${threePointAttempts}`);
//     // cy.findByTestId('input-threePointMade').clear();
//     // cy.findByTestId('input-threePointMade').type(threePointMade);
//     // cy.findByTestId('input-threePointAttempts').clear();
//     // cy.findByTestId('input-threePointAttempts').type(threePointAttempts);

//     // cy.findByTestId('input-freeThrowMade').clear();
//     // cy.findByTestId('input-freeThrowMade').type(freeThrowMade);
//     // cy.findByTestId('input-freeThrowAttempts').clear();
//     // cy.findByTestId('input-freeThrowAttempts').type(freeThrowAttempts);

//     cy.findByTestId('input-freeThrowMade').type(`{selectAll}{del}${freeThrowMade}`);
//     cy.findByTestId('input-freeThrowAttempts').type(`{selectAll}{del}${freeThrowAttempts}`);

//     cy.findByTestId('input-assists').type(`{selectAll}{del}${assits}`);
//     cy.findByTestId('input-steals').type(`{selectAll}{del}${steals}`);
//     cy.findByTestId('input-blockedShots').type(`{selectAll}{del}${blockedShots}`);
//     cy.findByTestId('input-turnovers').type(`{selectAll}{del}${turnovers}`);
//     cy.findByTestId('input-personalFouls').type(`{selectAll}{del}${personalFouls}`);
//     cy.findByTestId('input-technicalFouls').type(`{selectAll}{del}${technicalFouls}`);
//     cy.findByTestId('modal-edit-boxscore-ok').click();
//   }
// );
