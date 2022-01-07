import TeamData from './TeamData.js';

export type StandingValues = { wins: number; totalGames: number };
type PlayerStanding = StandingValues & { player: TeamData | string };

export default PlayerStanding;
