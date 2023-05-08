import Nav from "@/components/Nav";
import Title from "@/components/Title";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import stillLife from ".//../assets/s1a2/still-life.png";

export default function S1A2() {
    return (
        <>
            <Head>
                <title>S1A2</title>
                <meta name="description" content="S1A2" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Title titleName='CSS Still Life' />
            <main className='grid md:grid-cols-body gap-4'>
                <div>
                    <p className='pb-2'>A still life using objects that Grey brought in. You can throw them all in the trash!</p>
                    <p>See the code and interact with the project <Link className='underline' href='https://codepen.io/elinathan-the-decoder/pen/mdjLVym'>here.</Link></p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={stillLife} width='800' alt="CSS Still Life"></Image>
                </div>
            </main>
        </>
    )
}