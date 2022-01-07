import BingosyncColors, { BingosyncColorStrings } from './BingosyncColors';

export default interface TeamData {
    name: string;
    nameP1: string;
    nameP2: string;
    //primaryColor: BingosyncColors | BingosyncColorStrings;
    //secondaryColor: BingosyncColors | BingosyncColorStrings;
    countryP1: string;
    countryP2: string;
    twitchNameP1?: string;
    twitchNameP2?: string;
    pronounsP1?: string;
    pronounsP2?: string
    id?: string;
}
