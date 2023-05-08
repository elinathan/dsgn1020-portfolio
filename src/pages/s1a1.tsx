import Head from 'next/head';
import Nav from '@/components/Nav';
import Title from '@/components/Title';
import Image from 'next/image';
import Link from 'next/link';
import steve from './/../assets/s1a1/steve.png';


export default function S1A1() {
    return (
        <>
            <Head>
                <title>S1A1</title>
                <meta name="description" content="S1A1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='Steve Buscemi ASCII Art'/>
            <main className='grid md:grid-cols-body gap-4 pt-8 md:p-0'>
                <div>
                    <p className='pb-2'>A portrait of Steve Buscemi using only these black and white emojis: ➿➰🎼🎵🎶🕷🕶✔️📞♟🐜🖤♣️♠️⬛️</p>
                    <p>See the HTML <Link className='underline' href='https://codepen.io/elinathan-the-decoder/pen/OJwQroq'>here.</Link></p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={steve} width='600' alt="Steve Buscemi in ASCII"></Image>
                </div>
            </main>
        </>
    );
}