import BingosyncColors, { bingosyncColorsToTailwindColors } from '../types/BingosyncColors';
import TeamData from '../types/TeamData.js';
import Image from 'next/image';

export interface ProfileHeaderProps {
    teamData: TeamData;
    subHeader?: string;
}

export default function ProfileHeader(props: ProfileHeaderProps) {
    const { teamData, subHeader } = props;
    const flagIconClass1 = getFlagIconClass(teamData.countryP1);
    const flagIconClass2 = getFlagIconClass(teamData.countryP2);
    /*const gradientClasses =
        'from-' +
        bingosyncColorsToTailwindColors(playerData.primaryColor) +
        ' to-' +
        bingosyncColorsToTailwindColors(playerData.secondaryColor);*/
    return (
        <div>
            <div className="flex flex-row items-end">
                <span className="text-4xl md:text-5xl w-full mx-5 font-bold text-white">
                    {teamData.name}
                </span>
            </div>
            <div className="flex flex-row items-end">
                <div>
                    <span className={'text-2xl md:text-3xl mr-5 flag-icon ' + flagIconClass1}></span>
                </div>
                <span className="text-4xl md:text-5xl mx-5 font-bold text-white">
                    {teamData.nameP1}
                </span>
                {teamData.twitchNameP1 && (
                    <div className="h-10 w-10 mx-5">
                        <a href={encodeURI('https://twitch.tv/' + teamData.twitchNameP1)}>
                            <Image
                                alt="The twitch glitch logo. Click here to visit the user's twitch profile"
                                height={40}
                                width={40}
                                src="/TwitchGlitchPurple.svg"
                            />
                        </a>
                    </div>
                )}
                <div>
                    <span className={'text-2xl md:text-3xl mr-5 flag-icon ' + flagIconClass2}></span>
                </div>
                <span className="text-4xl md:text-5xl mx-5 font-bold text-white">
                    {teamData.nameP2}
                </span>
                {teamData.twitchNameP2 && (
                    <div className="h-10 w-10 mx-5">
                        <a href={encodeURI('https://twitch.tv/' + teamData.twitchNameP2)}>
                            <Image
                                alt="The twitch glitch logo. Click here to visit the user's twitch profile"
                                height={40}
                                width={40}
                                src="/TwitchGlitchPurple.svg"
                            />
                        </a>
                    </div>
                )}
            </div>
                {/*{subHeader && (
                    <span className="text-2xl md:text-3xl font-bold text-white ml-auto">
                        {playerData.division
                            ? 'Division ' + playerData.division
                            : 'Elo' + ': ' + subHeader}
                    </span>
                )}*/}
            {/*</div>*/}
            {/*<div className={'my-1 md:my-3 h-1 md:h-2 bg-gradient-to-r ' + gradientClasses} />*/}
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
