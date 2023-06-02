import React from 'react'
import contactImg from '@/public/assets/wirja1.jpg'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#E6C400]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='rounded-xl hover:scale-105 duration-300 ease-in' src={contactImg} alt="contact" />
                            </div>
                            <div>
                                <h2 className='py-2'>Wira Pramuja</h2>
                                <p>Front-End Developer</p>
                                <p className='py-4'>I am available for freelance or full-time positions, Contact me and let us talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-md hover:text-[#E6C400] shadow-gray-400 cursor-pointer hover:scale-105 p-6 duration-300 ease-in '>
                                        <FaLinkedin />
                                    </div>
                                    <div className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 hover:text-[#E6C400] p-6 duration-300 ease-in '>
                                        <a href="https://github.com/wirapramuja">
                                            <FaGithub />

                                        </a>
                                    </div>
                                    <div
                                     className='rounded-full shadow-md shadow-gray-400 cursor-pointer hover:scale-105 hover:text-[#E6C400] p-6 duration-300 ease-in '>
                                        <a href="mailto:wiraapramuja44@gmail.com">
                                        <AiOutlineMail />
                                            
                                        </a>
                                    </div>
                                    <div className='rounded-full hover:text-[#E6C400] shadow-md shadow-gray-400 cursor-pointer hover:scale-105 p-6 duration-300 ease-in '>
                                        <a href="https://wa.me/6289673914054">
                                        <AiOutlineWhatsApp />

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* right */}
                    
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                            <HiOutlineChevronDoubleUp size={30} className='text-[#E6C400]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact