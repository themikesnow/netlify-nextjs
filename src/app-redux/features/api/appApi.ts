import { createApi } from '@reduxjs/toolkit/query/react';

import {
  Award,
  BasketballBoxscore,
  Category,
  FileUploadResponse,
  Franchise,
  Game,
  Login,
  LookupValue,
  Matchup,
  PageableResponse,
  Personnel,
  Playoffs,
  RecoverPassword,
  RoundCount,
  RoundFormat,
  Standings,
  Team,
  TeamPlayer,
  Tournament,
  TournamentBasketballPlayerStats,
  TournamentBasketballTeamStats,
  TournamentTeam,
  User,
  UserVerification,
  Venue,
} from '@app-types';
import { TeamUtils, TournamentUtils } from '@app-utils';

import customFetchBase from './customFetchBaseQuery';

const size = 10;
const defaultSort = 'startDate,desc';

interface PageableRequest {
  id?: number;
  isOpen?: boolean;
  isOrganizer?: boolean;
  page: number;
}

interface FileUpload {
  file: File;
  // targetDir: string;
  type: '' | 'documentation' | 'waiver';
}

interface PageableTournamentStatsRequest extends PageableRequest {
  categoryId: number;
  page: number;
  season: number | string;
  sort?: string;
  tournamentId: number;
}

interface PageableFranchisesRequest extends PageableRequest {
  isUser: boolean;
}

interface TokenResponse {
  refreshToken: string;
  token: string;
}

interface TournamentCategoryRequest {
  accepted?: boolean;
  categoryId: number;
  playerStats?: boolean;
  tournamentId: number;
}
interface TournamentCreationRequest {
  playoffs: Playoffs[];
  tournament: Tournament;
  tournamentTeams: TournamentTeam[];
}

interface TournamentTeamRequest {
  teamId: number;
  tournamentId: number;
}

