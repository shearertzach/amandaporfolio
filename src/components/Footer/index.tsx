import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    return (
        <footer className='flex flex-col md:flex-row justify-between items-center bg-lightblue p-4 md:px-28 py-8 md:py-12'>
            <div>
                <h2 className='text-2xl'>Looking foward to connecting!</h2>
                <p>azhang.0302@gmail.com</p>
            </div>
            <div className='flex gap-4 mt-8'>
                <Link href="mailto:azhang.0302@gmail.com" target="_blank" rel="noopener noreferrer" className='font-quicksand font-light'>
                    <Image 
                        src="/icons/mail.png"
                        alt="Mail Logo"
                        width={42}
                        height={42}
                        className="inline-block mr-2"
                    />
                </Link>
                <Link href="https://www.linkedin.com/in/zhang-amanda" target="_blank" rel="noopener noreferrer" className='font-quicksand font-light'>
                    <Image 
                        src="/icons/linkedin.png"
                        alt="LinkedIn Logo"
                        width={42}
                        height={42}
                        className="inline-block mr-2"
                    />
                </Link>
            </div>
        </footer>
    )
}

export default Footer