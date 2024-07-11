const Teams = [
  {
    name: 'Dallas Mavericks',
    color: '#4A90E2',
    conference: 1,
    logo: 'cypress/e2e/cli/NBA/Images/Mavericks.png',
    players: [
      { firstName: 'Luka', lastName: 'Doncic', jersey: '77', position: 1 },
      { firstName: 'Kyrie', lastName: 'Irving', jersey: '2', position: 1 },
      { firstName: 'Tim', lastName: 'Hardaway', jersey: '11', position: 3 },
      { firstName: 'Grant', lastName: 'Williams', jersey: '3', position: 4 },
      { firstName: 'Dwight', lastName: 'Powell', jersey: '7', position: 5 },
    ],
  },
  {
    name: 'Golden State Warriors',
    color: '#F8E71C',
    conference: 1,
    logo: 'cypress/e2e/cli/NBA/Images/Warriors.png',
    players: [
      { firstName: 'Stephen', lastName: 'Curry', jersey: '30', position: 1 },
      { firstName: 'Klay', lastName: 'Thompson', jersey: '11', position: 2 },
      { firstName: 'Jonathan', lastName: 'Kuminga', jersey: '00', position: 3 },
      { firstName: 'Andrew', lastName: 'Wiggins', jersey: '22', position: 4 },
      { firstName: 'Dryamond', lastName: 'Green', jersey: '23', position: 5 },
    ],
  },
  {
    name: 'Brooklyn Nets',
    color: '#000000',
    conference: 2,
    logo: 'cypress/e2e/cli/NBA/Images/Nets.png',
    players: [
      { firstName: 'Spencer', lastName: 'Dinwiddie', jersey: '26', position: 2 },
      { firstName: 'Mikal', lastName: 'Bridges', jersey: '1', position: 2 },
      { firstName: 'Cam', lastName: 'Johnson', jersey: '2', position: 3 },
      { firstName: 'Ben', lastName: 'Simmons', jersey: '10', position: 4 },
      { firstName: 'Nic', lastName: 'Claxton', jersey: '33', position: 5 },
    ],
  },
  {
    name: 'Boston Celtics',
    color: '#417505',
    conference: 2,
    logo: 'cypress/e2e/cli/NBA/Images/Celtics.png',
    players: [
      { firstName: 'Jrue', lastName: 'Holiday', jersey: '4', position: 1 },
      { firstName: 'Jaylen', lastName: 'Brown', jersey: '7', position: 2 },
      { firstName: 'Jason', lastName: 'Tatum', jersey: '0', position: 3 },
      { firstName: 'Al', lastName: 'Horford', jersey: '42', position: 4 },
      { firstName: 'Kristaps', lastName: 'Porzingis', jersey: '8', position: 5 },
    ],
  },
];

for (let i = 0; i < 4; i++) {
  Teams.push({
    name: `Whatever ${i}`,
    color: '#000000',
    conference: null,
    logo: null,
    players: [{ firstName: `Joe ${i}`, lastName: 'Doe', jersey: '0', position: 1 }],
  });
}

export default Teams;
