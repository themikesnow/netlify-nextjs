import { rest } from 'msw';

import {
  Awards,
  Categories,
  Games,
  PlayerPositions,
  Playoffs,
  RoundCounts,
  RoundFormats,
  Staffs,
  Standings,
  TeamPlayers,
  Teams,
  TournamentPlayerStats,
  Tournaments,
  TournamentTeams,
  Users,
  UserVerifications,
  Venues,
} from '@app-testing-data';

export const handlers = [
  rest.get('/api/tournament/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Tournaments[0]));
  }),
  rest.get('/api/tournament-game/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Games[0]));
  }),
  rest.get('/api/tournament-team/tournament/:tournamentId/category/:categoryId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(TournamentTeams));
  }),
  rest.get('/api/standing/tournament/:tournamentId/category/:categoryId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Standings));
  }),
  rest.get('/api/category', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Categories));
  }),
  rest.get('/api/tournament', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        content: Tournaments,
      })
    );
  }),
  rest.get('/api/tournament-player-stats/:tournamentId/:categoryId/:season', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        content: TournamentPlayerStats,
      })
    );
  }),
  rest.get('/api/playoff/tournament/:tournamentId/category/:categoryId/round-format', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(RoundFormats));
  }),
  rest.get('/api/tournament-player-stats/:tournamentId/team/:categoryId/round/:round', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        content: TournamentPlayerStats,
      })
    );
  }),
  rest.get('/api/tournament-game/tournament/:tournamentId/category/:categoryId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Games));
  }),
  rest.get('/api/award/tournament/:tournamentId/category/:categoryId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Awards));
  }),
  rest.get('/api/tournament-game/tournament/:tournamentId/team/:teamId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Games));
  }),
  rest.get('/api/playoff/tournament/:tournamentId/category/:categoryId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Playoffs));
  }),
  rest.get('/api/playoff/tournament/:tournamentId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Playoffs));
  }),
  rest.get('/api/team/:teamId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Teams[0]));
  }),
  rest.get('/api/team-player/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(TeamPlayers[0]));
  }),
  rest.get('/api/user/info', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Users[0]));
  }),
  rest.get('/api/venue/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Venues[0]));
  }),
  rest.get('/api/venue', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Venues));
  }),
  rest.get('/api/select-values/player-position/:sport', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PlayerPositions));
  }),
  rest.get('/api/staff/:type', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Staffs));
  }),
  rest.get('api/playoff/rounds-count/:count', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(RoundCounts));
  }),
  rest.post('/api/activate-account', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(UserVerifications[0]));
  }),
];
