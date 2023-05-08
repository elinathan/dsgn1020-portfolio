import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import variableClock from ".//../assets/s2fp/variable-clock.png";

export default function S2FP() {
    return (
        <>
            <Head>
                <title>S2FP</title>
                <meta name="description" content="S2FP" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='Variable Type Clock' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>A clock using variale typography. See it <Link href='https://elinathan.github.io/variable-clock/'>here</Link>.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={variableClock} width='800' alt="Variable clock"></Image>
                </div>
            </main>
        </>
    )
}