export const appApi = createApi({
  reducerPath: '/app-api',
  tagTypes: [
    'Awards',
    'Tournament',
    'Tournaments',
    'TournamentPlayerStats',
    'TournamentTeamStats',
    'TournamentAwards',
    'Team',
    'TournamentTeamPlayerStats',
    'User',
    'TournamentTeams',
    'Staff',
    'RoundCount',
    'Playoffs',
    'Games',
    'Venue',
    'Venues',
    'Standings',
    'Organizer',
    'TournamentGamesBoxscoresSummary',
    'Franchise',
    'Franchises',
  ],

  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    login: builder.mutation<{ 'jwt-token': string }, Login>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<TokenResponse, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    registration: builder.mutation<User, User>({
      query: (user) => ({
        url: '/registration',
        method: 'POST',
        body: user,
      }),
    }),
    recoverPassword: builder.mutation<void, RecoverPassword>({
      query: (recoverPassword) => ({
        url: '/auth/recover-password',
        method: 'POST',
        body: recoverPassword,
      }),
    }),
    getUser: builder.query<User, void>({
      query: () => {
        return {
          url: `/user/info`,
        };
      },
      providesTags: ['User'],
    }),
    getOrganizerDetails: builder.query<User, number>({
      query: (id) => {
        return {
          url: `/user/organizer/${id}`,
        };
      },
      providesTags: ['Organizer'],
    }),
    updateUser: builder.mutation<User, User>({
      query: (user) => {
        return {
          url: `/user`,
          method: 'PUT',
          body: user,
        };
      },
      invalidatesTags: ['User'],
    }),
    getTournaments: builder.query<PageableResponse<Tournament>, PageableRequest>({
      query: ({ page, isOrganizer, isOpen }) => {
        return {
          url: `/tournament`,
          params: { isOrganizer, isOpen, page, size, sort: defaultSort, fetchFlag: 'FULL' },
        };
      },
      providesTags: ['Tournaments'],
    }),
    getTournamentRegistrationCounts: builder.query<
      { [key: number]: number },
      { accepted: boolean; id: number }
    >({
      query: ({ id, accepted }) => {
        return {
          url: `/tournament/${id}/registration-count/${accepted}`,
        };
      },
      // providesTags: ['Tournaments'],
    }),
    getOrganizerTournaments: builder.query<PageableResponse<Tournament>, PageableRequest>({
      query: ({ page, id }) => {
        return {
          url: `/tournament/organizer/${id}`,
          params: { page, size, sort: defaultSort },
        };
      },
      providesTags: ['Tournaments'],
    }),
    getTournament: builder.query<Tournament, { fields?: string; id: number }>({
      query: ({ fields = 'venues', id }) => {
        return {
          url: `/tournament/${id}`,
          params: { fields },
        };
      },
      transformResponse: (response: Tournament) => {
        return TournamentUtils.sort(response);
      },
      providesTags: ['Tournament'],
    }),
    updateTournament: builder.mutation<Tournament, Tournament>({
      query: (tournament) => {
        return {
          url: `/tournament`,
          method: 'PUT',
          body: tournament,
        };
      },
      transformResponse: (response: Tournament) => {
        return TournamentUtils.sort(response);
      },
      invalidatesTags: ['Tournaments', 'Tournament', 'TournamentTeams'],
    }),
    createTournament: builder.mutation<Tournament, TournamentCreationRequest>({
      query: (data) => {
        return {
          url: `/tournament/create`,
          method: 'POST',
          body: data,
        };
      },
      transformResponse: (response: Tournament) => {
        return TournamentUtils.sort(response);
      },
      invalidatesTags: ['Tournament', 'Tournaments', 'TournamentTeams'],
    }),
    deleteTournament: builder.mutation<Tournament, Tournament>({
      query: (tournament) => {
        return {
          url: `/tournament`,
          method: 'DELETE',
          body: tournament,
        };
      },
      invalidatesTags: ['Tournament', 'Tournaments'],
    }),
    getTournamentTeams: builder.query<TournamentTeam[], TournamentCategoryRequest>({
      query: ({ tournamentId, categoryId, accepted, playerStats }) => {
        return {
          url: `/tournament-team/tournament/${tournamentId}/category/${categoryId}`,
          params: { accepted: accepted, playerStats: playerStats },
        };
      },
      transformResponse: (response: TournamentTeam[]) => {
        return TeamUtils.cleanTournamentTeams(response);
      },
      providesTags: ['TournamentTeams'],
    }),
    getOwnerTournamentTeams: builder.query<TournamentTeam[], number>({
      query: (tournamentId) => {
        return {
          url: `/tournament-team/tournament/${tournamentId}/owner`,
        };
      },
      transformResponse: (response: TournamentTeam[]) => {
        return TeamUtils.cleanTournamentTeams(response);
      },
      providesTags: ['TournamentTeams'],
    }),
    createTournamentTeam: builder.mutation<TournamentTeam, TournamentTeam>({
      query: (tournamentTeam) => {
        return {
          url: `/tournament-team`,
          method: 'POST',
          body: tournamentTeam,
        };
      },
      invalidatesTags: ['TournamentTeams'],
    }),
    copyTournamentTeam: builder.mutation<TournamentTeam, { id: number; reCaptchaResponse: string }>({
      query: ({ id, reCaptchaResponse }) => {
        return {
          url: `/tournament-team/${id}/copy`,
          method: 'POST',
          body: reCaptchaResponse,
        };
      },
      invalidatesTags: ['TournamentTeams'],
    }),
    getTournamentGames: builder.query<Game[], TournamentCategoryRequest>({
      query: ({ tournamentId, categoryId }) => {
        return {
          url: `/tournament-game/tournament/${tournamentId}${!!categoryId ? `/category/${categoryId}` : ''}`,
          params: {},
        };
      },
      transformResponse: (response: Game[]) => {
        return response.sort(
          (a, b) => new Date(a.gameDate).getMilliseconds() - new Date(b.gameDate).getMilliseconds()
        );
      },
      providesTags: ['Games'],
    }),
    createTournamentGame: builder.mutation<Game, Game>({
      query: (game) => {
        return {
          url: `/tournament-game`,
          method: 'POST',
          body: game,
        };
      },
      invalidatesTags: ['Games'],
    }),
    updateTournamentGame: builder.mutation<Game, Game>({
      query: (game) => {
        return {
          url: `/tournament-game`,
          method: 'PUT',
          body: game,
        };
      },
      invalidatesTags: ['Games'],
    }),
    deleteTournamentGame: builder.mutation<Game, Game>({
      query: (game) => {
        return {
          url: `/tournament-game`,
          method: 'DELETE',
          body: game,
        };
      },
      invalidatesTags: ['Games'],
    }),
    // getTournamentGames: builder.query<Game[], TournamentCategoryRequest>({
    //   query: ({ tournamentId, categoryId }) => {
    //     return {
    //       url: `/tournament-game/tournament/${tournamentId}/category/${categoryId}`,
    //       params: {},
    //     };
    //   },
    //   transformResponse: (response: TournamentGame[]) => {
    //     return response.sort((a, b) => new Date(a.gameDate) - new Date(b.gameDate));
    //   },
    // }),
    getTournamentTeamGames: builder.query<Game[], TournamentTeamRequest>({
      query: ({ tournamentId, teamId }) => {
        return {
          url: `/tournament-game/tournament/${tournamentId}/team/${teamId}`,
          params: {},
        };
      },
    }),
    getTournamentPlayoffs: builder.query<Playoffs[], number>({
      query: (tournamentId) => {
        return {
          url: `/playoff/tournament/${tournamentId}`,
          params: {},
        };
      },
      providesTags: ['Playoffs'],
    }),
    getPlayoffs: builder.query<Playoffs, TournamentCategoryRequest>({
      query: ({ tournamentId, categoryId }) => {
        return {
          url: `/playoff/tournament/${tournamentId}/category/${categoryId}`,
          params: {},
        };
      },
      transformResponse: (response: Playoffs) => {
        return TeamUtils.cleanPlayoffsTeams(response);
      },
      providesTags: ['Playoffs'],
    }),
    getRoundFormats: builder.query<RoundFormat[], TournamentCategoryRequest>({
      query: ({ tournamentId, categoryId }) => {
        return {
          url: `/playoff/tournament/${tournamentId}/category/${categoryId}/round-format`,
          params: {},
        };
      },
    }),
    getStandings: builder.query<Standings[], TournamentCategoryRequest>({
      query: ({ tournamentId, categoryId }) => {
        return {
          url: `/standing/tournament/${tournamentId}/category/${categoryId}`,
          params: {},
        };
      },
      providesTags: ['Standings'],
      transformResponse: (response: Standings[]) => {
        return response.sort((a, b) => a.tieBreakerOrder - b.tieBreakerOrder);
      },
    }),
    updateStandings: builder.mutation<Standings[], Standings[]>({
      query: (standings) => {
        return {
          url: `/standing/bulk`,
          method: 'PUT',
          body: standings,
        };
      },
      invalidatesTags: ['Standings'],
    }),
    resetStandings: builder.mutation<
      Standings[],
      { categoryId: number; divisionId: number; tournamentId: number }
    >({
      query: ({ categoryId, divisionId, tournamentId }) => {
        return {
          url: `/standing/tournament/${tournamentId}/category/${categoryId}/division/${divisionId}/refresh`,
          method: 'PUT',
          // body: ,
        };
      },
      invalidatesTags: ['Standings'],
    }),
    getTournamentPlayerStats: builder.query<
      PageableResponse<TournamentBasketballPlayerStats>,
      PageableTournamentStatsRequest
    >({
      query: ({ tournamentId, categoryId, season, page, sort: sortParam }) => {
        const theSort = sortParam || 'teamPlayer.team.name,asc&sort=teamPlayer.jerseyNumber';
        const params = `?page=${page}&size=${size}&sort=${theSort}`;
        return {
          url: `/tournament-player-stats/${tournamentId}/${categoryId}/${season}${params}`,
        };
      },
      providesTags: ['TournamentPlayerStats'],
    }),
    getTournamentTeamPlayerStats: builder.query<
      TournamentBasketballPlayerStats[],
      { round: number; teamId: number; tournamentId: number }
    >({
      query: ({ tournamentId, teamId, round }) => {
        return {
          url: `/tournament-player-stats/${tournamentId}/team/${teamId}/round/${round}`,
        };
      },
      transformResponse: (response: TournamentBasketballPlayerStats[]) => {
        response.sort((a, b) => a.teamPlayer.jerseyNumberInt - b.teamPlayer.jerseyNumberInt);
        return response;
      },
      providesTags: ['TournamentTeamPlayerStats'],
    }),
    getTournamentTeamStats: builder.query<
      PageableResponse<TournamentBasketballTeamStats>,
      PageableTournamentStatsRequest
    >({
      query: ({ tournamentId, categoryId, season, page, sort: sortParam }) => {
        const theSort = sortParam || 'team.name,asc';
        const params = `?page=${page}&size=${size}&sort=${theSort}`;
        return {
          url: `/tournament-team-stats/${tournamentId}/${categoryId}/${season}${params}`,
        };
      },
      providesTags: ['TournamentTeamStats'],
    }),
    getTournamentAwards: builder.query<Award[], TournamentCategoryRequest>({
      query: ({ tournamentId, categoryId }) => {
        return {
          url: `/award/tournament/${tournamentId}/category/${categoryId}`,
          params: {},
        };
      },
      providesTags: ['Awards'],
    }),
    updateAward: builder.mutation<Award, Award>({
      query: (award) => {
        return {
          url: `/award`,
          method: award.id > 0 ? 'PUT' : 'POST',
          body: award,
        };
      },
      invalidatesTags: ['Awards'],
    }),
    deleteAward: builder.mutation<Award, Award>({
      query: (award) => {
        return {
          url: `/award`,
          method: 'DELETE',
          body: award,
        };
      },
      invalidatesTags: ['Awards'],
    }),
    getTeam: builder.query<Team, number>({
      query: (id) => {
        return {
          url: `/team/${id}`,
          params: { fetchFlag: 'FULL' },
        };
      },
      transformResponse: (response: Team) => {
        response.teamPlayers.sort((a, b) => a.jerseyNumberInt - b.jerseyNumberInt);
        return response;
      },
      providesTags: ['Team'],
    }),
    copyTeam: builder.mutation<Team, { id: number; reCaptchaResponse: string }>({
      query: ({ id, reCaptchaResponse }) => {
        return {
          url: `/team/${id}/copy`,
          method: 'POST',
          body: reCaptchaResponse,
        };
      },
      invalidatesTags: ['Franchise'],
    }),
    getTeamPlayer: builder.query<TeamPlayer, number>({
      query: (id) => {
        return {
          url: `/team-player/${id}`,
          params: { fetchFlag: 'FULL' },
        };
      },
    }),
    getGame: builder.query<Game, number>({
      query: (id) => {
        return {
          url: `/tournament-game/${id}`,
          params: { fields: 'boxscores,teams,period_scores' },
        };
      },
      providesTags: ['Games'],
    }),
    uploadFile: builder.mutation<FileUploadResponse, FileUpload>({
      query: (data) => {
        const fd = new FormData();

        fd.append('file', data.file);
        fd.append('name', data.file.name);
        // @ts-ignore
        if (data.target) {
          // @ts-ignore
          fd.append('target', data.target);
        }

        // fd.append('targetDir', data.targetDir);

        return {
          url: `/upload${data.type ? `/${data.type}` : ''}`,
          method: 'POST',
          body: fd,
        };
      },
    }),
    getCategories: builder.query<Category[], void>({
      query: () => {
        return {
          url: '/category',
        };
      },
      transformResponse: (response: Category[]) => {
        return response.sort((a, b) => a.gender.localeCompare(b.gender) || a.age - b.age);
      },
    }),
    getVenues: builder.query<Venue[], void>({
      query: () => {
        return {
          url: '/venue',
        };
      },
      transformResponse: (response: Venue[]) => {
        return response.sort((a, b) => a.name.localeCompare(b.name));
      },
      providesTags: ['Venues'],
    }),
    getPersonnel: builder.query<Personnel[], string | undefined>({
      query: (personnelType) => {
        return {
          url: personnelType ? `/staff/owner/${personnelType}` : '/staff/owner',
        };
      },
      providesTags: ['Staff'],
    }),

    updatePersonnel: builder.mutation<Personnel, Personnel>({
      query: (staff) => {
        return {
          url: `/staff`,
          method: staff.id > 0 ? 'PUT' : 'POST',
          body: staff,
        };
      },
      invalidatesTags: ['Staff'],
    }),
    updateTournamentTeam: builder.mutation<TournamentTeam, TournamentTeam>({
      query: (touranmentTeam) => {
        return {
          url: `/tournament-team`,
          method: touranmentTeam?.id > 0 ? 'PUT' : 'POST',
          body: touranmentTeam,
        };
      },
      invalidatesTags: ['TournamentTeams', 'Franchise'],
    }),
    deleteTournamentTeam: builder.mutation<TournamentTeam, TournamentTeam>({
      query: (touranmentTeam) => {
        return {
          url: `/tournament-team`,
          method: 'DELETE',
          body: touranmentTeam,
        };
      },
      invalidatesTags: ['TournamentTeams', 'Franchise'],
    }),
    updateTeam: builder.mutation<Team, Team>({
      query: (team) => {
        return {
          url: `/team`,
          // method: 'PUT',
          method: team?.id > 0 ? 'PUT' : 'POST',
          body: team,
        };
      },
      invalidatesTags: ['TournamentTeams', 'Franchise'],
    }),
    createTeam: builder.mutation<Team, Team>({
      query: (team) => {
        return {
          url: `/team`,
          method: 'POST',
          body: team,
        };
      },
      invalidatesTags: ['TournamentTeams'],
    }),
    deleteTeam: builder.mutation<Team, Team>({
      query: (team) => {
        return {
          url: `/team`,
          method: 'DELETE',
          body: team,
        };
      },
      invalidatesTags: ['TournamentTeams', 'Franchise'],
    }),
    updatePlayoffs: builder.mutation<Playoffs, Playoffs>({
      query: (playoffs) => {
        return {
          url: `/playoff`,
          method: 'PUT',
          body: playoffs,
        };
      },
      invalidatesTags: ['Playoffs'],
    }),
    createPlayoffs: builder.mutation<Playoffs, Playoffs>({
      query: (playoffs) => {
        return {
          url: `/playoff`,
          method: 'POST',
          body: playoffs,
        };
      },
      invalidatesTags: ['Playoffs'],
    }),
    activateAccount: builder.mutation<UserVerification, { activationKey: string; username: string }>({
      query: ({ activationKey, username }) => ({
        url: '/activate-account',
        method: 'POST',
        body: { activationKey, username },
      }),
    }),

    // playerPositions: builder.mutation<string[], string>({
    //   query: (team) => {
    //     return {
    //       url: `/select-values/player-position`,
    //       method: 'PUT',
    //       body: team,
    //     };
    //   },
    //   invalidatesTags: ['TournamentTeams'],
    // }),
    getPlayerPositions: builder.query<string[], string>({
      query: (sport) => {
        return {
          url: `/select-values/player-position/${sport}`,
        };
      },
    }),
    getRoundCount: builder.query<RoundCount, number>({
      query: (playoffsTeams) => {
        return {
          url: `/playoff/rounds-count/${playoffsTeams}`,
        };
      },
      providesTags: ['RoundCount'],
    }),
    updateMatchup: builder.mutation<Matchup, Matchup>({
      query: (matchup) => {
        return {
          url: `/matchup`,
          method: 'PUT',
          body: matchup,
        };
      },
      invalidatesTags: ['Playoffs'],
    }),
    getVenue: builder.query<Venue, number>({
      query: (id) => {
        return {
          url: `/venue/${id}`,
        };
      },
    }),
    updateVenue: builder.mutation<Venue, Venue>({
      query: (venue) => {
        return {
          url: `/venue`,
          method: 'PUT',
          body: venue,
        };
      },
      invalidatesTags: ['Venues'],
    }),
    createVenue: builder.mutation<Venue, Venue>({
      query: (venue) => {
        return {
          url: `/venue`,
          method: 'POST',
          body: venue,
        };
      },
      invalidatesTags: ['Venues'],
    }),
    deleteVenue: builder.mutation<Venue, Venue>({
      query: (venue) => {
        return {
          url: `/venue`,
          method: 'DELETE',
          body: venue,
        };
      },
      invalidatesTags: ['Venues', 'Tournament'],
    }),
    getFranchise: builder.query<Franchise, number>({
      query: (id) => {
        return {
          url: `/franchise/${id}`,
        };
      },
      providesTags: ['Franchise'],
      transformResponse: (response: Franchise) => {
        response.teams.sort((a, b) => a.name.localeCompare(b.name));
        return response;
      },
    }),
    getFranchiseByName: builder.query<Franchise[], string>({
      query: (name) => {
        return {
          url: `/franchise/user/${name}`,
        };
      },
      providesTags: ['Franchise'],
    }),
    updateFranchise: builder.mutation<Franchise, Franchise>({
      query: (franchise) => {
        return {
          url: '/franchise',
          method: franchise.id > 0 ? 'PUT' : 'POST',
          body: franchise,
        };
      },
      invalidatesTags: ['Franchise', 'Franchises'],
    }),
    deleteFranchise: builder.mutation<Franchise, Franchise>({
      query: (franchise) => {
        return {
          url: '/franchise',
          method: 'DELETE',
          body: franchise,
        };
      },
      invalidatesTags: ['Franchise', 'Franchises'],
    }),
    getFranchises: builder.query<PageableResponse<Franchise>, PageableFranchisesRequest>({
      query: ({ page, isUser }) => {
        return {
          url: `/franchise${isUser ? '/user' : ''}`,
          params: { page, size, sort: 'id,desc' },
        };
      },
      providesTags: ['Franchises'],
    }),
    // getTournaments: builder.query<PageableResponse<Tournament>, PageableRequest>({
    //   query: ({ page, isOrganizer }) => {
    //     return {
    //       url: `/tournament`,
    //       params: { isOrganizer, page, size, sort: defaultSort, fetchFlag: 'FULL' },
    //     };
    //   },
    //   providesTags: ['Tournaments'],
    // }),
    getAwardCategories: builder.query<LookupValue[], void>({
      query: () => {
        return {
          url: '/lookup-value/LKP_AWARD',
        };
      },
    }),
    getTournamentGamesBoxscoresSummary: builder.query<
      PageableResponse<BasketballBoxscore>,
      PageableTournamentStatsRequest
    >({
      query: ({ tournamentId, categoryId, page, sort }) => {
        const theParams = `?page=${page}&sort=${sort.replace('asc', 'desc')}&size=50`;
        return {
          url: `/tournament-game-boxscore-summary/${tournamentId}/category/${categoryId}${theParams}`,
        };
      },
      transformResponse: (response: PageableResponse<BasketballBoxscore>, meta, arg) => {
        const theSort = arg.sort.split(',');

        response.content.sort((a, b) => {
          if (theSort[1] === 'asc') {
            // @ts-ignore
            return a[theSort[0]] - b[theSort[0]];
          }
          // @ts-ignore
          return b[theSort[0]] - a[theSort[0]];
        });

        return response;
      },
      providesTags: ['TournamentGamesBoxscoresSummary'],
    }),
  }),
});

