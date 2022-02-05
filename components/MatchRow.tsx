import Link from 'next/link';
import React from 'react';
import { isFuture } from 'date-fns';
import TwitchChannelImage from './TwitchChannelImage';
import ExpandIcon from './ExpandIcon';
import MatchData from '../types/MatchData';
import TimeSlug from './TimeSlug';

export interface MatchRowProps {
    match: MatchData;
    forceSpoilers?: boolean;
    forBroadcast?: boolean;
    comms: string;
}

export default function MatchRow(props: MatchRowProps) {
    const { match, forBroadcast } = props;
    const [isExpanded, setIsExpanded] = React.useState(false);
    const toggleExpand = React.useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded]);
    const shouldShowSpoilers = isExpanded || (match.status == 'played' && props.forceSpoilers);
    let timeContent;
    let additionalClasses = '';
    if (!!match.matchTime) {
        timeContent = (
            <TimeSlug matchTime={match.matchTime} forceEst={forBroadcast} short={forBroadcast} />
        );
        if (!isFuture(match.matchTime * 1000) && match.status === 'scheduled') {
            additionalClasses += ' text-gray-400';
        }
    } else {
        timeContent = 'TBD';
    }
    if (match.status == 'played') {
        additionalClasses += ' bg-blue-gradient';
    } else if (match.status == 'unscheduled') {
        additionalClasses += ' bg-red-gradient';
    } else if (match.status == 'scheduled') {
        additionalClasses += ' bg-purple-gradient';
    }
    
    if (forBroadcast) {
        additionalClasses += ' xl:h-24';
    }
    
    const homeClassName =
        'text-right' +
        (shouldShowSpoilers && match.homeTeam == match.winner ? ' font-bold bg-opacity-70 bg-sa2-red' : '');
    
    const awayClassName =
        'text-left' +
        (shouldShowSpoilers && match.awayTeam == match.winner ? ' font-bold bg-opacity-70 bg-sa2-red' : '');
    
    return (
        <>
            <tr
                onClick={match.status == 'played' ? toggleExpand : undefined}
                className={'h-8 sm:h-12 lg:h-16 bg-opacity-30 text-center' + additionalClasses}>
                {!forBroadcast && (
                    <td className='hidden sm:table-cell'>
                        {match.status == 'played' && <ExpandIcon isExpanded={shouldShowSpoilers} />}
                    </td>
                )}
                <td>{timeContent}</td>
                <td className={homeClassName}>
                    <Link href={'/team/' + match.homeTeamId ?? match.homeTeam}>
                        <span className='cursor-pointer'>{match.homeTeam}</span>
                    </Link>
                </td>
                <td>Vs.</td>
                <td className={awayClassName}>
                    <Link href={'/team/' + match.awayTeamId ?? match.awayTeam}>
                        <span className='cursor-pointer'>{match.awayTeam}</span>
                    </Link>
                </td>
                {/* <td className="hidden sm:table-cell">{match.division}</td> */}
                <td>
                    {match.channel ? (
                        match.channel == 'Offline' || match.channel == 'TBD' ? (
                            match.channel
                        ) : (
                            <div className='flex flex-row justify-center'>
                                <TwitchChannelImage
                                    channel={match.channel}
                                    forBroadcast={forBroadcast}
                                />
                            </div>
                        )
                    ) : (
                        'TBD'
                    )}
                </td>
            </tr>
            {!forBroadcast && props.comms && !(match.status === "played") && (
                <tr className={'h-6 sm:h-8 lg:h-10 bg-opacity-30 text-center' + additionalClasses}>
                    <td colSpan={6} className="w-1/2 text-center justify-center">{props.comms}</td>
                </tr>)}
            {shouldShowSpoilers && (
                <tr className={'h-16 bg-opacity-30 bg-sa2-blue' + additionalClasses}>
                    <td className='hidden sm:table-cell'></td>
                    <td className='text-center'>Final Score:</td>
                    <td className={homeClassName}>{match.homeScore}</td>
                    <td className='text-center'> -</td>
                    <td className={awayClassName}>{match.awayScore}</td>
                    {/* <td className="hidden sm:table-cell"></td> */}
                    <td className={'text-center'}>
                        {match.matchVod ? (
                            <a className='cursor-pointer' target='_blank' href={match.matchVod}>
                                Match Vod
                            </a>
                        ) : match.channel === 'Offline' ? (
                            'No VOD'
                        ) : (
                            'Match VOD Soon'
                        )}
                    </td>
                </tr>
            )}
        </>
    );
}
