// /// <reference types="cypress" />
// // ***********************************************
// // This example commands.ts shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// //
// // declare global {
// //   namespace Cypress {
// //     interface Chainable {
// //       login(email: string, password: string): Chainable<void>
// //       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// //       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// //       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
// //     }
// //   }
// // }

// import '@testing-library/cypress/add-commands';
// import 'cypress-wait-until';

// Cypress.Commands.add('login', (username, password) => {
//   cy.visit('/login');
//   cy.findByTestId('input-username').clear().type('miguelnievesacevedo@hotmail.com');
//   cy.findByTestId('input-password').clear().type('nononono');
//   cy.findByTestId('input-rememberMe').click({ force: true });
//   cy.findByTestId('login-button-login').click();

//   // cy.findByTestId('usermenu').click();
// });

// Cypress.Commands.add(
//   'editBasketballBoxscore',
//   (
//     minutes: number,
//     twoPointMade: number,
//     twoPointAttempts: number,
//     threePointMade: number,
//     threePointAttempts: number,
//     freeThrowMade: number,
//     freeThrowAttempts: number,
//     assits: number,
//     steals: number,
//     blockedShots: number,
//     turnovers: number,
//     personalFouls: number,
//     technicalFouls: number
//   ) => {
//     cy.findByTestId('input-minutes').type(`{selectAll}{del}${minutes}`);
//     cy.findByTestId('input-twoPointMade').type(`{selectAll}{del}${twoPointMade}`);
//     cy.findByTestId('input-twoPointAttempts').type(`{selectAll}{del}${twoPointAttempts}`);

//     cy.findByTestId('input-threePointMade').type(`{selectAll}{del}${threePointMade}`);
//     cy.findByTestId('input-threePointAttempts').type(`{selectAll}{del}${threePointAttempts}`);

//     cy.findByTestId('input-freeThrowMade').type(`{selectAll}{del}${freeThrowMade}`);
//     cy.findByTestId('input-freeThrowAttempts').type(`{selectAll}{del}${freeThrowAttempts}`);

//     cy.findByTestId('input-assits').type(`{selectAll}{del}${assits}`);
//     cy.findByTestId('input-steals').type(`{selectAll}{del}${steals}`);
//     cy.findByTestId('input-blockedShots').type(`{selectAll}{del}${blockedShots}`);
//     cy.findByTestId('input-turnovers').type(`{selectAll}{del}${turnovers}`);
//     cy.findByTestId('input-personalFouls').type(`{selectAll}{del}${personalFouls}`);
//     cy.findByTestId('input-technicalFouls').type(`{selectAll}{del}${technicalFouls}`);
//   }
// );
