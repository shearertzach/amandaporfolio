'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center font-pt-sans p-[32px] bg-lightblue shadow-lg">
      <h2 className="font-bold text-lg">Logo</h2>
      <nav className="flex gap-[10px]">
        <Link href="/" className={`${router.pathname === '/' ? 'font-bold font-lg' : 'font-light'} p-[10px] transition-all hover:scale-[115%] font-quicksand`}>Home</Link>
        <Link href="/about" className={`${router.pathname === '/about' ? 'font-bold font-lg' : 'font-light'} p-[10px] transition-all hover:scale-[115%] font-quicksand`}>About</Link>
        <Link href="/contact" className={`${router.pathname === '/contact' ? 'font-bold font-lg' : 'font-light'} p-[10px] transition-all hover:scale-[115%] font-quicksand`}>Contact</Link>
        <a
          href="/amandazhang-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[10px] transition-all hover:scale-[115%] font-quicksand font-light"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
