import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <main className={`min-h-[calc(100vh-120px)] grid grid-cols-1 md:grid-cols-2 py-5 md:py-28 max-w-5xl mx-auto gap-4`}>
            <Image
                src="/amandaheadshot.jpg"
                alt="Amanda's Hero Image"
                width={500}
                height={700}
                className="p-3"
            />
            <div className='mt-8 ml-2'>
                <h4 className="mb-4 font-medium text-2xl font-pt-sans">Hi, I'm Amanda Zhang!</h4>
                <p className="font-pt-sans-caption mb-7">I’m a UX designer based in Bowling Green, Kentucky. I specialize in UX research, and would love to expand my knowledge. My goal is to create solutions that prioritizes users first; focusing on finding out how users think and interact with a digital product.</p>
                <p>When I'm not designing, I'm probably:</p>
                <p>✈️ Traveling</p>
                <p>🍜 Enjoying delicious food</p>
                <p>🎞️ Watching shows</p>
                <p>🐶 Hanging out with my dogs (dachshund and corgi+poodle)</p>
            </div>
        </main>
    )
}

export default About
