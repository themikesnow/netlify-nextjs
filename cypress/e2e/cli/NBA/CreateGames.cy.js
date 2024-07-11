// import { faker } from '@faker-js/faker';
// import { DateFormat } from '../../../src/constants';
// import { AppUtils } from '../../../src/utils';
// import Teams from '../../data/Teams';

describe('Create Tournament', () => {
  it('Create', () => {
    cy.viewport('macbook-16');
    cy.login();
    cy.wait(1000);

    let day = 1;
    let counter = new Date();

    const createGame = (team1, team2) => {
      cy.wait(1000);
      cy.findByTestId('tournament-teams-table-add').click();
      cy.get('#select-awayTeam').click();
      cy.get(`#react-select-select-id-awayTeam-option-${team1}`).click();
      cy.get('#select-homeTeam').click();
      cy.get(`#react-select-select-id-homeTeam-option-${team2}`).click();

      cy.findByTestId('input-gameDate').type(`{selectAll}{del}01/${day < 10 ? `0${day}` : day}/2000`);

      cy.findByTestId('input-gameTime').type(
        `{selectAll}{del}${counter % 2 !== 0 ? '06:30 PM' : '09:00 PM'}`
      );
      cy.findByTestId('input-gameTime').click();

      cy.findByTestId('modal-edit-game-ok').click();
      if (counter % 2 === 0) {
        day++;
      }
      counter++;
    };

    cy.get('*[data-testid^="edit-tournament-games"]').eq(0).click();
    cy.wait(2000);

    for (let i = 0; i < 1; i++) {
      createGame(0, 1);
      createGame(2, 3);

      createGame(0, 2);
      createGame(1, 3);

      createGame(0, 3);
      createGame(2, 1);
    }
  });
});
