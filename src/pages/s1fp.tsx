import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import homePage from ".//../assets/s1fp/homepage.png";

export default function S1FP() {
    return (
        <>
            <Head>
                <title>S2P1</title>
                <meta name="description" content="S2P1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='Take a byte' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>Showing you the data you expose on the internet</p>
                    <p>See the code <Link href='https://github.com/elinathan/take-a-byte'>here</Link> and interact with the project <Link href='https://take-a-byte.herokuapp.com'>here.</Link>
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={homePage} width='800' alt="take a byte home page"></Image>
                </div>
            </main>
        </>
    )
}