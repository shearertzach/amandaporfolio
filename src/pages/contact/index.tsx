import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <main className="min-h-[calc(100vh-120px)] flex flex-col items-center p-2">
            <div className="max-w-xl mt-16 text-center">
                <h2 className="text-2xl mb-6">Let&rsquo;s collaborate, chat, and design together!</h2>
                <p className="mb-4">
                    I&rsquo;m always happy to hear from designers, developers, and curious people. Send a message and let&rsquo;s talk research, design, or ideas!
                </p>
                <p className="font-medium">Drop me a message below or connect with me on Linkedin.</p>
            </div>
            <div className="bg-lightblue px-6 py-4 rounded-lg mt-12 max-w-3xl w-full shadow-lg mb-4">
                <form className="flex flex-col">
                    <h2 className="text-xl ml-1 mb-1">Name</h2>
                    <section className="flex flex-col md:flex-row gap-6 justify-center items-center mb-3">
                        <div className="flex flex-col w-full">
                            <input type="text" id="first-name" className="bg-white rounded-md py-2 px-1" required />
                            <label className="font-light font-quicksand ml-1" htmlFor="first-name">First</label>
                        </div>
                        <div className="flex flex-col w-full">
                            <input type="text" id="last-name" className="bg-white rounded-md py-2 px-1" required />
                            <label className="font-light font-quicksand ml-1 mb-1" htmlFor="last-name">Last</label>
                        </div>
                    </section>
                    <div className="flex flex-col mb-2">
                        <label className="text-xl font-abhaya font-semibold ml-1 mb-1" htmlFor="email">Email</label>
                        <input type="email" id="email" className="bg-white rounded-md py-2 px-1" required />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl font-abhaya font-semibold ml-1 mb-1" htmlFor="message">Message</label>
                        <textarea id="message" className="bg-white rounded-md py-2 px-1 resize-none h-52" required />
                    </div>
                    <button type="submit" className="bg-subtlebackground text-black font-light font-quicksand mt-3 py-2 rounded-md ml-auto w-[192px]">
                        <div className="flex justify-center items-center">
                            <p>Send Message</p>
                            <Image
                                src="/icons/send.png"
                                alt="Send icon"
                                width={25}
                                height={25}
                                className="ml-3"
                            />
                        </div>
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Contact
