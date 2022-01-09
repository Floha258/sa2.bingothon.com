import { GetStaticProps } from 'next';
import StandingsTable, { StandingsTableProps } from '../../components/StandingsTable';
import Header from '../../components/Header';
import MatchData from '../../types/MatchData';
import TeamData from '../../types/TeamData.js';
import TeamStanding, { StandingValues } from '../../types/TeamStanding.js';
import { useRouter } from 'next/router';
import Airtable from 'airtable';
import convertAirtableDataToPlayerData from '../../types/convertAirtableDataToPlayerData';
import convertAirtableDataToMatchData from '../../types/convertAirtableDataToMatchData.js';

export interface StandingsProps {
    teams: TeamData[];
    matches: MatchData[];
}

export default function Standings(props: StandingsProps) {
    const router = useRouter();
    return (
        <div className=' bg-tile-background bg-cover min-h-screen'>
            {!router.query.hideHeader && (
                <Header title='Sonic Adventure Bingo League - Standings' />
            )}
            <main className='text-white flex flex-row flex-wrap w-3/4 mx-auto'>
                <StandingsTable standings={computeStandings(makeMatchMap(props.matches, props.teams))}/>
            </main>
        </div>
    );
}

type matchMap = { matches: MatchData[]; teams: Map<string, TeamData> }

function makeMatchMap(matches: MatchData[], teams: TeamData[]): matchMap {
    let teamsMap = new Map<string, TeamData>();
    teams?.forEach(team => {
        teamsMap.set(team.name, team)
    });
    return {matches: matches, teams: teamsMap}
}

function computeStandings(matchMapEntry: matchMap): TeamStanding[] {
    let resultMap = new Map<string, StandingValues>();
    seedResultMap(resultMap, matchMapEntry.teams);
    matchMapEntry.matches.forEach(match => {
        updateMapWithMatchPlayer(resultMap, match.homeTeam, match.homeTeam == match.winner);
        updateMapWithMatchPlayer(resultMap, match.awayTeam, match.awayTeam == match.winner);
    });
    const standingArray: TeamStanding[] = [];
    Array.from(resultMap.keys()).forEach(key => {
        if (matchMapEntry.teams.has(key)) {}
        standingArray.push({
            team: matchMapEntry.teams.has(key) ? matchMapEntry.teams.get(key) : key,
            ...resultMap.get(key),
        });
    });
    standingArray.sort((a, b) => {
        const aName = typeof a.team === 'string' ? a.team : a.team.name;
        const bName = typeof b.team === 'string' ? b.team : b.team.name;
        return b.wins - a.wins != 0
            ? b.wins - a.wins
            : a.totalGames - a.wins - (b.totalGames - b.wins) != 0
                ? a.totalGames - a.wins - (b.totalGames - b.wins)
                : b.totalGames - a.totalGames != 0
                    ? b.totalGames - a.totalGames
                    : aName > bName
                        ? 1
                        : -1;
    });
    return standingArray;
}

function seedResultMap(map: Map<string, StandingValues>, players: Map<string, TeamData>) {
    Array.from(players.keys()).forEach(key => {
        map.set(key, { wins: 0, totalGames: 0 });
    });
}

function updateMapWithMatchPlayer(
    resultMap: Map<string, StandingValues>,
    player: string,
    isWinner: boolean,
) {
    if (resultMap.has(player)) {
        resultMap.get(player).wins += isWinner ? 1 : 0;
        resultMap.get(player).totalGames += 1;
    } else {
        resultMap.set(player, { wins: isWinner ? 1 : 0, totalGames: 1 });
    }
}

//type DivisionMap = { matches: MatchData[]; players: Map<string, TeamData> };

/*function splitIntoDivisions(matches: MatchData[], players: Map<string, TeamData>) {
    let resultMap = new Map<string, DivisionMap>();
    matches.forEach(match => {
        if (resultMap.has(match.division)) {
            resultMap.get(match.division).matches.push(match);
        } else {
            resultMap.set(match.division, {
                matches: [match],
                players: new Map<string, TeamData>(),
            });
        }
    });
    Array.from(players.values()).forEach(player => {
        if (resultMap.has(player.division)) {
            resultMap.get(player.division).players.set(player.name, player);
        } else {
            const newMap = new Map<string, TeamData>();
            newMap.set(player.name, player);
            resultMap.set(player.division, { matches: [], players: newMap });
        }
    });
    return resultMap;
}*/

export const getStaticProps: GetStaticProps = async context => {
    const sortedPlayers: TeamData[] = [];
    const matches: MatchData[] = [];
    const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
    await base(process.env.AIRTABLE_COMPETITORS_TABLE_NAME)
        .select({
            //sort: [{ field: 'Elo', direction: 'desc' }],
        })
        .eachPage((records, fetchNextPage) => {
            records.forEach(record => {
                sortedPlayers.push(convertAirtableDataToPlayerData(record));
            });
            try {
                fetchNextPage();
            } catch {
                return;
            }
        });
    await base(process.env.AIRTABLE_MATCHES_TABLE_NAME)
        .select({
            sort: [{ field: 'Match Time UTC' }],
        })
        .eachPage((records, fetchNextPage) => {
            try {
                records.forEach(record => {
                    matches.push(convertAirtableDataToMatchData(record));
                });
                fetchNextPage();
            } catch (e) {
                return;
            }
        });
    return {
        props: {
            teams: sortedPlayers,
            matches: matches,
        },
        revalidate: 600,
    };
};
