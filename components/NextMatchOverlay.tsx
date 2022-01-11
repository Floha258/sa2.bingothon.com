import MatchData from '../types/MatchData';
import getMatchTimeString from './helpers/getMatchTimeString';
import TwitchChannelImage from './TwitchChannelImage';
import { isFuture } from 'date-fns';
import TimeSlug from './TimeSlug';

export interface NextMatchOverlayProps {
    match: MatchData;
}

export default function NextMatchOverlay(props: NextMatchOverlayProps) {
    const { match } = props;
    const timeText = getMatchTimeString(match.matchTime);
    const futureBool = isFuture(match.matchTime * 1000);
    return (
        <div className="w-full xl:w-1/2 h-full mx-auto text-white flex flex-col">
            <div className="text-md sm:text-2xl font-bold mb-4">
                {futureBool ? 'Upcoming Match' : 'Current Match'}
            </div>
            <div className="text-sm flex flex-row justify-center sm:text-xl items-end mb-4">
                <div className="ml-4 mr-2 sm:ml-10 sm:mr-5">
                    <TimeSlug matchTime={match.matchTime} />
                </div>{' '}
                <div className="mx-2 sm:mx-5">{match.homeTeam}</div>
                <div className="mx-2 sm:mx-5">Vs.</div>
                <div className="mx-2 sm:mx-5">{match.awayTeam}</div> @{' '}
                <div className="ml-2 mr-4 sm:ml-5 sm:mr-10">
                    <TwitchChannelImage channel={match.channel} />
                </div>
            </div>
        </div>
    );
}
