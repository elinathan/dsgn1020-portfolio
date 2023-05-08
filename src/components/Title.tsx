import { ReactNode } from 'react';

interface TitleProps {
    titleName: string;
    children?: ReactNode;
}

export default function Title({ titleName, children }: TitleProps) {
    return (
        <section className='pb-8'>
            <hr className='mt-[6rem] mb-1 h-[2px] border-none bg-black border-black' />
            <div className='grid gap-4'>
                <h1>{titleName}</h1>
                {children}
            </div>
        </section>
    );
}