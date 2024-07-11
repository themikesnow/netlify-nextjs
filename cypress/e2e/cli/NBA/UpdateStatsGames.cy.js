import AppUtils from '../../../../src/testing/utils/App';

const getRandomBoxscore = () => {
  const twoMades = AppUtils.randomInteger(0, 10);
  const threeMades = AppUtils.randomInteger(0, 6);
  const freeTrowMades = AppUtils.randomInteger(0, 8);

  const b = {
    minutes: AppUtils.randomInteger(30, 48),
    twoPointMade: twoMades,
    twoPointAttempts: twoMades + AppUtils.randomInteger(0, 8),
    threePointMade: threeMades,
    threePointAttempts: threeMades + AppUtils.randomInteger(0, 8),
    freeThrowMade: freeTrowMades,
    freeThrowAttempts: freeTrowMades + AppUtils.randomInteger(0, 7),
    offensiveRebounds: AppUtils.randomInteger(0, 5),
    defensiveRebounds: AppUtils.randomInteger(0, 5),
    personalFouls: AppUtils.randomInteger(0, 6),
    assists: AppUtils.randomInteger(0, 15),
    steals: AppUtils.randomInteger(0, 6),
    blockedShots: AppUtils.randomInteger(0, 4),
    turnovers: AppUtils.randomInteger(0, 5),
    personalFouls: AppUtils.randomInteger(0, 6),
    technicalFouls: 0,
  };
  b.totalPoints = b.twoPointMade * 2 + b.threePointMade * 3 + b.freeThrowMade;
  b.totalRebounds = b.offensiveRebounds + b.defensiveRebounds;
  return b;
};

const editBasketballBoxscore = (row, boxscore) => {
  cy.get('*[data-testid^="boxscore-edit-"]').eq(row).click();

  cy.findByTestId('input-minutes').type(`{selectAll}{del}${boxscore.minutes}`);
  cy.findByTestId('input-twoPointMade').type(`{selectAll}{del}${boxscore.twoPointMade}`);
  cy.findByTestId('input-twoPointAttempts').type(`{selectAll}{del}${boxscore.twoPointAttempts}`);

  cy.findByTestId('input-threePointMade').type(`{selectAll}{del}${boxscore.threePointMade}`);
  cy.findByTestId('input-threePointAttempts').type(`{selectAll}{del}${boxscore.threePointAttempts}`);

  cy.findByTestId('input-freeThrowMade').type(`{selectAll}{del}${boxscore.freeThrowMade}`);
  cy.findByTestId('input-freeThrowAttempts').type(`{selectAll}{del}${boxscore.freeThrowAttempts}`);
  cy.findByTestId('input-assists').type(`{selectAll}{del}${boxscore.assists}`);
  cy.findByTestId('input-offensiveRebounds').type(`{selectAll}{del}${boxscore.offensiveRebounds}`);
  cy.findByTestId('input-defensiveRebounds').type(`{selectAll}{del}${boxscore.defensiveRebounds}`);
  cy.findByTestId('input-steals').type(`{selectAll}{del}${boxscore.steals}`);
  cy.findByTestId('input-blockedShots').type(`{selectAll}{del}${boxscore.blockedShots}`);
  cy.findByTestId('input-turnovers').type(`{selectAll}{del}${boxscore.turnovers}`);
  cy.findByTestId('input-personalFouls').type(`{selectAll}{del}${boxscore.personalFouls}`);
  cy.findByTestId('input-technicalFouls').type(`{selectAll}{del}${boxscore.technicalFouls}`);
  cy.findByTestId('modal-edit-boxscore-ok').click();
};

let dataToValidate = {
  teams: {},
  boxscores: [],
};

let tournamentId = 0;
const generateGameStats = () => {
  let teamScore = [0, 0];
  let awayTeam;
  let homeTeam;

  console.log('Generating Game stats');

  // Get the away team name
  cy.wrap(null).then(() => {
    cy.findByTestId('boxscoreAwayTeam').invoke('text').should('not.be.empty');
    cy.findByTestId('boxscoreAwayTeam').then(($value) => {
      awayTeam = $value.text();
    });
  });

  // Get the home team name
  cy.wrap(null).then(() => {
    cy.findByTestId('boxscoreHomeTeam').invoke('text').should('not.be.empty');
    cy.findByTestId('boxscoreHomeTeam').then(($value) => {
      homeTeam = $value.text();
    });
  });

  cy.wrap(null).then(() => {
    // Loop twice... one for away team and one for home team
    for (let i = 0; i < 2; i++) {
      cy.findByTestId(i === 0 ? 'boxscoreAwayTeam' : 'boxscoreHomeTeam').click();
      const currTeam = i === 0 ? awayTeam : homeTeam;
      const periodScores = [];
      // Loop for players
      for (let y = 0; y < 5; y++) {
        let boxscore;

        do {
          // const tempTeamScore = teamScore[i];
          boxscore = getRandomBoxscore();
          periodScores[y] = boxscore.twoPointMade * 2 + boxscore.threePointMade * 3 + boxscore.freeThrowMade;
          teamScore[i] = (teamScore[i] || 0) + periodScores[y];
          if (teamScore[0] === teamScore[1]) {
            console.log(
              'need to re create boxscore',
              awayTeam,
              homeTeam,
              teamScore[0],
              teamScore[1],
              teamScore[0] === teamScore[1]
            );
          }
        } while (teamScore[0] === teamScore[1]);

        // Save boxscore to be used to calculate avg/leaders
        dataToValidate.boxscores.push({
          id: `${currTeam}-${y}`,
          ...boxscore,
        });

        editBasketballBoxscore(y, boxscore);
      }

      cy.findByTestId(`period-scores-edit-${i}`).click();
      cy.findByTestId('input-scoresRaw[1].score').type(`{selectAll}{del}${periodScores[0]}`);
      cy.findByTestId('input-scoresRaw[2].score').type(`{selectAll}{del}${periodScores[1]}`);
      cy.findByTestId('input-scoresRaw[3].score').type(`{selectAll}{del}${periodScores[2]}`);
      cy.findByTestId('input-scoresRaw[4].score').type(
        `{selectAll}{del}${periodScores[3] + periodScores[4]}`
      );
      cy.findByTestId('modal-edit-period-scores-ok').click();
    }

    updateData(awayTeam, teamScore[0] > teamScore[1]);
    updateData(homeTeam, teamScore[0] < teamScore[1]);

    cy.findByTestId('modal-edit-game-stats-ok').click();
  });
};

