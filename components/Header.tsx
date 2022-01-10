import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header(props: { title: string }) {
    const router = useRouter();
    const hrefs = [
        {
            route: '/upcoming',
            label: 'Upcoming Matches',
        },
        {
            route: '/standings',
            label: 'Standings',
        },
        {
            route: '/schedule',
            label: 'Full Match History',
        },
    ];
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="text-white text-lg">
                <div className="p-3 flex flex-row items-center">
                    <div className="mr-10">
                        <Link href="/">
                            <Image
                                alt="Picture of the Bingo League Emblem. Click here to return to the homepage."
                                src="/Bingo_Emblem.png"
                                height={50}
                                width={68}
                            />
                        </Link>
                    </div>
                    {hrefs.map(href => (
                        <div
                            key={href.label}
                            className={
                                'mr-10' + (router.pathname == href.route ? ' font-bold' : '')
                            }>
                            <Link href={href.route}>{href.label}</Link>
                        </div>
                    ))}
                </div>
            </header>
        </>
    );
}