// query: ({ tournamentId, categoryId, season, page, sort: sortParam }) => {
//         const theSort = sortParam || 'teamPlayer.team.name,asc&sort=teamPlayer.jerseyNumber';
//         const params = `?page=${page}&size=${size}&sort=${theSort}`;
//         return {
//           url: `/tournament-player-stats/${tournamentId}/${categoryId}/${season}${params}`,
//         };
//       },

// PageableResponse<TournamentBasketballPlayerStats>, PageableTournamentStatsRequest;

export const {
  useCreatePlayoffsMutation,
  useCreateTeamMutation,
  useCreateTournamentGameMutation,
  useCreateTournamentMutation,
  useCreateTournamentTeamMutation,
  useDeleteTeamMutation,
  useDeleteTournamentGameMutation,
  useDeleteTournamentTeamMutation,
  useGetCategoriesQuery,
  useGetGameQuery,
  useGetPersonnelQuery,
  useGetPlayerPositionsQuery,
  useGetPlayoffsQuery,
  useGetRoundCountQuery,
  useGetRoundFormatsQuery,
  useGetStandingsQuery,
  useUpdateStandingsMutation,
  useGetTeamPlayerQuery,
  useGetTeamQuery,
  useGetTournamentAwardsQuery,
  useGetTournamentGamesQuery,
  useGetTournamentPlayerStatsQuery,
  useGetTournamentPlayoffsQuery,
  useGetTournamentQuery,
  useGetTournamentTeamGamesQuery,
  useGetTournamentTeamPlayerStatsQuery,
  useGetTournamentTeamStatsQuery,
  useGetTournamentTeamsQuery,
  useGetTournamentsQuery,
  useGetUserQuery,
  useGetVenuesQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useRegistrationMutation,
  useUpdatePersonnelMutation,
  useUpdatePlayoffsMutation,
  useUpdateTeamMutation,
  useUpdateTournamentGameMutation,
  useUpdateTournamentMutation,
  useUpdateTournamentTeamMutation,
  useUpdateUserMutation,
  useActivateAccountMutation,
  useUploadFileMutation,
  useUpdateMatchupMutation,
  useGetVenueQuery,
  useCreateVenueMutation,
  useUpdateVenueMutation,
  useDeleteVenueMutation,
  useCopyTournamentTeamMutation,
  useDeleteTournamentMutation,
  useResetStandingsMutation,
  useGetFranchisesQuery,
  useGetOrganizerTournamentsQuery,
  useGetOrganizerDetailsQuery,
  useGetAwardCategoriesQuery,
  useUpdateAwardMutation,
  useDeleteAwardMutation,
  useGetTournamentGamesBoxscoresSummaryQuery,
  useGetFranchiseQuery,
  useUpdateFranchiseMutation,
  useDeleteFranchiseMutation,
  useCopyTeamMutation,
  useLazyGetFranchiseByNameQuery,
  useGetOwnerTournamentTeamsQuery,
  useGetTournamentRegistrationCountsQuery,
} = appApi;
