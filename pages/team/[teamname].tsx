import { GetStaticPaths, GetStaticProps } from 'next';
import ScheduleTable from '../../components/ScheduleTable';
import React from 'react';
import MatchData from '../../types/MatchData';
import TeamData from '../../types/TeamData.js';
import ProfileHeader from '../../components/ProfileHeader';
import Header from '../../components/Header';
import Airtable from 'airtable';
import convertAirtableDataToPlayerData from '../../types/convertAirtableDataToPlayerData';
import convertAirtableDataToMatchData from '../../types/convertAirtableDataToMatchData';

export interface TeamProfileProps {
    matches: MatchData[];
    record: string;
    team: TeamData;
}

export default function TeamProfile(props: TeamProfileProps) {
    return (
        <div className="bg-tile-background bg-cover min-h-screen overflow-x-auto">
            <Header
                title={
                    'Sonic Adventure 2 Bingo League - Team Profile - ' +
                    encodeURI(props.team.name)
                }
            />
            <main className="text-white flex flex-col h-screen">
                <div className="sm:w-10/12 sm:mx-auto">
                    <ProfileHeader teamData={props.team} subHeader={props.record} />
                    <ScheduleTable matches={props.matches} tableTitle={'Match History'} />
                </div>
            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    const teamId = context.params.teamname as string;
    const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
    const teamRecord = await base(process.env.AIRTABLE_COMPETITORS_TABLE_NAME).find(teamId);
    const teamData = convertAirtableDataToPlayerData(teamRecord);
    const matchIds = [
        ...((teamRecord.get('Home Matches') as string[]) ?? []),
        ...((teamRecord.get('Away Matches') as string[]) ?? []),
    ];
    const playerMatches: MatchData[] = await Promise.all(
        matchIds.map(async id => {
            return convertAirtableDataToMatchData(await base(process.env.AIRTABLE_MATCHES_TABLE_NAME).find(id));
        })
    );
    const sortedPlayerMatches = playerMatches.sort((a, b) => a.matchTime - b.matchTime);
    return {
        props: {
            matches: sortedPlayerMatches,
            //record: playerData.elo,
            team: teamData,
        },
        revalidate: 600,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
    const teamIds: string[] = [];
    await base(process.env.AIRTABLE_COMPETITORS_TABLE_NAME)
        .select({
            fields: [],
        })
        .eachPage((records, fetchNextPage) => {
            records.forEach(record => {
                teamIds.push(record.id);
            });
            try {
                fetchNextPage();
            } catch {
                return;
            }
        });
    const gennedPaths = teamIds.map(id => {
        return { params: { teamname: id } };
    });
    return {
        paths: gennedPaths,
        fallback: false,
    };
};
