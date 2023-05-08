import Link from 'next/link';

function Nav() {
    return (
        <nav className='bg-white absolute top-0 left-0 w-full'>
            <h2 className="antialiased text-3xl font-display md:px-12 px-4 py-4">
                <Link className='no-underline' href="/">Eli Nathan</Link>
            </h2>
        </nav>
    );
}

export default Nav;