const updateData = (team, won) => {
  dataToValidate.teams[team] = {
    wins: (dataToValidate.teams[team]?.wins || 0) + (won ? 1 : 0),
    losses: (dataToValidate.teams[team]?.losses || 0) + (won ? 0 : 1),
  };
};

const validateData = () => {
  cy.visit(`/tournament/${tournamentId}/standings`);
  cy.wait(5000);

  console.log('dataToValidate', dataToValidate);

  // Validate standing wins and losses
  for (let key in dataToValidate.teams) {
    if (dataToValidate.teams.hasOwnProperty(key)) {
      cy.findByTestId(`standings-${key}`)
        .find('td')
        .eq(1)
        .should('have.text', dataToValidate.teams[key].wins);
      cy.findByTestId(`standings-${key}`)
        .find('td')
        .eq(2)
        .should('have.text', dataToValidate.teams[key].losses);
    }
  }

  cy.visit(`/tournament/${tournamentId}/leaders`);
  cy.wait(2000);

  const avgBoxscores = [];
  let currId = null;
  let counter = 0;
  let sumBoxscore = {};
  dataToValidate.boxscores.sort((a, b) => a.id.localeCompare(b.id));

  currId = dataToValidate.boxscores[0].id;

  // Calculate averages
  dataToValidate.boxscores.forEach((b) => {
    if (currId !== b.id) {
      for (const k in b) {
        if (b.hasOwnProperty(k) && !isNaN(b[k])) {
          sumBoxscore[k] = (sumBoxscore[k] / counter).toFixed(2);
        }
      }

      avgBoxscores.push({ id: currId, ...sumBoxscore });
      sumBoxscore = {};
      currId = b.id;
      counter = 0;
    }

    for (const k in b) {
      if (b.hasOwnProperty(k) && !isNaN(b[k])) {
        sumBoxscore[k] = (sumBoxscore[k] || 0) + b[k];
      }
    }
    counter++;
  });

  for (const k in sumBoxscore) {
    if (sumBoxscore.hasOwnProperty(k) && !isNaN(sumBoxscore[k])) {
      sumBoxscore[k] = (sumBoxscore[k] / counter).toFixed(2);
    }
  }
  avgBoxscores.push(sumBoxscore);

  console.log('avgBoxscores', avgBoxscores);

  // Loop leader stats and check top values
  [
    'pointsPerGame',
    'reboundsPerGame',
    'assistsPerGame',
    'stealsPerGame',
    'blockedShotsPerGame',
    'threePointPerGame',
    'freeThrowMadePerGame',
    'turnoversPerGame',
  ].map((stat, index) => {
    let theStat = stat.replace('PerGame', '');
    if (theStat === 'points') {
      theStat = 'totalPoints';
    } else if (theStat === 'rebounds') {
      theStat = 'totalRebounds';
    } else if (theStat === 'threePoint') {
      theStat = 'threePointMade';
    }

    avgBoxscores.sort((a, b) => b[theStat] - a[theStat]);
    if (index === 0) {
      console.log('avgBoxscores', avgBoxscores);
    }

    for (let i = 0; i < 4; i++) {
      console.log('avgBoxscores[i][theStat] ', theStat, avgBoxscores[i], avgBoxscores[i][theStat]);
      cy.findByTestId(`tournament-leaders-${stat}`)
        .find('[class*="LeadersCard_value"]')
        .eq(i)
        .should('have.text', avgBoxscores[i][theStat]);
    }
  });
};

describe('Update Games Stats', () => {
  it('Generate Game Stats', () => {
    cy.viewport('macbook-16');
    cy.login();

    cy.wrap(null).then(() => {
      cy.get('*[data-testid^="edit-tournament-games-"]')
        .eq(0)
        .invoke('attr', 'data-testId')
        .then(($testId) => {
          const testId = $testId;
          tournamentId = testId.substring(testId.lastIndexOf('-') + 1, testId.length);

          cy.get('*[data-testid^="edit-tournament-games"]').eq(0).click();

          cy.get('*[data-testid^="tournament-teams-edit-stats"]').then((items) => {
            const count = Cypress.$(items).length;
            for (let i = 0; i < count; i++) {
              cy.get('*[data-testid^="tournament-teams-edit-stats"]').eq(i).click();
              generateGameStats();
              cy.wait(3000);
            }
          });
        });
    });
  });

  it('Validate Stats', () => {
    validateData();
  });
});
