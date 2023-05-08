import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Link from "next/link";

export default function S3A2() {
    return (
        <>
            <Head>
                <title>S3A2</title>
                <meta name="description" content="S3A2" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='Forcast Score' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>Connect to the <strong>Forcast Score</strong> applet to receive a new, curated song every morning.</p>
                    <p className="pb-2">Each song will represent that day’s weather, from upbeat, sunny tunes, to peaceful, rainy-day ballads.</p>
                    <p>See the landing page <Link href='https://elinathan.github.io/ifttt/'>here</Link>.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <iframe className="rounded-xl"
                        src="https://open.spotify.com/embed/playlist/5ffFhPbpqFVHv9fNicViI5?utm_source=generator&theme=0" width="100%"
                        height="500" frameBorder="0" allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </main>
        </>
    )
}