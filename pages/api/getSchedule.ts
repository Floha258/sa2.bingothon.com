import Cors from 'cors';
import MatchData from '../../types/MatchData';
import TeamData from '../../types/TeamData.js';
import { RunData } from '../../types/RunData';
import { v4 as uuidv4 } from 'uuid';
import Airtable from 'airtable';
import convertAirtableDataToMatchData from '../../types/convertAirtableDataToMatchData';
import convertAirtableDataToPlayerData from '../../types/convertAirtableDataToPlayerData';
import { NextApiRequest, NextApiResponse } from 'next';

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, result => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Run the middleware
    await runMiddleware(req, res, cors);

    const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
    let additionalFilter =
        'OR({Restream Channel} = "Bingothon", {Restream Channel} = "SonicAdventureEraSRComm", {Restream Channel} = "SonicSpeedrunCommunity")';
    if (!!req.query.channel) {
        switch (req.query.channel) {
            case 'bingothon':
                additionalFilter = '{Restream Channel} = "Bingothon"';
                break;
            case 'saesr':
                additionalFilter = '{Restream Channel} = "SonicAdventureEraSRComm"';
                break;
            case 'ssc':
                additionalFilter = '{Restream Channel} = "SonicSpeedrunCommunity"';
        }
    }
    const matches: MatchData[] = [];
    await base(process.env.AIRTABLE_MATCHES_TABLE_NAME)
        .select({
            filterByFormula: `AND(DATETIME_DIFF({Match Time UTC}, NOW(),"hours") <= 24, DATETIME_DIFF(NOW(), {Match Time UTC}, "hours") <= 1, ${additionalFilter})`,
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
    const playerMap = new Map<string, TeamData>();
    await base(process.env.AIRTABLE_COMPETITORS_TABLE_NAME)
        .select()
        .eachPage((records, fetchNextPage) => {
            records.forEach(record => {
                playerMap.set(record.id, convertAirtableDataToPlayerData(record));
            });
            try {
                fetchNextPage();
            } catch {
                return;
            }
        });
    let processedMatches = matches.map(match =>
        convertToSpeedControlFormat(
            match,
            playerMap.get(match.homeTeamId),
            playerMap.get(match.awayTeamId)
        )
    );
    res.json(processedMatches);
}

function convertToSpeedControlFormat(
    match: MatchData,
    homeTeam: TeamData,
    awayTeam: TeamData
): RunData {
    const homeTeamId = uuidv4();
    const awayTeamId = uuidv4();
    return {
        game: 'Sonic Adventure 2',
        gameTwitch: 'Super Mario Sunshine',
        category: 'Lockout Bingo',
        scheduledS: match.matchTime,
        id: uuidv4(),
        teams: [
            {
                name: homeTeam.name,
                id: homeTeamId,
                players: [
                    {
                        name: homeTeam.nameP1,
                        id: uuidv4(),
                        teamID: homeTeamId,
                        country: convertCountryForNodeCG(homeTeam.countryP1),
                        pronouns: homeTeam.pronounsP1,
                        social: {
                            twitch: homeTeam.twitchNameP1,
                        },
                        customData: {
                            /*score: homeTeam.,*/
                        },
                    },
                    {
                        name: homeTeam.nameP2,
                        id: uuidv4(),
                        teamID: homeTeamId,
                        country: convertCountryForNodeCG(homeTeam.countryP2),
                        pronouns: homeTeam.pronounsP2,
                        social: {
                            twitch: homeTeam.twitchNameP2
                        },
                        customData: {
                        
                        }
                    }
                ],
            },
            {
                name: awayTeam.name,
                id: awayTeamId,
                players: [
                    {
                        name: awayTeam.nameP1,
                        id: uuidv4(),
                        teamID: awayTeamId,
                        country: convertCountryForNodeCG(awayTeam.countryP1),
                        pronouns: awayTeam.pronounsP1,
                        social: {
                            twitch: awayTeam.twitchNameP1,
                        },
                        customData: {
                            /*score: homeTeam.,*/
                        },
                    },
                    {
                        name: awayTeam.nameP2,
                        id: uuidv4(),
                        teamID: awayTeamId,
                        country: convertCountryForNodeCG(awayTeam.countryP2),
                        pronouns: awayTeam.pronounsP2,
                        social: {
                            twitch: awayTeam.twitchNameP2
                        },
                        customData: {
            
                        }
                    }
                ],
            },
        ],
        customData: {
            Bingotype: 'lockout'//convertFormatToBingotype(match.format),
        },
    };
}

function convertCountryForNodeCG(country: string): string {
    switch (country.toLowerCase()) {
        case 'fr-qc':
            return 'ca/qc';
        case 'gb-eng':
            return 'gb/eng';
        case 'gb-wls':
            return 'gb/wls'
        default:
            return country.toLowerCase();
    }
}

function convertFormatToBingotype(format: string): string {
    switch (format) {
        case 'Invasion':
            return 'invasion';
        case 'Connect 5':
            return 'connect5';
        case 'Draft':
            return 'draftlockout';
        case 'Row Control':
            return 'rowcontrol';
        default:
        case 'Lockout':
            return 'lockout';
    }
}

export default handler;
