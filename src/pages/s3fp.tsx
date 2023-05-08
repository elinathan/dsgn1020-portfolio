import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import powerwash from ".//../assets/s3fp/powerwash.png"

export default function S3FP() {
    return (
        <>
            <Head>
                <title>S3FP</title>
                <meta name="description" content="S3FP" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='Powerwashing simulator' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>Relieve your stress by cleaning off the dirty concrete.</p>
                    <p>Try it yourself <Link href='https://elinathan.github.io/s3fp/'>here</Link>.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={powerwash} alt="Powerwashing simulator"></Image>
                </div>
            </main>
        </>
    )
}