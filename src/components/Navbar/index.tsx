'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()

  return (
    <header className='flex justify-between items-center font-pt-sans p-[32px] bg-lightblue shadow-lg'>
      <h2 className='font-bold text-lg'>Logo</h2>

      <nav className="flex gap-[10px] [&>a]:p-[10px] [&>a]:transition-all [&>a]:hover:scale-[115%] font-quicksand">
        <Link href="/" className={`${router.pathname === '/' ? 'font-bold font-lg' : ''}`}>Home</Link>
        <Link href="/about" className={`${router.pathname === '/about' ? 'font-bold font-lg' : ''}`}>About</Link>
        <Link href="/contact" className={`${router.pathname === '/contact' ? 'font-bold font-lg' : ''}`}>Contact</Link>
        <Link href="/resume" className={`${router.pathname === '/resume' ? 'font-bold font-lg' : ''}`}>Resume</Link>
      </nav>
    </header>
  )
}
export default Navbar;