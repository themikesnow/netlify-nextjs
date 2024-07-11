import Team from './Team';

type PeriodScore = {
  id: number;
  period: number;
  score: number;
  scoresRaw?: Array<{ score: number }>;
  team: Team;
  teamID: number;
};

export default PeriodScore;
