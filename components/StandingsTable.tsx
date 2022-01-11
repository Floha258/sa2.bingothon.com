import BingosyncColors from '../types/BingosyncColors';
import TeamData from '../types/TeamData.js';
import PlayerStanding from '../types/TeamStanding.js';
import TeamHeader from './TeamHeader'
import TeamStanding from '../types/TeamStanding.js';

export interface StandingsTableProps {
    standings: TeamStanding[];
}

export default function StandingsTable(props: StandingsTableProps) {
    return (
        <div className="w-full mx-auto">
            <div className="w-full text-3xl md:text-5xl font-bold text-center mb-5">
                {'Standings'}
            </div>
            <table className="w-fulln mx-auto">
                <tbody>
                    {props.standings.length > 0 &&
                        props.standings.map(standingRow => {
                            let team: TeamData;
                            if (typeof standingRow.team === 'string') {
                                team = {
                                    name: standingRow.team,
                                    nameP1: '',
                                    nameP2: '',
                                    countryP1: '',
                                    countryP2: '',
                                    homeWinners: [],
                                    awayWinners: [],
                                };
                            } else {
                                team = standingRow.team;
                            }
                            return (
                                <tr
                                    key={team.name}
                                    className={"bg-sa2-purple bg-opacity-30"}
                                >
                                    <td>
                                        <TeamHeader
                                            teamName={team.name}
                                            player1={team.nameP1}
                                            player2={team.nameP2}
                                            teamId={team.id}
                                            countryCodeP1={team.countryP1}
                                            countryCodeP2={team.countryP2}
                                            gamesWon={standingRow.wins}
                                            gamesLost={standingRow.totalGames - standingRow.wins}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
