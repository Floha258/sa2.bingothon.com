import Link from 'next/link';
import Image from 'next/image';
import BingosyncColors, {
    bingosyncColorsToTailwindColors,
    BingosyncColorStrings,
} from '../types/BingosyncColors';

export interface TwitchProps {
    twitchUrl: string;
    twitchProfilePictureUrl: string;
}

export interface TeamHeaderProps {
    teamName: string;
    twitchProps?: TwitchProps;
    player1: string;
    player2: string;
    gamesWon: number;
    gamesLost: number;
    countryCode: string;
    subHeader?: string;
    teamId?: string;
}

export default function TeamHeader(props: TeamHeaderProps) {
    const flagIconClass = getFlagIconClass(props.countryCode);
    return (
        <div>
            <div className="flex flex-row items-end mb-4">
                <div>
                    <span className={'text-lg md:text-xl mr-5 flag-icon ' + flagIconClass}></span>
                </div>
                <Link href={'/team/' + (props.teamId ?? props.teamName)}>
                    <span className="text-2xl md:text-3xl mx-5 font-bold text-white cursor-pointer">
                        {props.teamName + " (" + props.player1 + " & " + props.player2 + ")"}
                    </span>
                </Link>
                <div>
                    <span className={'text-2xl md:text-3xl ml-5 font-bold text-white'}>
                        {props.gamesWon + ' - ' + props.gamesLost}
                    </span>
                </div>
                {props.twitchProps && (
                    <div className="relative h-20 w-20 mx-5">
                        <Image
                            layout="fill"
                            alt={`${props.teamName}'s profile picture`}
                            src={props.twitchProps.twitchProfilePictureUrl}
                        />
                        <div className="absolute h-5 w-5 bottom-0 left-0">
                            <Image
                                alt="The twitch logo"
                                src="/TwitchGlitchPurple.svg"
                                layout="fill"
                            />
                        </div>
                    </div>
                )}
                {props.subHeader && (
                    <span className="text-lg md:text-xl font-bold text-white ml-auto">
                        {props.subHeader}
                    </span>
                )}
            </div>
        </div>
    );
}

function getFlagIconClass(country: string): string {
    switch (country) {
        case 'fr-qc':
            return 'bg-fr-qc';
        default:
            return 'flag-icon-' + country;
    }
}
