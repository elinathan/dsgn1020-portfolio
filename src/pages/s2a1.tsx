import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import homePage from ".//../assets/s1fp/homepage.png";

export default function S2A1() {
    return (
        <>
            <Head>
                <title>S2A1</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='Web Ring' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>See <Link href='/s1fp'>S1FP</Link> on the bottom left to interact with the webring</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={homePage} width='800' alt="take a byte home page"></Image>
                </div>
            </main>
        </>
    )
}