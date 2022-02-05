export default interface MatchData {
    homeTeam: string;
    homeTeamId?: string;
    awayTeam: string;
    awayTeamId?: string;
    week: string;
    //division?: string;
    status: 'unscheduled' | 'scheduled' | 'played';
    matchTime: number;
    //format: 'Lockout' | 'Invasion' | 'Connect 5' | 'Draft' | 'Row Control' | 'TBD';
    channel?: 'Bingothon' | 'SAESR_Events' | 'SonicSpeedrunCommunity' | 'Offline' | 'TBD';
    winner?: string;
    homeScore?: number;
    awayScore?: number;
    matchVod?: string;
    commentators?: string[] | 'None';
    bingosyncBoardId?: string;
    //homePlayerEloGain?: number;
    //awayPlayerEloGain?: number;
    matchId?: string;
}
