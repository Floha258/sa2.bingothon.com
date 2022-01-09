import { Record, FieldSet } from 'airtable';
import TeamData from './TeamData.js';

export default function convertAirtableDataToPlayerData(record: Record<FieldSet>): TeamData {
    return {
        name: record.get('Team Name') as string,
        nameP1: record.get('Player 1') as string,
        nameP2: record.get('Player 2') as string,
        countryP1: (record.get('Country P1') as string)?.toLowerCase(),
        countryP2: (record.get('Country P2') as string)?.toLowerCase(),
        //division: record.get('Division') as string,
        twitchNameP1: record.get('Twitch P1') as string,
        twitchNameP2: record.get('Twitch P2') as string,
        pronounsP1: (record.get('Pronouns P1') as string) ?? '',
        pronounsP2: (record.get('Pronouns P2') as string) ?? '',
        homeWinners: (record.get('Winner (from Home Matches)') as string[]) ?? [],
        awayWinners: (record.get('Winner (from Away Matches)') as string[]) ?? [],
        id: record.id,
    };
}
