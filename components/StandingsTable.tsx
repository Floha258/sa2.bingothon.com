import BingosyncColors from '../types/BingosyncColors';
import TeamData from '../types/TeamData.js';
import PlayerStanding from '../types/PlayerStanding';
import TeamHeader from './TeamHeader'

export interface StandingsTableProps {
    standings: TeamData[];
}

export default function StandingsTable(props: StandingsTableProps) {
    return (
        <div className="w-full mx-auto">
            <div className="w-full text-3xl md:text-5xl font-bold text-center mb-5">
                {'Standings'}
            </div>
            <table className="w-full">
                <tbody>
                    {props.standings.length > 0 &&
                        props.standings.map(team => {
                            return (
                                <tr key={team.name}>
                                    <td>
                                        <TeamHeader
                                            teamName={team.name}
                                            player1={team.nameP1}
                                            player2={team.nameP2}
                                            teamId={team.id}
                                            countryCode={team.countryP1}
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
