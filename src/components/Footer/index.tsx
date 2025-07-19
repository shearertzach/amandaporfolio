import Link from 'next/link'
import React from 'react'

const Footer = () => {

    return (
        <footer className='h-[180px] flex flex-col md:flex-row justify-between items-center bg-lightblue p-4 md:px-28 md:py-12'>
            <div>
                <h2 className='text-2xl'>Looking foward to connecting!</h2>
                <p>azhang.0302@gmail.com</p>
            </div>
            <div className='flex gap-8'>
                <Link href="https://www.linkedin.com/in/zhang-amanda" target="_blank" rel="noopener noreferrer" className='font-quicksand font-light'>
                    LinkedIn
                </Link>
                <a
                    href="/amandazhang-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-quicksand font-light"
                >
                    Resume
                </a>
            </div>
        </footer>
    )
}

export default Footer