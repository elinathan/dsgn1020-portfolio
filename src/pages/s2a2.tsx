import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import bedroom from ".//../assets/s2p2/bedroom.png";

export default function S2P2() {
    return (
        <>
            <Head>
                <title>S1P2</title>
                <meta name="description" content="S2A2" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='Accessible 3D' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>Interact with a 3D model of my bedroom <Link href='https://elinathan.github.io/s2p2/'>here</Link>.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={bedroom} alt="3d bedroom"></Image>
                </div>
            </main>
        </>
    )
}