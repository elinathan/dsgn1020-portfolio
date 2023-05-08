import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import pagerank from ".//../assets/s3a1/pagerank.png"

export default function S3A1() {
    return (
        <>
            <Head>
                <title>S3A1</title>
                <meta name="description" content="S3A1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='PageRank the Things' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>Using Google&apos;s PageRank to rank Grey, Zuck, and a robot. Try it for yourself <Link href='https://elinathan.github.io/s3a1/'>here</Link>.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={pagerank} alt="PageRank the things"></Image>
                </div>
            </main>
        </>
    )
}