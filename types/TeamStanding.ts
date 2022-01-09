import TeamData from './TeamData.js';

export type StandingValues = { wins: number; totalGames: number };
type TeamStanding = StandingValues & { team: TeamData | string };

export default TeamStanding;
